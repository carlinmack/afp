{
    "theories": [
        {
            "Diffie_Hellman": [
                "lossless_ddh_0",
                "lossless_ddh_1",
                "lossless_lcdh"
            ]
        },
        {
            "IND_CCA2": [
                "ekey_oracle_conv",
                "oracle",
                "advantage",
                "lossless_decrypt_oracle",
                "lossless_ekey_oracle",
                "lossless_encrypt_oracle",
                "oracle",
                "advantage",
                "cipher_queriesI",
                "cipher_queriesE",
                "cipher_queries_updE",
                "cipher_queries_empty"
            ]
        },
        {
            "IND_CCA2_sym": [
                "lossless_oracle_encrypt",
                "lossless_oracle_decrypt",
                "advantage_nonneg"
            ]
        },
        {
            "IND_CPA": [
                "advantage_nonneg",
                "ibounded_byE",
                "ibounded_byI"
            ]
        },
        {
            "IND_CPA_PK": [
                "advantage_nonneg",
                "ibounded_by'E",
                "ibounded_byI"
            ]
        },
        {
            "IND_CPA_PK_Single": [
                "lossless_ind_cpa"
            ]
        },
        {
            "SUF_CMA": [
                "lossless_vkey_oracle",
                "lossless_sign_oracle",
                "lossless_sign_oracle_Some",
                "oracle",
                "advantage",
                "oracle",
                "advantage"
            ]
        },
        {
            "Pseudo_Random_Function": [
                "weight_random_oracle",
                "lossless_random_oracle",
                "card_dom_random_oracle",
                "advantage_nonneg"
            ]
        },
        {
            "Pseudo_Random_Permutation": [
                "weight_random_oracle",
                "lossless_random_oracle",
                "card_dom_random_oracle"
            ]
        },
        {
            "Guessing_Many_One": [
                "many_single_reduction"
            ]
        },
        {
            "Unpredictable_Function": [
                "advantage_advantage1"
            ]
        },
        {
            "Security_Spec": []
        },
        {
            "Elgamal": [
                "key_gen_alt",
                "aencrypt_alt",
                "lossless_key_gen",
                "lossless_aencrypt",
                "lossless_elgamal_adversary"
            ]
        },
        {
            "Hashed_Elgamal": [
                "invariant_initial",
                "invariant_update",
                "invariant",
                "invariant_in_dom",
                "lossless_oracle",
                "card_dom_state",
                "lossless_aencrypt",
                "interaction_bounded_by_aencrypt",
                "advantage_elgamal",
                "lossless_key_gen",
                "lossless_elgamal_adversary"
            ]
        },
        {
            "RP_RF": [
                "rp_resample",
                "advantage_nonneg",
                "advantage_le_1",
                "outs_ℐ_ℐ",
                "responses_ℐ_ℐ",
                "rp_rf"
            ]
        },
        {
            "PRF_UHF": [
                "ε_uh_nonneg",
                "hash_ineq_card",
                "lossless_rand"
            ]
        },
        {
            "PRF_IND_CPA": [
                "encrypt_decrypt_correct",
                "interaction_bounded_by_prf_encrypt_oracle",
                "lossless_prf_encyrpt_oracle",
                "interaction_bounded_prf_adversary",
                "lossless_prf_adversary",
                "prf_encrypt_secure_for"
            ]
        },
        {
            "PRF_UPF_IND_CCA": [
                "lossless_key_gen",
                "lossless_encrypt",
                "cipher_correct",
                "intercept_upf_simps",
                "interaction_bounded_by_upf_enc_Inr",
                "interaction_bounded_by_upf_dec_Inr",
                "interaction_bounded_by_intercept_upf_Inr",
                "interaction_bounded_by_intercept_upf_Inl",
                "lossless_intercept_upf_enc",
                "lossless_intercept_upf_dec",
                "lossless_intercept_upf",
                "results_gpv_intercept_upf",
                "lossless_reduction_upf",
                "round_1",
                "lossless_oracle_decrypt2",
                "callee_invariant_oracle_decrypt2",
                "oracle_decrypt2_parametric",
                "round_2",
                "lossless_oracle_encrypt3",
                "callee_invariant_oracle_encrypt3",
                "round_3",
                "round_4",
                "game3_bad"
            ]
        },
        {
            "Cryptographic_Constructions": []
        },
        {
            "Game_Based_Crypto": []
        },
        {
            "CryptHOL_Tutorial": [
                "lossless_oracle",
                "fresh"
            ]
        }
    ],
    "url": "entries/game_based_crypto/theories",
    "title": "Session Game_Based_Crypto"
}