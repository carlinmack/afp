{
    "title": "A Formalization of Weighted Path Orders and Recursive Path Orders",
    "authors": [
        "Christian Sternagel",
        "René Thiemann",
        "Akihisa Yamada"
    ],
    "topics": [
        "Logic/Rewriting"
    ],
    "date": "2021-09-16",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "abstract": "\nWe define the weighted path order (WPO) and formalize several\nproperties such as strong normalization, the subterm property, and\nclosure properties under substitutions and contexts. Our definition of\nWPO extends the original definition by also permitting multiset\ncomparisons of arguments instead of just lexicographic extensions.\nTherefore, our WPO not only subsumes lexicographic path orders (LPO),\nbut also recursive path orders (RPO). We formally prove these\nsubsumptions and therefore all of the mentioned properties of WPO are\nautomatically transferable to LPO and RPO as well. Such a\ntransformation is not required for Knuth&ndash;Bendix orders\n(KBO), since they have already been formalized. Nevertheless, we still\nprovide a proof that WPO subsumes KBO and thereby underline the\ngenerality of WPO.",
    "licence": "BSD",
    "dependencies": [
        "Knuth_Bendix_Order"
    ],
    "relatedEntries": [
        "Knuth_Bendix_Order"
    ],
    "theories": [
        "Status",
        "Precedence",
        "Relations",
        "List_Order",
        "Multiset_Extension_Pair",
        "Multiset_Extension_Pair_Impl",
        "Multiset_Extension2",
        "Multiset_Extension2_Impl",
        "WPO",
        "RPO",
        "LPO",
        "KBO_Transformation",
        "KBO_as_WPO",
        "Executable_Orders"
    ],
    "olderReleases": [
        {
            "2021": "2021-09-26"
        }
    ]
}