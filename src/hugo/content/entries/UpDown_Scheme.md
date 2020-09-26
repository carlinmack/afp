{
    "title": "Verification of the UpDown Scheme",
    "authors": [
        "Johannes Hölzl"
    ],
    "date": "2015-01-28",
    "topics": [
        "Computer science-Algorithms-Mathematical"
    ],
    "abstract": "\nThe UpDown scheme is a recursive scheme used to compute the stiffness matrix\non a special form of sparse grids. Usually, when discretizing a Euclidean\nspace of dimension d we need O(n^d) points, for n points along each dimension.\nSparse grids are a hierarchical representation where the number of points is\nreduced to O(n * log(n)^d). One disadvantage of such sparse grids is that the\nalgorithm now operate recursively in the dimensions and levels of the sparse grid.\n<p>\nThe UpDown scheme allows us to compute the stiffness matrix on such a sparse\ngrid. The stiffness matrix represents the influence of each representation\nfunction on the L^2 scalar product. For a detailed description see\nDirk Pflüger's PhD thesis. This formalization was developed as an\ninterdisciplinary project (IDP) at the Technische Universität München.",
    "notify": "hoelzl@in.tum.de",
    "licence": "BSD"
}