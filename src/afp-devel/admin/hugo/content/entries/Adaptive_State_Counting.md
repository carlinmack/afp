{
    "title": "Formalisation of an Adaptive State Counting Algorithm",
    "authors": [
        "Robert Sachtleben"
    ],
    "topics": [
        "Computer science/Automata and formal languages",
        "Computer science/Algorithms"
    ],
    "date": "2019-08-16",
    "notify": [
        "rob_sac@uni-bremen.de"
    ],
    "abstract": "\nThis entry provides a formalisation of a refinement of an adaptive\nstate counting algorithm, used to test for reduction between finite\nstate machines. The algorithm has been originally presented by Hierons\nin the paper <a\nhref=\"https://doi.org/10.1109/TC.2004.85\">Testing from a\nNon-Deterministic Finite State Machine Using Adaptive State\nCounting</a>.  Definitions for finite state machines and\nadaptive test cases are given and many useful theorems are derived\nfrom these. The algorithm is formalised using mutually recursive\nfunctions, for which it is proven that the generated test suite is\nsufficient to test for reduction against finite state machines of a\ncertain fault domain. Additionally, the algorithm is specified in a\nsimple WHILE-language and its correctness is shown using Hoare-logic.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
        {
            "2019": "2019-08-19"
        }
    ],
    "dependencies": [
        "Transition_Systems_and_Automata"
    ],
    "theories": [
        "FSM",
        "FSM_Product",
        "ATC",
        "ASC_LB",
        "ASC_Suite",
        "ASC_Sufficiency",
        "ASC_Hoare",
        "ASC_Example"
    ]
}