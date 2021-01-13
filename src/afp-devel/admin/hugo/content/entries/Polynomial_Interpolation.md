{
    "title": "Polynomial Interpolation",
    "topics": [
        "Mathematics/Algebra"
    ],
    "authors": [
        "René Thiemann",
        "Akihisa Yamada"
    ],
    "date": "2016-01-29",
    "abstract": "\nWe formalized three algorithms for polynomial interpolation over arbitrary\nfields: Lagrange's explicit expression, the recursive algorithm of Neville\nand Aitken, and the Newton interpolation in combination with an efficient\nimplementation of divided differences.  Variants of these algorithms for\ninteger polynomials are also available, where sometimes the interpolation\ncan fail; e.g., there is no linear integer polynomial <i>p</i> such that\n<i>p(0) = 0</i> and <i>p(2) = 1</i>. Moreover, for the Newton interpolation\nfor integer polynomials, we proved that all intermediate results that are\ncomputed during the algorithm must be integers.  This admits an early\nfailure detection in the implementation.  Finally, we proved the uniqueness\nof polynomial interpolation.\n<p>\nThe development also contains improved code equations to speed up the\ndivision of integers in target languages.",
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
        "Sqrt_Babylonian"
    ],
    "theories": [
        "Divmod_Int",
        "Improved_Code_Equations",
        "Is_Rat_To_Rat",
        "Lagrange_Interpolation",
        "Missing_Polynomial",
        "Missing_Unsorted",
        "Neville_Aitken_Interpolation",
        "Newton_Interpolation",
        "Polynomial_Interpolation",
        "Ring_Hom",
        "Ring_Hom_Poly"
    ],
    "relatedEntries": [
        "Polynomial_Factorization"
    ]
}