{
    "title": "Inference of Extended Finite State Machines",
    "authors": [
        "Michael Foster",
        "Achim D. Brucker",
        "Ramsay G. Taylor",
        "John Derrick"
    ],
    "topics": [
        "Computer science/Automata and formal languages"
    ],
    "date": "2020-09-07",
    "notify": [
        "m.foster@sheffield.ac.uk",
        "adbrucker@0x5f.org"
    ],
    "abstract": "\nIn this AFP entry, we provide a formal implementation of a\nstate-merging technique to infer extended finite state machines\n(EFSMs), complete with output and update functions, from black-box\ntraces. In particular, we define the subsumption in context relation\nas a means of determining whether one transition is able to account\nfor the behaviour of another. Building on this, we define the direct\nsubsumption relation, which lifts the subsumption in context relation\nto EFSM level such that we can use it to determine whether it is safe\nto merge a given pair of transitions. Key proofs include the\nconditions necessary for subsumption to occur and that subsumption\nand direct subsumption are preorder relations.  We also provide a\nnumber of different heuristics which can be used to abstract away\nconcrete values into registers so that more states and transitions can\nbe merged and provide proofs of the various conditions which must hold\nfor these abstractions to subsume their ungeneralised counterparts. A\nCode Generator setup to create executable Scala code is also defined.",
    "licence": "BSD",
    "dependencies": [
        "Extended_Finite_State_Machines"
    ],
    "theories": [
        "Subsumption",
        "Drinks_Subsumption",
        "Inference",
        "SelectionStrategies",
        "Store_Reuse",
        "Store_Reuse_Subsumption",
        "Increment_Reset",
        "Same_Register",
        "Least_Upper_Bound",
        "Distinguishing_Guards",
        "Weak_Subsumption",
        "Group_By",
        "PTA_Generalisation",
        "EFSM_Dot",
        "efsm2sal",
        "Code_Target_List",
        "Code_Target_Set",
        "Code_Target_FSet",
        "Code_Generation"
    ],
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-09-19"
        }
    ]
}