{
    "title": "Infeasible Paths Elimination by Symbolic Execution Techniques: Proof of Correctness and Preservation of Paths",
    "authors": [
        "Romain Aissat",
        "Frederic Voisin",
        "Burkhart Wolff"
    ],
    "notify": "wolff@lri.fr",
    "date": "2016-08-18",
    "topics": [
        "Computer science-Programming languages-Static analysis"
    ],
    "abstract": "\nTRACER is a tool for verifying safety properties of sequential C\nprograms. TRACER attempts at building a finite symbolic execution\ngraph which over-approximates the set of all concrete reachable states\nand the set of feasible paths.  We present an abstract framework for\nTRACER and similar CEGAR-like systems. The framework provides 1) a\ngraph- transformation based method for reducing the feasible paths in\ncontrol-flow graphs, 2) a model for symbolic execution, subsumption,\npredicate abstraction and invariant generation. In this framework we\nformally prove two key properties: correct construction of the\nsymbolic states and preservation of feasible paths. The framework\nfocuses on core operations, leaving to concrete prototypes to “fit in”\nheuristics for combining them.  The accompanying paper (published in\nITP 2016) can be found at\nhttps://www.lri.fr/∼wolff/papers/conf/2016-itp-InfPathsNSE.pdf.",
    "licence": "BSD",
    "olderReleases": {
        "2016": "2016-08-18",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}