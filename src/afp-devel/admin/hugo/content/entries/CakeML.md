{
    "title": "CakeML",
    "authors": [
        "Lars Hupel",
        "Yu Zhang"
    ],
    "contributors": [
        "Johannes Åman Pohjola"
    ],
    "topics": [
        "Computer science/Programming languages/Language definitions"
    ],
    "date": "2018-03-12",
    "notify": [
        "hupel@in.tum.de"
    ],
    "abstract": "\nCakeML is a functional programming language with a proven-correct\ncompiler and runtime system. This entry contains an unofficial version\nof the CakeML semantics that has been exported from the Lem\nspecifications to Isabelle. Additionally, there are some hand-written\ntheory files that adapt the exported code to Isabelle and port proofs\nfrom the HOL4 formalization, e.g. termination and equivalence proofs.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        }
    ],
    "dependencies": [
        "LEM",
        "Coinductive",
        "IEEE_Floating_Point",
        "Show"
    ],
    "theories": [
        "Big_Step_Total",
        "Big_Step_Unclocked",
        "Evaluate_Clock",
        "Big_Step_Determ",
        "CakeML_Compiler",
        "CakeML_Quickcheck",
        "Matching",
        "Big_Step_Fun_Equiv",
        "Evaluate_Single",
        "Evaluate_Termination",
        "CakeML_Code",
        "Big_Step_Clocked",
        "Semantic_Extras",
        "Big_Step_Unclocked_Single"
    ]
}