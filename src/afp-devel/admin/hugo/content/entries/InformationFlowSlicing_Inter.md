{
    "title": "Inter-Procedural Information Flow Noninterference via Slicing",
    "authors": [
        "Daniel Wasserrab"
    ],
    "date": "2010-03-23",
    "topics": [
        "Computer science/Security"
    ],
    "abstract": "\n<p>\nIn this contribution, we show how correctness proofs for <a\nhref=\"Slicing.html\">intra-</a> and <a\nhref=\"HRB-Slicing.html\">interprocedural slicing</a> can be used to prove\nthat slicing is able to guarantee information flow noninterference.\nMoreover, we also illustrate how to lift the control flow graphs of the\nrespective frameworks such that they fulfil the additional assumptions\nneeded in the noninterference proofs. A detailed description of the\nintraprocedural proof and its interplay with the slicing framework can be\nfound in the PLAS'09 paper by Wasserrab et al.\n</p>\n<p>\nThis entry contains the part for inter-procedural slicing. See entry\n<a href=\"InformationFlowSlicing.html\">InformationFlowSlicing</a>\nfor the intra-procedural part.\n</p>",
    "extra": {
        "Change history": "[2016-06-10] The original entry <a\nhref=\"InformationFlowSlicing.html\">InformationFlowSlicing</a> contained both\nthe <a href=\"InformationFlowSlicing_Inter.html\">inter-</a> and <a\nhref=\"InformationFlowSlicing.html\">intra-procedural</a> case was split into\ntwo for easier maintenance."
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
        }
    ],
    "dependencies": [
        "HRB-Slicing"
    ],
    "theories": [
        "LiftingInter",
        "NonInterferenceInter"
    ],
    "relatedEntries": [
        "InformationFlowSlicing",
        "HRB-Slicing"
    ]
}