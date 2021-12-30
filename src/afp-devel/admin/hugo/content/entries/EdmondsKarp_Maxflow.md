{
    "title": "Formalizing the Edmonds-Karp Algorithm",
    "authors": [
        "Peter Lammich",
        "S. Reza Sefidgar"
    ],
    "notify": [
        "lammich@in.tum.de"
    ],
    "date": "2016-08-12",
    "topics": [
        "Computer science/Algorithms/Graph"
    ],
    "abstract": "\nWe present a formalization of the Ford-Fulkerson method for computing\nthe maximum flow in a network. Our formal proof closely follows a\nstandard textbook proof, and is accessible even without being an\nexpert in Isabelle/HOL--- the interactive theorem prover used for the\nformalization. We then use stepwise refinement to obtain the\nEdmonds-Karp algorithm, and formally prove a bound on its complexity.\nFurther refinement yields a verified implementation, whose execution\ntime compares well to an unverified reference implementation in Java.\nThis entry is based on our ITP-2016 paper with the same title.",
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
            "2016": "2016-08-12"
        }
    ],
    "dependencies": [
        "Flow_Networks"
    ],
    "theories": [
        "FordFulkerson_Algo",
        "EdmondsKarp_Termination_Abstract",
        "EdmondsKarp_Algo",
        "Augmenting_Path_BFS",
        "EdmondsKarp_Impl",
        "Edka_Checked_Impl",
        "Edka_Benchmark_Export"
    ],
    "relatedEntries": [
        "Prpu_Maxflow"
    ]
}