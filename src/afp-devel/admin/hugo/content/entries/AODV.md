{
    "title": "Loop freedom of the (untimed) AODV routing protocol",
    "authors": [
        "Timothy Bourke",
        "Peter Höfner"
    ],
    "date": "2014-10-23",
    "topics": [
        "Computer science/Concurrency/Process calculi"
    ],
    "abstract": "\n<p>\nThe Ad hoc On-demand Distance Vector (AODV) routing protocol allows\nthe nodes in a Mobile Ad hoc Network (MANET) or a Wireless Mesh\nNetwork (WMN) to know where to forward data packets. Such a protocol\nis ‘loop free’ if it never leads to routing decisions that forward\npackets in circles.\n<p>\nThis development mechanises an existing pen-and-paper proof of loop\nfreedom of AODV. The protocol is modelled in the Algebra of\nWireless Networks (AWN), which is the subject of an earlier paper\nand AFP mechanization. The proof relies on a novel compositional\napproach for lifting invariants to networks of nodes.\n</p><p>\nWe exploit the mechanization to analyse several variants of AODV and\nshow that Isabelle/HOL can re-establish most proof obligations\nautomatically and identify exactly the steps that are no longer valid.\n</p>",
    "notify": [
        "tim@tbrk.org"
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
            "2014": "2014-11-03"
        },
        {
            "2014": "2014-11-01"
        }
    ],
    "dependencies": [
        "AWN"
    ],
    "theories": [
        "Quality_Increases",
        "Aodv",
        "Aodv_Predicates",
        "Global_Invariants",
        "All",
        "Aodv_Data",
        "Fresher",
        "Seq_Invariants",
        "Aodv_Basic",
        "Loop_Freedom",
        "Aodv_Loop_Freedom",
        "OAodv",
        "Aodv_Message"
    ]
}