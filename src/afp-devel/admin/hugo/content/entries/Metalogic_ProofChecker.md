{
    "title": "Isabelle's Metalogic: Formalization and Proof Checker",
    "authors": [
        "Tobias Nipkow",
        "Simon Roßkopf"
    ],
    "topics": [
        "Logic/General logic"
    ],
    "date": "2021-04-27",
    "notify": [
        "rosskops@in.tum.de"
    ],
    "abstract": "\nIn this entry we formalize Isabelle's metalogic in Isabelle/HOL.\nFurthermore, we define a language of proof terms and an executable\nproof checker and prove its soundness wrt. the metalogic.  The\nformalization is intentionally kept close to the Isabelle\nimplementation(for example using de Brujin indices) to enable easy\nintegration of generated code with the Isabelle system without a\ncomplicated translation layer.  The formalization is described in our\n<a href=\"https://arxiv.org/pdf/2104.12224.pdf\">CADE 28 paper</a>.",
    "licence": "BSD",
    "dependencies": [
        "List-Index"
    ],
    "theories": [
        "Core",
        "Preliminaries",
        "Term",
        "Sorts",
        "SortConstants",
        "Theory",
        "Term_Subst",
        "Name",
        "BetaNorm",
        "BetaNormProof",
        "EtaNorm",
        "EtaNormProof",
        "Logic",
        "EqualityProof",
        "ProofTerm",
        "SortsExe",
        "Instances",
        "TheoryExe",
        "CheckerExe",
        "CodeGen"
    ]
}