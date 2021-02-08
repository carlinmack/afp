{
    "title": "Automated Stateful Protocol Verification",
    "authors": [
        "Andreas V. Hess",
        "Sebastian Mödersheim",
        "Achim D. Brucker",
        "Anders Schlichtkrull"
    ],
    "topics": [
        "Computer science/Security",
        "Tools"
    ],
    "date": "2020-04-08",
    "notify": [
        "avhe@dtu.dk",
        "andreasvhess@gmail.com",
        "samo@dtu.dk",
        "brucker@spamfence.net",
        "andschl@dtu.dk"
    ],
    "abstract": "\nIn protocol verification we observe a wide spectrum from fully\nautomated methods to interactive theorem proving with proof assistants\nlike Isabelle/HOL. In this AFP entry, we present a fully-automated\napproach for verifying stateful security protocols, i.e., protocols\nwith mutable state that may span several sessions. The approach\nsupports reachability goals like secrecy and authentication. We also\ninclude a simple user-friendly transaction-based protocol\nspecification language that is embedded into Isabelle.",
    "licence": "BSD",
    "dependencies": [
        "Stateful_Protocol_Composition_and_Typing"
    ],
    "theories": [
        "PSPSP",
        "Transactions",
        "Term_Implication",
        "Eisbach_Protocol_Verification",
        "Examples",
        "Term_Variants",
        "Term_Abstraction",
        "Stateful_Protocol_Model",
        "Stateful_Protocol_Verification"
    ]
}