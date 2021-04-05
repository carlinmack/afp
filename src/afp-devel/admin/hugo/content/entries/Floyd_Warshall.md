{
    "title": "The Floyd-Warshall Algorithm for Shortest Paths",
    "authors": [
        "Simon Wimmer",
        "Peter Lammich"
    ],
    "topics": [
        "Computer science/Algorithms/Graph"
    ],
    "date": "2017-05-08",
    "notify": [
        "wimmers@in.tum.de"
    ],
    "abstract": "\nThe Floyd-Warshall algorithm [Flo62, Roy59, War62] is a classic\ndynamic programming algorithm to compute the length of all shortest\npaths between any two vertices in a graph (i.e. to solve the all-pairs\nshortest path problem, or APSP for short). Given a representation of\nthe graph as a matrix of weights M, it computes another matrix M'\nwhich represents a graph with the same path lengths and contains the\nlength of the shortest path between any two vertices i and j. This is\nonly possible if the graph does not contain any negative cycles.\nHowever, in this case the Floyd-Warshall algorithm will detect the\nsituation by calculating a negative diagonal entry. This entry\nincludes a formalization of the algorithm and of these key properties.\nThe algorithm is refined to an efficient imperative version using the\nImperative Refinement Framework.",
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
            "2016-1": "2017-05-09"
        }
    ],
    "dependencies": [
        "Refine_Imperative_HOL"
    ],
    "theories": [
        "Floyd_Warshall",
        "Recursion_Combinators",
        "FW_Code"
    ],
    "relatedEntries": [
        "Timed_Automata",
        "Roy_Floyd_Warshall"
    ]
}