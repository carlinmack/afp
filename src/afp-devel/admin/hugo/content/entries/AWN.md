{
    "title": "Mechanization of the Algebra for Wireless Networks (AWN)",
    "authors": [
        "Timothy Bourke"
    ],
    "date": "2014-03-08",
    "topics": [
        "Computer science/Concurrency/Process calculi"
    ],
    "abstract": "\n<p>\nAWN is a process algebra developed for modelling and analysing\nprotocols for Mobile Ad hoc Networks (MANETs) and Wireless Mesh\nNetworks (WMNs). AWN models comprise five distinct layers:\nsequential processes, local parallel compositions, nodes, partial\nnetworks, and complete networks.</p>\n<p>\nThis development mechanises the original operational semantics of\nAWN and introduces a variant 'open' operational semantics that\nenables the compositional statement and proof of invariants across\ndistinct network nodes. It supports labels (for weakening\ninvariants) and (abstract) data state manipulations. A framework for\ncompositional invariant proofs is developed, including a tactic\n(inv_cterms) for inductive invariant proofs of sequential processes,\nlifting rules for the open versions of the higher layers, and a rule\nfor transferring lifted properties back to the standard semantics. A\nnotion of 'control terms' reduces proof obligations to the subset of\nsubterms that act directly (in contrast to operators for combining\nterms and joining processes).</p>",
    "notify": [
        "tim@tbrk.org"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
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
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2014-03-15"
        }
    ],
    "theories": [
        "Lib",
        "TransitionSystems",
        "Invariants",
        "OInvariants",
        "AWN",
        "AWN_SOS",
        "AWN_Cterms",
        "AWN_Labels",
        "Inv_Cterms",
        "AWN_SOS_Labels",
        "Pnet",
        "Closed",
        "OAWN_SOS",
        "OAWN_SOS_Labels",
        "OPnet",
        "ONode_Lifting",
        "OPnet_Lifting",
        "OClosed_Lifting",
        "AWN_Invariants",
        "OAWN_Invariants",
        "OAWN_Convert",
        "Qmsg",
        "Qmsg_Lifting",
        "OClosed_Transfer",
        "AWN_Main",
        "Toy",
        "AWN_Term_Graph"
    ],
    "relatedEntries": [
        "AODV"
    ]
}