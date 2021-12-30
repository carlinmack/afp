{
    "title": "Gauss-Jordan Algorithm and Its Applications",
    "authors": [
        "Jose Divasón",
        "Jesús Aransay"
    ],
    "topics": [
        "Computer science/Algorithms/Mathematical"
    ],
    "date": "2014-09-03",
    "abstract": "The Gauss-Jordan algorithm states that any matrix over a field can be transformed by means of elementary row operations to a matrix in reduced row echelon form. The formalization is based on the Rank Nullity Theorem entry of the AFP and on the HOL-Multivariate-Analysis session of Isabelle, where matrices are represented as functions over finite types. We have set up the code generator to make this representation executable. In order to improve the performance, a refinement to immutable arrays has been carried out. We have formalized some of the applications of the Gauss-Jordan algorithm. Thanks to this development, the following facts can be computed over matrices whose elements belong to a field: Ranks, Determinants, Inverses, Bases and dimensions and Solutions of systems of linear equations. Code can be exported to SML and Haskell.",
    "notify": [
        "jose.divasonm@unirioja.es",
        "jesus-maria.aransay@unirioja.es"
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
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-09-03"
        }
    ],
    "dependencies": [
        "Rank_Nullity_Theorem"
    ],
    "theories": [
        "Rref",
        "Code_Set",
        "Code_Matrix",
        "Elementary_Operations",
        "Rank",
        "Gauss_Jordan",
        "Linear_Maps",
        "Gauss_Jordan_PA",
        "Determinants2",
        "Inverse",
        "Bases_Of_Fundamental_Subspaces",
        "System_Of_Equations",
        "Code_Z2",
        "Examples_Gauss_Jordan_Abstract",
        "IArray_Addenda",
        "Matrix_To_IArray",
        "Gauss_Jordan_IArrays",
        "Gauss_Jordan_PA_IArrays",
        "Bases_Of_Fundamental_Subspaces_IArrays",
        "System_Of_Equations_IArrays",
        "Determinants_IArrays",
        "Inverse_IArrays",
        "Examples_Gauss_Jordan_IArrays",
        "Code_Generation_IArrays",
        "Code_Generation_IArrays_SML",
        "Code_Real_Approx_By_Float_Haskell",
        "Code_Rational",
        "Code_Generation_IArrays_Haskell"
    ],
    "relatedEntries": [
        "Echelon_Form",
        "QR_Decomposition"
    ]
}