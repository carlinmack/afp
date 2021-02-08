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
        "Berlekamp_Type_Based",
        "Berlekamp_Zassenhaus",
        "Finite_Field",
        "Gcd_Finite_Field_Impl",
        "Polynomial_Record_Based",
        "Unique_Factorization_Poly",
        "Square_Free_Factorization_Int",
        "Factorize_Rat_Poly",
        "Poly_Mod_Finite_Field_Record_Based",
        "Sublist_Iteration",
        "Chinese_Remainder_Poly",
        "Arithmetic_Record_Based",
        "Degree_Bound",
        "Hensel_Lifting",
        "Karatsuba_Multiplication",
        "Poly_Mod",
        "Finite_Field_Factorization",
        "Berlekamp_Hensel",
        "Missing_Multiset2",
        "Mahler_Measure",
        "Poly_Mod_Finite_Field",
        "Suitable_Prime",
        "Factor_Bound",
        "Unique_Factorization",
        "Distinct_Degree_Factorization",
        "Reconstruction",
        "Hensel_Lifting_Type_Based",
        "Finite_Field_Factorization_Record_Based",
        "Square_Free_Int_To_Square_Free_GFp",
        "Code_Abort_Gcd",
        "Finite_Field_Record_Based",
        "Matrix_Record_Based",
        "Factorize_Int_Poly"
    ]
}