{
    "title": "Upper Bounding Diameters of State Spaces of Factored Transition Systems",
    "authors": [
        "Friedrich Kurz",
        "Mohammad Abdulaziz"
    ],
    "topics": [
        "Computer science/Automata and formal languages",
        "Mathematics/Graph theory"
    ],
    "date": "2018-10-12",
    "notify": [
        "friedrich.kurz@tum.de",
        "mohammad.abdulaziz@in.tum.de"
    ],
    "abstract": "\nA completeness threshold is required to guarantee the completeness of\nplanning as satisfiability, and bounded model checking of safety\nproperties. One valid completeness threshold is the diameter of the\nunderlying transition system. The diameter is the maximum element in\nthe set of lengths of all shortest paths between pairs of states. The\ndiameter is not calculated exactly in our setting, where the\ntransition system is succinctly described using a (propositionally)\nfactored representation. Rather, an upper bound on the diameter is\ncalculated compositionally, by bounding the diameters of small\nabstract subsystems, and then composing those.  We port a HOL4\nformalisation of a compositional algorithm for computing a relatively\ntight upper bound on the system diameter. This compositional algorithm\nexploits acyclicity in the state space to achieve compositionality,\nand it was introduced by Abdulaziz et. al. The formalisation that we\nport is described as a part of another paper by Abdulaziz et. al. As a\npart of this porting we developed a libray about transition systems,\nwhich shall be of use in future related mechanisation efforts.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-10-16"
        }
    ],
    "theories": [
        "FactoredSystemLib",
        "ListUtils",
        "FSSublist",
        "HoArithUtils",
        "FmapUtils",
        "FactoredSystem",
        "ActionSeqProcess",
        "RelUtils",
        "Dependency",
        "Invariants",
        "SetUtils",
        "TopologicalProps",
        "SystemAbstraction",
        "Acyclicity",
        "AcycSspace"
    ]
}