{
    "title": "Transition Systems and Automata",
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
    "abstract": "\nThis entry provides a very abstract theory of transition systems that\ncan be instantiated to express various types of automata. A transition\nsystem is typically instantiated by providing a set of initial states,\na predicate for enabled transitions, and a transition execution\nfunction. From this, it defines the concepts of finite and infinite\npaths as well as the set of reachable states, among other things. Many\nuseful theorems, from basic path manipulation rules to coinduction and\nrun construction rules, are proven in this abstract transition system\ncontext. The library comes with instantiations for DFAs, NFAs, and\nBüchi automata.",
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
        "Collections",
        "DFS_Framework",
        "Gabow_SCC"
    ],
    "theories": [
        "Basic",
        "Sequence",
        "Sequence_LTL",
        "Sequence_Zip",
        "Maps",
        "Acceptance",
        "Degeneralization",
        "Transition_System",
        "Transition_System_Extra",
        "Transition_System_Construction",
        "Deterministic",
        "DFA",
        "Nondeterministic",
        "NFA",
        "DBA",
        "DGBA",
        "DBA_Combine",
        "DBTA",
        "DGBTA",
        "DBTA_Combine",
        "DCA",
        "DGCA",
        "DCA_Combine",
        "DRA",
        "DRA_Combine",
        "Refine",
        "Acceptance_Refine",
        "Transition_System_Refine",
        "DRA_Refine",
        "Implement",
        "DRA_Implement",
        "DRA_Nodes",
        "DRA_Explicit",
        "DRA_Translate",
        "NBA",
        "NGBA",
        "NBA_Combine",
        "NBA_Graphs",
        "NBA_Refine",
        "NBA_Implement",
        "NBA_Algorithms",
        "NBA_Explicit",
        "NBA_Translate",
        "NGBA_Graphs",
        "NGBA_Refine",
        "NGBA_Implement",
        "Degeneralization_Refine",
        "NGBA_Algorithms",
        "NBTA",
        "NGBTA",
        "NBTA_Combine"
    ]
}