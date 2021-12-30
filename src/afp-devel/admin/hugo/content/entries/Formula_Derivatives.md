{
    "title": "Derivatives of Logical Formulas",
    "authors": [
        "Dmitriy Traytel"
    ],
    "topics": [
        "Computer science/Automata and formal languages",
        "Logic/General logic/Decidability of theories"
    ],
    "date": "2015-05-28",
    "abstract": "\nWe formalize new decision procedures for WS1S, M2L(Str), and Presburger\nArithmetics. Formulas of these logics denote regular languages. Unlike\ntraditional decision procedures, we do <em>not</em> translate formulas into automata\n(nor into regular expressions), at least not explicitly. Instead we devise\nnotions of derivatives (inspired by Brzozowski derivatives for regular\nexpressions) that operate on formulas directly and compute a syntactic\nbisimulation using these derivatives. The treatment of Boolean connectives and\nquantifiers is uniform for all mentioned logics and is abstracted into a\nlocale. This locale is then instantiated by different atomic formulas and their\nderivatives (which may differ even for the same logic under different encodings\nof interpretations as formal words).\n<p>\nThe WS1S instance is described in the draft paper <a\nhref=\"https://people.inf.ethz.ch/trayteld/papers/csl15-ws1s_derivatives/index.html\">A\nCoalgebraic Decision Procedure for WS1S</a> by the author.",
    "notify": [
        "traytel@in.tum.de"
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
            "2015": "2015-05-28"
        }
    ],
    "dependencies": [
        "List-Index",
        "Coinductive_Languages",
        "Deriving"
    ],
    "theories": [
        "While_Default",
        "FSet_More",
        "Automaton",
        "Abstract_Formula",
        "WS1S_Prelim",
        "WS1S_Formula",
        "WS1S_Alt_Formula",
        "Presburger_Formula",
        "WS1S_Presburger_Equivalence",
        "WS1S_Nameful"
    ],
    "relatedEntries": [
        "MSO_Regex_Equivalence",
        "Affine_Arithmetic"
    ]
}