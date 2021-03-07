{
    "theories": [
        {
            "Syntax": []
        },
        {
            "Types": [
                "shift_eq",
                "shift_gt",
                "shift_lt",
                "shift_commute",
                "uniqueness"
            ]
        },
        {
            "DeBruijn": [
                "fmv_liftL",
                "fmv_liftL_ctxt",
                "fmv_suc",
                "flv_drop"
            ]
        },
        {
            "Substitution": [
                "ctxt_app_subst",
                "liftLM_comm",
                "liftLM_comm_ctxt",
                "liftMM_comm",
                "liftMM_comm_ctxt",
                "liftM_struct_subst",
                "liftM_ctxt_struct_subst"
            ]
        },
        {
            "Reduction": [
                "step_term2",
                "rtc_term_incl",
                "rtc_term_trans",
                "rtc_command_trans",
                "rtc_lambda",
                "rtc_appL"
            ]
        },
        {
            "ContextFacts": [
                "typing_ctxt_correct1",
                "typing_ctxt_correct2",
                "ctxt_subst_basecase",
                "ctxt_subst_caseApp",
                "ctxt_subst"
            ]
        },
        {
            "TypePreservation": [
                "liftL_type",
                "liftM_type",
                "dropM_type",
                "liftL_ctxt_type",
                "liftM_ctxt_type",
                "struct_subst_command",
                "struct_subst_type_command",
                "dropM_env"
            ]
        },
        {
            "Progress": [
                "progress'"
            ]
        },
        {
            "Peirce": []
        }
    ],
    "url": "entries/lambdamu/theories",
    "title": "Session LambdaMu"
}