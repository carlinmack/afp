{
    "title": "Bounded-Deducibility Security",
    "authors": [
        "Andrei Popescu",
        "Peter Lammich",
        "Thomas Bauereiss"
    ],
    "date": "2014-04-22",
    "topics": [
        "Computer science/Security"
    ],
    "abstract": "This is a formalization of bounded-deducibility security (BD\nsecurity), a flexible notion of information-flow security applicable\nto arbitrary transition systems. It generalizes Sutherland's\nclassic notion of nondeducibility by factoring in declassification\nbounds and trigger, whereas nondeducibility states that, in a\nsystem, information cannot flow between specified sources and sinks,\nBD security indicates upper bounds for the flow and triggers under\nwhich these upper bounds are no longer guaranteed.",
    "notify": [
        "uuomul@yahoo.com",
        "lammich@in.tum.de",
        "thomas@bauereiss.name"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
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
            "2013-2": "2014-04-24"
        }
    ],
    "theories": [
        "Trivia",
        "IO_Automaton",
        "BD_Security",
        "Compositional_Reasoning",
        "Bounded_Deducibility_Security"
    ],
    "extra": {
        "Change history": "[2021-08-12]\nGeneralised BD Security from I/O automata to nondeterministic\ntransition systems, with the former retained as an instance of the\nlatter (renaming locale BD_Security to BD_Security_IO).\nGeneralise unwinding conditions to allow making more than one\ntransition at a time when constructing alternative traces.\nAdd results about the expressivity of declassification triggers vs.\nbounds, due to Thomas Bauereiss (added as author)."
    },
    "relatedEntries": [
        "BD_Security_Compositional"
    ]
}