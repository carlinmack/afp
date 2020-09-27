{
    "title": "Implementing field extensions of the form Q[sqrt(b)]",
    "authors": [
        "René Thiemann"
    ],
    "date": "2014-02-06",
    "license": "LGPL",
    "topics": [
        "Mathematics/Analysis"
    ],
    "abstract": "\nWe apply data refinement to implement the real numbers, where we support all\nnumbers in the field extension Q[sqrt(b)], i.e., all numbers of the form p +\nq * sqrt(b) for rational numbers p and q and some fixed natural number b. To\nthis end, we also developed algorithms to precisely compute roots of a\nrational number, and to perform a factorization of natural numbers which\neliminates duplicate prime factors.\n<p>\nOur results have been used to certify termination proofs which involve\npolynomial interpretations over the reals.",
    "extra": {
        "Change history": "[2014-07-11] Moved NthRoot_Impl to Sqrt-Babylonian."
    },
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "olderReleases": {
        "2013-2": "2014-02-11",
        "2014": "2014-08-28",
        "2015": "2015-05-27",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    },
    "dependencies": [
        "Sqrt_Babylonian",
        "Show",
        "Deriving"
    ]
}