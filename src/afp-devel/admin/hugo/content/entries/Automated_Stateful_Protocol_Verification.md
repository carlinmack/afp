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
        "Transactions",
        "Term_Abstraction",
        "Stateful_Protocol_Model",
        "Term_Variants",
        "Term_Implication",
        "Stateful_Protocol_Verification",
        "Eisbach_Protocol_Verification",
        "ml_yacc_lib",
        "files/ml-yacc-lib/base.sig",
        "files/ml-yacc-lib/join.sml",
        "files/ml-yacc-lib/lrtable.sml",
        "files/ml-yacc-lib/stream.sml",
        "files/ml-yacc-lib/parser2.sml",
        "trac_term",
        "trac_fp_parser",
        "files/trac_parser/trac_fp.grm.sig",
        "files/trac_parser/trac_fp.lex.sml",
        "files/trac_parser/trac_fp.grm.sml",
        "trac_protocol_parser",
        "files/trac_parser/trac_protocol.grm.sig",
        "files/trac_parser/trac_protocol.lex.sml",
        "files/trac_parser/trac_protocol.grm.sml",
        "trac",
        "PSPSP",
        "Keyserver",
        "Keyserver2",
        "Keyserver_Composition",
        "PKCS_Model03",
        "PKCS_Model07",
        "PKCS_Model09",
        "Examples"
    ],
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-05-20"
        }
    ]
}