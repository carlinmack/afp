{
    "title": "Verification of the UpDown Scheme",
    "authors": [
        "Johannes Hölzl"
    ],
    "date": "2015-01-28",
    "topics": [
        "Computer science/Algorithms/Mathematical"
    ],
    "abstract": "\nThe UpDown scheme is a recursive scheme used to compute the stiffness matrix\non a special form of sparse grids. Usually, when discretizing a Euclidean\nspace of dimension d we need O(n^d) points, for n points along each dimension.\nSparse grids are a hierarchical representation where the number of points is\nreduced to O(n * log(n)^d). One disadvantage of such sparse grids is that the\nalgorithm now operate recursively in the dimensions and levels of the sparse grid.\n<p>\nThe UpDown scheme allows us to compute the stiffness matrix on such a sparse\ngrid. The stiffness matrix represents the influence of each representation\nfunction on the L^2 scalar product. For a detailed description see\nDirk Pflüger's PhD thesis. This formalization was developed as an\ninterdisciplinary project (IDP) at the Technische Universität München.",
    "notify": [
        "hoelzl@in.tum.de"
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
            "2014": "2015-01-30"
        }
    ],
    "dependencies": [
        "Automatic_Refinement",
        "Separation_Logic_Imperative_HOL"
    ],
    "theories": [
        "Up",
        "Triangular_Function",
        "Grid",
        "UpDown_Scheme",
        "Up_Down",
        "Down",
        "Imperative",
        "Grid_Point"
    ]
}