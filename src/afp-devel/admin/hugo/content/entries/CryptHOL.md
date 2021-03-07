{
    "title": "CryptHOL",
    "authors": [
        "Andreas Lochbihler"
    ],
    "topics": [
        "Computer science/Security/Cryptography",
        "Computer science/Functional programming",
        "Mathematics/Probability theory"
    ],
    "date": "2017-05-05",
    "notify": [
        "mail@andreas-lochbihler.de"
    ],
    "abstract": "\n<p>CryptHOL provides a framework for formalising cryptographic arguments\nin Isabelle/HOL. It shallowly embeds a probabilistic functional\nprogramming language in higher order logic. The language features\nmonadic sequencing, recursion, random sampling, failures and failure\nhandling, and black-box access to oracles. Oracles are probabilistic\nfunctions which maintain hidden state between different invocations.\nAll operators are defined in the new semantic domain of\ngenerative probabilistic values, a codatatype. We derive proof rules for\nthe operators and establish a connection with the theory of relational\nparametricity. Thus, the resuting proofs are trustworthy and\ncomprehensible, and the framework is extensible and widely applicable.\n</p><p>\nThe framework is used in the accompanying AFP entry \"Game-based\nCryptography in HOL\". There, we show-case our framework by formalizing\ndifferent game-based proofs from the literature. This formalisation\ncontinues the work described in the author's ESOP 2016 paper.</p>",
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
            "2016-1": "2017-05-11"
        }
    ],
    "dependencies": [
        "Probabilistic_While",
        "Applicative_Lifting",
        "Coinductive",
        "Landau_Symbols",
        "Monad_Normalisation",
        "Monomorphic_Monad"
    ],
    "theories": [
        "Misc_CryptHOL",
        "Set_Applicative",
        "SPMF_Applicative",
        "List_Bits",
        "Environment_Functor",
        "Partial_Function_Set",
        "Negligible",
        "Resumption",
        "Generat",
        "Generative_Probabilistic_Value",
        "Computational_Model",
        "GPV_Expectation",
        "GPV_Bisim",
        "GPV_Applicative",
        "Cyclic_Group",
        "Cyclic_Group_SPMF",
        "CryptHOL"
    ]
}