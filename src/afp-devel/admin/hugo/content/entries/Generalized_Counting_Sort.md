{
    "title": "An Efficient Generalization of Counting Sort for Large, possibly Infinite Key Ranges",
    "authors": [
        "Pasquale Noce"
    ],
    "topics": [
        "Computer science/Algorithms",
        "Computer science/Functional programming"
    ],
    "date": "2019-12-04",
    "notify": [
        "pasquale.noce.lavoro@gmail.com"
    ],
    "abstract": "\nCounting sort is a well-known algorithm that sorts objects of any kind\nmapped to integer keys, or else to keys in one-to-one correspondence\nwith some subset of the integers (e.g. alphabet letters). However, it\nis suitable for direct use, viz. not just as a subroutine of another\nsorting algorithm (e.g. radix sort), only if the key range is not\nsignificantly larger than the number of the objects to be sorted.\nThis paper describes a tail-recursive generalization of counting sort\nmaking use of a bounded number of counters, suitable for direct use in\ncase of a large, or even infinite key range of any kind, subject to\nthe only constraint of being a subset of an arbitrary linear order.\nAfter performing a pen-and-paper analysis of how such algorithm has to\nbe designed to maximize its efficiency, this paper formalizes the\nresulting generalized counting sort (GCsort) algorithm and then\nformally proves its correctness properties, namely that (a) the\ncounters' number is maximized never exceeding the fixed upper\nbound, (b) objects are conserved, (c) objects get sorted, and (d) the\nalgorithm is stable.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-12-09"
        }
    ],
    "theories": [
        "Algorithm",
        "Conservation",
        "Sorting",
        "Stability"
    ]
}