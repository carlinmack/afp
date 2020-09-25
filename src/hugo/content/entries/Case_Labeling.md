{
    "title": "Generating Cases from Labeled Subgoals",
    "authors": [
        "Lars Noschinski"
    ],
    "date": "2015-07-21",
    "topics": [
        "Tools",
        "Computer science-Programming languages-Misc"
    ],
    "abstract": "\nIsabelle/Isar provides named cases to structure proofs. This article\ncontains an implementation of a proof method <tt>casify</tt>, which can\nbe used to easily extend proof tools with support for named cases. Such\na proof tool must produce labeled subgoals, which are then interpreted\nby <tt>casify</tt>.\n<p>\nAs examples, this work contains verification condition generators\nproducing named cases for three languages: The Hoare language from\n<tt>HOL/Library</tt>, a monadic language for computations with failure\n(inspired by the AutoCorres tool), and a language of conditional\nexpressions. These VCGs are demonstrated by a number of example programs.",
    "notify": "noschinl@gmail.com"
}