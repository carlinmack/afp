{
    "title": "Kleene Algebra",
    "authors": [
        "Alasdair Armstrong",
        "Georg Struth",
        "Tjark Weber"
    ],
    "date": "2013-01-15",
    "topics": [
        "Computer science/Programming languages/Logics",
        "Computer science/Automata and formal languages",
        "Mathematics/Algebra"
    ],
    "abstract": "\nThese files contain a formalisation of variants of Kleene algebras and\ntheir most important models as axiomatic type classes in Isabelle/HOL.\nKleene algebras are foundational structures in computing with\napplications ranging from automata and language theory to computational\nmodeling, program construction and verification.\n<p>\nWe start with formalising dioids, which are additively idempotent\nsemirings, and expand them by axiomatisations of the Kleene star for\nfinite iteration and an omega operation for infinite iteration. We\nshow that powersets over a given monoid, (regular) languages, sets of\npaths in a graph, sets of computation traces, binary relations and\nformal power series form Kleene algebras, and consider further models\nbased on lattices, max-plus semirings and min-plus semirings. We also\ndemonstrate that dioids are closed under the formation of matrices\n(proofs for Kleene algebras remain to be completed).\n<p>\nOn the one hand we have aimed at a reference formalisation of variants\nof Kleene algebras that covers a wide range of variants and the core\ntheorems in a structured and modular way and provides readable proofs\nat text book level. On the other hand, we intend to use this algebraic\nhierarchy and its models as a generic algebraic middle-layer from which\nprogramming applications can quickly be explored, implemented and verified.",
    "notify": [
        "g.struth@sheffield.ac.uk",
        "tjark.weber@it.uu.se"
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
        },
        {
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-03-02"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2013-01-16"
        }
    ],
    "theories": [
        "Signatures",
        "Dioid",
        "Dioid_Models",
        "Matrix",
        "Conway",
        "Kleene_Algebra",
        "Kleene_Algebra_Models",
        "Omega_Algebra",
        "Omega_Algebra_Models",
        "DRA",
        "PHL_KA",
        "PHL_DRA",
        "Finite_Suprema",
        "Formal_Power_Series",
        "Inf_Matrix"
    ],
    "relatedEntries": [
        "KAT_and_DRA",
        "KAD"
    ]
}