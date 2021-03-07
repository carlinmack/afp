{
    "title": "An Incremental Simplex Algorithm with Unsatisfiable Core Generation",
    "authors": [
        "Filip Marić",
        "Mirko Spasić",
        "René Thiemann"
    ],
    "topics": [
        "Computer science/Algorithms/Optimization"
    ],
    "date": "2018-08-24",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "abstract": "\nWe present an Isabelle/HOL formalization and total correctness proof\nfor the incremental version of the Simplex algorithm which is used in\nmost state-of-the-art SMT solvers. It supports extraction of\nsatisfying assignments, extraction of minimal unsatisfiable cores, incremental\nassertion of constraints and backtracking. The formalization relies on\nstepwise program refinement, starting from a simple specification,\ngoing through a number of refinement steps, and ending up in a fully\nexecutable functional implementation. Symmetries present in the\nalgorithm are handled with special care.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2020-01-14"
        },
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-27"
        }
    ],
    "theories": [
        "Simplex_Auxiliary",
        "Rel_Chain",
        "Simplex_Algebra",
        "Abstract_Linear_Poly",
        "Linear_Poly_Maps",
        "QDelta",
        "Simplex",
        "Simplex_Incremental"
    ]
}