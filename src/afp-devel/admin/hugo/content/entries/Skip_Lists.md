{
    "title": "Skip Lists",
    "authors": [
        "Max W. Haslbeck",
        "Manuel Eberl"
    ],
    "topics": [
        "Computer science/Data structures"
    ],
    "date": "2020-01-09",
    "notify": [
        "max.haslbeck@gmx.de"
    ],
    "abstract": "\n<p> Skip lists are sorted linked lists enhanced with shortcuts\nand are an alternative to binary search trees. A skip lists consists\nof multiple levels of sorted linked lists where a list on level n is a\nsubsequence of the list on level n − 1. In the ideal case, elements\nare skipped in such a way that a lookup in a skip lists takes O(log n)\ntime. In a randomised skip list the skipped elements are choosen\nrandomly. </p> <p> This entry contains formalized proofs\nof the textbook results about the expected height and the expected\nlength of a search path in a randomised skip list. </p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2020-01-10"
        }
    ],
    "dependencies": [
        "Monad_Normalisation"
    ],
    "theories": [
        "Geometric_PMF",
        "Misc",
        "Skip_List",
        "Pi_pmf"
    ]
}