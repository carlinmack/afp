{
    "title": "Proving the Correctness of Disk Paxos",
    "date": "2005-06-22",
    "authors": [
        "Mauro Jaskelioff",
        "Stephan Merz"
    ],
    "topics": [
        "Computer science/Algorithms/Distributed"
    ],
    "abstract": "Disk Paxos is an algorithm for building arbitrary fault-tolerant distributed systems. The specification of Disk Paxos has been proved correct informally and tested using the TLC model checker, but up to now, it has never been fully formally verified. In this work we have formally verified its correctness using the Isabelle theorem prover and the HOL logic system, showing that Isabelle is a practical tool for verifying properties of TLA+ specifications.",
    "notify": [
        "kleing@cse.unsw.edu.au"
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
            "2011-1": "2011-10-11"
        },
        {
            "2011": "2011-02-11"
        },
        {
            "2009-2": "2010-06-30"
        },
        {
            "2009-1": "2009-12-12"
        },
        {
            "2009": "2009-04-29"
        },
        {
            "2008": "2008-06-10"
        },
        {
            "2007": "2007-11-27"
        },
        {
            "2005": "2005-10-14"
        },
        {
            "2004": "2005-06-22"
        }
    ],
    "theories": [
        "DiskPaxos_Model",
        "DiskPaxos_Inv1",
        "DiskPaxos_Inv2",
        "DiskPaxos_Inv3",
        "DiskPaxos_Inv4",
        "DiskPaxos_Inv5",
        "DiskPaxos_Chosen",
        "DiskPaxos_Inv6",
        "DiskPaxos_Invariant",
        "DiskPaxos"
    ]
}