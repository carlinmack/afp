{
    "title": "Polynomial Factorization",
    "topics": [
        "Mathematics/Algebra"
    ],
    "authors": [
        "René Thiemann",
        "Akihisa Yamada"
    ],
    "date": "2016-01-29",
    "abstract": "\nBased on existing libraries for polynomial interpolation and matrices,\nwe formalized several factorization algorithms for polynomials, including\nKronecker's algorithm for integer polynomials,\nYun's square-free factorization algorithm for field polynomials, and\nBerlekamp's algorithm for polynomials over finite fields.\nBy combining the last one with Hensel's lifting,\nwe derive an efficient factorization algorithm for the integer polynomials,\nwhich is then lifted for rational polynomials by mechanizing Gauss' lemma.\nFinally, we assembled a combined factorization algorithm for rational polynomials,\nwhich combines all the mentioned algorithms and additionally uses the explicit formula for roots\nof quadratic polynomials and a rational root test.\n<p>\nAs side products, we developed division algorithms for polynomials over integral domains,\nas well as primality-testing and prime-factorization algorithms for integers.",
    "notify": [
        "rene.thiemann@uibk.ac.at",
        "ayamada@trs.cm.is.nagoya-u.ac.jp"
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
        }
    ],
    "dependencies": [
        "JNF-AFP-Lib",
        "Partial_Function_MR",
        "Polynomial_Interpolation",
        "Show",
        "Sqrt_Babylonian"
    ]
}