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

function executeSearch(indices, searchQuery, all = false) {
    var entryResults;
    if (all) {
        entryResults = indices["entry"].search({
            query: searchQuery
        });
    } else {
        entryResults = indices["entry"].search({
            query: searchQuery,
            limit: 15,
        });
    }

    var topicResults = indices["topic"].search({
        query: searchQuery
    });

    var authorResults = indices["author"].search({
        query: searchQuery
    });


    if (entryResults.length > 0) {
        populateResults(indices, entryResults, searchQuery, all);
    } else {
        document.getElementById("search-results").innerHTML = "<p>No matches found</p>";
    }

    document.getElementById("authorTopic").innerHTML = '';

    if (authorResults.length > 0) populateAuthorResults(authorResults, searchQuery, all);
    if (topicResults.length > 0) populateTopicResults(topicResults, searchQuery, all);

    new Mark(document.getElementById("search-results")).mark(searchQuery);
    new Mark(document.getElementById("authorTopic")).mark(searchQuery);
}

function populateResults(indices, results, searchQuery, all = false) {
    document.getElementById("search-results").innerHTML =
        '<tr id="search-results"> <td class="head">Entries</td> </tr>';

    results.forEach(function (value, resultKey) {
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

    if (results.length >= 15 && !all) {
        var btn = document.createElement("button");
        btn.innerHTML = "Show all results";

        btn.addEventListener("click", function () {
            var searchQuery = document.getElementById("searchInput").value;
            executeSearch(indices, searchQuery, true);
        })

        document.getElementById('search-results').appendChild(btn);
    }
}

function populateAuthorResults(results, searchQuery, all = false) {
    var base = `<table width="40%" class="entries"><tbody id="author-results"><tr>
    <td class="head">Authors</td></tr></tbody></table>`

    document.getElementById('authorTopic').insertAdjacentHTML('beforeend', base);

    var list = document.createElement('p')

    results.forEach((result, key) => {
        var anchor = document.createElement('a');
        anchor.href = result.link;
        anchor.innerHTML = result.name;
        list.appendChild(anchor)
        if (key != results.length - 1) list.append(", ")
    })
    document.getElementById('author-results').insertAdjacentElement('beforeend', list)
}

function populateTopicResults(results, searchQuery, all = false) {
    var base = `<table width="40%" class="entries"><tbody id="topic-results"><tr>
    <td class="head">Topics</td></tr></tbody></table>`

    document.getElementById('authorTopic').insertAdjacentHTML('beforeend', base);

    var list = document.createElement('p')

    results.forEach((result, key) => {
        var anchor = document.createElement('a');
        anchor.href = result.link;
        anchor.innerHTML = result.name;
        list.appendChild(anchor)
        if (key != results.length - 1) list.append(", ")
    })

    document.getElementById('topic-results').insertAdjacentElement('beforeend', list)
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