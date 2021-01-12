function loadSearch(input, keywords, entries, authors, topics) {
    if (entries) {
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

        var searchQuery = input.value;
        if (searchQuery) {
            executeSearch(input, indices, searchQuery);
        }
    } else {
        var suggestIndex = new FlexSearch({
            encode: "icase",
            tokenize: "forward",
            doc: {
                id: "id",
                field: "keyword",
            },
        });

        var indices = {
            suggest: suggestIndex,
        };

        indices["suggest"].add(keywords);

        var searchQuery = input.value;
        if (searchQuery) {
            executeSearch(input, indices, searchQuery);
        }
    }

    input.addEventListener("keyup", function (event) {
        switch (event.key) {
            case "Enter":
            case "Up":
            case "ArrowUp":
            case "Down":
            case "ArrowDown":
            case "Left":
            case "ArrowLeft":
            case "Right":
            case "ArrowRight":
                break;
            case "Escape":
                hideAutocomplete();
                break;
            default:
                if (this.value && this.value.length > 1) {
                    executeSearch(indices, this.value);
                } else {
                    hideAutocomplete();
                    hideFindFacts();
                    document.getElementById("authorTopic").innerHTML = "";
                    document.getElementById("search-results").innerHTML =
                        "<p>Please enter a word or phrase above</p>";
                }
        }
    });

    var memoQueryFindFacts = memoizer(queryFindFacts);
    input.addEventListener(
        "keyup",
        debounce(() => {
            var searchTerm = input.value;
            if (searchTerm && searchTerm.length > 2) {
                memoQueryFindFacts(searchTerm).then((results) =>
                    populateFindFactsResults(searchTerm, results)
                );
            }
        }, 300)
    );

    input.addEventListener("blur", () => {
        setTimeout(hideAutocomplete, 100);
    });

    input.addEventListener("focus", () => {
        clearAutocomplete();
        input.dispatchEvent(new KeyboardEvent("keyup"));
    });

    var currentFocus = -1;
    var items = getItems();

    input.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "Enter":
                event.preventDefault(); // prevent the form from being submitted
                if (currentFocus > -1) {
                    items[currentFocus].click();
                    currentFocus = -1;
                } else {
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
        item.addEventListener("touchstart", handleClick);
        item.addEventListener("click", handleClick);
    }

    async function queryFindFacts(searchTerm) {
        var body = '{"filters":[{"field":"SourceCode","filter":{"Term":{"inner":"';
        body += searchTerm + '"}}}],';
        body += '"fields":["Command","ConstantTypeFacet","Kind","SourceTheoryFacet"],';
        body += '"maxFacets":5}';

        const response = await fetch(
            "https://search.isabelle.in.tum.de/v1/default_Isabelle2020_AFP2020/facet",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                },
                body: body,
            }
        );
        const data = await response.json();
        return data["Kind"];
    }

    function debounce(callback, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                callback.apply(this, args);
            }, wait);
        };
    }

    function memoizer(fun) {
        let cache = {};
        return function (n) {
            if (cache[n] != undefined) {
                return cache[n];
            } else {
                let result = fun(n);
                cache[n] = result;
                return result;
            }
        };
    }
}

function executeSearch(input, indices, searchQuery) {
    if (indices["entry"]) {
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
            limit: 10,
        });

        if (entryResults.length > 0) {
            populateResults(entryResults, searchQuery, indices);
        } else {
            var text =
                "<p>No matches found</p><br>Search on all pages of the AFP, including";
            text += ' PDFs, with <a href="https://www.google.com/search?q=' + searchQuery;
            text += ' site:isa-afp.org" target="_blank" rel="noreferrer noopener">';
            text += "Google</a><br/>";
            document.getElementById("search-results").innerHTML = text;
        }

        document.getElementById("authorTopic").innerHTML = "";

        if (authorResults.length > 0)
            populateSmallResults(authorResults, searchQuery, "author", indices);
        if (topicResults.length > 0)
            populateSmallResults(topicResults, searchQuery, "topic", indices);

        clearAutocomplete();
        filterAutocomplete(input, suggestResults);
    } else {
        var suggestResults = indices["suggest"].search({
            query: searchQuery,
            limit: 10,
        });

        filterAutocomplete(input, suggestResults);
    }
}

function populateResults(results, searchQuery, indices, all = false) {
    if (searchQuery.length < 3) {
        hideFindFacts();
    } else {
        var findFacts = document.getElementById("findFacts");
        if (!findFacts) {
            // create FindFacts results table
            findFactsTable =
                '<div id="findFacts"><h2>FindFacts Results</h2><div';
            findFactsTable +=
                ' id="find-facts-results">...</div></div>';
            document
                .getElementById("authorTopic")
                .insertAdjacentHTML("afterend", findFactsTable);
        } else {
            document.getElementById("find-facts-results").innerHTML = "...";
        }
    }

    const resultsTable = document.getElementById("search-results");

    resultsTable.innerHTML = "<h2>Entries</h2>";

    var limit = all ? results.length : 15;
    var templateDefinition = document.getElementById("search-result-template")
        .innerHTML;

    results.slice(0, limit).forEach(function (value, resultKey) {
        var topicHrefs = value.topics
            .map((x) => x.toLowerCase())
            .map((x) => x.replace(/\s+/, "-"))
            .map((x) => "/topics/" + x + "/");

        var topics = []

        value.topics.forEach((value, key) => {
            topics[key] = "<a href=" + topicHrefs[key] + ">" + value + "</a>"
        })

        var topicString;
        if (topics.length <= 2) {
            topicString = topics.join(' and ');
        } else {
            topicString = topics.slice(0, -1).join(', ') + ' and ' + topics[topics.length - 1];
        }

        // pull template from hugo template definition
        // replace values
        var output = render(templateDefinition, {
            key: resultKey,
            title: value.title,
            link: value.shortname,
            topics: topicString,
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

    function render(templateString, data) {
        var conditionalMatches, conditionalPattern, copy;
        conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
        // since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
        copy = templateString;
        while (
            (conditionalMatches = conditionalPattern.exec(templateString)) !== null
        ) {
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
}

function hideFindFacts() {
    var findFacts = document.getElementById("findFacts");
    if (findFacts) {
        findFacts.outerHTML = "";
    }
}

function populateSmallResults(results, searchQuery, key, indices, all = false) {
    var resultsTable = document.getElementById(key + "-results");
    var name = key[0].toUpperCase() + key.substring(1) + "s";

    if (!resultsTable) {
        var base =
            '<div id="' + key + '-results">';
        base += "<h2>" + name + "</h2>";

        document.getElementById("authorTopic").insertAdjacentHTML("beforeend", base);
        resultsTable = document.getElementById(key + "-results");
    } else {
        resultsTable.innerHTML = '<td class="head">' + name + "</div>";
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

function populateFindFactsResults(searchTerm, data) {
    var resultsElement = document.getElementById("find-facts-results");
    if (Object.keys(data).length !== 0 && resultsElement) {
        let urlPrefix =
            'https://search.isabelle.in.tum.de/#search/default_Isabelle2020_AFP2020?q={"term":"';
        urlPrefix += searchTerm + '","facets":{"Kind":["';
        const urlSuffix = '"]}}';

        links = [];

        Object.entries(data).forEach(([name, count]) => {
            let value =
                "<a href='" + urlPrefix + name + urlSuffix + "' target='_blank' ";
            value += "rel='noreferrer noopener' >" + count + " " + name + "s</a>";
            links.push(value);
        });

        resultsElement.innerHTML = links.join(", ");
    } else {
        resultsElement.innerHTML = "No results";
    }
}

function handleSubmit(value) {
    if (typeof history.pushState !== "undefined") {
        history.pushState({}, "Search the Archive - " + value, "?s=" + value);
    } else {
        var url = "TODO";
        window.location.assign(url);
    }
}

// Autocomplete ------------------------------------------------------------------------

function hideAutocomplete() {
    var list = document.getElementById("searchInputautocomplete-list");
    if (list) {
        list.style = "display: none";
    }
}

function clearAutocomplete() {
    var items = getItems();
    for (var i = items.length - 1; i > -1; i--) {
        items[i].parentNode.removeChild(items[i]);
    }
}

function filterAutocomplete(input, values) {
    var added = false;
    
    values.forEach((value, _key) => {
        if (value.keyword != input.value) {
            addItem(value.keyword);
            added = true;
        }
    });

    if (!added) {
        hideAutocomplete();
    }
}

function addItem(value) {
    var item = document.createElement("DIV");

    item.innerHTML = value;

    item.addEventListener("touchstart", handleClick);
    item.addEventListener("click", handleClick);

    var list = document.getElementById("searchInputautocomplete-list");
    if (list) {
        list.appendChild(item);
        list.style = "";
    }
}

function handleClick(event) {
    event.preventDefault(); // so that two click events aren't registered
    var input = document.getElementById("searchInput");
    var currentValue = this.innerHTML;
    input.value = currentValue;
    clearAutocomplete();
    input.dispatchEvent(new KeyboardEvent("keyup"));
    input.focus();
}

function addActive(items, currentFocus) {
    if (!items) return false;

    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) {
        currentFocus = -1;
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

document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementsByTagName("header");

    var input = header[0].querySelector("input");
    if (input) {
        var button = document.getElementsByClassName("searchButton");
        if (button) {
            button = button[0];
            button.addEventListener("click", () => {
                handleSubmit(document.getElementById("searchInput").value);
            });
        }

        Promise.all([
            fetch("/data/keywords.json"),
        ])
        .then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map((response) => response.json()));
        })
        .then((data) => loadSearch(input, ...data));
    } else {
        var input = document.getElementsByClassName("searchInput");
        if (input) {
            input = input[0];
            var urlQuery = param("s");
            if (urlQuery) {
                input.value = urlQuery;
            }
            input.focus();

            var button = document.getElementsByClassName("searchButton");
            if (button) {
                button = button[0];
                button.addEventListener("click", () => {
                    handleSubmit(document.getElementById("searchInput").value);
                });
            }

            Promise.all([
                fetch("/data/keywords.json"),
                fetch("/index.json"),
                fetch("/authors/index.json"),
                fetch("/topics/index.json"),
            ])
                .then(function (responses) {
                    // Get a JSON object from each of the responses
                    return Promise.all(responses.map((response) => response.json()));
                })
                .then((data) => loadSearch(input, ...data));
        }
        function param(name) {
            return decodeURIComponent(
                (location.search.split(name + "=")[1] || "").split("&")[0]
            ).replace(/\+/g, " ");
        }
    }
});