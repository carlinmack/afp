{
    "title": "A Compositional and Unified Translation of LTL into ω-Automata",
    "authors": [
        "Benedikt Seidl",
        "Salomon Sickert"
    ],
    "topics": [
        "Computer science/Automata and formal languages"
    ],
    "date": "2019-04-16",
    "notify": [
        "benedikt.seidl@tum.de",
        "s.sickert@tum.de"
    ],
    "abstract": "\nWe present a formalisation of the unified translation approach of\nlinear temporal logic (LTL) into ω-automata from [1]. This approach\ndecomposes LTL formulas into ``simple'' languages and allows\na clear separation of concerns: first, we formalise the purely logical\nresult yielding this decomposition; second, we instantiate this\ngeneric theory to obtain a construction for deterministic\n(state-based) Rabin automata (DRA). We extract from this particular\ninstantiation an executable tool translating LTL to DRAs. To the best\nof our knowledge this is the first verified translation from LTL to\nDRAs that is proven to be double exponential in the worst case which\nasymptotically matches the known lower bound.\n<p>\n[1] Javier Esparza, Jan Kretínský, Salomon Sickert. One Theorem to Rule Them All:\nA Unified Translation of LTL into ω-Automata. LICS 2018",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-04-17"
        }
    ],
    "dependencies": [
        "Transition_Systems_and_Automata",
        "LTL",
        "Deriving"
    ],
    "theories": [
        "Syntactic_Fragments_and_Stability",
        "After",
        "Advice",
        "Master_Theorem",
        "Asymmetric_Master_Theorem",
        "Restricted_Master_Theorem",
        "Transition_Functions",
        "Quotient_Type",
        "Omega_Words_Fun_Stream",
        "DRA_Construction",
        "DRA_Implementation",
        "Extra_Equivalence_Relations",
        "DRA_Instantiation",
        "Code_Export"
    ],
    "relatedEntries": [
        "LTL_to_DRA",
        "LTL_Normal_Form",
        "LTL_to_GBA"
    ]
}