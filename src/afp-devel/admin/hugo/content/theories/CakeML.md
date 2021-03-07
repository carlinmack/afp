{
    "theories": [
        {
            "Doc_Generated": []
        },
        {
            "Lib": []
        },
        {
            "Namespace": []
        },
        {
            "FpSem": []
        },
        {
            "Ast": []
        },
        {
            "AstAuxiliary": []
        },
        {
            "Ffi": []
        },
        {
            "SemanticPrimitives": []
        },
        {
            "SmallStep": []
        },
        {
            "BigStep": []
        },
        {
            "BigSmallInvariants": []
        },
        {
            "Evaluate": []
        },
        {
            "LibAuxiliary": []
        },
        {
            "NamespaceAuxiliary": []
        },
        {
            "PrimTypes": []
        },
        {
            "SemanticPrimitivesAuxiliary": []
        },
        {
            "SimpleIO": []
        },
        {
            "Tokens": []
        },
        {
            "TypeSystem": []
        },
        {
            "TypeSystemAuxiliary": []
        },
        {
            "Doc_Proofs": []
        },
        {
            "Semantic_Extras": [
                "all_distinct_alt_def",
                "find_recfun_someD",
                "find_recfun_alt_def",
                "size_list_rev",
                "do_if_cases",
                "do_log_exp",
                "c_of_merge",
                "v_of_merge",
                "nsEmpty_nsAppend",
                "do_log_cases",
                "do_opapp_cases",
                "evaluate_clock_mono",
                "evaluate_list_singleton_valE",
                "evaluate_list_singleton_errD",
                "evaluate_list_singleton_cases",
                "evaluate_list_singletonI",
                "prod_result_cases",
                "do_con_check_build_conv",
                "match_result_sound",
                "match_result_sound_val",
                "match_result_sound_err",
                "match_result_correct"
            ]
        },
        {
            "Evaluate_Termination": []
        },
        {
            "Evaluate_Clock": [
                "fix_clock",
                "dec_clock",
                "fun_evaluate_clock0",
                "fun_evaluate_clock",
                "fix_clock_evaluate",
                "fun_evaluate_length",
                "fun_evaluate_matchE"
            ]
        },
        {
            "Evaluate_Single": [
                "evaluate_list_cong",
                "match_result_elem",
                "evaluate_list_clock_monotone",
                "i_hate_words_helper",
                "evaluate_clock_monotone",
                "pat_elem_less_size",
                "elem_less_size",
                "evaluate_total",
                "evaluate_clock_monotone'",
                "fix_clock_evaluate",
                "evaluate_list_eq",
                "fun_evaluate_equiv"
            ]
        },
        {
            "Big_Step_Determ": [
                "evaluate_determ"
            ]
        },
        {
            "Big_Step_Total": [
                "evaluate_list_total0",
                "evaluate_match_total0",
                "evaluate_total",
                "evaluate_list_total",
                "evaluate_match_total"
            ]
        },
        {
            "Big_Step_Fun_Equiv": [
                "evaluate_iff",
                "evaluate_iff_sym",
                "other_eval_eq",
                "eval_list_singleton",
                "eval_eqI",
                "eval_match_eqI",
                "eval_tannot",
                "eval_lannot",
                "eval_match",
                "eval_match_empty",
                "run_eval",
                "run_eval_list",
                "run_eval_match",
                "fun_evaluate"
            ]
        },
        {
            "Big_Step_Unclocked": [
                "unclocked_sound",
                "unclocked_complete0",
                "unclocked_complete",
                "unclocked_eq",
                "unclocked_determ"
            ]
        },
        {
            "Big_Step_Clocked": [
                "do_app_no_runtime_error",
                "big_unclocked0",
                "big_unclocked1",
                "big_unclocked_ignore",
                "big_unclocked",
                "add_to_counter0",
                "add_clock",
                "clock_monotone",
                "big_clocked_unclocked_equiv",
                "big_clocked_timeout_0",
                "big_clocked_unclocked_equiv_timeout",
                "sub_from_counter",
                "clocked_min_counter",
                "dec_evaluate_not_timeout",
                "dec_unclocked_ignore",
                "dec_unclocked_1",
                "dec_unclocked_2",
                "dec_unclocked",
                "not_evaluate_dec_timeout",
                "dec_clocked_total",
                "dec_clocked_min_counter",
                "dec_sub_from_counter",
                "dec_clock_monotone",
                "dec_add_clock",
                "dec_add_to_counter",
                "dec_unclocked_unchanged",
                "dec_clocked_unclocked_equiv",
                "decs_add_clock",
                "decs_evaluate_not_timeout",
                "decs_unclocked_unchanged",
                "decs_unclocked_ignore",
                "decs_unclocked_2",
                "decs_unclocked",
                "not_evaluate_decs_timeout",
                "decs_clocked_total",
                "decs_clock_monotone",
                "decs_sub_from_counter",
                "decs_clocked_min_counter",
                "decs_add_to_counter",
                "top_evaluate_not_timeout",
                "top_unclocked_ignore",
                "top_unclocked",
                "not_evaluate_top_timeout",
                "top_clocked_total",
                "top_clocked_min_counter",
                "top_add_clock",
                "top_clocked_unclocked_equiv",
                "top_clock_monotone",
                "top_sub_from_counter",
                "top_add_to_counter",
                "prog_clock_monotone",
                "prog_unclocked_ignore",
                "prog_unclocked_unchanged",
                "prog_unclocked_1",
                "prog_unclocked_2",
                "prog_unclocked",
                "not_evaluate_prog_timeout",
                "not_evaluate_whole_prog_timeout",
                "prog_add_to_counter",
                "prog_sub_from_counter",
                "prog_clocked_min_counter",
                "prog_add_clock",
                "prog_clocked_unclocked_equiv",
                "clocked_evaluate"
            ]
        },
        {
            "Big_Step_Unclocked_Single": [
                "evaluate_list_mono_strong",
                "evaluate_list_mono",
                "unclocked_single_list_sound",
                "unclocked_single_sound",
                "unclocked_single_complete",
                "unclocked_single_fun_eq"
            ]
        },
        {
            "Matching": [
                "fold2_cong",
                "pmatch_list_length_neq",
                "pmatch_list_nomatch",
                "pmatch_list_typerr",
                "pmatch_single_eq0",
                "pmatch_single_equiv"
            ]
        },
        {
            "CakeML_Code": []
        },
        {
            "CakeML_Quickcheck": []
        },
        {
            "CakeML_Compiler": []
        },
        {
            "files/Tools/cakeml_sexp.ML": []
        },
        {
            "files/Tools/cakeml_compiler.ML": []
        },
        {
            "Compiler_Test": []
        },
        {
            "Code_Test_Haskell": []
        }
    ],
    "url": "entries/cakeml/theories",
    "title": "Session CakeML"
}