{
    "title": "Stochastic Matrices and the Perron-Frobenius Theorem",
    "authors": [
        "René Thiemann"
    ],
    "topics": [
        "Mathematics/Algebra",
        "Computer science/Automata and formal languages"
    ],
    "date": "2017-11-22",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "abstract": "\nStochastic matrices are a convenient way to model discrete-time and\nfinite state Markov chains. The Perron&ndash;Frobenius theorem\ntells us something about the existence and uniqueness of non-negative\neigenvectors of a stochastic matrix.  In this entry, we formalize\nstochastic matrices, link the formalization to the existing AFP-entry\non Markov chains, and apply the Perron&ndash;Frobenius theorem to\nprove that stationary distributions always exist, and they are unique\nif the stochastic matrix is irreducible.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-11-23"
        }
    ],
    "dependencies": [
        "Markov_Models",
        "Perron_Frobenius",
        "Jordan_Normal_Form"
    ],
    "theories": [
        "Stochastic_Matrix",
        "Stochastic_Vector_PMF",
        "Stochastic_Matrix_Perron_Frobenius",
        "Eigenspace",
        "Stochastic_Matrix_Markov_Models"
    ]
}