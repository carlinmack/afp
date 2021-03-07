{
    "title": "Practical Algebraic Calculus Checker",
    "authors": [
        "Mathias Fleury",
        "Daniela Kaufmann"
    ],
    "topics": [
        "Computer science/Algorithms"
    ],
    "date": "2020-08-31",
    "notify": [
        "mathias.fleury@jku.at"
    ],
    "abstract": "\nGenerating and checking proof certificates is important to increase\nthe trust in automated reasoning tools. In recent years formal\nverification using computer algebra became more important and is\nheavily used in automated circuit verification.  An existing proof\nformat which covers algebraic reasoning and allows efficient proof\nchecking is the practical algebraic calculus (PAC). In this\ndevelopment, we present the verified checker Pastèque that is obtained\nby synthesis via the Refinement Framework.  This is the formalization\ngoing with our FMCAD'20 tool presentation.",
    "licence": "BSD",
    "dependencies": [
        "Sepref_IICF",
        "Polynomials",
        "Nested_Multisets_Ordinals"
    ],
    "theories": [
        "PAC_More_Poly",
        "Duplicate_Free_Multiset",
        "Finite_Map_Multiset",
        "WB_Sort",
        "More_Loops",
        "PAC_Specification",
        "PAC_Map_Rel",
        "PAC_Checker_Specification",
        "PAC_Polynomials",
        "PAC_Polynomials_Term",
        "PAC_Polynomials_Operations",
        "PAC_Checker",
        "PAC_Checker_Relation",
        "PAC_Assoc_Map_Rel",
        "PAC_Checker_Init",
        "PAC_Version",
        "PAC_Checker_Synthesis",
        "PAC_Checker_MLton"
    ],
    "relatedEntries": [
        "Lambda_Free_KBOs"
    ]
}