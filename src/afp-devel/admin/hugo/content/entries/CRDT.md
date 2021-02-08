{
    "title": "A framework for establishing Strong Eventual Consistency for Conflict-free Replicated Datatypes",
    "authors": [
        "Victor B. F. Gomes",
        "Martin Kleppmann",
        "Dominic P. Mulligan",
        "Alastair R. Beresford"
    ],
    "topics": [
        "Computer science/Algorithms/Distributed",
        "Computer science/Data structures"
    ],
    "date": "2017-07-07",
    "notify": [
        "vb358@cam.ac.uk",
        "dominic.p.mulligan@googlemail.com"
    ],
    "abstract": "\nIn this work, we focus on the correctness of Conflict-free Replicated\nData Types (CRDTs), a class of algorithm that provides strong eventual\nconsistency guarantees for replicated data. We develop a modular and\nreusable framework for verifying the correctness of CRDT algorithms.\nWe avoid correctness issues that have dogged previous mechanised\nproofs in this area by including a network model in our formalisation,\nand proving that our theorems hold in all possible network behaviours.\nOur axiomatic network model is a standard abstraction that accurately\nreflects the behaviour of real-world computer networks. Moreover, we\nidentify an abstract convergence theorem, a property of order\nrelations, which provides a formal definition of strong eventual\nconsistency. We then obtain the first machine-checked correctness\ntheorems for three concrete CRDTs: the Replicated Growable Array, the\nObserved-Remove Set, and an Increment-Decrement Counter.",
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
            "2016-1": "2017-07-07"
        }
    ],
    "theories": [
        "Counter",
        "RGA",
        "Network",
        "Util",
        "ORSet",
        "Convergence",
        "Ordered_List"
    ]
}