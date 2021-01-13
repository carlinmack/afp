{
    "title": "Formalizing Statecharts using Hierarchical Automata",
    "authors": [
        "Steffen Helke",
        "Florian Kammüller"
    ],
    "topics": [
        "Computer science/Automata and formal languages"
    ],
    "date": "2010-08-08",
    "abstract": "We formalize in Isabelle/HOL the abtract syntax and a synchronous\nstep semantics for the specification language Statecharts. The formalization\nis based on Hierarchical Automata which allow a structural decomposition of\nStatecharts into Sequential Automata. To support the composition of\nStatecharts, we introduce calculating operators to construct a Hierarchical\nAutomaton in a stepwise manner. Furthermore, we present a complete semantics\nof Statecharts including a theory of data spaces, which enables the modelling\nof racing effects. We also adapt CTL for\nStatecharts to build a bridge for future combinations with model\nchecking. However the main motivation of this work is to provide a sound and\ncomplete basis for reasoning on Statecharts. As a central meta theorem we\nprove that the well-formedness of a Statechart is preserved by the semantics.",
    "notify": [
        "nipkow@in.tum.de"
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
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2011-10-11"
        },
        {
            "2011": "2011-02-11"
        },
        {
            "2009-2": "2010-08-18"
        }
    ],
    "theories": [
        "CarAudioSystem",
        "Contrib",
        "Data",
        "DataSpace",
        "Expr",
        "HA",
        "HAKripke",
        "HAOps",
        "HASem",
        "Kripke",
        "SA",
        "Update"
    ]
}