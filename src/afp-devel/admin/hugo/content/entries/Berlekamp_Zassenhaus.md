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
        "Arithmetic_Record_Based",
        "Berlekamp_Hensel",
        "Berlekamp_Type_Based",
        "Berlekamp_Zassenhaus",
        "Chinese_Remainder_Poly",
        "Code_Abort_Gcd",
        "Degree_Bound",
        "Distinct_Degree_Factorization",
        "Factorize_Int_Poly",
        "Factorize_Rat_Poly",
        "Factor_Bound",
        "Finite_Field",
        "Finite_Field_Factorization",
        "Finite_Field_Factorization_Record_Based",
        "Finite_Field_Record_Based",
        "Gcd_Finite_Field_Impl",
        "Hensel_Lifting",
        "Hensel_Lifting_Type_Based",
        "Karatsuba_Multiplication",
        "Mahler_Measure",
        "Matrix_Record_Based",
        "Missing_Multiset2",
        "Polynomial_Record_Based",
        "Poly_Mod",
        "Poly_Mod_Finite_Field",
        "Poly_Mod_Finite_Field_Record_Based",
        "Reconstruction",
        "Square_Free_Factorization_Int",
        "Square_Free_Int_To_Square_Free_GFp",
        "Sublist_Iteration",
        "Suitable_Prime",
        "Unique_Factorization",
        "Unique_Factorization_Poly"
    ]
}