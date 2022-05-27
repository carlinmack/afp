{
    "title": "Stuttering Equivalence",
    "authors": [
        "Stephan Merz"
    ],
    "topics": [
        "Computer science/Automata and formal languages"
    ],
    "date": "2012-05-07",
    "abstract": "<p>Two omega-sequences are stuttering equivalent if they differ only by finite repetitions of elements. Stuttering equivalence is a fundamental concept in the theory of concurrent and distributed systems. Notably, Lamport argues that refinement notions for such systems should be insensitive to finite stuttering. Peled and Wilke showed that all PLTL (propositional linear-time temporal logic) properties that are insensitive to stuttering equivalence can be expressed without the next-time operator. Stuttering equivalence is also important for certain verification techniques such as partial-order reduction for model checking.</p> <p>We formalize stuttering equivalence in Isabelle/HOL. Our development relies on the notion of stuttering sampling functions that may skip blocks of identical sequence elements. We also encode PLTL and prove the theorem due to Peled and Wilke.</p>",
    "extra": {
        "Change history": "[2013-01-31] Added encoding of PLTL and proved Peled and Wilke's theorem. Adjusted abstract accordingly."
    },
    "notify": [
        "Stephan.Merz@loria.fr"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
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
            "2012": "2013-02-02"
        },
        {
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2012-05-08"
        }
    ],
    "dependencies": [
        "LTL"
    ],
    "theories": [
        "Samplers",
        "StutterEquivalence",
        "PLTL"
    ],
    "relatedEntries": [
        "LTL_Master_Theorem",
        "LTL_to_DRA",
        "LTL_Normal_Form"
    ]
}