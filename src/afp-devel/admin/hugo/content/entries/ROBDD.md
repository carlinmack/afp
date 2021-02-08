{
    "title": "Algorithms for Reduced Ordered Binary Decision Diagrams",
    "authors": [
        "Julius Michaelis",
        "Maximilian Haslbeck",
        "Peter Lammich",
        "Lars Hupel"
    ],
    "date": "2016-04-27",
    "topics": [
        "Computer science/Algorithms",
        "Computer science/Data structures"
    ],
    "abstract": "\nWe present a verified and executable implementation of ROBDDs in\nIsabelle/HOL. Our implementation relates pointer-based computation in\nthe Heap monad to operations on an abstract definition of boolean\nfunctions. Internally, we implemented the if-then-else combinator in a\nrecursive fashion, following the Shannon decomposition of the argument\nfunctions. The implementation mixes and adapts known techniques and is\nbuilt with efficiency in mind.",
    "notify": [
        "bdd@liftm.de",
        "haslbecm@in.tum.de"
    ],
    "licence": "BSD",
    "olderReleases": [
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
            "2016": "2016-04-27"
        }
    ],
    "dependencies": [
        "Sepref_Prereq",
        "Automatic_Refinement",
        "Collections",
        "Native_Word"
    ],
    "theories": [
        "Bool_Func",
        "Array_List",
        "Level_Collapse",
        "Abstract_Impl",
        "BDD_Examples",
        "Conc_Impl",
        "Option_Helpers",
        "BDD_Code",
        "Pointer_Map",
        "Middle_Impl",
        "Pointer_Map_Impl",
        "BDT"
    ],
    "relatedEntries": [
        "Separation_Logic_Imperative_HOL",
        "JinjaThreads",
        "Containers"
    ]
}