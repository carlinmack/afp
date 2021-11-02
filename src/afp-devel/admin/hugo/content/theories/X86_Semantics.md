{
    "url": "entries/x86_semantics/theories",
    "title": "Session X86_Semantics",
    "theories": [
        {
            "BitByte": [
                "bit_take_bits_iff",
                "bit_take_byte_iff",
                "bit_overwrite_iff",
                "nth_takebits",
                "nth_takebyte",
                "nth_take_byte_overwrite",
                "nth_bitNOT",
                "ucast_take_bits",
                "take_bits_ucast",
                "take_bits_take_bits",
                "take_bits_overwrite",
                "overwrite_0_take_bits_0",
                "take_byte_shiftlr_256",
                "length_foldr_bitwise_add",
                "bitwise_add_append",
                "bitwise_add_take_append",
                "bitwise_add_zero",
                "bitwise_add_take",
                "fst_hd_drop_zip",
                "snd_hd_drop_zip",
                "ucast_plus",
                "ucast_uminus",
                "ucast_minus",
                "to_bl_takebits"
            ]
        },
        {
            "Memory": [
                "region_addresses_iff",
                "notin_region_addresses",
                "notin_region_addresses_sub",
                "region_addresses_eq_empty_iff",
                "length_read_bytes",
                "nth_read_bytes",
                "read_bytes_override_on_enclosed",
                "read_bytes_override_on_enclosed_plus",
                "read_bytes_override_on_separate",
                "word_rcat_read_bytes_enclosed",
                "enclosed_spec",
                "address_in_enclosed_region_as_linarith",
                "address_of_enclosed_region_ge",
                "address_in_enclosed_region",
                "enclosed_minus_minus",
                "enclosed_plus",
                "separate_symm",
                "separate_iff",
                "separate_as_linarith",
                "separate_plus_none",
                "separate_minus_minus'",
                "separate_minus_minus",
                "separate_minus_none"
            ]
        },
        {
            "State": [
                "regs_reg_write",
                "regs_mem_write",
                "regs_flag_write",
                "regs_rip_write",
                "flag_read_reg_write",
                "flag_read_mem_write",
                "flag_read_flag_write",
                "flag_read_rip_write",
                "mem_read_reg_write",
                "mem_read_flag_write",
                "mem_read_rip_write",
                "mem_read_mem_write_alias",
                "mem_read_mem_write_separate",
                "mem_read_mem_write_enclosed_minus",
                "mem_read_mem_write_enclosed_plus",
                "mem_read_mem_write_enclosed_plus2",
                "mem_read_mem_write_enclosed_numeral",
                "mem_read_mem_write_enclosed_numeral1_",
                "mem_read_mem_write_enclosed_numeral_1",
                "mem_read_mem_write_enclosed_numeral11",
                "rip_reg_write",
                "rip_flag_write",
                "rip_mem_write",
                "rip_rip_write",
                "with_with",
                "add_state_update_to_list",
                "insert_state_update",
                "clean_state_updates"
            ]
        },
        {
            "X86_InstructionSemantics": []
        },
        {
            "StateCleanUp": [
                "assumptions_impI",
                "assumptions_conjE",
                "assumptionsI",
                "eefm_start",
                "eefm_clean_mem",
                "eefm_clean_mem_enclosed",
                "eefm_next_mem",
                "eefm_end"
            ]
        },
        {
            "files/MySubst.ML": []
        },
        {
            "SymbolicExecution": []
        },
        {
            "Examples": []
        },
        {
            "X86_Parse": []
        },
        {
            "files/X86_Parse.ML": []
        },
        {
            "Example_WC": []
        }
    ]
}