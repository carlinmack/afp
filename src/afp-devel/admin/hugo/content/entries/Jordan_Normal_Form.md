{
    "title": "Matrices, Jordan Normal Forms, and Spectral Radius Theory",
    "topics": [
        "Mathematics/Algebra"
    ],
    "authors": [
        "René Thiemann",
        "Akihisa Yamada"
    ],
    "contributors": [
        "Alexander Bentkamp"
    ],
    "date": "2015-08-21",
    "abstract": "\n<p>\nMatrix interpretations are useful as measure functions in termination proving. In order to use these interpretations also for complexity analysis, the growth rate of matrix powers has to examined. Here, we formalized a central result of spectral radius theory, namely that the growth rate is polynomially bounded if and only if the spectral radius of a matrix is at most one.\n</p><p>\nTo formally prove this result we first studied the growth rates of matrices in Jordan normal form, and prove the result that every complex matrix has a Jordan normal form using a constructive prove via Schur decomposition.\n</p><p>\nThe whole development is based on a new abstract type for matrices, which is also executable by a suitable setup of the code generator. It completely subsumes our former AFP-entry on executable matrices, and its main advantage is its close connection to the HMA-representation which allowed us to easily adapt existing proofs on determinants.\n</p><p>\nAll the results have been applied to improve CeTA, our certifier to validate termination and complexity proof certificates.\n</p>",
    "extra": {
        "Change history": "[2016-01-07] Added Schur-decomposition, Gram-Schmidt orthogonalization, uniqueness of Jordan normal forms<br/>\n[2018-04-17] Integrated lemmas from deep-learning AFP-entry of Alexander Bentkamp"
    },
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
        },
        {
            "2015": "2015-08-23"
        }
    ],
    "dependencies": [
        "JNF-AFP-Lib",
        "Polynomial_Factorization"
    ],
    "theories": [
        "Char_Poly",
        "Column_Operations",
        "Complexity_Carrier",
        "Conjugate",
        "Derivation_Bound",
        "Determinant",
        "Determinant_Impl",
        "DL_Missing_List",
        "DL_Missing_Sublist",
        "DL_Rank",
        "DL_Rank_Submatrix",
        "DL_Submatrix",
        "Gauss_Jordan_Elimination",
        "Gauss_Jordan_IArray_Impl",
        "Gram_Schmidt",
        "Jordan_Normal_Form",
        "Jordan_Normal_Form_Existence",
        "Jordan_Normal_Form_Uniqueness",
        "Matrix",
        "Matrix_Comparison",
        "Matrix_Complexity",
        "Matrix_IArray_Impl",
        "Matrix_Impl",
        "Matrix_Kernel",
        "Missing_Permutations",
        "Missing_Ring",
        "Missing_VectorSpace",
        "Ring_Hom_Matrix",
        "Schur_Decomposition",
        "Show_Arctic",
        "Show_Matrix",
        "Spectral_Radius",
        "Strassen_Algorithm",
        "Strassen_Algorithm_Code",
        "VS_Connect"
    ],
    "relatedEntries": [
        "Perron_Frobenius"
    ]
}