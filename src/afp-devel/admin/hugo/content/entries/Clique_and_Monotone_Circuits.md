{
    "title": "Clique is not solvable by monotone circuits of polynomial size",
    "authors": [
        "René Thiemann"
    ],
    "topics": [
        "Mathematics/Combinatorics"
    ],
    "date": "2022-05-08",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "abstract": "\n<p> Given a graph $G$ with $n$ vertices and a number $s$, the\ndecision problem Clique asks whether $G$ contains a fully connected\nsubgraph with $s$ vertices. For this NP-complete problem there exists\na non-trivial lower bound: no monotone circuit of a size that is\npolynomial in $n$ can solve Clique. </p><p> This entry\nprovides an Isabelle/HOL formalization of a concrete lower bound (the\nbound is $\\sqrt[7]{n}^{\\sqrt[8]{n}}$ for the fixed choice of $s =\n\\sqrt[4]{n}$), following a proof by Gordeev. </p>",
    "licence": "BSD",
    "dependencies": [
        "Stirling_Formula",
        "Sunflowers"
    ],
    "theories": [
        "Preliminaries",
        "Monotone_Formula",
        "Assumptions_and_Approximations",
        "Clique_Large_Monotone_Circuits"
    ]
}