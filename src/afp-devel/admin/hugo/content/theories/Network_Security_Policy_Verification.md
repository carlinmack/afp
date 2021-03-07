{
    "theories": [
        {
            "ML_GraphViz": []
        },
        {
            "ML_GraphViz_Disable": []
        },
        {
            "FiniteGraph": [
                "E_wfD",
                "E_wfD2",
                "succ_tran_finite",
                "succ_tran_empty",
                "succ_tran_subseteq_nodes",
                "num_reachable_zero",
                "num_succtran_zero",
                "num_reachable_zero_iff",
                "graph_eq_intro",
                "wf_graph_finite_filterE",
                "wf_graph_finite_filterV",
                "empty_wf",
                "nodes_empty",
                "edges_empty",
                "add_node_wf",
                "delete_node_wf",
                "add_edge_wf",
                "delete_edge_wf",
                "delete_edges_list_wf",
                "delete_edges_wf",
                "delete_edges_list_set",
                "delete_edges_list_union",
                "add_edge_delete_edges_list",
                "delete_edges_empty",
                "delete_edges_simp2",
                "delete_edges_set_nodes",
                "delete_edges_edges_mono",
                "delete_edges_edges_empty",
                "add_delete_edge",
                "add_delete_edges",
                "fully_connected_simp",
                "fully_connected_wf",
                "succ_tran_mono",
                "num_reachable_mono",
                "num_reachable_norefl_mono",
                "backflows_wf",
                "undirected_backflows",
                "backflows_id",
                "backflows_finite",
                "backflows_minus_backflows",
                "backflows_subseteq",
                "backflows_un",
                "backflows_inter",
                "backflows_alt_fstsnd",
                "wf_graph_remove_edges",
                "wf_graph_remove_edges_union",
                "wf_graph_union_edges",
                "wf_graph_add_subset_edges",
                "succ_finite",
                "succ_empty"
            ]
        },
        {
            "FiniteListGraph": [
                "wf_list_graph_iff_wf_graph",
                "add_node_wf",
                "add_node_set_nodes",
                "add_node_set_edges",
                "add_node_correct",
                "add_node_wf2",
                "add_edge_wf",
                "add_edge_set_nodes",
                "add_edge_set_edges",
                "add_edge_correct",
                "add_edge_wf2",
                "delete_node_wf",
                "delete_node_set_edges",
                "delete_node_correct",
                "delete_edge_set_nodes",
                "delete_edge_set_edges",
                "delete_edge_set_edges2",
                "delete_edge_wf",
                "delete_edge_length",
                "delete_edge_commute",
                "delete_edge_correct",
                "delete_edge_wf2",
                "delete_edges_wf",
                "delete_edges_set_nodes",
                "delete_edges_nodes",
                "delete_edges_set_edges",
                "delete_edges_set_edges2",
                "delete_edges_length",
                "delete_edges_chain",
                "delete_edges_delete_edge_commute",
                "delete_edges_commute",
                "delete_edges_as_filter",
                "delete_edges_correct",
                "delete_edges_wf2",
                "distinct_relpow_impl",
                "distinct_rtrancl_list_impl",
                "distinct_trancl_list_impl",
                "succ_rtran_correct",
                "distinct_succ_rtran",
                "succ_rtran_set",
                "distinct_succ_tran",
                "succ_tran_set",
                "succ_tran_correct",
                "num_reachable_correct",
                "num_reachable_norefl_correct",
                "backlinks_alt",
                "backlinks_set",
                "undirected_nodes_set",
                "undirected_succ_tran_set",
                "backlinks_in_nodes_G",
                "backlinks_distinct",
                "backlinks_subset",
                "backlinks_correct",
                "undirected_wf",
                "undirected_correct"
            ]
        },
        {
            "TopoS_Util": [
                "finite_ne_subset_induct",
                "set_union_code"
            ]
        },
        {
            "Efficient_Distinct": [
                "list_length_iff_distinct",
                "distinct_by_mergesort",
                "map_tailrec_is_listmap",
                "merge_tailrec_inefficient_prepend",
                "merge_as_tailrec_inefficient",
                "merge_tailrec_listappend",
                "merge_tailrec_acc_append",
                "merge_inefficient_as_efficient"
            ]
        },
        {
            "FiniteListGraph_Impl": [
                "wf_list_graph_impl_axioms_locale_props",
                "rbt_contains"
            ]
        },
        {
            "TopoS_Vertices": [
                "distinct_vertices12",
                "distinct_vertices13",
                "distinct_vertices23"
            ]
        },
        {
            "TopoS_Interface": [
                "offending_not_empty",
                "empty_offending_contra",
                "offending_notevalD",
                "sinvar_no_offending",
                "set_offending_flows_simp",
                "node_props_eq_node_props_formaldef",
                "unique_common_math_notation",
                "default_unique_EX_notation",
                "default_uniqueness_by_counterexample_IFS",
                "default_unique_EX_notation",
                "default_uniqueness_by_counterexample_ACS"
            ]
        },
        {
            "TopoS_withOffendingFlows": [
                "sinvar_mono_I_proofrule_simple",
                "sinvar_mono_I_proofrule",
                "sinvar_mono_imp_negative_mono",
                "sinvar_mono_imp_is_offending_flows_mono",
                "sinvar_mono_imp_sinvar_mono",
                "minimalize_offending_overapprox_subset",
                "not_model_mono_imp_addedge_mono",
                "minimalize_offending_overapprox_keeps_keeps",
                "minimalize_offending_overapprox_subseteq_input",
                "sinvar_monoI",
                "minimalize_offending_overapprox_sound",
                "minimalize_offending_overapprox_boundnP",
                "mono_imp_emptyoffending_eq_nevervalid",
                "minimality_offending_flows_mono_edges_graph_extend",
                "set_offending_flows_insert_contains_new",
                "pow_combine_mono",
                "rule_pow_combine_fixfst",
                "rule_pow_combine_fixfst_Union",
                "offending_partition_subset_empty",
                "Un_set_offending_flows_bound_minus",
                "Un_set_offending_flows_bound_minus_subseteq"
            ]
        },
        {
            "TopoS_ENF": [
                "monotonicity_sinvar_mono",
                "ENF_offending_imp_not_P",
                "ENF_offending_set_P_representation",
                "ENF_offending_subseteq_lhs",
                "ENF_offending_not_empty_imp_ENF_offending_subseteq_rhs",
                "ENF_notevalmodel_imp_offending_not_empty",
                "ENF_offending_case1",
                "ENF_offending_case2"
            ]
        },
        {
            "vertex_example_simps": [
                "False_set",
                "succ_tran_empty",
                "vertex_1_vertex_2_set_simp",
                "unique_default_example1",
                "unique_default_example2",
                "unique_default_example3",
                "unique_default_example_simp1",
                "unique_default_example_simp2",
                "unique_default_example_simp3",
                "vertex_set_simp2",
                "canAccessThis_simp1",
                "canAccessThis_simp2",
                "canAccessThis_simp3",
                "canAccessThis_simp4"
            ]
        },
        {
            "TopoS_Helper": []
        },
        {
            "SINVAR_Subnets2": [
                "sinvar_mono",
                "All_to_Unassigned",
                "Unassigned_default_candidate",
                "allowed_subnet_flow_refl",
                "Subnets_ENF",
                "Subnets_ENF_refl",
                "Subnets_offending_set",
                "TopoS_Subnets2"
            ]
        },
        {
            "SINVAR_BLPstrict": [
                "sinvar_mono",
                "secret_default_candidate",
                "BLP_ENF",
                "BLP_ENF_refl",
                "BLP_offending_set",
                "TopoS_BLPstrict"
            ]
        },
        {
            "SINVAR_Tainting": [
                "sinvar_tainting_edges_def",
                "sinvar_preferred_def",
                "sinvar_mono",
                "Taints_def_unique",
                "Taints_ENF",
                "Taints_ENF_refl",
                "Taints_offending_set",
                "TopoS_Tainting"
            ]
        },
        {
            "SINVAR_BLPbasic": [
                "sinvar_mono",
                "BLP_def_unique",
                "zero_default_candidate",
                "zero_default_candidate_rule",
                "privacylevel_refl",
                "BLP_ENF",
                "BLP_ENF_refl",
                "BLP_offending_set",
                "TopoS_BLPBasic",
                "sinvar_BLPbasic_tancl"
            ]
        },
        {
            "SINVAR_TaintingTrusted": [
                "taints_eq_iff",
                "taints_wellformedness",
                "raw_of_taints_TaintsUntaints",
                "taints_TaintsUntaints",
                "untaints_TaintsUntaints",
                "sinvar_mono",
                "Taints_def_unique",
                "Taints_ENF",
                "Taints_ENF_refl",
                "Taints_offending_set",
                "TopoS_TaintingTrusted"
            ]
        },
        {
            "SINVAR_BLPtrusted": [
                "sinvar_mono",
                "BLP_def_unique",
                "zero_default_candidate",
                "privacylevel_refl",
                "BLP_ENF",
                "BLP_ENF_refl",
                "BLP_offending_set",
                "TopoS_BLPtrusted"
            ]
        },
        {
            "Analysis_Tainting": [
                "tainting_imp_blp_cutcard",
                "tainting_imp_blp_cutcard2",
                "tainting_iff_blp",
                "tainting_iff_blp_extended",
                "tainting_iff_blp_trusted",
                "tainting_iff_blp_trusted_extended"
            ]
        },
        {
            "TopoS_Interface_impl": [
                "TopoS_eval_impl_proofrule",
                "Generic_offending_list_correct",
                "all_edges_list_I",
                "all_nodes_list_I",
                "minimalize_offending_overapprox_spec_impl",
                "minimalize_offending_overapprox_gives_some_offending_flow"
            ]
        },
        {
            "SINVAR_BLPbasic_impl": []
        },
        {
            "SINVAR_Subnets": [
                "sinvar_mono",
                "Unassigned_only_to_Unassigned",
                "All_to_Unassigned",
                "Unassigned_default_candidate",
                "allowed_subnet_flow_refl",
                "Subnets_ENF",
                "Subnets_ENF_refl",
                "Subnets_offending_set",
                "TopoS_Subnets",
                "violating_configurations"
            ]
        },
        {
            "SINVAR_Subnets_impl": []
        },
        {
            "SINVAR_DomainHierarchyNG": [
                "Leaf_Top",
                "Leaf_Top_Unique",
                "no_Bot",
                "uncomparable_sup_is_Top",
                "common_inf_imp_comparable",
                "prepend_domain",
                "unfold_dmain_leq",
                "less_eq_refl",
                "chopOneContinue",
                "chop0",
                "domainNameChopFunApply",
                "domainNameChopRotateSuc",
                "domainNameChopRotate",
                "chop_sup_commute",
                "chop_sup_max1",
                "chop_sup_max2",
                "chop_sup_is_sup",
                "DN_inf_commute",
                "DN_inf_is_inf",
                "DN_sup_commute",
                "DN_sup_is_sup",
                "leq_domainNameTrust_refl",
                "leq_domainNameTrust_NOT_trans",
                "leq_domainNameTrust_NOT_antisym",
                "sinvar_mono",
                "DomainHierarchyNG_ENF",
                "DomainHierarchyNG_ENF_refl",
                "unassigned_default_candidate",
                "DomainHierarchyNG_offending_set",
                "Unassigned_unique_default",
                "TopoS_DomainHierarchyNG"
            ]
        },
        {
            "SINVAR_DomainHierarchyNG_impl": []
        },
        {
            "SINVAR_BLPtrusted_impl": []
        },
        {
            "SINVAR_SecGwExt": [
                "sinvar_mono",
                "PolEnforcePoint_ENFnr",
                "Unassigned_botdefault",
                "Unassigned_not_to_Member",
                "All_to_Unassigned",
                "PolEnforcePointExtended_offending_set",
                "TopoS_PolEnforcePointExtended"
            ]
        },
        {
            "SINVAR_SecGwExt_impl": []
        },
        {
            "SINVAR_Sink": [
                "sinvar_mono",
                "Sink_ENFnr",
                "Unassigned_to_All",
                "Unassigned_default_candidate",
                "Sink_offending_set",
                "TopoS_Sink"
            ]
        },
        {
            "SINVAR_Sink_impl": []
        },
        {
            "SINVAR_SubnetsInGW": [
                "sinvar_mono",
                "Unassigned_not_to_Member",
                "All_to_Unassigned",
                "Member_to_All",
                "Unassigned_default_candidate",
                "allowed_subnet_flow_refl",
                "SubnetsInGW_ENF",
                "SubnetsInGW_ENF_refl",
                "SubnetsInGW_offending_set",
                "TopoS_SubnetsInGW"
            ]
        },
        {
            "SINVAR_SubnetsInGW_impl": []
        },
        {
            "SINVAR_CommunicationPartners": [
                "sinvar_mono",
                "CommunicationPartners_ENRnrSR",
                "Unassigned_weakrefl",
                "Unassigned_botdefault",
                "All_to_Unassigned",
                "Unassigned_default_candidate",
                "CommunicationPartners_offending_set",
                "TopoS_SubnetsInGW"
            ]
        },
        {
            "SINVAR_CommunicationPartners_impl": []
        },
        {
            "SINVAR_NoRefl": [
                "sinvar_mono",
                "NoRfl_ENRsr",
                "NoRefl_offending_set",
                "NoRefl_unique_default",
                "NoRefl_SecurityInvariant_IFS",
                "TopoS_NoRefl"
            ]
        },
        {
            "SINVAR_NoRefl_impl": []
        },
        {
            "SINVAR_Tainting_impl": []
        },
        {
            "SINVAR_TaintingTrusted_impl": []
        },
        {
            "SINVAR_Dependability": [
                "num_reachable_le_nodes",
                "dependability_fix_nP_valid",
                "dependability_fix_nP_minimal_solution",
                "sinvar_mono",
                "TopoS_Dependability"
            ]
        },
        {
            "SINVAR_Dependability_impl": [
                "sinvar_correct"
            ]
        },
        {
            "SINVAR_NonInterference": [
                "undirected_reachable_mono",
                "tmp1",
                "tmp6",
                "tmp2",
                "tmp4",
                "tmp5",
                "unique_default_example",
                "unique_default_example_hlp1",
                "unique_default_example_2",
                "unique_default_example_3",
                "unique_default_example_4",
                "unique_default_example_5",
                "empty_undirected_reachable_false",
                "sinvar_mono",
                "TopoS_NonInterference"
            ]
        },
        {
            "SINVAR_NonInterference_impl": [
                "undirected_reachable_set",
                "sinvar_eq_help1",
                "sinvar_eq_help2",
                "sinvar_eq_help3",
                "sinvar_list_eq_set",
                "sinvar_correct"
            ]
        },
        {
            "SINVAR_ACLcommunicateWith": [
                "ACLcommunicateWith_sinvar_alternative",
                "sinvar_mono",
                "unique_default_example",
                "TopoS_ACLcommunicateWith"
            ]
        },
        {
            "SINVAR_ACLnotCommunicateWith": [
                "ACLcommunicateNotWith_inverse_ACLcommunicateWith",
                "sinvar_mono",
                "succ_tran_empty",
                "unique_default_example",
                "TopoS_ACLnotCommunicateWith"
            ]
        },
        {
            "SINVAR_ACLnotCommunicateWith_impl": [
                "sinvar_correct"
            ]
        },
        {
            "SINVAR_ACLcommunicateWith_impl": [
                "sinvar_correct"
            ]
        },
        {
            "SINVAR_Dependability_norefl": [
                "sinvar_mono",
                "TopoS_Dependability_norefl"
            ]
        },
        {
            "SINVAR_Dependability_norefl_impl": [
                "sinvar_correct"
            ]
        },
        {
            "TopoS_Library": []
        },
        {
            "TopoS_Composition_Theory": [
                "new_configured_TopoS_sinvar_correct",
                "new_configured_TopoS_offending_flows_correct",
                "sinvar_monoI",
                "defined_offending'",
                "subst_offending_flows",
                "SecurityInvariant_preliminariesD",
                "negative_mono",
                "get_ACS_union_get_IFS",
                "valid_reqs1",
                "valid_reqs2",
                "get_offending_flows_alt1",
                "get_offending_flows_un",
                "all_security_requirements_fulfilled_mono",
                "generate_valid_topology_nodes",
                "generate_valid_topology_def_alt",
                "wf_graph_generate_valid_topology",
                "generate_valid_topology_mono_models",
                "generate_valid_topology_subseteq_edges",
                "generate_valid_topology_as_set",
                "c_offending_flows_subseteq_edges",
                "unique_offending_obtain",
                "enf_offending_flows",
                "enf_not_fulfilled_if_in_offending",
                "enf_all_valid_policy_subset_of_max",
                "all_security_requirements_fulfilled_imp_no_offending_flows",
                "mono_extend_get_offending_flows",
                "get_offending_flows_subseteq_edges",
                "get_offending_flows_union_mono",
                "Un_set_offending_flows_bound_minus_subseteq'",
                "ENF_uniquely_defined_offedning",
                "generate_valid_topology_SOME_nodes",
                "generate_valid_topology_SOME_def_alt",
                "generate_valid_topology_SOME_superset"
            ]
        },
        {
            "TopoS_Stateful_Policy": [
                "E_wfD",
                "E_state_valid",
                "E_state_validD",
                "finite_fix",
                "finite_state",
                "finite_backflows_state",
                "E_state_backflows_wf",
                "filternew_subseteq_flows_state",
                "filternew_flows_state_alt",
                "filternew_flows_state_alt2",
                "backflows_filternew_flows_state",
                "stateful_policy_to_network_graph_filternew",
                "backflows_filternew_disjunct_flows_fix",
                "wf_stateful_policy_is_wf_graph",
                "compliant_stateful_ACS_no_side_effects_filternew_helper",
                "valid_stateful_policy",
                "compliant_stateful_ACS_static_valid",
                "compliant_stateful_ACS_only_state_violations",
                "compliant_stateful_ACS_no_state_singleflow_side_effect"
            ]
        },
        {
            "TopoS_Composition_Theory_impl": [
                "TopoS_modelLibrary_yields_new_configured_SecurityInvariant",
                "new_configured_list_SecurityInvariant_complies",
                "implc_get_offending_flows_fold",
                "implc_get_offending_flows_Un",
                "implc_get_offending_flows_map_concat",
                "get_IFS_get_ACS_complies",
                "get_IFS_get_ACS_select_simps",
                "all_security_requirements_fulfilled_complies",
                "generate_valid_topology_complies",
                "generate_valid_topology_some_complies"
            ]
        },
        {
            "TopoS_Stateful_Policy_Algorithm": [
                "False_set",
                "valid_reqs_ACS_D",
                "valid_reqs_IFS_D",
                "all_security_requirements_fulfilled_ACS_D",
                "all_security_requirements_fulfilled_IFS_D",
                "all_security_requirements_fulfilled_mono_stateful_policy_to_network_graph",
                "trivial_stateful_policy_compliance",
                "filter_IFS_no_violations_subseteq_input",
                "filter_IFS_no_violations_accu_correct_induction",
                "filter_IFS_no_violations_correct",
                "filter_IFS_no_violations_accu_no_IFS",
                "filter_IFS_no_violations_accu_maximal_induction",
                "filter_IFS_no_violations_maximal",
                "filter_compliant_stateful_ACS_subseteq_input",
                "filter_compliant_stateful_ACS_accu_correct_induction",
                "filter_compliant_stateful_ACS_accu_no_side_effects",
                "filter_compliant_stateful_ACS_correct",
                "filter_compliant_stateful_ACS_accu_induction_maximal",
                "filter_compliant_stateful_ACS_maximal",
                "filter_compliant_stateful_ACS_maximal_allsubsets",
                "generate_valid_stateful_policy_IFSACS_wf_stateful_policy",
                "generate_valid_stateful_policy_IFSACS_select_simps",
                "generate_valid_stateful_policy_IFSACS_all_security_requirements_fulfilled_IFS",
                "generate_valid_stateful_policy_IFSACS_2_wf_stateful_policy",
                "generate_valid_stateful_policy_IFSACS_2_select_simps",
                "generate_valid_stateful_policy_IFSACS_2_all_security_requirements_fulfilled_IFS",
                "generate_valid_stateful_policy_IFSACS_2_filter_compliant_stateful_ACS",
                "generate_valid_stateful_policy_IFSACS_2_noIFS_noACSsideeffects_imp_fullgraph",
                "generate_valid_stateful_policy_IFSACS_noIFS_noACSsideeffects_imp_fullgraph"
            ]
        },
        {
            "TopoS_Stateful_Policy_impl": [
                "stateful_list_policy_to_list_graph_complies",
                "wf_list_graph_stateful_list_policy_to_list_graph",
                "filter_IFS_no_violations_accu_distinct",
                "filter_IFS_no_violations_accu_complies",
                "filter_IFS_no_violations_complies",
                "filter_compliant_stateful_ACS_accu_complies",
                "filter_compliant_stateful_ACS_cont_complies",
                "filter_compliant_stateful_ACS_complies",
                "inefficient_list_intersect_correct",
                "generate_valid_stateful_policy_IFSACS_2_complies"
            ]
        },
        {
            "METASINVAR_SystemBoundary": [
                "system_components_to_subnets",
                "system_components_to_blp"
            ]
        },
        {
            "TopoS_Impl": [
                "rembiflowdups_complete",
                "filter_for_biflows_correct",
                "filter_for_biflows_un_filter_for_uniflows",
                "partition_by_biflows_correct"
            ]
        },
        {
            "Network_Security_Policy_Verification": [
                "wf_list_graph_policy",
                "BLP_m_spec",
                "valid_reqs_BLP",
                "complies_BLP"
            ]
        },
        {
            "Example_BLP": []
        },
        {
            "TopoS_generateCode": []
        },
        {
            "attic": [
                "exists_x1x2_x1notoffending_natLeq",
                "exCasePairSimp",
                "exCasePairNotSimp",
                "is_path_simps",
                "is_path_memb",
                "is_path_split",
                "is_path_split'",
                "int_vertices_simps",
                "int_vertices_empty"
            ]
        },
        {
            "Impl_List_Playground_ChairNetwork": []
        },
        {
            "Impl_List_Playground_statefulpolicycompliance": []
        },
        {
            "Example": []
        },
        {
            "Example_NetModel": [
                "sinvar_mono"
            ]
        },
        {
            "Example_Forte14": []
        },
        {
            "Distributed_WebApp": []
        },
        {
            "I8_SSH_Landscape": []
        },
        {
            "Impl_List_Playground": []
        },
        {
            "Impl_List_Playground_ChairNetwork_statefulpolicy_example": []
        },
        {
            "CryptoDB": []
        },
        {
            "IDEM": []
        },
        {
            "MeasrDroid": []
        },
        {
            "SINVAR_Examples": []
        },
        {
            "Imaginary_Factory_Network": []
        }
    ],
    "url": "entries/network_security_policy_verification/theories",
    "title": "Session Network_Security_Policy_Verification"
}