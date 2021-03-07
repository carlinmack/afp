{
    "theories": [
        {
            "Util": [
                "kleisli_comm_cong",
                "kleisli_assoc",
                "distinct_set_notin",
                "set_membership_equality_technicalD",
                "set_equality_technical",
                "set_elem_nth",
                "list_nil_or_snoc",
                "suffix_eq_distinct_list",
                "pre_suf_eq_distinct_list",
                "list_head_unaffected",
                "list_head_butlast",
                "list_head_length_one",
                "list_two_at_end",
                "list_nth_split_technical",
                "list_nth_split",
                "list_split_two_elems",
                "split_list_unique_prefix",
                "map_filter_append"
            ]
        },
        {
            "Convergence": [
                "concurrentI",
                "concurrentD1",
                "concurrentD2",
                "concurrent_refl",
                "concurrent_comm",
                "concurrent_set_empty",
                "concurrent_set_ConsE",
                "concurrent_set_ConsI",
                "concurrent_set_appendI",
                "concurrent_set_Cons_Snoc",
                "consistentI",
                "hb_consistent_append_D1",
                "hb_consistent_append_D2",
                "hb_consistent_append_elim_ConsD",
                "hb_consistent_remove1",
                "hb_consistent_singleton",
                "hb_consistent_prefix_suffix_exists",
                "hb_consistent_append",
                "hb_consistent_append_porder",
                "apply_operations_empty",
                "apply_operations_Snoc",
                "concurrent_ops_commute_empty",
                "concurrent_ops_commute_singleton",
                "concurrent_ops_commute_appendD",
                "concurrent_ops_commute_rearrange",
                "concurrent_ops_commute_concurrent_set"
            ]
        },
        {
            "Network": []
        },
        {
            "Ordered_List": [
                "insert_no_failure",
                "insert_None_index_neq_None",
                "insert_Some_None_index_not_in",
                "index_not_in_insert_Some_None",
                "delete_no_failure",
                "delete_None_index_not_in",
                "index_not_in_delete_None",
                "insert_body_preserve_indices",
                "insert_preserve_indices",
                "delete_preserve_indices",
                "insert_body_commutes",
                "insert_insert_body",
                "insert_Nil_None",
                "insert_insert_body_commute",
                "insert_commutes",
                "delete_commutes",
                "insert_body_delete_commute",
                "insert_delete_commute",
                "insert_body_insert'",
                "insert_insert'",
                "insert_body_stop_iteration",
                "insert_body_contains_new_elem",
                "insert_between_elements",
                "insert_position_element_technical",
                "split_tuple_list_by_id",
                "insert_preserves_order"
            ]
        },
        {
            "RGA": [
                "indices_Nil",
                "indices_append",
                "indices_Broadcast_singleton",
                "indices_Deliver_Insert",
                "indices_Deliver_Delete",
                "subset_reorder"
            ]
        },
        {
            "Counter": []
        },
        {
            "ORSet": []
        }
    ],
    "url": "entries/crdt/theories",
    "title": "Session CRDT"
}