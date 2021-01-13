{
    "title": "Featherweight OCL: A Proposal for a Machine-Checked Formal Semantics for OCL 2.5",
    "authors": [
        "Achim D. Brucker",
        "Frédéric Tuong",
        "Burkhart Wolff"
    ],
    "date": "2014-01-16",
    "topics": [
        "Computer science/System description languages"
    ],
    "abstract": "The Unified Modeling Language (UML) is one of the few\nmodeling languages that is widely used in industry. While\nUML is mostly known as diagrammatic modeling language\n(e.g., visualizing class models), it is complemented by a\ntextual language, called Object Constraint Language\n(OCL). The current version of OCL is based on a four-valued\nlogic that turns UML into a formal language. Any type\ncomprises the elements \"invalid\" and \"null\" which are\npropagated as strict and non-strict, respectively.\nUnfortunately, the former semi-formal semantics of this\nspecification language, captured in the \"Annex A\" of the\nOCL standard, leads to different interpretations of corner\ncases. We formalize the core of OCL: denotational\ndefinitions, a logical calculus and operational rules that\nallow for the execution of OCL expressions by a mixture of\nterm rewriting and code compilation. Our formalization\nreveals several inconsistencies and contradictions in the\ncurrent version of the OCL standard. Overall, this document\nis intended to provide the basis for a machine-checked text\n\"Annex A\" of the OCL standard targeting at tool\nimplementors.",
    "extra": {
        "Change history": "[2015-10-13]\n<a href=\"https//foss.heptapod.net/isa-afp/afp-devel/-/commit/e68e1996d5d4926397c9244e786446e99ab17e63\">afp-devel@ea3b38fc54d6</a> and\n<a href=\"https//projects.brucker.ch/hol-testgen/log/trunk?rev=12148\">hol-testgen@12148</a><br>\n&nbsp;&nbsp;&nbsp;Update of Featherweight OCL including a change in the abstract.<br>\n[2014-01-16]\n<a href=\"https//foss.heptapod.net/isa-afp/afp-devel/-/commit/6217cc5b29c560f24ecc64c81047778becb69f51\">afp-devel@9091ce05cb20</a> and\n<a href=\"https//projects.brucker.ch/hol-testgen/log/trunk?rev=10241\">hol-testgen@10241</a><br>\n&nbsp;&nbsp;&nbsp;New Entry Featherweight OCL"
    },
    "notify": [
        "brucker@spamfence.net",
        "tuong@users.gforge.inria.fr",
        "wolff@lri.fr"
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
            "2013-2": "2014-01-16"
        }
    ],
    "theories": [
        "UML_Contracts",
        "UML_Library",
        "UML_Logic",
        "UML_Main",
        "UML_PropertyProfiles",
        "UML_State",
        "UML_Tools",
        "UML_Types"
    ]
}