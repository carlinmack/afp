{
    "title": "Kruskal's Algorithm for Minimum Spanning Forest",
    "authors": [
        "Maximilian P.L. Haslbeck",
        "Peter Lammich",
        "Julian Biendarra"
    ],
    "topics": [
        "Computer science/Algorithms/Graph"
    ],
    "date": "2019-02-14",
    "notify": [
        "haslbema@in.tum.de",
        "lammich@in.tum.de"
    ],
    "abstract": "\nThis Isabelle/HOL formalization defines a greedy algorithm for finding\na minimum weight basis on a weighted matroid and proves its\ncorrectness. This algorithm is an abstract version of Kruskal's\nalgorithm.  We interpret the abstract algorithm for the cycle matroid\n(i.e. forests in a graph) and refine it to imperative executable code\nusing an efficient union-find data structure.  Our formalization can\nbe instantiated for different graph representations. We provide\ninstantiations for undirected graphs and symmetric directed graphs.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-02-19"
        }
    ],
    "dependencies": [
        "Sepref_IICF",
        "Refine_Monadic",
        "Matroids",
        "Collections",
        "Refine_Imperative_HOL"
    ],
    "theories": [
        "Graph_Definition",
        "Graph_Definition_Aux",
        "Graph_Definition_Impl",
        "Kruskal",
        "Kruskal_Impl",
        "Kruskal_Misc",
        "Kruskal_Refine",
        "MinWeightBasis",
        "SeprefUF",
        "UGraph",
        "UGraph_Impl"
    ],
    "relatedEntries": [
        "JinjaThreads",
        "Flow_Networks"
    ]
}