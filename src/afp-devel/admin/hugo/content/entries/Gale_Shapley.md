{
    "title": "Gale-Shapley Algorithm",
    "authors": [
        "Tobias Nipkow"
    ],
    "topics": [
        "Computer science/Algorithms",
        "Mathematics/Games and economics"
    ],
    "date": "2021-12-29",
    "notify": [
        "nipkow@in.tum.de"
    ],
    "abstract": "\nThis is a stepwise refinement and proof of the Gale-Shapley stable\nmatching (or marriage) algorithm down to executable code. Both a\npurely functional implementation based on lists and a functional\nimplementation based on efficient arrays (provided by the Collections\nFramework in the AFP) are developed. The latter implementation runs in\ntime <i>O(n<sup>2</sup>)</i> where\n<i>n</i> is the cardinality of the two sets to be matched.",
    "licence": "BSD",
    "dependencies": [
        "List-Index",
        "Collections"
    ],
    "theories": [
        "Gale_Shapley1",
        "Gale_Shapley2"
    ]
}