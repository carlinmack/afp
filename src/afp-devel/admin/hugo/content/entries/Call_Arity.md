{
    "title": "The Safety of Call Arity",
    "authors": [
        "Joachim Breitner"
    ],
    "date": "2015-02-20",
    "topics": [
        "Computer science/Programming languages/Transformations"
    ],
    "abstract": "\nWe formalize the Call Arity analysis, as implemented in GHC, and prove\nboth functional correctness and, more interestingly, safety (i.e. the\ntransformation does not increase allocation).\n<p>\nWe use syntax and the denotational semantics from the entry\n\"Launchbury\", where we formalized Launchbury's natural semantics for\nlazy evaluation.\n<p>\nThe functional correctness of Call Arity is proved with regard to that\ndenotational semantics. The operational properties are shown with\nregard to a small-step semantics akin to Sestoft's mark 1 machine,\nwhich we prove to be equivalent to Launchbury's semantics.\n<p>\nWe use Christian Urban's Nominal2 package to define our terms and make\nuse of Brian Huffman's HOLCF package for the domain-theoretical\naspects of the development.",
    "extra": {
        "Change history": "[2015-03-16] This entry now builds on top of the Launchbury entry,\nand the equivalency proof of the natural and the small-step semantics\nwas added."
    },
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
            "2014": "2015-05-11"
        },
        {
            "2014": "2015-02-21"
        },
        {
            "2014": "2015-02-20"
        }
    ],
    "dependencies": [
        "Launchbury"
    ],
    "theories": [
        "TTreeImplCardinality",
        "ArityAnalysisSpec",
        "CardinalityAnalysisSig",
        "EtaExpansionSafe",
        "CoCallImplTTree",
        "CoCallImplSafe",
        "CallArityEnd2EndSafe",
        "TTree-HOLCF",
        "EtaExpansion",
        "TransformTools",
        "ArityEtaExpansionSafe",
        "AList-Utils-HOLCF",
        "TTreeImplCardinalitySafe",
        "AnalBinds",
        "CallArityEnd2End",
        "ArityConsistent",
        "Arity-Nominal",
        "CoCallImplTTreeSafe",
        "List-Interleavings",
        "ArityAnalysisFixProps",
        "ArityEtaExpansion",
        "TTree",
        "Cardinality-Domain-Lists",
        "AEnv",
        "CoCallAnalysisSpec",
        "SestoftCorrect",
        "Set-Cpo",
        "ArityAnalysisStack",
        "CoCallAnalysisBinds",
        "ArityTransform",
        "CoCallAnalysisImpl",
        "ArityTransformSafe",
        "Cardinality-Domain",
        "ArityAnalysisFix",
        "SestoftGC",
        "CoCallGraph-TTree",
        "AbstractTransform",
        "ArityAnalysisSig",
        "CardArityTransformSafe",
        "SestoftConf",
        "TTreeAnalysisSpec",
        "ArityAnalysisCorrDenotational",
        "CoCallAritySig",
        "TrivialArityAnal",
        "Env-Set-Cpo",
        "TTreeAnalysisSig",
        "ArityStack",
        "NoCardinalityAnalysis",
        "CoCallGraph-Nominal",
        "BalancedTraces",
        "ArityAnalysisAbinds",
        "ConstOn",
        "Arity",
        "CoCallAnalysisSig",
        "CoCallGraph",
        "CardinalityAnalysisSpec",
        "Sestoft",
        "CoCallFix"
    ]
}