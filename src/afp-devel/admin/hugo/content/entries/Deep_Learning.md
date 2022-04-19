{
    "title": "Expressiveness of Deep Learning",
    "authors": [
        "Alexander Bentkamp"
    ],
    "date": "2016-11-10",
    "topics": [
        "Computer science/Machine learning",
        "Mathematics/Analysis"
    ],
    "abstract": "\nDeep learning has had a profound impact on computer science in recent years, with applications to search engines, image recognition and language processing, bioinformatics, and more. Recently, Cohen et al. provided theoretical evidence for the superiority of deep learning over shallow learning. This formalization of their work simplifies and generalizes the original proof, while working around the limitations of the Isabelle type system. To support the formalization, I developed reusable libraries of formalized mathematics, including results about the matrix rank, the Lebesgue measure, and multivariate polynomials, as well as a library for tensor analysis.",
    "notify": [
        "bentkamp@gmail.com"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
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
            "2016": "2016-11-10"
        }
    ],
    "dependencies": [
        "Jordan_Normal_Form",
        "Polynomial_Interpolation",
        "Polynomials",
        "VectorSpace"
    ],
    "theories": [
        "Tensor",
        "Tensor_Subtensor",
        "Tensor_Plus",
        "Tensor_Scalar_Mult",
        "Tensor_Product",
        "Tensor_Unit_Vec",
        "Tensor_Rank",
        "Tensor_Matricization",
        "DL_Rank_CP_Rank",
        "DL_Flatten_Matrix",
        "DL_Network",
        "DL_Concrete_Matrices",
        "DL_Missing_Finite_Set",
        "DL_Deep_Model",
        "DL_Deep_Model_Poly",
        "Lebesgue_Functional",
        "Lebesgue_Zero_Set",
        "DL_Shallow_Model",
        "DL_Fundamental_Theorem_Network_Capacity"
    ],
    "relatedEntries": [
        "Groebner_Bases",
        "Isabelle_Marries_Dirac",
        "Polynomial_Factorization"
    ]
}