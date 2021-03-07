{
    "title": "The Factorization Algorithm of Berlekamp and Zassenhaus",
    "authors": [
        "Jose Divasón",
        "Sebastiaan Joosten",
        "René Thiemann",
        "Akihisa Yamada"
    ],
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "date": "2016-10-14",
    "topics": [
        "Mathematics/Algebra"
    ],
    "abstract": "\n<p>We formalize the Berlekamp-Zassenhaus algorithm for factoring\nsquare-free integer polynomials in Isabelle/HOL. We further adapt an\nexisting formalization of Yun’s square-free factorization algorithm to\ninteger polynomials, and thus provide an efficient and certified\nfactorization algorithm for arbitrary univariate polynomials.\n</p>\n<p>The algorithm first performs a factorization in the prime field GF(p) and\nthen performs computations in the integer ring modulo p^k, where both\np and k are determined at runtime. Since a natural modeling of these\nstructures via dependent types is not possible in Isabelle/HOL, we\nformalize the whole algorithm using Isabelle’s recent addition of\nlocal type definitions.\n</p>\n<p>Through experiments we verify that our algorithm factors polynomials of degree\n100 within seconds.\n</p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-09-07"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        }
    ],
    "dependencies": [
        "Pre_BZ"
    ],
    "theories": [
        "Finite_Field",
        "Arithmetic_Record_Based",
        "Finite_Field_Record_Based",
        "Matrix_Record_Based",
        "Missing_Multiset2",
        "Unique_Factorization",
        "Unique_Factorization_Poly",
        "Poly_Mod",
        "Poly_Mod_Finite_Field",
        "Karatsuba_Multiplication",
        "Polynomial_Record_Based",
        "Poly_Mod_Finite_Field_Record_Based",
        "Chinese_Remainder_Poly",
        "Berlekamp_Type_Based",
        "Distinct_Degree_Factorization",
        "Finite_Field_Factorization",
        "Finite_Field_Factorization_Record_Based",
        "Hensel_Lifting",
        "Hensel_Lifting_Type_Based",
        "Berlekamp_Hensel",
        "Square_Free_Int_To_Square_Free_GFp",
        "Suitable_Prime",
        "Degree_Bound",
        "Mahler_Measure",
        "Factor_Bound",
        "Sublist_Iteration",
        "Reconstruction",
        "Code_Abort_Gcd",
        "Berlekamp_Zassenhaus",
        "Gcd_Finite_Field_Impl",
        "Square_Free_Factorization_Int",
        "Factorize_Int_Poly",
        "Factorize_Rat_Poly"
    ]
}