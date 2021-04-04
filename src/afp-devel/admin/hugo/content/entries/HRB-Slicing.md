{
    "title": "Backing up Slicing: Verifying the Interprocedural Two-Phase Horwitz-Reps-Binkley Slicer",
    "authors": [
        "Daniel Wasserrab"
    ],
    "date": "2009-11-13",
    "topics": [
        "Computer science/Programming languages/Static analysis"
    ],
    "abstract": "After verifying <a href=\"Slicing.html\">dynamic and static interprocedural slicing</a>, we present a modular framework for static interprocedural slicing. To this end, we formalized the standard two-phase slicer from Horwitz, Reps and Binkley (see their TOPLAS 12(1) 1990 paper) together with summary edges as presented by Reps et al. (see FSE 1994). The framework is again modular in the programming language by using an abstract CFG, defined via structural and well-formedness properties. Using a weak simulation between the original and sliced graph, we were able to prove the correctness of static interprocedural slicing. We also instantiate our framework with a simple While language with procedures. This shows that the chosen abstractions are indeed valid.",
    "notify": [
        "nipkow@in.tum.de"
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
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2011-10-11"
        },
        {
            "2011": "2011-02-11"
        },
        {
            "2009-2": "2010-07-01"
        },
        {
            "2009-1": "2009-12-12"
        },
        {
            "2009": "2009-11-19"
        }
    ],
    "dependencies": [
        "Jinja"
    ],
    "theories": [
        "AuxLemmas",
        "BasicDefs",
        "CFG",
        "CFGExit",
        "CFG_wf",
        "CFGExit_wf",
        "SemanticsCFG",
        "ReturnAndCallNodes",
        "Observable",
        "Postdomination",
        "SDG",
        "HRBSlice",
        "SCDObservable",
        "Distance",
        "Slice",
        "WeakSimulation",
        "FundamentalProperty",
        "Com",
        "ProcState",
        "PCFG",
        "WellFormProgs",
        "Interpretation",
        "Labels",
        "WellFormed",
        "ValidPaths",
        "ProcSDG",
        "JVMCFG",
        "JVMInterpretation",
        "JVMCFG_wf",
        "JVMPostdomination",
        "JVMSDG",
        "HRBSlicing"
    ],
    "relatedEntries": [
        "Slicing",
        "InformationFlowSlicing",
        "InformationFlowSlicing_Inter"
    ]
}