{
    "title": "Program Construction and Verification Components Based on Kleene Algebra",
    "authors": [
        "Victor B. F. Gomes",
        "Georg Struth"
    ],
    "notify": [
        "victor.gomes@cl.cam.ac.uk",
        "g.struth@sheffield.ac.uk"
    ],
    "date": "2016-06-18",
    "topics": [
        "Mathematics/Algebra"
    ],
    "abstract": "\nVariants of Kleene algebra support program construction and\nverification by algebraic reasoning. This entry provides a\nverification component for Hoare logic based on Kleene algebra with\ntests, verification components for weakest preconditions and strongest\npostconditions based on Kleene algebra with domain and a component for\nstep-wise refinement based on refinement Kleene algebra with tests. In\naddition to these components for the partial correctness of while\nprograms, a verification component for total correctness based on\ndivergence Kleene algebras and one for (partial correctness) of\nrecursive programs based on domain quantales are provided. Finally we\nhave integrated memory models for programs with pointers and a program\ntrace semantics into the weakest precondition component.",
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
            "2016": "2016-06-18"
        }
    ],
    "dependencies": [
        "KAT_and_DRA",
        "KAD"
    ],
    "theories": [
        "VC_KAT_scratch",
        "VC_KAD_scratch",
        "P2S2R",
        "VC_KAT",
        "VC_KAT_Examples",
        "VC_KAT_Examples2",
        "RKAT",
        "RKAT_Models",
        "VC_RKAT",
        "VC_RKAT_Examples",
        "VC_KAD",
        "VC_KAD_Examples",
        "VC_KAD_Examples2",
        "VC_KAD_dual",
        "VC_KAD_dual_Examples",
        "VC_KAD_wf",
        "VC_KAD_wf_Examples",
        "Path_Model_Example",
        "Pointer_Examples",
        "KAD_is_KAT",
        "Domain_Quantale"
    ],
    "relatedEntries": [
        "Hybrid_Systems_VCs",
        "KAT_and_DRA"
    ]
}