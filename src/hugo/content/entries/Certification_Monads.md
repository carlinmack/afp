{
    "title": "Certification Monads",
    "authors": [
        "Christian Sternagel",
        "René Thiemann"
    ],
    "date": "2014-10-03",
    "topics": [
        "Computer science-Functional programming"
    ],
    "abstract": "This entry provides several monads intended for the development of stand-alone certifiers via code generation from Isabelle/HOL. More specifically, there are three flavors of error monads (the sum type, for the case where all monadic functions are total; an instance of the former, the so called check monad, yielding either success without any further information or an error message; as well as a variant of the sum type that accommodates partial functions by providing an explicit bottom element) and a parser monad built on top. All of this monads are heavily used in the IsaFoR/CeTA project which thus provides many examples of their usage.",
    "notify": "c.sternagel@gmail.com, rene.thiemann@uibk.ac.at",
    "licence": "BSD"
}