{
    "title": "First-Order Theory of Rewriting",
    "authors": [
        "Alexander Lochmann",
        "Bertram Felgenhauer"
    ],
    "topics": [
        "Computer science/Automata and formal languages",
        "Logic/Rewriting",
        "Logic/Proof theory"
    ],
    "date": "2022-02-02",
    "notify": [
        "alexander.lochmann@uibk.ac.at"
    ],
    "abstract": "\nThe first-order theory of rewriting (FORT) is a decidable theory for\nlinear variable-separated rewrite systems. The decision procedure is\nbased on tree automata technique and an inference system presented in\n\"Certifying Proofs in the First-Order Theory of Rewriting\".\nThis AFP entry provides a formalization of the underlying decision\nprocedure. Moreover it allows to generate a function that can verify\neach inference step via the code generation facility of Isabelle/HOL.\nAdditionally it contains the specification of a certificate language\n(that allows to state proofs in FORT) and a formalized function that\nallows to verify the validity of the proof. This gives software tool\nauthors, that implement the decision procedure, the possibility to\nverify their output.",
    "licence": "BSD",
    "dependencies": [
        "Regular_Tree_Relations"
    ],
    "theories": [
        "Utils",
        "Multihole_Context",
        "Ground_MCtxt",
        "Bot_Terms",
        "Saturation",
        "Rewriting",
        "LV_to_GTT",
        "NF",
        "Tree_Automata_Derivation_Split",
        "TA_Clousure_Const",
        "Type_Instances_Impl",
        "NF_Impl",
        "Context_Extensions",
        "FOR_Certificate",
        "Lift_Root_Step",
        "Context_RR2",
        "GTT_RRn",
        "FOL_Extra",
        "FOR_Semantics",
        "FOR_Check",
        "FOR_Check_Impl"
    ]
}