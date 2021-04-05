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
        "Aodv_Basic",
        "Aodv_Data",
        "Aodv_Message",
        "Aodv",
        "Aodv_Predicates",
        "Fresher",
        "Seq_Invariants",
        "Quality_Increases",
        "OAodv",
        "Global_Invariants",
        "Loop_Freedom",
        "Aodv_Loop_Freedom",
        "A_Norreqid",
        "A_Aodv_Data",
        "A_Aodv_Message",
        "A_Aodv",
        "A_Aodv_Predicates",
        "A_Fresher",
        "A_Seq_Invariants",
        "A_Quality_Increases",
        "A_OAodv",
        "A_Global_Invariants",
        "A_Loop_Freedom",
        "A_Aodv_Loop_Freedom",
        "B_Fwdrreps",
        "B_Aodv_Data",
        "B_Aodv_Message",
        "B_Aodv",
        "B_Aodv_Predicates",
        "B_Fresher",
        "B_Seq_Invariants",
        "B_Quality_Increases",
        "B_OAodv",
        "B_Global_Invariants",
        "B_Loop_Freedom",
        "B_Aodv_Loop_Freedom",
        "C_Gtobcast",
        "C_Aodv_Data",
        "C_Aodv_Message",
        "C_Aodv",
        "C_Aodv_Predicates",
        "C_Fresher",
        "C_Seq_Invariants",
        "C_Quality_Increases",
        "C_OAodv",
        "C_Global_Invariants",
        "C_Loop_Freedom",
        "C_Aodv_Loop_Freedom",
        "D_Fwdrreqs",
        "D_Aodv_Data",
        "D_Aodv_Message",
        "D_Aodv",
        "D_Aodv_Predicates",
        "D_Fresher",
        "D_Seq_Invariants",
        "D_Quality_Increases",
        "D_OAodv",
        "D_Global_Invariants",
        "D_Loop_Freedom",
        "D_Aodv_Loop_Freedom",
        "E_All_ABCD",
        "E_Aodv_Data",
        "E_Aodv_Message",
        "E_Aodv",
        "E_Aodv_Predicates",
        "E_Fresher",
        "E_Seq_Invariants",
        "E_Quality_Increases",
        "E_OAodv",
        "E_Global_Invariants",
        "E_Loop_Freedom",
        "E_Aodv_Loop_Freedom",
        "All"
    ],
    "relatedEntries": [
        "AWN"
    ]
}