{
    "title": "Büchi Complementation",
    "authors": [
        "Julian Brunner"
    ],
    "topics": [
        "Computer science/Automata and formal languages"
    ],
    "date": "2017-10-19",
    "notify": [
        "brunnerj@in.tum.de"
    ],
    "abstract": "\nThis entry provides a verified implementation of rank-based Büchi\nComplementation. The verification is done in three steps: <ol>\n<li>Definition of odd rankings and proof that an automaton\nrejects a word iff there exists an odd ranking for it.</li>\n<li>Definition of the complement automaton and proof that it\naccepts exactly those words for which there is an odd\nranking.</li> <li>Verified implementation of the\ncomplement automaton using the Isabelle Collections\nFramework.</li> </ol>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-27"
        }
    ],
    "dependencies": [
        "Transition_Systems_and_Automata"
    ],
    "theories": [
        "Alternate",
        "Graph",
        "Ranking",
        "Complementation",
        "Complementation_Implement",
        "Formula",
        "Complementation_Final",
        "Complementation_Build",
        "files/code/Autool.mlb",
        "files/code/Prelude.sml",
        "files/code/Autool.sml"
    ]
}