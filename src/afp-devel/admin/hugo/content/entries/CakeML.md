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
        "Evaluate_Clock",
        "Big_Step_Unclocked_Single",
        "Big_Step_Clocked",
        "CakeML_Compiler",
        "Evaluate_Termination",
        "Big_Step_Determ",
        "Big_Step_Fun_Equiv",
        "Big_Step_Total",
        "Evaluate_Single",
        "Big_Step_Unclocked",
        "CakeML_Code",
        "Matching",
        "Semantic_Extras",
        "CakeML_Quickcheck"
    ]
}