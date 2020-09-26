{
    "title": "OpSets: Sequential Specifications for Replicated Datatypes",
    "authors": [
        "Martin Kleppmann",
        "Victor B. F. Gomes",
        "Dominic P. Mulligan",
        "Alastair R. Beresford"
    ],
    "topics": [
        "Computer science/Algorithms/Distributed",
        "Computer science/Data structures"
    ],
    "date": "2018-05-10",
    "notify": [
        "vb358@cam.ac.uk"
    ],
    "abstract": "\nWe introduce OpSets, an executable framework for specifying and\nreasoning about the semantics of replicated datatypes that provide\neventual consistency in a distributed system, and for mechanically\nverifying algorithms that implement these datatypes. Our approach is\nsimple but expressive, allowing us to succinctly specify a variety of\nabstract datatypes, including maps, sets, lists, text, graphs, trees,\nand registers. Our datatypes are also composable, enabling the\nconstruction of complex data structures. To demonstrate the utility of\nOpSets for analysing replication algorithms, we highlight an important\ncorrectness property for collaborative text editing that has\ntraditionally been overlooked; algorithms that do not satisfy this\nproperty can exhibit awkward interleaving of text. We use OpSets to\nspecify this correctness property and prove that although one existing\nreplication algorithm satisfies this property, several other published\nalgorithms do not.",
    "licence": "BSD",
    "olderReleases": {
        "2017": "2018-05-25",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}