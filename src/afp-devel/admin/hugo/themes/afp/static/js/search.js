var fuse;
summaryInclude = 120;

document.getElementById("searchInput").onkeyup = function () {
    if (this.value) {
        executeSearch(this.value);
    } else {
        document.getElementById('search-results').innerHTML = "<p>Please enter a word or phrase above</p>"
    }
}

document.getElementById("searchInput").onkeydown = function (e) {
    if (e.key == "Enter") {
        e.preventDefault();
        if ("undefined" !== typeof history.pushState) {
            history.pushState({}, "Search the Archive - " + this.value, "?s=" + this.value);
        } else {
            window.location.assign(url);
        }
    }
}

function loadSearch() {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);

                var fuseOptions = {
                    shouldSort: true,
                    includeMatches: true,
                    ignoreLocation: true,
                    threshold: 0.2,
                    minMatchCharLength: 3,
                    includeScore: true,
                    keys: [{
                            name: "title",
                            weight: 0.8
                        },
                        {
                            name: "abstract",
                            weight: 0.5
                        }
                    ]
                };

                fuse = new Fuse(data, fuseOptions);
            }
        }
    };

    httpRequest.open('GET', '/index.json');
    httpRequest.send();
}

function executeSearch(searchQuery) {
    var result = fuse.search(searchQuery);

    if (result.length > 0) {
        populateResults(result, searchQuery);
    } else {
        document.getElementById('search-results').innerHTML = "<p>No matches found</p>";
    }
}

function populateResults(result) {
    document.getElementById('search-results').innerHTML = '<tr id="search-results"> <td class="head">Matching pages</td> </tr>';

    result.slice(0, 15).forEach(function (value, resultKey) {
        var contents = value.item.abstract;
        var snippet = "";
        var snippetHighlights = [];

        // console.log(value);

        value.matches.forEach(function (mvalue, matchKey) {
            if (mvalue.key == "title") {
                for (var index of mvalue.indices) {
                    snippetHighlights.push(mvalue.value.substring(index[0], index[1] + 1));
                }
            } else if (mvalue.key == "abstract") {
                if (contents.length < summaryInclude) {
                    start = 0;
                    end = contents.length - 1;
                    index = 0;
                } else {
                    // find index of longest match
                    index = mvalue.indices.map(x => x[1] - x[0])
                        .reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

                    if (mvalue.indices[index][0] - summaryInclude / 2 > 0) {
                        start = mvalue.indices[index][0] - summaryInclude / 2;
                        if (mvalue.indices[index][1] + summaryInclude / 2 < contents.length) {
                            end = mvalue.indices[index][1] + summaryInclude / 2
                        } else {
                            end = contents.length;
                        }
                    } else {
                        start = 0
                        end = summaryInclude;
                    }
                }

                snippet += contents.substring(start, end);
                snippetHighlights.push(mvalue.value.substring(mvalue.indices[index][0], mvalue.indices[index][1] + 1));
            }
        });


        if (snippet.length < 1) {
            snippet += contents.substring(0, summaryInclude * 2);
        }
        //pull template from hugo templarte definition
        var templateDefinition = document.getElementById("search-result-template").innerHTML;
        //replace values
        var output = render(templateDefinition, {
            key: resultKey,
            title: value.item.title,
            link: value.item.permalink,
            topics: value.item.topics,
            snippet: snippet
        });

        $('#search-results').append(output);

        // console.log(snippetHighlights);
        console.log("-----------");

        snippetHighlights.forEach(function (snipvalue, snipkey) {
            new Mark(document.getElementById("summary-" + resultKey)).mark(snipvalue);
        });

    });
    console.log("===============");
}


function render(templateString, data) {
    var conditionalMatches, conditionalPattern, copy;
    conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
    //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
    copy = templateString;
    while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
        if (data[conditionalMatches[1]]) {
            //valid key, remove conditionals, leave contents.
            copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);
        } else {
            //not valid, remove entire section
            copy = copy.replace(conditionalMatches[0], '');
        }
    }
    templateString = copy;
    //now any conditionals removed we can do simple substitution
    var key, find, re;
    for (key in data) {
        find = '\\$\\{\\s*' + key + '\\s*\\}';
        re = new RegExp(find, 'g');
        templateString = templateString.replace(re, data[key]);
    }
    return templateString;
}

document.addEventListener("DOMContentLoaded", function () {
    loadSearch()
});