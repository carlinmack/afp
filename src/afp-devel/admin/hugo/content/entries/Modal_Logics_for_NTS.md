{
    "title": "Modal Logics for Nominal Transition Systems",
    "authors": [
        "Tjark Weber",
        "Lars-Henrik Eriksson",
        "Joachim Parrow",
        "Johannes Borgström",
        "Ramunas Gutkovas"
    ],
    "notify": [
        "tjark.weber@it.uu.se"
    ],
    "date": "2016-10-25",
    "topics": [
        "Computer science/Concurrency/Process calculi",
        "Logic/General logic/Modal logic"
    ],
    "abstract": "\nWe formalize a uniform semantic substrate for a wide variety of\nprocess calculi where states and action labels can be from arbitrary\nnominal sets. A Hennessy-Milner logic for these systems is defined,\nand proved adequate for bisimulation equivalence. A main novelty is\nthe construction of an infinitary nominal data type to model formulas\nwith (finitely supported) infinite conjunctions and actions that may\ncontain binding names. The logic is generalized to treat different\nbisimulation variants such as early, late and open in a systematic\nway.",
    "extra": {
        "Change history": "[2017-01-29]\nFormalization of weak bisimilarity added\n(revision c87cc2057d9c)"
    },
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
            "2016": "2016-10-27"
        },
        {
            "2016": "2016-10-25"
        }
    ],
    "dependencies": [
        "Nominal2"
    ],
    "theories": [
        "Nominal_Bounded_Set",
        "Nominal_Wellfounded",
        "Residual",
        "Transition_System",
        "Formula",
        "Validity",
        "Logical_Equivalence",
        "Bisimilarity_Implies_Equivalence",
        "Equivalence_Implies_Bisimilarity",
        "Disjunction",
        "Expressive_Completeness",
        "FS_Set",
        "FL_Transition_System",
        "FL_Formula",
        "FL_Validity",
        "FL_Logical_Equivalence",
        "FL_Bisimilarity_Implies_Equivalence",
        "FL_Equivalence_Implies_Bisimilarity",
        "L_Transform",
        "Weak_Transition_System",
        "Weak_Formula",
        "Weak_Validity",
        "Weak_Logical_Equivalence",
        "Weak_Bisimilarity_Implies_Equivalence",
        "Weak_Equivalence_Implies_Bisimilarity",
        "Weak_Expressive_Completeness",
        "S_Transform"
    ]
}