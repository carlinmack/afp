{
    "title": "A verified factorization algorithm for integer polynomials with polynomial complexity",
    "authors": [
        "Jose Divasón",
        "Sebastiaan Joosten",
        "René Thiemann",
        "Akihisa Yamada"
    ],
    "topics": [
        "Mathematics/Algebra"
    ],
    "date": "2018-02-06",
    "notify": [
        "jose.divason@unirioja.es",
        "s.j.c.joosten@utwente.nl",
        "rene.thiemann@uibk.ac.at",
        "ayamada@trs.cm.is.nagoya-u.ac.jp"
    ],
    "abstract": "\nShort vectors in lattices and factors of integer polynomials are\nrelated. Each factor of an integer polynomial belongs to a certain\nlattice. When factoring polynomials, the condition that we are looking\nfor an irreducible polynomial means that we must look for a small\nelement in a lattice, which can be done by a basis reduction\nalgorithm. In this development we formalize this connection and\nthereby one main application of the LLL basis reduction algorithm: an\nalgorithm to factor square-free integer polynomials which runs in\npolynomial time. The work is based on our previous\nBerlekamp–Zassenhaus development, where the exponential reconstruction\nphase has been replaced by the polynomial-time basis reduction\nalgorithm. Thanks to this formalization we found a serious flaw in a\ntextbook.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-02-07"
        }
    ],
    "dependencies": [
        "LLL_Basis_Reduction",
        "Perron_Frobenius"
    ]
}