{
    "title": "Formalization of Recursive Path Orders for Lambda-Free Higher-Order Terms",
    "authors": [
        "Jasmin Christian Blanchette",
        "Uwe Waldmann",
        "Daniel Wand"
    ],
    "date": "2016-09-23",
    "topics": [
        "Logic/Rewriting"
    ],
    "abstract": "This Isabelle/HOL formalization defines recursive path orders (RPOs) for higher-order terms without lambda-abstraction and proves many useful properties about them. The main order fully coincides with the standard RPO on first-order terms also in the presence of currying, distinguishing it from previous work. An optimized variant is formalized as well. It appears promising as the basis of a higher-order superposition calculus.",
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
        "Nested_Multisets_Ordinals"
    ],
    "theories": [
        "Extension_Orders",
        "Infinite_Chain",
        "Lambda_Encoding",
        "Lambda_Encoding_RPO",
        "Lambda_Free_RPOs",
        "Lambda_Free_RPO_App",
        "Lambda_Free_RPO_Optim",
        "Lambda_Free_RPO_Std",
        "Lambda_Free_Term",
        "Lambda_Free_Util"
    ],
    "relatedEntries": [
        "Lambda_Free_KBOs"
    ]
}