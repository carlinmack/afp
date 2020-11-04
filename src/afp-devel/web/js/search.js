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

function loadSearch(entries, authors, topics) {
    var entryIndex = new FlexSearch({
        encode: "advanced",
        tokenize: "forward",
        doc: {
            id: "id",
            field: [
                "title",
                "abstract"
            ]
        }
    });

    var authorIndex = new FlexSearch({
        encode: "advanced",
        tokenize: "forward",
        doc: {
            id: "id",
            field: "name",
        }
    });

    var topicIndex = new FlexSearch({
        encode: "icase",
        tokenize: "forward",
        doc: {
            id: "id",
            field: "name",
        }
    });

    var indices = {
        "entry": entryIndex,
        "author": authorIndex,
        "topic": topicIndex
    }

    indices["entry"].add(entries);
    indices["author"].add(authors);
    indices["topic"].add(topics);

    var urlQuery = param("s");
    if (urlQuery) {
        document.getElementById("searchInput").value = urlQuery;
        executeSearch(indices, urlQuery);
    }

    document.getElementById("searchInput").onkeyup = function () {
        if (this.value && this.value.length > 1) {
            executeSearch(indices, this.value);
        } else {
            document.getElementById("authorTopic").innerHTML = "";
            document.getElementById("search-results").innerHTML =
                "<p>Please enter a word or phrase above</p>";
        }
    };
}

function executeSearch(indices, searchQuery) {
    var entryResults = indices["entry"].search({
        query: searchQuery,
        limit: 16,
    });

    var topicResults = indices["topic"].search({
        query: searchQuery,
        limit: 3,
    });

    var authorResults = indices["author"].search({
        query: searchQuery,
        limit: 3,
    });


    if (entryResults.length > 0) {
        populateResults(entryResults, searchQuery, indices);
    } else {
        document.getElementById("search-results").innerHTML = "<p>No matches found</p>";
    }

    document.getElementById("authorTopic").innerHTML = '';

    if (authorResults.length > 0) populateSmallResults(authorResults, searchQuery, 'author', indices);
    if (topicResults.length > 0) populateSmallResults(topicResults, searchQuery, 'topic', indices);
}

function populateResults(results, searchQuery, indices, all = false) {
    const resultsTable = document.getElementById("search-results");

    resultsTable.innerHTML =
        '<tr id="search-results"> <td class="head">Entries</td> </tr>';

    var limit = all ? results.length : 15;

    results.slice(0, limit).forEach(function (value, resultKey) {
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
    });

    if (results.length > 15 && !all) {
        var btn = document.createElement("button");
        btn.innerHTML = "Show all results";

        btn.addEventListener("click", function () {
            var entryResults = indices["entry"].search({
                query: searchQuery
            });

            populateResults(entryResults, searchQuery, indices, true);
        })

        resultsTable.appendChild(btn);
    }

    new Mark(resultsTable).mark(searchQuery);
}

function populateSmallResults(results, searchQuery, key, indices, all = false) {
    var resultsTable = document.getElementById(key + '-results')
    var name = key[0].toUpperCase() + key.substring(1) + "s"

    if (!resultsTable) {

        var base = '<table width="40%" class="entries"><tbody id="' + key + '-results"><tr>'
        base += '<td class="head">' + name + '</td></tr></tbody></table>'

        document.getElementById('authorTopic').insertAdjacentHTML('beforeend', base);
        resultsTable = document.getElementById(key + '-results')
    } else {
        resultsTable.innerHTML = '<tr><td class="head">' + name + '</td></tr>'
    }

    var list = document.createElement('p')

    var limit = all ? results.length : 2;

    results.slice(0, limit).forEach((result, resultKey) => {
        var anchor = document.createElement('a');
        anchor.href = result.link;
        anchor.innerHTML = result.name;
        list.appendChild(anchor)
        if (resultKey != results.length - 1) list.append(", ")
    })

    resultsTable.insertAdjacentElement('beforeend', list)

    if (results.length > 2 && !all) {
        var btn = document.createElement("button");
        btn.innerHTML = "Show all";

        btn.addEventListener("click", function () {
            var entryResults = indices[key].search({
                query: searchQuery
            });

            populateSmallResults(entryResults, searchQuery, key, indices, true);
        })

        resultsTable.appendChild(btn);
    }

    new Mark(resultsTable).mark(searchQuery);
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
    Promise.all([
        fetch('/index.json'),
        fetch('/authors/index.json'),
        fetch('/topics/index.json')
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map((response) => response.json()));
    }).then(data => loadSearch(...data));
});