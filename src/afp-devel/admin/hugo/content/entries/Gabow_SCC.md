{
    "title": "Verified Efficient Implementation of Gabow's Strongly Connected Components Algorithm",
    "authors": [
        "Peter Lammich"
    ],
    "date": "2014-05-28",
    "topics": [
        "Computer science/Algorithms/Graph",
        "Mathematics/Graph theory"
    ],
    "abstract": "\nWe present an Isabelle/HOL formalization of Gabow's algorithm for\nfinding the strongly connected components of a directed graph.\nUsing data refinement techniques, we extract efficient code that\nperforms comparable to a reference implementation in Java.\nOur style of formalization allows for re-using large parts of the proofs\nwhen defining variants of the algorithm. We demonstrate this by\nverifying an algorithm for the emptiness check of generalized Büchi\nautomata, re-using most of the existing proofs.",
    "notify": [
        "lammich@in.tum.de"
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
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2014-05-29"
        }
    ],
    "dependencies": [
        "CAVA_Automata"
    ],
    "theories": [
        "Gabow_Skeleton",
        "Gabow_SCC",
        "Find_Path",
        "Gabow_GBG",
        "Gabow_Skeleton_Code",
        "Gabow_SCC_Code",
        "Find_Path_Impl",
        "Gabow_GBG_Code",
        "All_Of_Gabow_SCC"
    ],
    "relatedEntries": [
        "DFS_Framework"
    ]
}