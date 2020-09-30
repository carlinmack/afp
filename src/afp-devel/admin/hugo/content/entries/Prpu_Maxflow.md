{
    "title": "Formalizing Push-Relabel Algorithms",
    "authors": [
        "Peter Lammich",
        "S. Reza Sefidgar"
    ],
    "topics": [
        "Computer science/Algorithms/Graph",
        "Mathematics/Graph theory"
    ],
    "date": "2017-06-01",
    "notify": [
        "lammich@in.tum.de"
    ],
    "abstract": "\nWe present a formalization of push-relabel algorithms for computing\nthe maximum flow in a network. We start with Goldberg's et\nal.~generic push-relabel algorithm, for which we show correctness and\nthe time complexity bound of O(V^2E). We then derive the\nrelabel-to-front and FIFO implementation. Using stepwise refinement\ntechniques, we derive an efficient verified implementation.  Our\nformal proof of the abstract algorithms closely follows a standard\ntextbook proof. It is accessible even without being an expert in\nIsabelle/HOL, the interactive theorem prover used for the\nformalization.",
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
            "2016-1": "2017-06-02"
        }
    ],
    "dependencies": [
        "Flow_Networks"
    ]
}