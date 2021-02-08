{
    "title": "Differential Game Logic",
    "authors": [
        "André Platzer"
    ],
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "date": "2019-06-03",
    "notify": [
        "aplatzer@cs.cmu.edu"
    ],
    "abstract": "\nThis formalization provides differential game logic (dGL), a logic for\nproving properties of hybrid game. In addition to the syntax and\nsemantics, it formalizes a uniform substitution calculus for dGL.\nChurch's uniform substitutions substitute a term or formula for a\nfunction or predicate symbol everywhere. The uniform substitutions for\ndGL also substitute hybrid games for a game symbol everywhere. We\nprove soundness of one-pass uniform substitutions and the axioms of\ndifferential game logic with respect to their denotational semantics.\nOne-pass uniform substitutions are faster by postponing\nsoundness-critical admissibility checks with a linear pass homomorphic\napplication and regain soundness by a variable condition at the\nreplacements.  The formalization is based on prior non-mechanized\nsoundness proofs for dGL.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-24"
        }
    ],
    "theories": [
        "Axioms",
        "USubst",
        "Coincidence",
        "Static_Semantics",
        "Differential_Game_Logic",
        "Syntax",
        "Denotational_Semantics",
        "Ids",
        "Identifiers",
        "Lib"
    ]
}