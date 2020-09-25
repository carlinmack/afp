{
    "title": "Mechanization of the Algebra for Wireless Networks (AWN)",
    "authors": [
        "Timothy Bourke"
    ],
    "date": "2014-03-08",
    "topics": [
        "Computer science-Concurrency-Process calculi"
    ],
    "abstract": "\n<p>\nAWN is a process algebra developed for modelling and analysing\nprotocols for Mobile Ad hoc Networks (MANETs) and Wireless Mesh\nNetworks (WMNs). AWN models comprise five distinct layers:\nsequential processes, local parallel compositions, nodes, partial\nnetworks, and complete networks.</p>\n<p>\nThis development mechanises the original operational semantics of\nAWN and introduces a variant 'open' operational semantics that\nenables the compositional statement and proof of invariants across\ndistinct network nodes. It supports labels (for weakening\ninvariants) and (abstract) data state manipulations. A framework for\ncompositional invariant proofs is developed, including a tactic\n(inv_cterms) for inductive invariant proofs of sequential processes,\nlifting rules for the open versions of the higher layers, and a rule\nfor transferring lifted properties back to the standard semantics. A\nnotion of 'control terms' reduces proof obligations to the subset of\nsubterms that act directly (in contrast to operators for combining\nterms and joining processes).</p>",
    "notify": "tim@tbrk.org"
}