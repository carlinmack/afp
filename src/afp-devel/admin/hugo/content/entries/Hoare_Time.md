{
    "title": "Hoare Logics for Time Bounds",
    "authors": [
        "Maximilian P. L. Haslbeck",
        "Tobias Nipkow"
    ],
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "date": "2018-02-26",
    "notify": [
        "haslbema@in.tum.de"
    ],
    "abstract": "\nWe study three different Hoare logics for reasoning about time bounds\nof imperative programs and formalize them in Isabelle/HOL: a classical\nHoare like logic due to Nielson, a logic with potentials due to\nCarbonneaux <i>et al.</i> and a <i>separation\nlogic</i> following work by Atkey, Chaguérand and Pottier.\nThese logics are formally shown to be sound and complete. Verification\ncondition generators are developed and are shown sound and complete\ntoo.  We also consider variants of the systems where we abstract from\nmultiplicative constants in the running time bounds, thus supporting a\nbig-O style of reasoning.  Finally we compare the expressive power of\nthe three systems.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-02-26"
        }
    ],
    "dependencies": [
        "Separation_Algebra"
    ],
    "theories": [
        "Partial_Evaluation",
        "SepLogK_VCG",
        "Vars",
        "SepLog_Examples",
        "Quant_VCG",
        "QuantK_Sqrt",
        "SepLogK_Hoare",
        "QuantK_Examples",
        "Quant_Examples",
        "Nielson_VCGi",
        "Big_StepT",
        "Com",
        "QuantK_VCG",
        "Nielson_Hoare",
        "Discussion",
        "AExp",
        "Quant_Hoare",
        "BExp",
        "Big_StepT_Partial",
        "Nielson_Examples",
        "Nielson_Sqrt",
        "Hoare_Time",
        "Big_Step",
        "QuantK_Hoare",
        "DiscussionO",
        "SepLog_Hoare",
        "Nielson_VCGi_complete",
        "Nielson_VCG"
    ],
    "relatedEntries": [
        "Separata"
    ]
}