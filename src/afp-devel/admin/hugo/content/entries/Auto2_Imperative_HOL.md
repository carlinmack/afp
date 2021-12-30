{
    "title": "Verifying Imperative Programs using Auto2",
    "authors": [
        "Bohua Zhan"
    ],
    "topics": [
        "Computer science/Algorithms",
        "Computer science/Data structures"
    ],
    "date": "2018-12-21",
    "notify": [
        "bzhan@ios.ac.cn"
    ],
    "abstract": "\nThis entry contains the application of auto2 to verifying functional\nand imperative programs. Algorithms and data structures that are\nverified include linked lists, binary search trees, red-black trees,\ninterval trees, priority queue, quicksort, union-find, Dijkstra's\nalgorithm, and a sweep-line algorithm for detecting rectangle\nintersection. The imperative verification is based on Imperative HOL\nand its separation logic framework. A major goal of this work is to\nset up automation in order to reduce the length of proof that the user\nneeds to provide, both for verifying functional programs and for\nworking with separation logic.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-01-22"
        }
    ],
    "dependencies": [
        "Auto2_HOL"
    ],
    "theories": [
        "Mapping_Str",
        "Lists_Ex",
        "BST",
        "Partial_Equiv_Rel",
        "Union_Find",
        "Connectivity",
        "Arrays_Ex",
        "Dijkstra",
        "Interval",
        "Interval_Tree",
        "Quicksort",
        "Indexed_PQueue",
        "RBTree",
        "Rect_Intersect",
        "SepLogic_Base",
        "files/sep_util_base.ML",
        "files/assn_matcher.ML",
        "files/sep_steps.ML",
        "SepAuto",
        "files/sep_util.ML",
        "files/sep_steps_test.ML",
        "GCD_Impl",
        "LinkedList",
        "files/list_matcher_test.ML",
        "BST_Impl",
        "RBTree_Impl",
        "Arrays_Impl",
        "Quicksort_Impl",
        "Union_Find_Impl",
        "Connectivity_Impl",
        "DynamicArray",
        "Indexed_PQueue_Impl",
        "Dijkstra_Impl",
        "IntervalTree_Impl",
        "Rect_Intersect_Impl",
        "Sep_Examples"
    ]
}