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
        "Option_Helpers",
        "BDD_Code",
        "BDD_Examples",
        "BDT",
        "Bool_Func",
        "Level_Collapse",
        "Array_List",
        "Middle_Impl",
        "Pointer_Map_Impl",
        "Abstract_Impl",
        "Conc_Impl",
        "Pointer_Map"
    ],
    "relatedEntries": [
        "JinjaThreads",
        "Separation_Logic_Imperative_HOL",
        "Containers"
    ]
}