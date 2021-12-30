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
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
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
        "Doc_Generated",
        "Lib",
        "Namespace",
        "FpSem",
        "Ast",
        "AstAuxiliary",
        "Ffi",
        "SemanticPrimitives",
        "SmallStep",
        "BigStep",
        "BigSmallInvariants",
        "Evaluate",
        "LibAuxiliary",
        "NamespaceAuxiliary",
        "PrimTypes",
        "SemanticPrimitivesAuxiliary",
        "SimpleIO",
        "Tokens",
        "TypeSystem",
        "TypeSystemAuxiliary",
        "Doc_Proofs",
        "Semantic_Extras",
        "Evaluate_Termination",
        "Evaluate_Clock",
        "Evaluate_Single",
        "Big_Step_Determ",
        "Big_Step_Total",
        "Big_Step_Fun_Equiv",
        "Big_Step_Unclocked",
        "Big_Step_Clocked",
        "Big_Step_Unclocked_Single",
        "Matching",
        "CakeML_Code",
        "CakeML_Quickcheck",
        "CakeML_Compiler",
        "files/Tools/cakeml_sexp.ML",
        "files/Tools/cakeml_compiler.ML",
        "Compiler_Test",
        "Code_Test_Haskell"
    ]
}