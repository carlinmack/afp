document.getElementById("searchInput").onkeydown = function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit(this.value);
    }
};

document.getElementById("searchButton").addEventListener("click", () => {
    handleSubmit(document.getElementById("searchInput").value);
});

function handleSubmit(value) {
    if (typeof history.pushState !== "undefined") {
        history.pushState({}, "Search the Archive - " + value, "?s=" + value);
    } else {
        var url = "TODO"
        window.location.assign(url);
    }
}

function loadSearch() {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);

                var index = new FlexSearch({
                    encode: "advanced",
                    tokenize: "forward", 
                    resolution: 9,
                    doc: {
                        id: "id",
                        field: [
                            "title",
                            "abstract"
                        ]
                    }
                });

                index.add(data);

                var urlQuery = param("s");
                if (urlQuery) {
                    document.getElementById("searchInput").value = urlQuery;
                    executeSearch(index, urlQuery);
                }

                document.getElementById("searchInput").onkeyup = function () {
                    if (this.value && this.value.length > 1) {
                        executeSearch(this.value);
                    } else {
                        document.getElementById("search-results").innerHTML =
                            "<p>Please enter a word or phrase above</p>";
                    }
                };
            }
        }
    };

    httpRequest.open("GET", "/index.json");
    httpRequest.send();
}

function executeSearch(index, searchQuery, all = false) {
    var entryResults;
    if (all) {
        entryResults = index.search({query: searchQuery});
    } else {
        entryResults = index.search({
            query: searchQuery,
            limit: 15,
        });
    }

    if (entryResults.length > 0) {
        populateResults(index, entryResults, searchQuery, all);
    } else {
        document.getElementById("search-results").innerHTML = "<p>No matches found</p>";
    }
}

function populateResults(index, result, searchQuery, all = false) {
    document.getElementById("search-results").innerHTML =
        '<tr id="search-results"> <td class="head">Entries</td> </tr>';

    result.forEach(function (value, resultKey) {
        // pull template from hugo template definition
        var templateDefinition = document.getElementById("search-result-template")
            .innerHTML;
        // replace values
        var output = render(templateDefinition, {
            key: resultKey,
            title: value.title,
            link: value.permalink,
            topics: value.topics,
            shortname: value.shortname,
            abstract: value.abstract
        });

        $("#search-results").append(output);

        new Mark(document.getElementById("summary-" + resultKey)).mark(searchQuery);
    });

    if (result.length >= 15 && !all) {
        var btn = document.createElement("button");
        btn.innerHTML = "Show all results";

        btn.addEventListener("click", function () {
            var searchQuery = document.getElementById("searchInput").value;
            executeSearch(index, searchQuery, true);
        })

        document.getElementById('search-results').appendChild(btn);
    }
}

function render(templateString, data) {
    var conditionalMatches, conditionalPattern, copy;
    conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
    // since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
    copy = templateString;
    while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
        if (data[conditionalMatches[1]]) {
            // valid key, remove conditionals, leave contents.
            copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);
        } else {
            // not valid, remove entire section
            copy = copy.replace(conditionalMatches[0], "");
        }
    }
    templateString = copy;
    // now any conditionals removed we can do simple substitution
    var key, find, re;
    for (key in data) {
        find = "\\$\\{\\s*" + key + "\\s*\\}";
        re = new RegExp(find, "g");
        templateString = templateString.replace(re, data[key]);
    }
    return templateString;
}

function param(name) {
    return decodeURIComponent(
        (location.search.split(name + "=")[1] || "").split("&")[0]
    ).replace(/\+/g, " ");
}

document.addEventListener("DOMContentLoaded", function () {
    loadSearch();
});