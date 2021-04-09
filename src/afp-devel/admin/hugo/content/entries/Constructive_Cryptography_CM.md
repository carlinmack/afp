{
    "title": "Constructive Cryptography in HOL: the Communication Modeling Aspect",
    "authors": [
        "Andreas Lochbihler",
        "S. Reza Sefidgar"
    ],
    "topics": [
        "Computer science/Security/Cryptography",
        "Mathematics/Probability theory"
    ],
    "date": "2021-03-17",
    "notify": [
        "mail@andreas-lochbihler.de",
        "reza.sefidgar@inf.ethz.ch"
    ],
    "abstract": "\nConstructive Cryptography (CC) [<a\nhref=\"https://conference.iiis.tsinghua.edu.cn/ICS2011/content/papers/14.html\">ICS\n2011</a>, <a\nhref=\"https://doi.org/10.1007/978-3-642-27375-9_3\">TOSCA\n2011</a>, <a\nhref=\"https://doi.org/10.1007/978-3-662-53641-4_1\">TCC\n2016</a>] introduces an abstract approach to composable security\nstatements that allows one to focus on a particular aspect of security\nproofs at a time. Instead of proving the properties of concrete\nsystems, CC studies system classes, i.e., the shared behavior of\nsimilar systems, and their transformations.  Modeling of systems\ncommunication plays a crucial role in composability and reusability of\nsecurity statements; yet, this aspect has not been studied in any of\nthe existing CC results. We extend our previous CC formalization\n[<a href=\"https://isa-afp.org/entries/Constructive_Cryptography.html\">Constructive_Cryptography</a>,\n<a href=\"https://doi.org/10.1109/CSF.2019.00018\">CSF\n2019</a>] with a new semantic domain called Fused Resource\nTemplates (FRT) that abstracts over the systems communication patterns\nin CC proofs. This widens the scope of cryptography proof\nformalizations in the CryptHOL library [<a\nhref=\"https://isa-afp.org/entries/CryptHOL.html\">CryptHOL</a>,\n<a\nhref=\"https://doi.org/10.1007/978-3-662-49498-1_20\">ESOP\n2016</a>, <a\nhref=\"https://doi.org/10.1007/s00145-019-09341-z\">J\nCryptol 2020</a>].  This formalization is described in <a\nhref=\"http://www.andreas-lochbihler.de/pub/basin2021.pdf\">Abstract\nModeling of Systems Communication in Constructive Cryptography using\nCryptHOL</a>.",
    "licence": "BSD",
    "dependencies": [
        "Constructive_Cryptography",
        "Game_Based_Crypto",
        "Sigma_Commit_Crypto"
    ],
    "relatedEntries": [
        "CryptHOL"
    ],
    "theories": [
        "More_CC",
        "Observe_Failure",
        "Fold_Spmf",
        "Fused_Resource",
        "State_Isomorphism",
        "Construction_Utility",
        "Concrete_Security",
        "Asymptotic_Security",
        "Key",
        "Channel",
        "One_Time_Pad",
        "Diffie_Hellman_CC",
        "DH_OTP"
    ]
}