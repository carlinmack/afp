{
    "title": "The pi-calculus in nominal logic",
    "authors": [
        "Jesper Bengtson"
    ],
    "date": "2012-05-29",
    "topics": [
        "Computer science/Concurrency/Process calculi"
    ],
    "abstract": "We formalise the pi-calculus using the nominal datatype package, based on ideas from the nominal logic by Pitts et al., and demonstrate an implementation in Isabelle/HOL. The purpose is to derive powerful induction rules for the semantics in order to conduct machine checkable proofs, closely following the intuitive arguments found in manual proofs. In this way we have covered many of the standard theorems of bisimulation equivalence and congruence, both late and early, and both strong and weak in a uniform manner. We thus provide one of the most extensive formalisations of a the pi-calculus ever done inside a theorem prover.\n<p>\nA significant gain in our formulation is that agents are identified up to alpha-equivalence, thereby greatly reducing the arguments about bound names. This is a normal strategy for manual proofs about the pi-calculus, but that kind of hand waving has previously been difficult to incorporate smoothly in an interactive theorem prover. We show how the nominal logic formalism and its support in Isabelle accomplishes this and thus significantly reduces the tedium of conducting completely formal proofs. This improves on previous work using weak higher order abstract syntax since we do not need extra assumptions to filter out exotic terms and can keep all arguments within a familiar first-order logic.\n<p>\nThis entry is described in detail in <a href=\"http://www.itu.dk/people/jebe/files/thesis.pdf\">Bengtson's thesis</a>.",
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
        "Agent",
        "Late_Semantics",
        "Late_Semantics1",
        "Rel",
        "Strong_Late_Sim",
        "Strong_Late_Bisim",
        "Strong_Late_Bisim_Subst",
        "Strong_Late_Sim_Pres",
        "Strong_Late_Bisim_Pres",
        "Strong_Late_Bisim_Subst_Pres",
        "Late_Tau_Chain",
        "Weak_Late_Step_Semantics",
        "Weak_Late_Semantics",
        "Weak_Late_Sim",
        "Weak_Late_Bisim",
        "Weak_Late_Step_Sim",
        "Weak_Late_Cong",
        "Weak_Late_Bisim_Subst",
        "Weak_Late_Cong_Subst",
        "Strong_Late_Sim_SC",
        "Strong_Late_Bisim_SC",
        "Strong_Late_Bisim_Subst_SC",
        "Weak_Late_Cong_Subst_SC",
        "Weak_Late_Step_Sim_Pres",
        "Weak_Late_Bisim_SC",
        "Weak_Late_Sim_Pres",
        "Weak_Late_Bisim_Pres",
        "Weak_Late_Cong_Pres",
        "Early_Semantics",
        "Strong_Early_Sim",
        "Strong_Early_Bisim",
        "Strong_Early_Bisim_Subst",
        "Strong_Early_Sim_Pres",
        "Strong_Early_Bisim_Pres",
        "Strong_Early_Bisim_Subst_Pres",
        "Early_Tau_Chain",
        "Weak_Early_Step_Semantics",
        "Weak_Early_Semantics",
        "Weak_Early_Sim",
        "Weak_Early_Bisim",
        "Weak_Early_Step_Sim",
        "Weak_Early_Cong",
        "Weak_Early_Bisim_Subst",
        "Weak_Early_Cong_Subst",
        "Weak_Early_Step_Sim_Pres",
        "Weak_Early_Sim_Pres",
        "Strong_Early_Late_Comp",
        "Strong_Early_Bisim_SC",
        "Weak_Early_Bisim_SC",
        "Weak_Early_Bisim_Pres",
        "Weak_Early_Cong_Pres",
        "Weak_Early_Cong_Subst_Pres",
        "Strong_Late_Expansion_Law",
        "Strong_Late_Axiomatisation"
    ],
    "relatedEntries": [
        "CCS"
    ]
}