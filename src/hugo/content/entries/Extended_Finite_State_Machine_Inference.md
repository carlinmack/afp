{
    "title": "Inference of Extended Finite State Machines",
    "authors": [
        "Michael Foster",
        "Achim D. Brucker",
        "Ramsay G. Taylor",
        "John Derrick"
    ],
    "topics": [
        "Computer science-Automata and formal languages"
    ],
    "date": "2020-09-07",
    "notify": "jmafoster1@sheffield.ac.uk, adbrucker@0x5f.org",
    "abstract": "\nIn this AFP entry, we provide a formal implementation of a\nstate-merging technique to infer extended finite state machines\n(EFSMs), complete with output and update functions, from black-box\ntraces. In particular, we define the subsumption in context relation\nas a means of determining whether one transition is able to account\nfor the behaviour of another. Building on this, we define the direct\nsubsumption relation, which lifts the subsumption in context relation\nto EFSM level such that we can use it to determine whether it is safe\nto merge a given pair of transitions. Key proofs include the\nconditions necessary for subsumption to occur and that subsumption\nand direct subsumption are preorder relations.  We also provide a\nnumber of different heuristics which can be used to abstract away\nconcrete values into registers so that more states and transitions can\nbe merged and provide proofs of the various conditions which must hold\nfor these abstractions to subsume their ungeneralised counterparts. A\nCode Generator setup to create executable Scala code is also defined.",
    "licence": "BSD"
}