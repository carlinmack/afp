{
    "title": "A Generic Framework for Verified Compilers",
    "authors": [
        "Martin Desharnais"
    ],
    "topics": [
        "Computer science/Programming languages/Compiling"
    ],
    "date": "2020-02-10",
    "notify": [
        "martin.desharnais@unibw.de"
    ],
    "abstract": "\nThis is a generic framework for formalizing compiler transformations.\nIt leverages Isabelle/HOL’s locales to abstract over concrete\nlanguages and transformations. It states common definitions for\nlanguage semantics, program behaviours, forward and backward\nsimulations, and compilers. We provide generic operations, such as\nsimulation and compiler composition, and prove general (partial)\ncorrectness theorems, resulting in reusable proof components.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2020-02-25"
        }
    ],
    "theories": [
        "Behaviour",
        "Well_founded",
        "Inf",
        "Transfer_Extras",
        "Semantics",
        "Language",
        "Simulation",
        "Compiler",
        "Fixpoint"
    ]
}