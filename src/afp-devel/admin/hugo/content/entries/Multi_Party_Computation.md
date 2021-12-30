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
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
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
        "Cyclic_Group_Ext",
        "Number_Theory_Aux",
        "Uniform_Sampling",
        "Semi_Honest_Def",
        "OT_Functionalities",
        "ETP",
        "ETP_OT",
        "ETP_RSA_OT",
        "Noar_Pinkas_OT",
        "OT14",
        "GMW",
        "Secure_Multiplication",
        "DH_Ext",
        "Malicious_Defs",
        "Malicious_OT"
    ]
}