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
        "AExp",
        "BExp",
        "Com",
        "Big_Step",
        "Big_StepT",
        "Nielson_Hoare",
        "Nielson_VCG",
        "Vars",
        "Nielson_VCGi",
        "Nielson_VCGi_complete",
        "Nielson_Examples",
        "Nielson_Sqrt",
        "Quant_Hoare",
        "Quant_VCG",
        "Quant_Examples",
        "QuantK_Hoare",
        "QuantK_VCG",
        "QuantK_Examples",
        "QuantK_Sqrt",
        "Partial_Evaluation",
        "Product_Separation_Algebra",
        "Sep_Algebra_Add",
        "Big_StepT_Partial",
        "SepLog_Hoare",
        "SepLog_Examples",
        "SepLogK_Hoare",
        "SepLogK_VCG",
        "Discussion",
        "DiscussionO",
        "Hoare_Time"
    ],
    "relatedEntries": [
        "Separata"
    ]
}