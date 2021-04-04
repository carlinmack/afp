{
    "title": "Extensions to the Comprehensive Framework for Saturation Theorem Proving",
    "authors": [
        "Jasmin Christian Blanchette",
        "Sophie Tourret"
    ],
    "topics": [
        "Logic/General logic/Mechanization of proofs"
    ],
    "date": "2020-08-25",
    "notify": [
        "jasmin.blanchette@gmail.com"
    ],
    "abstract": "\nThis Isabelle/HOL formalization extends the AFP entry\n<em>Saturation_Framework</em> with the following\ncontributions:  <ul> <li>an application of the framework\nto prove Bachmair and Ganzinger's resolution prover RP\nrefutationally complete, which was formalized in a more ad hoc fashion\nby Schlichtkrull et al. in the AFP entry\n<em>Ordered_Resultion_Prover</em>;</li>\n<li>generalizations of various basic concepts formalized by\nSchlichtkrull et al., which were needed to verify RP and could be\nuseful to formalize other calculi, such as superposition;</li>\n<li>alternative proofs of fairness (and hence saturation and\nultimately refutational completeness) for the given clause procedures\nGC and LGC, based on invariance.</li> </ul>",
    "licence": "BSD",
    "dependencies": [
        "Saturation_Framework",
        "Ordered_Resolution_Prover",
        "First_Order_Terms",
        "Well_Quasi_Orders"
    ],
    "theories": [
        "Soundness",
        "Standard_Redundancy_Criterion",
        "Clausal_Calculus",
        "FO_Ordered_Resolution_Prover_Revisited",
        "Given_Clause_Architectures_Revisited"
    ],
    "relatedEntries": [
        "Functional_Ordered_Resolution_Prover",
        "Saturation_Framework"
    ]
}