{
    "title": "Verification Components for Hybrid Systems",
    "authors": [
        "Jonathan Julian Huerta y Munive"
    ],
    "topics": [
        "Mathematics/Algebra",
        "Mathematics/Analysis"
    ],
    "date": "2019-09-10",
    "notify": [
        "jjhuertaymunive1@sheffield.ac.uk",
        "jonjulian23@gmail.com"
    ],
    "abstract": "\nThese components formalise a semantic framework for the deductive\nverification of hybrid systems. They support reasoning about\ncontinuous evolutions of hybrid programs in the style of differential\ndynamics logic. Vector fields or flows model these evolutions, and\ntheir verification is done with invariants for the former or orbits\nfor the latter. Laws of modal Kleene algebra or categorical predicate\ntransformers implement the verification condition generation. Examples\nshow the approach at work.",
    "extra": {
        "Change history": "[2020-12-13] added components based on Kleene algebras with tests. These implement differential Hoare logic (dH) and a Morgan-style differential refinement calculus (dR) for verification of hybrid programs."
    },
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-09-10"
        }
    ],
    "dependencies": [
        "Ordinary_Differential_Equations",
        "Transformer_Semantics",
        "KAD",
        "KAT_and_DRA"
    ],
    "theories": [
        "HS_VC_KA_ndfun",
        "HS_VC_Spartan",
        "HS_VC_Examples",
        "HS_VC_KA_rel",
        "HS_Preliminaries",
        "HS_ODEs"
    ],
    "relatedEntries": [
        "Algebraic_VCs"
    ]
}