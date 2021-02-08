{
    "title": "Game-based cryptography in HOL",
    "authors": [
        "Andreas Lochbihler",
        "S. Reza Sefidgar",
        "Bhargav Bhatt"
    ],
    "topics": [
        "Computer science/Security/Cryptography"
    ],
    "date": "2017-05-05",
    "notify": [
        "mail@andreas-lochbihler.de"
    ],
    "abstract": "\n<p>In this AFP entry, we show how to specify game-based cryptographic\nsecurity notions and formally prove secure several cryptographic\nconstructions from the literature using the CryptHOL framework. Among\nothers, we formalise the notions of a random oracle, a pseudo-random\nfunction, an unpredictable function, and of encryption schemes that are\nindistinguishable under chosen plaintext and/or ciphertext attacks. We\nprove the random-permutation/random-function switching lemma, security\nof the Elgamal and hashed Elgamal public-key encryption scheme and\ncorrectness and security of several constructions with pseudo-random\nfunctions.\n</p><p>Our proofs follow the game-hopping style advocated by\nShoup and Bellare and Rogaway, from which most of the examples have\nbeen taken. We generalise some of their results such that they can be\nreused in other proofs. Thanks to CryptHOL's integration with\nIsabelle's parametricity infrastructure, many simple hops are easily\njustified using the theory of representation independence.</p>",
    "extra": {
        "Change history": "[2018-09-28]\nadded the CryptHOL tutorial for game-based cryptography\n(revision 489a395764ae)"
    },
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
            "2016-1": "2017-05-11"
        }
    ],
    "dependencies": [
        "CryptHOL"
    ],
    "theories": [
        "Hashed_Elgamal",
        "IND_CPA_PK",
        "Elgamal",
        "CryptHOL_Tutorial",
        "RP_RF",
        "Unpredictable_Function",
        "PRF_UPF_IND_CCA",
        "SUF_CMA",
        "Game_Based_Crypto",
        "Guessing_Many_One",
        "IND_CPA",
        "Pseudo_Random_Permutation",
        "PRF_IND_CPA",
        "Security_Spec",
        "Pseudo_Random_Function",
        "PRF_UHF",
        "Diffie_Hellman",
        "IND_CPA_PK_Single",
        "IND_CCA2",
        "IND_CCA2_sym",
        "Cryptographic_Constructions"
    ]
}