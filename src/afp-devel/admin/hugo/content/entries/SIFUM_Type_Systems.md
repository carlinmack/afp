{
    "title": "A Formalization of Assumptions and Guarantees for Compositional Noninterference",
    "authors": [
        "Sylvia Grewe",
        "Heiko Mantel",
        "Daniel Schoepe"
    ],
    "date": "2014-04-23",
    "topics": [
        "Computer science/Security",
        "Computer science/Programming languages/Type systems"
    ],
    "abstract": "Research in information-flow security aims at developing methods to\nidentify undesired information leaks within programs from private\n(high) sources to public (low) sinks. For a concurrent system, it is\ndesirable to have compositional analysis methods that allow for\nanalyzing each thread independently and that nevertheless guarantee\nthat the parallel composition of successfully analyzed threads\nsatisfies a global security guarantee. However, such a compositional\nanalysis should not be overly pessimistic about what an environment\nmight do with shared resources. Otherwise, the analysis will reject\nmany intuitively secure programs.\n<p>\nThe paper \"Assumptions and Guarantees for Compositional\nNoninterference\" by Mantel et. al. presents one solution for this problem:\nan approach for compositionally reasoning about non-interference in\nconcurrent programs via rely-guarantee-style reasoning.  We present an\nIsabelle/HOL formalization of the concepts and proofs of this approach.",
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
            "2013-2": "2014-04-25"
        },
        {
            "2013-2": "2014-04-24"
        }
    ],
    "theories": [
        "LocallySoundModeUse",
        "Security",
        "Language",
        "TypeSystem",
        "Compositionality",
        "Preliminaries"
    ],
    "relatedEntries": [
        "WHATandWHERE_Security",
        "Strong_Security"
    ]
}