{
    "title": "A Framework for Verifying Depth-First Search Algorithms",
    "authors": [
        "Peter Lammich",
        "René Neumann"
    ],
    "notify": [
        "lammich@in.tum.de"
    ],
    "date": "2016-07-05",
    "topics": [
        "Computer science/Algorithms/Graph"
    ],
    "abstract": "\n<p>\nThis entry presents a framework for the modular verification of\nDFS-based algorithms, which is described in our [CPP-2015] paper. It\nprovides a generic DFS algorithm framework, that can be parameterized\nwith user-defined actions on certain events (e.g. discovery of new\nnode).  It comes with an extensible library of invariants, which can\nbe used to derive invariants of a specific parameterization.  Using\nrefinement techniques, efficient implementations of the algorithms can\neasily be derived. Here, the framework comes with templates for a\nrecursive and a tail-recursive implementation, and also with several\ntemplates for implementing the data structures required by the DFS\nalgorithm.  Finally, this entry contains a set of re-usable DFS-based\nalgorithms, which illustrate the application of the framework.\n</p><p>\n[CPP-2015] Peter Lammich, René Neumann: A Framework for Verifying\nDepth-First Search Algorithms. CPP 2015: 137-146</p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2020-01-14"
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
            "2016": "2016-07-05"
        }
    ],
    "dependencies": [
        "CAVA_Automata"
    ],
    "theories": [
        "DFS_Chapter_Framework",
        "DFS_Framework",
        "Param_DFS"
    ],
    "relatedEntries": [
        "Gabow_SCC"
    ]
}