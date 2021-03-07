{
    "theories": [
        {
            "Lambda": []
        },
        {
            "SmallStepLam": [
                "val_stuck",
                "subst_fv_aux",
                "subst_fv",
                "red_pres_fv",
                "reduction_pres_fv"
            ]
        },
        {
            "BigStepLam": [
                "bs_val_is_val",
                "lookup_bs_env",
                "app_red_cong1",
                "app_red_cong2",
                "prim_red_cong1",
                "prim_red_cong2",
                "if_red_cong1",
                "multi_step_trans",
                "subst_id_fv",
                "sdom_cons_xx",
                "sdom_cons_v",
                "lookup_some_in_dom",
                "lookup_none_notin_dom",
                "psubst_change",
                "subst_psubst",
                "bs_env_dom",
                "closed_env_cons",
                "bs_env_closed",
                "psubst_fv",
                "big_small_step",
                "psubst_id"
            ]
        },
        {
            "ValuesFSet": [
                "vprod_size_inj",
                "fsize_def2",
                "fsize_finsert_in",
                "fsize_finsert_notin"
            ]
        },
        {
            "ValuesFSetProps": [
                "fsubset",
                "le_nat_any",
                "le_any_nat",
                "le_nat_nat"
            ]
        },
        {
            "RelationalSemFSet": []
        },
        {
            "DeclSemAsDenotFSet": []
        },
        {
            "EquivRelationalDenotFSet": [
                "denot_implies_rel",
                "rel_implies_denot"
            ]
        },
        {
            "ChangeEnv": [
                "e_prim_intro",
                "e_prim_elim",
                "e_app_elim",
                "e_app_intro",
                "e_lam_intro",
                "e_lam_intro2",
                "e_lam_intro3",
                "e_if_intro",
                "e_var_intro",
                "e_var_elim",
                "e_lam_elim",
                "e_lam_elim2",
                "e_if_elim",
                "env_le_ext",
                "change_env",
                "raise_env",
                "env_eq_refl",
                "env_eq_ext",
                "eq_implies_le",
                "env_swap",
                "env_strengthen"
            ]
        },
        {
            "DeclSemAsNDInterpFSet": []
        },
        {
            "InterTypeSystem": []
        },
        {
            "Values": []
        },
        {
            "ValueProps": [
                "fun_le_cons",
                "val_size_mem",
                "val_size_mem_l",
                "val_size_mem_r",
                "val_fun_le_refl",
                "fun_le_refl",
                "vfun_eq",
                "val_eq_refl",
                "val_eq_symm",
                "val_le_fun_le_trans",
                "fun_le_trans",
                "val_eq_trans",
                "fun_eq_refl",
                "fun_eq_trans",
                "append_fun_le",
                "append_fun_equiv",
                "append_leq_symm",
                "append_eq_symm",
                "le_nat_any",
                "le_any_nat",
                "le_nat_nat"
            ]
        },
        {
            "DeclSemAsDenot": []
        },
        {
            "DenotLam5": [
                "e_prim_intro",
                "e_prim_elim",
                "e_app_elim",
                "e_app_intro",
                "e_lam_intro",
                "e_lam_intro2",
                "e_lam_intro3",
                "e_if_intro",
                "e_var_intro",
                "e_var_elim",
                "e_lam_elim",
                "e_lam_elim2",
                "e_if_elim",
                "env_le_ext",
                "change_env",
                "raise_env",
                "env_eq_refl",
                "env_eq_ext",
                "eq_implies_le",
                "env_swap",
                "env_strengthen"
            ]
        },
        {
            "EquivDenotInterTypes": [
                "sub_inter_left1",
                "sub_inter_left2",
                "vf_nil",
                "vf_cons",
                "lookup_tenv",
                "Tf_top",
                "le_sub_flip_aux",
                "le_sub_fun_flip",
                "Tf_append",
                "append_Tf",
                "denot_lam_implies_ts",
                "venv_lookup",
                "append_fun_equiv",
                "append_eq_symm",
                "sub_le_flip"
            ]
        },
        {
            "DenotSoundFSet": [
                "subst_app",
                "subst_prim",
                "subst_lam_eq",
                "subst_lam_neq",
                "subst_if",
                "substitution",
                "subject_reduction",
                "canonical_nat",
                "canonical_fun",
                "lookup_good",
                "good_prod_inj",
                "good_fun_def2",
                "gfun_elim",
                "gfun_mem_iff",
                "gfun_mem",
                "gfun_intro",
                "sub_good",
                "denot_terminates"
            ]
        },
        {
            "DenotCompleteFSet": [
                "combine_values",
                "le_union1",
                "le_union2",
                "le_union_left",
                "e_val",
                "reverse_subst_lam",
                "lookup_ext_none",
                "rev_subst_var",
                "reverse_subst_pres_denot",
                "reverse_step_pres_denot",
                "reverse_multi_step_pres_denot"
            ]
        },
        {
            "DenotCongruenceFSet": [
                "e_lam_cong",
                "e_app_cong",
                "e_prim_cong",
                "e_if_cong",
                "congruence",
                "diverge_denot_empty",
                "goes_wrong_denot_empty",
                "denot_empty_diverge",
                "val_ty_observe",
                "soundness_wrt_ctx_equiv_aux"
            ]
        },
        {
            "DenotEqualitiesFSet": []
        },
        {
            "Optimizer": [
                "is_value_is_val",
                "opt_correct_aux"
            ]
        },
        {
            "SystemF": [
                "wfenv_good_ctx",
                "nth_append1",
                "nth_append2",
                "shift_append_preserves_T_aux",
                "shift_append_preserves_T",
                "drop_shift_preserves_T",
                "shift_cons_preserves_T",
                "compose_shift",
                "shift_zero_id",
                "lookup_wfenv",
                "less_wrong",
                "less_nat",
                "less_fun",
                "less_refl",
                "less_trans",
                "T_down_closed",
                "wrong_not_in_T",
                "fun_app",
                "T_eta",
                "compositionality",
                "iterate_sound"
            ]
        },
        {
            "MutableRef": []
        },
        {
            "MutableRefProps": []
        }
    ],
    "url": "entries/decl_sem_fun_pl/theories",
    "title": "Session Decl_Sem_Fun_PL"
}