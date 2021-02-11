{
    "title": "The HOL-CSP Refinement Toolkit",
    "authors": [
        "Safouan Taha",
        "Burkhart Wolff",
        "Lina Ye"
    ],
    "topics": [
        "Computer science/Concurrency/Process calculi",
        "Computer science/Semantics"
    ],
    "date": "2020-11-19",
    "notify": [
        "wolff@lri.fr"
    ],
    "abstract": "\nWe use a formal development for CSP, called HOL-CSP2.0, to analyse a\nfamily of refinement notions, comprising classic and new ones. This\nanalysis enables to derive a number of properties that allow to deepen\nthe understanding of these notions, in particular with respect to\nspecification decomposition principles for the case of infinite sets\nof events. The established relations between the refinement relations\nhelp to clarify some obscure points in the CSP literature, but also\nprovide a weapon for shorter refinement proofs. Furthermore, we\nprovide a framework for state-normalisation allowing to formally\nreason on parameterised process architectures. As a result, we have a\nmodern environment for formal proofs of concurrent systems that allow\nfor the combination of general infinite processes with locally finite\nones in a logically safe way. We demonstrate these\nverification-techniques for classical, generalised examples: The\nCopyBuffer for arbitrary data and the Dijkstra's Dining\nPhilosopher Problem of arbitrary size.",
    "licence": "BSD",
    "theories": [
        "CopyBuffer_props",
        "Conclusion",
        "Fix_ind_ext",
        "Assertions_ext",
        "Process_norm",
        "DiningPhilosophers",
        "Properties",
        "Introduction"
    ]
}