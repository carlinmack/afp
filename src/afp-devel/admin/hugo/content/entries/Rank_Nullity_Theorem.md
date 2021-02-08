{
    "title": "Rank-Nullity Theorem in Linear Algebra",
    "authors": [
        "Jose Divasón",
        "Jesús Aransay"
    ],
    "topics": [
        "Mathematics/Algebra"
    ],
    "date": "2013-01-16",
    "abstract": "In this contribution, we present some formalizations based on the HOL-Multivariate-Analysis session of Isabelle. Firstly, a generalization of several theorems of such library are presented. Secondly, some definitions and proofs involving Linear Algebra and the four fundamental subspaces of a matrix are shown. Finally, we present a proof of the result known in Linear Algebra as the ``Rank-Nullity Theorem'', which states that, given any linear map f from a finite dimensional vector space V to a vector space W, then the dimension of V is equal to the dimension of the kernel of f (which is a subspace of V) and the dimension of the range of f (which is a subspace of W). The proof presented here is based on the one given by Sheldon Axler in his book <i>Linear Algebra Done Right</i>. As a corollary of the previous theorem, and taking advantage of the relationship between linear maps and matrices, we prove that, for every matrix A (which has associated a linear map between finite dimensional vector spaces), the sum of its null space and its column space (which is equal to the range of the linear map) is equal to the number of columns of A.",
    "extra": {
        "Change history": "[2014-07-14] Added some generalizations that allow us to formalize the Rank-Nullity Theorem over finite dimensional vector spaces, instead of over the more particular euclidean spaces. Updated abstract."
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
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2013-01-16"
        }
    ],
    "theories": [
        "Dim_Formula",
        "Fundamental_Subspaces",
        "Miscellaneous",
        "Mod_Type",
        "Dual_Order"
    ]
}