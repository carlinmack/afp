{
    "title": "Echelon Form",
    "authors": [
        "Jose Divasón",
        "Jesús Aransay"
    ],
    "topics": [
        "Computer science/Algorithms/Mathematical",
        "Mathematics/Algebra"
    ],
    "date": "2015-02-12",
    "abstract": "We formalize an algorithm to compute the Echelon Form of a matrix. We have proved its existence over Bézout domains and made it executable over Euclidean domains, such as the integer ring and the univariate polynomials over a field. This allows us to compute determinants, inverses and characteristic polynomials of matrices. The work is based on the HOL-Multivariate Analysis library, and on both the Gauss-Jordan and Cayley-Hamilton AFP entries. As a by-product, some algebraic structures have been implemented (principal ideal domains, Bézout domains...). The algorithm has been refined to immutable arrays and code can be generated to functional languages as well.",
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
            "2014": "2015-02-12"
        }
    ],
    "dependencies": [
        "Cayley_Hamilton",
        "Gauss_Jordan",
        "Rank_Nullity_Theorem"
    ],
    "theories": [
        "Rings2",
        "Cayley_Hamilton_Compatible",
        "Code_Cayley_Hamilton",
        "Echelon_Form",
        "Echelon_Form_Det",
        "Echelon_Form_Inverse",
        "Examples_Echelon_Form_Abstract",
        "Echelon_Form_IArrays",
        "Echelon_Form_Det_IArrays",
        "Code_Cayley_Hamilton_IArrays",
        "Echelon_Form_Inverse_IArrays",
        "Examples_Echelon_Form_IArrays"
    ],
    "relatedEntries": [
        "QR_Decomposition",
        "Gauss_Jordan",
        "Hermite"
    ]
}