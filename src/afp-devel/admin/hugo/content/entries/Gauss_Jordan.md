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
        "Matrix_To_IArray",
        "Elementary_Operations",
        "Gauss_Jordan_PA",
        "Code_Generation_IArrays_SML",
        "Inverse",
        "Code_Set",
        "Code_Real_Approx_By_Float_Haskell",
        "Examples_Gauss_Jordan_IArrays",
        "Gauss_Jordan_PA_IArrays",
        "Determinants2",
        "System_Of_Equations_IArrays",
        "Code_Rational",
        "Inverse_IArrays",
        "Examples_Gauss_Jordan_Abstract",
        "Code_Matrix",
        "Code_Generation_IArrays_Haskell",
        "IArray_Addenda",
        "System_Of_Equations",
        "Gauss_Jordan",
        "Code_Generation_IArrays",
        "Bases_Of_Fundamental_Subspaces",
        "Rref",
        "Bases_Of_Fundamental_Subspaces_IArrays",
        "Rank",
        "Gauss_Jordan_IArrays",
        "Code_Z2",
        "Determinants_IArrays",
        "Linear_Maps"
    ],
    "relatedEntries": [
        "Echelon_Form",
        "QR_Decomposition"
    ]
}