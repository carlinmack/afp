{
    "title": "Multi-Party Computation",
    "authors": [
        "David Aspinall",
        "David Butler"
    ],
    "topics": [
        "Computer science/Security"
    ],
    "date": "2019-05-09",
    "notify": [
        "dbutler@turing.ac.uk"
    ],
    "abstract": "\nWe use CryptHOL to consider Multi-Party Computation (MPC) protocols.\nMPC was first considered by Yao in 1983 and recent advances in\nefficiency and an increased demand mean it is now deployed in the real\nworld. Security is considered using the real/ideal world paradigm. We\nfirst define security in the semi-honest security setting where\nparties are assumed not to deviate from the protocol transcript. In\nthis setting we prove multiple Oblivious Transfer (OT) protocols\nsecure and then show security for the gates of the GMW protocol. We\nthen define malicious security, this is a stronger notion of security\nwhere parties are assumed to be fully corrupted by an adversary. In\nthis setting we again consider OT, as it is a fundamental building\nblock of almost all MPC protocols.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-05-10"
        }
    ],
    "dependencies": [
        "Game_Based_Crypto"
    ],
    "theories": [
        "Secure_Multiplication",
        "Noar_Pinkas_OT",
        "Cyclic_Group_Ext",
        "Malicious_Defs",
        "OT_Functionalities",
        "Uniform_Sampling",
        "Semi_Honest_Def",
        "Malicious_OT",
        "ETP_OT",
        "OT14",
        "DH_Ext",
        "ETP_RSA_OT",
        "ETP",
        "Number_Theory_Aux",
        "GMW"
    ]
}