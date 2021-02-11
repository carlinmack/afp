{
    "title": "Formalization of Bachmair and Ganzinger's Ordered Resolution Prover",
    "authors": [
        "Anders Schlichtkrull",
        "Jasmin Christian Blanchette",
        "Dmitriy Traytel",
        "Uwe Waldmann"
    ],
    "topics": [
        "Logic/General logic/Mechanization of proofs"
    ],
    "date": "2018-01-18",
    "notify": [
        "andschl@dtu.dk",
        "j.c.blanchette@vu.nl"
    ],
    "abstract": "\nThis Isabelle/HOL formalization covers Sections 2 to 4 of Bachmair and\nGanzinger's \"Resolution Theorem Proving\" chapter in the\n<em>Handbook of Automated Reasoning</em>. This includes\nsoundness and completeness of unordered and ordered variants of ground\nresolution with and without literal selection, the standard redundancy\ncriterion, a general framework for refutational theorem proving, and\nsoundness and completeness of an abstract first-order prover.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-01-22"
        }
    ],
    "dependencies": [
        "Coinductive",
        "Nested_Multisets_Ordinals"
    ],
    "theories": [
        "Lazy_List_Chain",
        "Ground_Resolution_Model",
        "FO_Ordered_Resolution",
        "Standard_Redundancy",
        "Clausal_Logic",
        "Proving_Process",
        "Herbrand_Interpretation",
        "Lazy_List_Liminf",
        "Unordered_Ground_Resolution",
        "Inference_System",
        "Abstract_Substitution",
        "FO_Ordered_Resolution_Prover",
        "Ordered_Ground_Resolution",
        "Map2"
    ],
    "relatedEntries": [
        "Functional_Ordered_Resolution_Prover"
    ]
}