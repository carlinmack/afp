{
    "title": "Unified Decision Procedures for Regular Expression Equivalence",
    "authors": [
        "Tobias Nipkow",
        "Dmitriy Traytel"
    ],
    "topics": [
        "Computer science/Automata and formal languages"
    ],
    "date": "2014-01-30",
    "abstract": "\nWe formalize a unified framework for verified decision procedures for regular\nexpression equivalence. Five recently published formalizations of such\ndecision procedures (three based on derivatives, two on marked regular\nexpressions) can be obtained as instances of the framework. We discover that\nthe two approaches based on marked regular expressions, which were previously\nthought to be the same, are different, and one seems to produce uniformly\nsmaller automata.  The common framework makes it possible to compare the\nperformance of the different decision procedures in a meaningful way.\n<a href=\"http://www21.in.tum.de/~nipkow/pubs/itp14.html\">\nThe formalization is described in a paper of the same name presented at\nInteractive Theorem Proving 2014</a>.",
    "notify": [
        "nipkow@in.tum.de",
        "traytel@in.tum.de"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-11-30"
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2014-01-30"
        }
    ],
    "dependencies": [
        "Regular-Sets",
        "Efficient-Mergesort",
        "SpecCheck"
    ],
    "theories": [
        "Automaton",
        "Derivatives_Finite",
        "Deriv_PDeriv",
        "Deriv_Autos",
        "Position_Autos",
        "After2",
        "Before2",
        "Regex_Equivalence",
        "Examples",
        "Benchmark"
    ],
    "relatedEntries": [
        "Coinductive_Languages"
    ]
}