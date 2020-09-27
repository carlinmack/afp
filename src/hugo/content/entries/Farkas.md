{
    "title": "Farkas' Lemma and Motzkin's Transposition Theorem",
    "authors": [
        "Ralph Bottesch",
        "Max W. Haslbeck",
        "René Thiemann"
    ],
    "topics": [
        "Mathematics/Algebra"
    ],
    "date": "2019-01-17",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "abstract": "\nWe formalize a proof of Motzkin's transposition theorem and\nFarkas' lemma in Isabelle/HOL. Our proof is based on the\nformalization of the simplex algorithm which, given a set of linear\nconstraints, either returns a satisfying assignment to the problem or\ndetects unsatisfiability. By reusing facts about the simplex algorithm\nwe show that a set of linear constraints is unsatisfiable if and only\nif there is a linear combination of the constraints which evaluates to\na trivially unsatisfiable inequality.",
    "licence": "BSD",
    "olderReleases": {
        "2018": "2019-01-21",
        "2019": "2019-06-11"
    },
    "dependencies": [
        "Simplex",
        "Jordan_Normal_Form"
    ]
}