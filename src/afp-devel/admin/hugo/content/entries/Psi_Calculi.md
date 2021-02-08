{
    "title": "Psi-calculi in Isabelle",
    "authors": [
        "Jesper Bengtson"
    ],
    "date": "2012-05-29",
    "topics": [
        "Computer science/Concurrency/Process calculi"
    ],
    "abstract": "Psi-calculi are extensions of the pi-calculus, accommodating arbitrary nominal datatypes to represent not only data but also communication channels, assertions and conditions, giving it an expressive power beyond the applied pi-calculus and the concurrent constraint pi-calculus.\n<p>\nWe have formalised psi-calculi in the interactive theorem prover Isabelle using its nominal datatype package. One distinctive feature is that the framework needs to treat binding sequences, as opposed to single binders, in an efficient way. While different methods for formalising single binder calculi have been proposed over the last decades, representations for such binding sequences are not very well explored.\n<p>\nThe main effort in the formalisation is to keep the machine checked proofs as close to their pen-and-paper counterparts as possible. This includes treating all binding sequences as atomic elements, and creating custom induction and inversion rules that to remove the bulk of manual alpha-conversions.\n<p>\nThis entry is described in detail in <a href=\"http://www.itu.dk/people/jebe/files/thesis.pdf\">Bengtson's thesis</a>.",
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
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-06-14"
        }
    ],
    "theories": [
        "Bisimulation",
        "Tau_Laws_Weak",
        "Weak_Bisim_Subst",
        "Tau_Chain",
        "Weaken_Bisimulation",
        "Weak_Cong_Pres",
        "Tau",
        "Weak_Simulation",
        "Agent",
        "Weak_Congruence",
        "Weaken_Simulation",
        "Weak_Cong_Simulation",
        "Bisim_Subst",
        "Weaken_Stat_Imp",
        "Tau_Sim",
        "Weak_Cong_Sim_Pres",
        "Close_Subst",
        "Sim_Struct_Cong",
        "Chain",
        "Weak_Stat_Imp",
        "Weak_Bisim_Pres",
        "Weak_Bisimulation",
        "Simulation",
        "Tau_Laws_No_Weak",
        "Subst_Term",
        "Frame",
        "Structural_Congruence",
        "Sum",
        "Weak_Bisim_Struct_Cong",
        "Weak_Sim_Pres",
        "Sim_Pres",
        "Tau_Stat_Imp",
        "Weak_Psi_Congruence",
        "Weaken_Transition",
        "Weak_Cong_Struct_Cong",
        "Bisim_Struct_Cong",
        "Semantics",
        "Weak_Stat_Imp_Pres",
        "Weakening",
        "Bisim_Pres"
    ]
}