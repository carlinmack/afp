{
    "title": "Promela Formalization",
    "authors": [
        "René Neumann"
    ],
    "date": "2014-05-28",
    "topics": [
        "Computer science/System description languages"
    ],
    "abstract": "\nWe present an executable formalization of the language Promela, the\ndescription language for models of the model checker SPIN. This\nformalization is part of the work for a completely verified model\nchecker (CAVA), but also serves as a useful (and executable!)\ndescription of the semantics of the language itself, something that is\ncurrently missing.\nThe formalization uses three steps: It takes an abstract syntax tree\ngenerated from an SML parser, removes syntactic sugar and enriches it\nwith type information. This further gets translated into a transition\nsystem, on which the semantic engine (read: successor function) operates.",
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
            "2013-2": "2014-05-29"
        }
    ],
    "dependencies": [
        "CAVA_Automata",
        "LTL"
    ],
    "theories": [
        "PromelaStatistics",
        "PromelaAST",
        "PromelaLTLConv",
        "PromelaInvariants",
        "PromelaDatastructures",
        "All_Of_Promela",
        "PromelaLTL",
        "Promela"
    ],
    "relatedEntries": [
        "LTL_to_GBA"
    ]
}