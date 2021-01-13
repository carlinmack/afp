{
    "title": "Menger's Theorem",
    "authors": [
        "Christoph Dittmann"
    ],
    "topics": [
        "Mathematics/Graph theory"
    ],
    "date": "2017-02-26",
    "notify": [
        "isabelle@christoph-d.de"
    ],
    "abstract": "\nWe present a formalization of Menger's Theorem for directed and\nundirected graphs in Isabelle/HOL.  This well-known result shows that\nif two non-adjacent distinct vertices u, v in a directed graph have no\nseparator smaller than n, then there exist n internally\nvertex-disjoint paths from u to v.  The version for undirected graphs\nfollows immediately because undirected graphs are a special case of\ndirected graphs.",
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
            "2016-1": "2017-02-27"
        }
    ],
    "theories": [
        "DisjointPaths",
        "Graph",
        "Helpers",
        "Menger",
        "MengerInduction",
        "Separations",
        "Y_eq_new_last",
        "Y_neq_new_last"
    ]
}