{
    "title": "QR Decomposition",
    "authors": [
        "Jose Divasón",
        "Jesús Aransay"
    ],
    "topics": [
        "Computer science/Algorithms/Mathematical",
        "Mathematics/Algebra"
    ],
    "date": "2015-02-12",
    "abstract": "QR decomposition is an algorithm to decompose a real matrix A into the product of two other matrices Q and R, where Q is orthogonal and R is invertible and upper triangular. The algorithm is useful for the least squares problem; i.e., the computation of the best approximation of an unsolvable system of linear equations. As a side-product, the Gram-Schmidt process has also been formalized. A refinement using immutable arrays is presented as well. The development relies, among others, on the AFP entry \"Implementing field extensions of the form Q[sqrt(b)]\" by René Thiemann, which allows execution of the algorithm using symbolic computations. Verified code can be generated and executed using floats as well.",
    "extra": {
        "Change history": "[2015-06-18] The second part of the Fundamental Theorem of Linear Algebra has been generalized to more general inner product spaces."
    },
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
            "2014": "2015-02-13"
        }
    ],
    "dependencies": [
        "Gauss_Jordan",
        "Rank_Nullity_Theorem",
        "Real_Impl",
        "Sqrt_Babylonian"
    ],
    "theories": [
        "QR_Efficient",
        "Examples_QR_Abstract_Float",
        "Matrix_To_IArray_QR",
        "Gram_Schmidt_IArrays",
        "Generalizations2",
        "Examples_QR_IArrays_Float",
        "IArray_Addenda_QR",
        "Projections",
        "QR_Decomposition",
        "Least_Squares_Approximation",
        "Miscellaneous_QR",
        "Examples_QR_IArrays_Symbolic",
        "Gram_Schmidt",
        "Examples_QR_Abstract_Symbolic",
        "QR_Decomposition_IArrays"
    ],
    "relatedEntries": [
        "Echelon_Form",
        "Gauss_Jordan"
    ]
}