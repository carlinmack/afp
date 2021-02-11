{
    "title": "Abortable Linearizable Modules",
    "authors": [
        "Rachid Guerraoui",
        "Viktor Kuncak",
        "Giuliano Losa"
    ],
    "date": "2012-03-01",
    "topics": [
        "Computer science/Algorithms/Distributed"
    ],
    "abstract": "\nWe define the Abortable Linearizable Module automaton (ALM for short)\nand prove its key composition property using the IOA theory of\nHOLCF. The ALM is at the heart of the Speculative Linearizability\nframework. This framework simplifies devising correct speculative\nalgorithms by enabling their decomposition into independent modules\nthat can be analyzed and proved correct in isolation. It is\nparticularly useful when working in a distributed environment, where\nthe need to tolerate faults and asynchrony has made current\nmonolithic protocols so intricate that it is no longer tractable to\ncheck their correctness. Our theory contains a typical example of a\nrefinement proof in the I/O-automata framework of Lynch and Tuttle.",
    "notify": [
        "giuliano@losa.fr",
        "nipkow@in.tum.de"
    ],
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
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2012-03-02"
        }
    ],
    "theories": [
        "Simulations",
        "Consensus",
        "Sequences",
        "RDR",
        "Idempotence",
        "SLin",
        "IOA"
    ]
}