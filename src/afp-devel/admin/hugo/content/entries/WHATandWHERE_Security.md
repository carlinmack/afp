{
    "title": "A Formalization of Declassification with WHAT-and-WHERE-Security",
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
    "abstract": "Research in information-flow security aims at developing methods to\nidentify undesired information leaks within programs from private\nsources to public sinks. Noninterference captures this intuition by\nrequiring that no information whatsoever flows from private sources\nto public sinks. However, in practice this definition is often too\nstrict: Depending on the intuitive desired security policy, the\ncontrolled declassification of certain private information (WHAT) at\ncertain points in the program (WHERE) might not result in an\nundesired information leak.\n<p>\nWe present an Isabelle/HOL formalization of such a security property\nfor controlled declassification, namely WHAT&WHERE-security from\n\"Scheduler-Independent Declassification\" by Lux, Mantel, and Perner.\nThe formalization includes\ncompositionality proofs for and a soundness proof for a security\ntype system that checks for programs in a simple while language with\ndynamic thread creation.\n<p>\nOur formalization of the security type system is abstract in the\nlanguage for expressions and in the semantic side conditions for\nexpressions. It can easily be instantiated with different syntactic\napproximations for these side conditions. The soundness proof of\nsuch an instantiation boils down to showing that these syntactic\napproximations imply the semantic side conditions.\n<p>\nThis Isabelle/HOL formalization uses theories from the entry\nStrong Security.",
    "notify": [
        ""
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
    ],
    "dependencies": [
        "Strong_Security"
    ],
    "theories": [
        "Language_Composition",
        "MWLs",
        "Parallel_Composition",
        "Type_System",
        "Type_System_example",
        "Up_To_Technique",
        "WHATWHERE_Secure_Skip_Assign",
        "WHATWHERE_Security"
    ],
    "relatedEntries": [
        "Strong_Security",
        "SIFUM_Type_Systems"
    ]
}