{
    "title": "A Formalization of Strong Security",
    "authors": [
        "Sylvia Grewe",
        "Alexander Lux",
        "Heiko Mantel",
        "Jens Sauer"
    ],
    "date": "2014-04-23",
    "topics": [
        "Computer science/Security",
        "Computer science/Programming languages/Type systems"
    ],
    "abstract": "Research in information-flow security aims at developing methods to\nidentify undesired information leaks within programs from private\nsources to public sinks. Noninterference captures this\nintuition. Strong security from Sabelfeld and Sands\nformalizes noninterference for concurrent systems.\n<p>\nWe present an Isabelle/HOL formalization of strong security for\narbitrary security lattices (Sabelfeld and Sands use\na two-element security lattice in the original publication).\nThe formalization includes\ncompositionality proofs for strong security and a soundness proof\nfor a security type system that checks strong security for programs\nin a simple while language with dynamic thread creation.\n<p>\nOur formalization of the security type system is abstract in the\nlanguage for expressions and in the semantic side conditions for\nexpressions. It can easily be instantiated with different syntactic\napproximations for these side conditions. The soundness proof of\nsuch an instantiation boils down to showing that these syntactic\napproximations imply the semantic side conditions.",
    "notify": [
        "grewe@cs.tu-darmstadt.de"
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
            "2013-2": "2014-04-24"
        }
    ]
}