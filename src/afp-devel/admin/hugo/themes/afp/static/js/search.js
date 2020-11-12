function loadSearch(entries, authors, topics, keywords) {
    var entryIndex = new FlexSearch({
        encode: "advanced",
        tokenize: "forward",
        doc: {
            id: "id",
            field: ["title", "abstract"],
        },
    });

    var authorIndex = new FlexSearch({
        encode: "advanced",
        tokenize: "forward",
        doc: {
            id: "id",
            field: "name",
        },
    });

    var topicIndex = new FlexSearch({
        encode: "icase",
        tokenize: "forward",
        doc: {
            id: "id",
            field: "name",
        },
    });

    var suggestIndex = new FlexSearch({
        encode: "icase",
        tokenize: "forward",
        doc: {
            id: "id",
            field: "keyword",
        },
    });

    var indices = {
        entry: entryIndex,
        author: authorIndex,
        topic: topicIndex,
        suggest: suggestIndex,
    };

    indices["entry"].add(entries);
    indices["author"].add(authors);
    indices["topic"].add(topics);
    indices["suggest"].add(keywords);

    const input = document.getElementById("searchInput");

    var searchQuery = input.value
    if (searchQuery) {
        executeSearch(indices, searchQuery);
    }

    input.addEventListener("keyup", function (event) {
        switch (event.key) {
            case "Enter":
            case "Up":
            case "ArrowUp":
            case "Down":
            case "ArrowDown":
                break;
            case "Escape":
                hideAutocomplete();
                break;
            default:
                if (this.value && this.value.length > 1) {
                    executeSearch(indices, this.value);
                } else {
                    clearAutocomplete()
                    document.getElementById("authorTopic").innerHTML = "";
                    document.getElementById("search-results").innerHTML =
                        "<p>Please enter a word or phrase above</p>";
                }
        }
    });

    input.addEventListener("blur", () => {
        setTimeout(hideAutocomplete, 100)
    })

    input.addEventListener("focus", () => {
        clearAutocomplete();
        input.dispatchEvent(new KeyboardEvent('keyup'))
    })

    var currentFocus = -1;
    var items = getItems()

    input.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "Enter":
                if (currentFocus > -1) {
                    event.preventDefault(); // prevent the form from being submitted
                    items[currentFocus].click();
                    currentFocus = -1;
                } else {
                    e.preventDefault();
                    handleSubmit(this.value);
                }
                break;
            case "Up": // IE/Edge specific value
            case "ArrowUp":
                currentFocus--;
                addActive(items, currentFocus);
                break;
            case "Down": // IE/Edge specific value
            case "ArrowDown":
                currentFocus++;
                addActive(items, currentFocus);
                break;
            default:
        }
    });

    for (var item of items) {
        item.addEventListener('touchstart', handleClick)
        item.addEventListener('click', handleClick)
    }
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

    var suggestResults = indices["suggest"].search({
        query: searchQuery,
        limit: 10
    });

    if (entryResults.length > 0) {
        populateResults(entryResults, searchQuery, indices);
    } else {
        var text = '<p>No matches found</p><br>Search for definitions or constants with '
        text += '<a href=\'https://search.isabelle.in.tum.de#search/default_Isabelle2020_AFP2020?q={"term"%3A"'
        text += searchQuery + '"}\' target="_blank" rel="noreferrer noopener">FindFacts'
        text += '</a> or on all pages of the AFP, including PDFs, with <a href="https://www.google.com/search?q='
        text += searchQuery + ' site:isa-afp.org" target="_blank" rel="noreferrer noopener">';
        text += "Google</a><br/>";
        document.getElementById("search-results").innerHTML = text;
    }

    document.getElementById("authorTopic").innerHTML = "";

    if (authorResults.length > 0)
        populateSmallResults(authorResults, searchQuery, "author", indices);
    if (topicResults.length > 0)
        populateSmallResults(topicResults, searchQuery, "topic", indices);

    clearAutocomplete();
    filterAutocomplete(suggestResults)
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
            link: value.shortname,
            topics: value.topics,
            shortname: value.shortname,
            abstract: value.abstract,
        });

        resultsTable.insertAdjacentHTML("beforeend", output);
    });

    if (results.length > 15 && !all) {
        var btn = document.createElement("button");
        btn.innerHTML = "Show all results";

        btn.addEventListener("click", function () {
            var entryResults = indices["entry"].search({
                query: searchQuery,
            });

            populateResults(entryResults, searchQuery, indices, true);
        });

        resultsTable.appendChild(btn);
    }

    new Mark(resultsTable).mark(searchQuery);
}

function populateSmallResults(results, searchQuery, key, indices, all = false) {
    var resultsTable = document.getElementById(key + "-results");
    var name = key[0].toUpperCase() + key.substring(1) + "s";

    if (!resultsTable) {
        var base =
            '<table width="40%" class="entries"><tbody id="' + key + '-results"><tr>';
        base += '<td class="head">' + name + "</td></tr></tbody></table>";

        document.getElementById("authorTopic").insertAdjacentHTML("beforeend", base);
        resultsTable = document.getElementById(key + "-results");
    } else {
        resultsTable.innerHTML = '<tr><td class="head">' + name + "</td></tr>";
    }

    var limit = all ? results.length : 2;
    var list = document.createElement("p");

    results.slice(0, limit).forEach((result, resultKey) => {
        var anchor = document.createElement("a");
        anchor.href = result.link;
        anchor.innerHTML = result.name;
        list.appendChild(anchor);
        if (resultKey != results.length - 1) list.append(", ");
    });

    resultsTable.insertAdjacentElement("beforeend", list);

    if (results.length > 2 && !all) {
        var btn = document.createElement("button");
        btn.innerHTML = "Show all";

        btn.addEventListener("click", function () {
            var entryResults = indices[key].search({
                query: searchQuery,
            });

            populateSmallResults(entryResults, searchQuery, key, indices, true);
        });

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

function handleSubmit(value) {
    if (typeof history.pushState !== "undefined") {
        history.pushState({}, "Search the Archive - " + value, "?s=" + value);
    } else {
        var url = "TODO";
        window.location.assign(url);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("searchInput");
    var urlQuery = param("s");
    if (urlQuery) {
        input.value = urlQuery;
    }
    input.focus();

    document.getElementById("searchButton").addEventListener("click", () => {
        handleSubmit(document.getElementById("searchInput").value);
    });

    Promise.all([
            fetch("/index.json"),
            fetch("/authors/index.json"),
            fetch("/topics/index.json"),
            fetch("/data/keywords.json")
        ])
        .then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map((response) => response.json()));
        })
        .then((data) => loadSearch(...data));
});

function hideAutocomplete() {
    var list = document.getElementById("searchInputautocomplete-list");
    if (list) {
        list.style = "display: none"
    };
}

function clearAutocomplete() {
    var items = getItems();
    for (var i = items.length - 1; i > -1; i--) {
        items[i].parentNode.removeChild(items[i]);
    }
}

function filterAutocomplete(values) {
    var added = false;
    var input = document.getElementById("searchInput")
    values.forEach((value, _key) => {
        if (value.keyword != input.value) {
            addItem(value.keyword);
            added = true;
        }
    })

    if (!added) {
        hideAutocomplete();
    }
}

function addItem(value) {
    var item = document.createElement("DIV");

    item.innerHTML = value;

    item.addEventListener('touchstart', handleClick)
    item.addEventListener("click", handleClick);

    var list = document.getElementById("searchInputautocomplete-list");
    if (list) {
        list.appendChild(item);
        list.style = "";
    }
}

function handleClick(event) {
    event.preventDefault() // so that two click events aren't registered
    var input = document.getElementById("searchInput")
    var currentValue = this.innerHTML;
    input.value = currentValue;
    clearAutocomplete();
    input.dispatchEvent(new KeyboardEvent('keyup'))
    input.focus();
}

function addActive(items, currentFocus) {
    if (!items) return false;

    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) {
        currentFocus = -1
    } else {
        items[currentFocus].classList.add("autocomplete-active");
    }
}

function removeActive() {
    var items = getItems();
    for (var item of items) {
        item.classList.remove("autocomplete-active");
    }
}

function getItems() {
    var items = document.getElementById("searchInputautocomplete-list");
    if (items) {
        items = items.getElementsByTagName("div");
        if (items) return items;
    }
}