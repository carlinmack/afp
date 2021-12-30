{
    "title": "Regular Tree Relations",
    "authors": [
        "Alexander Lochmann",
        "Bertram Felgenhauer",
        "Christian Sternagel",
        "René Thiemann",
        "Thomas Sternagel"
    ],
    "topics": [
        "Computer science/Automata and formal languages"
    ],
    "date": "2021-12-15",
    "notify": [
        "alexander.lochmann@uibk.ac.at"
    ],
    "abstract": "\nTree automata have good closure properties and therefore a commonly\nused to prove/disprove properties. This formalization contains among\nother things the proofs of many closure properties of tree automata\n(anchored) ground tree transducers and regular relations. Additionally\nit includes the well known pumping lemma and a lifting of the Myhill\nNerode theorem for regular languages to tree languages.  We want to\nmention the existence of a <a\nhref=\"https://www.isa-afp.org/entries/Tree-Automata.html\">tree\nautomata APF-entry</a> developed by Peter Lammich. His work is\nbased on epsilon free top-down tree automata, while this entry builds\non bottom-up tree auotamta with epsilon transitions. Moreover our\nformalization relies on the <a\nhref=\"https://www.isa-afp.org/entries/Collections.html\">Collections\nFramework</a>, also by Peter Lammich, to obtain efficient code.\nAll proven constructions of the closure properties are exportable\nusing the Isabelle/HOL code generation facilities.",
    "licence": "BSD",
    "dependencies": [
        "Knuth_Bendix_Order"
    ],
    "relatedEntries": [
        "Tree-Automata"
    ],
    "theories": [
        "Term_Context",
        "Basic_Utils",
        "Ground_Terms",
        "FSet_Utils",
        "Ground_Ctxt",
        "Ground_Closure",
        "Horn_Inference",
        "Horn_List",
        "Horn_Fset",
        "Tree_Automata",
        "Tree_Automata_Det",
        "Tree_Automata_Complement",
        "Tree_Automata_Pumping",
        "Myhill_Nerode",
        "GTT",
        "GTT_Compose",
        "GTT_Transitive_Closure",
        "Pair_Automaton",
        "AGTT",
        "RRn_Automata",
        "RR2_Infinite",
        "Tree_Automata_Abstract_Impl",
        "Tree_Automata_Class_Instances_Impl",
        "Tree_Automata_Impl",
        "RR2_Infinite_Q_infinity",
        "Regular_Relation_Abstract_Impl",
        "Regular_Relation_Impl"
    ]
}