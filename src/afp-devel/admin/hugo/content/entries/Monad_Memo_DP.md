{
    "title": "Monadification, Memoization and Dynamic Programming",
    "authors": [
        "Simon Wimmer",
        "Shuwei Hu",
        "Tobias Nipkow"
    ],
    "topics": [
        "Computer science/Programming languages/Transformations",
        "Computer science/Algorithms",
        "Computer science/Functional programming"
    ],
    "date": "2018-05-22",
    "notify": [
        "wimmers@in.tum.de"
    ],
    "abstract": "\nWe present a lightweight framework for the automatic verified\n(functional or imperative) memoization of recursive functions. Our\ntool can turn a pure Isabelle/HOL function definition into a\nmonadified version in a state monad or the Imperative HOL heap monad,\nand prove a correspondence theorem. We provide a variety of memory\nimplementations for the two types of monads. A number of simple\ntechniques allow us to achieve bottom-up computation and\nspace-efficient memoization. The framework’s utility is demonstrated\non a number of representative dynamic programming problems. A detailed\ndescription of our work can be found in the accompanying paper [2].",
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
            "2017": "2018-05-23"
        }
    ],
    "dependencies": [
        "Show"
    ],
    "theories": [
        "State_Monad_Ext",
        "Pure_Monad",
        "DP_CRelVS",
        "State_Heap_Misc",
        "Heap_Monad_Ext",
        "State_Heap",
        "DP_CRelVH",
        "Memory",
        "Pair_Memory",
        "Index",
        "Memory_Heap",
        "Transform_Cmd",
        "files/Transform_Misc.ML",
        "files/Transform_Const.ML",
        "files/Transform_Data.ML",
        "files/Transform_Tactic.ML",
        "files/Transform_Term.ML",
        "files/Transform.ML",
        "files/Transform_Parser.ML",
        "Bottom_Up_Computation",
        "Bottom_Up_Computation_Heap",
        "Solve_Cong",
        "Heap_Main",
        "State_Main",
        "Example_Misc",
        "Tracing",
        "Ground_Function",
        "files/Ground_Function.ML",
        "Bellman_Ford",
        "Heap_Default",
        "Knapsack",
        "Counting_Tiles",
        "CYK",
        "Min_Ed_Dist0",
        "OptBST",
        "Longest_Common_Subsequence",
        "All_Examples"
    ]
}