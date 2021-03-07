{
    "theories": [
        {
            "Formulas": [
                "atoms_finite",
                "atoms_are_subformulae",
                "subsubformulae",
                "subformula_atoms",
                "subformulae_self",
                "subformulas_in_subformulas",
                "length_subformulae",
                "top_atoms_simp",
                "atoms_BigAnd",
                "pn_atoms_atoms",
                "simplify_consts_size_le",
                "simplify_const",
                "all_formulas_of_size"
            ]
        },
        {
            "Sema": [
                "irrelevant_atom",
                "relevant_atoms_same_semantics",
                "top_semantics",
                "BigAnd_semantics",
                "BigOr_semantics",
                "entail_sat",
                "pn_atoms_updates",
                "const_simplifier_correct"
            ]
        },
        {
            "Substitution": [
                "no_subst",
                "subst_atoms",
                "subst_atoms_simp"
            ]
        },
        {
            "Substitution_Sema": [
                "substitution_lemma"
            ]
        },
        {
            "CNF": [
                "atoms_of_cnf_alt",
                "atoms_of_cnf_Un"
            ]
        },
        {
            "CNF_Formulas": [
                "is_nnf_nnf",
                "nnf_no_imp",
                "subformulae_nnf",
                "is_nnf_NotD",
                "cnf_fin",
                "disj_of_clause_simps",
                "is_cnf_BigAnd",
                "BigOr_is_not_cnf''",
                "BigOr_is_not_cnf'",
                "BigOr_is_not_cnf",
                "is_nnf_BigAnd",
                "is_nnf_BigOr",
                "form_of_lit_is_nnf",
                "form_of_lit_is_lit",
                "disj_of_clause_is_nnf",
                "cnf_form_of_is",
                "nnf_cnf_form",
                "cnf_BigAnd",
                "cnf_BigOr",
                "cnf_cnf",
                "is_nnf_nnf_id",
                "disj_of_clause_is",
                "form_of_cnf_is_nnf",
                "cnf_disj",
                "cnf_disj_ex",
                "cnf_form_of_cnf",
                "disj_is_nnf",
                "nnf_BigAnd"
            ]
        },
        {
            "CNF_Sema": []
        },
        {
            "CNF_Formulas_Sema": [
                "nnf_semantics",
                "cnf_semantics",
                "cnf_form_semantics"
            ]
        },
        {
            "CNF_To_Formula": [
                "cnf_formula_of_cnf"
            ]
        },
        {
            "Tseytin": [
                "fold_pair_upd_triv",
                "distinct_pair_update_one",
                "distinct_zipunzip",
                "foldl_pair_fun_upd_map_of",
                "map_of_map_apsnd",
                "atoms_biimp",
                "biimp_size",
                "length_nfresh",
                "nfresh_isfresh",
                "nfresh_distinct",
                "tseytin_assmt_distinct",
                "tseytin_assmt_has",
                "tseytin_assmt_new_atoms",
                "distinct_snd_tseytin_assmt",
                "tseytin_assmt_backlookup",
                "tseytin_tran_small_clauses",
                "tseytin_tran_few_clauses",
                "tseytin_tran_new_atom_count"
            ]
        },
        {
            "Tseytin_Sema": [
                "biimp_simp",
                "tseyting_update_keep_subformula_sema",
                "tseytin_updates",
                "tseytin_tran1",
                "all_tran_formulas_validated",
                "tseytin_tran_equisat",
                "tseytin_tran1_orig_connection",
                "tseytin_untran",
                "tseytin_tran_equiunsatisfiable"
            ]
        },
        {
            "MiniFormulas": [
                "to_mini_is_mini",
                "mini_to_mini",
                "mini_formula_atoms"
            ]
        },
        {
            "MiniFormulas_Sema": []
        },
        {
            "Consistency": [
                "con_dis_simps",
                "Hintikka_alt",
                "pcp_alt",
                "ex1",
                "sallI",
                "ex2",
                "pcp_seq_in",
                "pcp_seq_mono",
                "pcp_seq_UN",
                "wont_get_added",
                "pcp_seq_sub",
                "pcp_lim_inserted_at_ex",
                "pcp_lim_in",
                "cl_max",
                "cl_max'",
                "pcp_lim_Hintikka"
            ]
        },
        {
            "Compactness": [
                "fin_sat_extend",
                "fin_sat_antimono",
                "extender_fin_sat",
                "extended_max",
                "extender_Sucset",
                "extender_deeper",
                "extender_subset",
                "extended_fin_sat",
                "extended_superset",
                "extended_complem",
                "not_fin_sat_extended_UNIV",
                "extended_tran",
                "extended_not_increasing",
                "not_in_extended_FE",
                "extended_id",
                "ext_model"
            ]
        },
        {
            "Compactness_Consistency": []
        },
        {
            "Sema_Craig": [
                "subst_true_false"
            ]
        },
        {
            "SC": [
                "lem1",
                "lem2",
                "sc_insertion_ordering",
                "NotL_inv",
                "AndL_inv",
                "OrL_inv",
                "ImpL_inv",
                "ImpR_inv",
                "AndR_inv",
                "OrR_inv",
                "NotR_inv",
                "weakenL",
                "weakenR",
                "weakenL_set",
                "weakenR_set",
                "extended_Ax",
                "Bot_delR"
            ]
        },
        {
            "SC_Cut": [
                "contract",
                "cut_cs_cf",
                "cut_cf_cs",
                "Cut_Atom_pre"
            ]
        },
        {
            "SC_Depth": [
                "deeper",
                "deeper_suc",
                "no_0_SC",
                "inR1'",
                "inL1'",
                "inR2'",
                "inL2'",
                "inR3'",
                "inR4'",
                "inL3'",
                "inL4'",
                "Bot_delR'",
                "NotL_inv'",
                "AndL_inv'",
                "OrL_inv'",
                "ImpL_inv'",
                "ImpR_inv'",
                "AndR_inv'",
                "OrR_inv'",
                "NotR_inv'",
                "weakenL'",
                "weakenR'",
                "contract'",
                "Cut_Atom_depth",
                "cut_bound'_mono",
                "cut_bound_mono",
                "cut_bound_max",
                "cut_bound_max'",
                "cut_bound_'",
                "cbnd_grow",
                "cbnd_mono",
                "cut_bound'_cbnd",
                "cbnd_comm",
                "cbnd_closed"
            ]
        },
        {
            "SC_Gentzen": [
                "AnfangTauschA",
                "AnfangTauschS",
                "MittenTauschA",
                "MittenTauschS",
                "BotLe",
                "Axe",
                "VerduennungListeA",
                "VerduennungListeS",
                "ZusammenziehungListeA",
                "ZusammenziehungListeS"
            ]
        },
        {
            "SC_Sema": [
                "sequent_intuitonistic_semantics",
                "SC_soundness",
                "sc_sim",
                "scc_ce_distinct"
            ]
        },
        {
            "SC_Depth_Limit": [
                "SC_completeness",
                "sc_sim_depth"
            ]
        },
        {
            "SC_Compl_Consistency": [
                "reasonable",
                "SC_consistent"
            ]
        },
        {
            "ND": [
                "Weaken",
                "BotE",
                "Not2E",
                "Not2I",
                "Not2IE",
                "NDtrans",
                "AndL_sim",
                "NotSwap",
                "AndR_sim",
                "OrL_sim",
                "OrR_sim",
                "ImpL_sim",
                "ImpR_sim",
                "ND_lem",
                "ND_caseDistinction",
                "ND_deMorganAnd",
                "ND_deMorganOr",
                "sim_sim",
                "Top_provable",
                "NotBot_provable",
                "Top_useless",
                "AssmBigAnd"
            ]
        },
        {
            "ND_Sound": [
                "BigAndImp",
                "ND_sound"
            ]
        },
        {
            "ND_Compl_Truthtable": [
                "lemma0",
                "turn_true_simps",
                "line_suitable_junctors",
                "line_assm_Cons",
                "NotD",
                "truthline_ND_proof",
                "deconstruct_assm_set"
            ]
        },
        {
            "ND_Compl_Truthtable_Compact": []
        },
        {
            "HC": [
                "HC_mono",
                "AX010",
                "AX100",
                "hilbert_folgeaxiome_as_strong_as_AX0",
                "imp_self"
            ]
        },
        {
            "HC_Compl_Consistency": [
                "dt",
                "sim",
                "sim_conj",
                "sim_disj",
                "someax",
                "lem",
                "exchg",
                "lem2",
                "imp_sim",
                "inpcp",
                "HC_case_distinction",
                "nand_sim",
                "HC_contrapos_nn",
                "nor_sim",
                "HC_contrapos_np",
                "not_imp",
                "HC_consistent"
            ]
        },
        {
            "Resolution": [
                "Resolution_weaken",
                "Resolution_unnecessary",
                "Resolution_taint_assumptions",
                "Resolution_useless_infinite",
                "Rwhile_sound",
                "s_sub_all_clauses",
                "atoms_res",
                "exlitE",
                "res_in_all_clauses",
                "Res_in_all_clauses",
                "all_clauses_Res_inv",
                "all_clauses_finite",
                "finite_res",
                "res",
                "Res_sound",
                "Res_terminates"
            ]
        },
        {
            "Resolution_Sound": [
                "Resolution_insert"
            ]
        },
        {
            "Resolution_Compl": [
                "restrict_cnf_remove",
                "cnf_substitution_lemma",
                "finite_restrict",
                "unrestrict_effects",
                "can_cope_with_unrestrict_effects",
                "unrestrict'",
                "Resolution_complete_standalone_finite"
            ]
        },
        {
            "Resolution_Compl_Consistency": [
                "OrI2'",
                "atomD",
                "pcp_disj",
                "R_consistent"
            ]
        },
        {
            "HCSC": [
                "extended_AxE"
            ]
        },
        {
            "SCND": [
                "SCND"
            ]
        },
        {
            "NDHC": []
        },
        {
            "HCSCND": []
        },
        {
            "LSC": [
                "LSC_to_SC",
                "SC_to_LSC",
                "LSC_NNF",
                "LSC_NNF_back",
                "LHCut",
                "LSC_weaken_set",
                "LSC_weaken",
                "LSC_Contract",
                "cnf",
                "dnf",
                "LSC_sim_Resolution1",
                "LSC_need_it_once_have_many",
                "LSC_Sim_resolution_la",
                "two_list_induct",
                "distrib1",
                "mset_concat_map_cons",
                "distrib",
                "LSC_BigAndL",
                "LSC_Top_unused",
                "LSC_BigAndL_inv",
                "LSC_reassociate_Ands",
                "LSC_cnf"
            ]
        },
        {
            "LSC_Resolution": [
                "literal_subset_sandwich",
                "Resolution_LSC_pre",
                "Resolution_LSC_pre_nodisj"
            ]
        },
        {
            "ND_FiniteAssms": [
                "ND_finite_assms"
            ]
        },
        {
            "ND_Compl_SC": [
                "ND_sound_complete_countable",
                "ND_sound_complete_finite"
            ]
        },
        {
            "Resolution_Compl_SC_Small": [
                "Resolution_complete'"
            ]
        },
        {
            "Resolution_Compl_SC_Full": []
        },
        {
            "MiniSC": [
                "to_mini_mset_is",
                "SC_full_to_mini",
                "SC_mini_to_full"
            ]
        },
        {
            "MiniSC_HC": [
                "AX01",
                "AX1_away",
                "Deduction1",
                "Deduction2"
            ]
        },
        {
            "MiniSC_Craig": [
                "interpolation_equal_styles"
            ]
        }
    ],
    "url": "entries/propositional_proof_systems/theories",
    "title": "Session Propositional_Proof_Systems"
}