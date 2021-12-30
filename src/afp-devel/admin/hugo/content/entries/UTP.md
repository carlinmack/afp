{
    "title": "Isabelle/UTP: Mechanised Theory Engineering for Unifying Theories of Programming",
    "authors": [
        "Simon Foster",
        "Frank Zeyda",
        "Yakoub Nemouchi",
        "Pedro Ribeiro",
        "Burkhart Wolff"
    ],
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "date": "2019-02-01",
    "notify": [
        "simon.foster@york.ac.uk"
    ],
    "abstract": "\nIsabelle/UTP is a mechanised theory engineering toolkit based on Hoare\nand He’s Unifying Theories of Programming (UTP). UTP enables the\ncreation of denotational, algebraic, and operational semantics for\ndifferent programming languages using an alphabetised relational\ncalculus. We provide a semantic embedding of the alphabetised\nrelational calculus in Isabelle/HOL, including new type definitions,\nrelational constructors, automated proof tactics, and accompanying\nalgebraic laws. Isabelle/UTP can be used to both capture laws of\nprogramming for different languages, and put these fundamental\ntheorems to work in the creation of associated verification tools,\nusing calculi like Hoare logics. This document describes the\nrelational core of the UTP in Isabelle/HOL.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-02-06"
        }
    ],
    "dependencies": [
        "UTP-Toolkit"
    ],
    "theories": [
        "utp_parser_utils",
        "utp_var",
        "utp_expr",
        "utp_expr_insts",
        "utp_expr_funcs",
        "utp_unrest",
        "utp_usedby",
        "utp_subst",
        "utp_tactics",
        "files/uexpr_rep_eq.ML",
        "files/utp_tactics.ML",
        "utp_meta_subst",
        "utp_pred",
        "utp_alphabet",
        "utp_lift",
        "utp_pred_laws",
        "utp_healthy",
        "utp_rel",
        "utp_recursion",
        "utp_sequent",
        "utp_rel_laws",
        "utp_theory",
        "utp_hoare",
        "utp_wp",
        "utp_dynlog",
        "utp_state_parser",
        "utp_rel_opsem",
        "utp_sym_eval",
        "utp_sp",
        "utp_concurrency",
        "utp",
        "utp_expr_ovld",
        "utp_full",
        "utp_easy_parser",
        "sum_list",
        "utp_simple_time"
    ]
}