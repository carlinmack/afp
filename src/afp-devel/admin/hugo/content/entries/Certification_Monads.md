{
    "title": "Certification Monads",
    "authors": [
        "Christian Sternagel",
        "René Thiemann"
    ],
    "date": "2014-10-03",
    "topics": [
        "Computer science/Functional programming"
    ],
    "abstract": "This entry provides several monads intended for the development of stand-alone certifiers via code generation from Isabelle/HOL. More specifically, there are three flavors of error monads (the sum type, for the case where all monadic functions are total; an instance of the former, the so called check monad, yielding either success without any further information or an error message; as well as a variant of the sum type that accommodates partial functions by providing an explicit bottom element) and a parser monad built on top. All of this monads are heavily used in the IsaFoR/CeTA project which thus provides many examples of their usage.",
    "notify": [
        "c.sternagel@gmail.com",
        "rene.thiemann@uibk.ac.at"
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
            "2014": "2014-10-08"
        }
    ],
    "dependencies": [
        "Partial_Function_MR",
        "Show"
    ],
    "theories": [
        "Check_Monad",
        "Error_Monad",
        "Error_Syntax",
        "Misc",
        "Parser_Monad",
        "Strict_Sum"
    ],
    "relatedEntries": [
        "XML",
        "Polynomial_Factorization"
    ]
}