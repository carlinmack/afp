{
    "title": "Factorization of Polynomials with Algebraic Coefficients",
    "authors": [
        "Manuel Eberl",
        "René Thiemann"
    ],
    "topics": [
        "Mathematics/Algebra"
    ],
    "date": "2021-11-08",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "abstract": "\nThe AFP already contains a verified implementation of algebraic\nnumbers. However, it is has a severe limitation in its factorization\nalgorithm of real and complex polynomials: the factorization is only\nguaranteed to succeed if the coefficients of the polynomial are\nrational numbers. In this work, we verify an algorithm to factor all\nreal and complex polynomials whose coefficients are algebraic. The\nexistence of such an algorithm proves in a constructive way that the\nset of complex algebraic numbers is algebraically closed. Internally,\nthe algorithm is based on resultants of multivariate polynomials and\nan approximation algorithm using interval arithmetic.",
    "licence": "BSD",
    "theories": [
        "Roots_via_IA",
        "Complex_Roots_IA_Code",
        "Poly_Connection",
        "MPoly_Divide",
        "MPoly_Divide_Code",
        "MPoly_Container",
        "Multivariate_Resultant",
        "Is_Int_To_Int",
        "Roots_of_Algebraic_Poly",
        "Roots_of_Algebraic_Poly_Impl",
        "Roots_of_Real_Complex_Poly",
        "Factor_Complex_Poly",
        "Factor_Real_Poly"
    ],
    "olderReleases": [
        {
            "2021": "2021-11-14"
        }
    ]
}