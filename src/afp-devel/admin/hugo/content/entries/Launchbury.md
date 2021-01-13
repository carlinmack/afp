{
    "title": "The Correctness of Launchbury's Natural Semantics for Lazy Evaluation",
    "authors": [
        "Joachim Breitner"
    ],
    "date": "2013-01-31",
    "topics": [
        "Computer science/Programming languages/Lambda calculi",
        "Computer science/Semantics"
    ],
    "abstract": "In his seminal paper \"Natural Semantics for Lazy Evaluation\", John Launchbury proves his semantics correct with respect to a denotational semantics, and outlines an adequacy proof. We have formalized both semantics and machine-checked the correctness proof, clarifying some details. Furthermore, we provide a new and more direct adequacy proof that does not require intermediate operational semantics.",
    "extra": {
        "Change history": "[2014-05-24] Added the proof of adequacy, as well as simplified and improved the existing proofs. Adjusted abstract accordingly.\n[2015-03-16] Booleans and if-then-else added to syntax and semantics, making this entry suitable to be used by the entry \"Call_Arity\"."
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
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2014-05-25"
        },
        {
            "2013-2": "2014-05-24"
        },
        {
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-02-25"
        },
        {
            "2013": "2013-02-24"
        }
    ],
    "dependencies": [
        "FinFun",
        "Nominal2"
    ],
    "theories": [
        "Abstract-Denotational-Props",
        "AbstractDenotational",
        "Adequacy",
        "AList-Utils-Nominal",
        "AList-Utils",
        "C-Meet",
        "C-restr",
        "C",
        "CorrectnessOriginal",
        "CorrectnessResourced",
        "CValue-Nominal",
        "CValue",
        "Denotational-Related",
        "Denotational",
        "Env-HOLCF",
        "Env-Nominal",
        "Env",
        "EvalHeap",
        "EverythingAdequacy",
        "HasESem",
        "HeapSemantics",
        "HOLCF-Join-Classes",
        "HOLCF-Join",
        "HOLCF-Meet",
        "HOLCF-Utils",
        "Iterative",
        "Launchbury",
        "Mono-Nat-Fun",
        "Nominal-HOLCF",
        "Nominal-Utils",
        "Pointwise",
        "ResourcedAdequacy",
        "ResourcedDenotational",
        "Substitution",
        "Terms",
        "Value-Nominal",
        "Value",
        "ValueSimilarity",
        "Vars"
    ]
}