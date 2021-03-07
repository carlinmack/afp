{
    "title": "Randomised Social Choice Theory",
    "authors": [
        "Manuel Eberl"
    ],
    "date": "2016-05-05",
    "topics": [
        "Mathematics/Games and economics"
    ],
    "abstract": "\nThis work contains a formalisation of basic Randomised Social Choice,\nincluding Stochastic Dominance and Social Decision Schemes (SDSs)\nalong with some of their most important properties (Anonymity,\nNeutrality, ex-post- and SD-Efficiency, SD-Strategy-Proofness) and two\nparticular SDSs – Random Dictatorship and Random Serial Dictatorship\n(with proofs of the properties that they satisfy). Many important\nproperties of these concepts are also proven – such as the two\nequivalent characterisations of Stochastic Dominance and the fact that\nSD-efficiency of a lottery only depends on the support.  The entry\nalso provides convenient commands to define Preference Profiles, prove\ntheir well-formedness, and automatically derive restrictions that\nsufficiently nice SDSs need to satisfy on the defined profiles.\nCurrently, the formalisation focuses on weak preferences and\nStochastic Dominance, but it should be easy to extend it to other\ndomains – such as strict preferences – or other lottery extensions –\nsuch as Bilinear Dominance or Pairwise Comparison.",
    "notify": [
        "eberlm@in.tum.de"
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
            "2016": "2016-05-05"
        }
    ],
    "dependencies": [
        "List-Index"
    ],
    "theories": [
        "Order_Predicates",
        "Preference_Profiles",
        "Elections",
        "Lotteries",
        "Utility_Functions",
        "Stochastic_Dominance",
        "SD_Efficiency",
        "Social_Decision_Schemes",
        "SDS_Lowering",
        "Random_Dictatorship",
        "Random_Serial_Dictatorship",
        "Randomised_Social_Choice",
        "Preference_Profile_Cmd",
        "files/preference_profiles.ML",
        "QSOpt_Exact",
        "SDS_Automation",
        "files/randomised_social_choice.ML",
        "files/sds_automation.ML"
    ]
}