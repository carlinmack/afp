{
    "title": "Formalization of Nested Multisets, Hereditary Multisets, and Syntactic Ordinals",
    "authors": [
        "Jasmin Christian Blanchette",
        "Mathias Fleury",
        "Dmitriy Traytel"
    ],
    "date": "2016-11-12",
    "topics": [
        "Logic/Rewriting"
    ],
    "abstract": "This Isabelle/HOL formalization introduces a nested multiset datatype and defines Dershowitz and Manna's nested multiset order. The order is proved well founded and linear. By removing one constructor, we transform the nested multisets into hereditary multisets. These are isomorphic to the syntactic ordinals—the ordinals can be recursively expressed in Cantor normal form. Addition, subtraction, multiplication, and linear orders are provided on this type.",
    "notify": [
        "jasmin.blanchette@gmail.com"
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
        }
    ],
    "dependencies": [
        "Ordinal",
        "List-Index"
    ],
    "theories": [
        "Hereditary_Multiset",
        "Unary_PCF",
        "Signed_Multiset",
        "Multiset_More",
        "Syntactic_Ordinal",
        "Signed_Hereditary_Multiset",
        "Signed_Syntactic_Ordinal",
        "Nested_Multiset",
        "Goodstein_Sequence",
        "Hydra_Battle",
        "Syntactic_Ordinal_Bridge",
        "McCarthy_91"
    ]
}