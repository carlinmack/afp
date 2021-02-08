{
    "title": "Timed Automata",
    "authors": [
        "Simon Wimmer"
    ],
    "date": "2016-03-08",
    "topics": [
        "Computer science/Automata and formal languages"
    ],
    "abstract": "\nTimed automata are a widely used formalism for modeling real-time\nsystems, which is employed  in a class of successful model checkers\nsuch as UPPAAL [LPY97], HyTech [HHWt97] or Kronos [Yov97].  This work\nformalizes the theory for the subclass of diagonal-free timed\nautomata,  which is sufficient to model many interesting problems.  We\nfirst define the basic concepts and semantics of diagonal-free timed\nautomata.  Based on this, we prove two types of decidability results\nfor the language emptiness problem.    The first is the classic result\nof Alur and Dill [AD90, AD94],  which uses a finite partitioning of\nthe state space into so-called `regions`.    Our second result focuses\non an approach based on `Difference Bound Matrices (DBMs)`,  which is\npractically used by model checkers.  We prove the correctness of the\nbasic forward analysis operations on DBMs.  One of these operations is\nthe Floyd-Warshall algorithm for the all-pairs shortest paths problem.\nTo obtain a finite search space, a widening operation has to be used\nfor this kind of analysis.  We use Patricia Bouyer's [Bou04] approach\nto prove that this widening operation  is correct in the sense that\nDBM-based forward analysis in combination with the widening operation\nalso decides language emptiness. The interesting property of this\nproof is that the first  decidability result is reused to obtain the\nsecond one.",
    "notify": [
        "wimmers@in.tum.de"
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
            "2016": "2016-03-11"
        }
    ],
    "theories": [
        "DBM_Zone_Semantics",
        "DBM_Basics",
        "DBM_Operations",
        "Paths_Cycles",
        "Floyd_Warshall",
        "DBM_Normalization",
        "Regions_Beta",
        "Closure",
        "DBM",
        "Approx_Beta",
        "Timed_Automata",
        "Normalized_Zone_Semantics",
        "Regions",
        "Misc"
    ]
}