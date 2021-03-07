{
    "title": "Iptables Semantics",
    "authors": [
        "Cornelius Diekmann",
        "Lars Hupel"
    ],
    "notify": [
        "diekmann@net.in.tum.de",
        "hupel@in.tum.de"
    ],
    "date": "2016-09-09",
    "topics": [
        "Computer science/Networks"
    ],
    "abstract": "\nWe present a big step semantics of the filtering behavior of the\nLinux/netfilter iptables firewall. We provide algorithms to simplify\ncomplex iptables rulests to a simple firewall model (c.f. AFP entry <a\nhref=\"https://www.isa-afp.org/entries/Simple_Firewall.html\">Simple_Firewall</a>)\nand to verify spoofing protection of a ruleset.\nInternally, we embed our semantics into ternary logic, ultimately\nsupporting every iptables match condition by abstracting over\nunknowns. Using this AFP entry and all entries it depends on, we\ncreated an easy-to-use, stand-alone haskell tool called <a\nhref=\"http://iptables.isabelle.systems\">fffuu</a>. The tool does not\nrequire any input &mdash;except for the <tt>iptables-save</tt> dump of\nthe analyzed firewall&mdash; and presents interesting results about\nthe user's ruleset. Real-Word firewall errors have been uncovered, and\nthe correctness of rulesets has been proved, with the help of\nour tool.",
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
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-09-09"
        }
    ],
    "dependencies": [
        "Routing",
        "Native_Word"
    ],
    "theories": [
        "List_Misc",
        "Negation_Type",
        "WordInterval_Lists",
        "Repeat_Stabilize",
        "Firewall_Common",
        "Semantics",
        "Matching",
        "Ruleset_Update",
        "Call_Return_Unfolding",
        "Ternary",
        "Matching_Ternary",
        "Semantics_Ternary",
        "Datatype_Selectors",
        "IpAddresses",
        "L4_Protocol_Flags",
        "Ports",
        "Conntrack_State",
        "Tagged_Packet",
        "Common_Primitive_Syntax",
        "Unknown_Match_Tacs",
        "Common_Primitive_Matcher_Generic",
        "Common_Primitive_Matcher",
        "Example_Semantics",
        "Alternative_Semantics",
        "Semantics_Stateful",
        "Semantics_Goto",
        "Negation_Type_DNF",
        "Matching_Embeddings",
        "Fixed_Action",
        "Normalized_Matches",
        "Negation_Type_Matching",
        "Primitive_Normalization",
        "MatchExpr_Fold",
        "Common_Primitive_Lemmas",
        "Ports_Normalize",
        "IpAddresses_Normalize",
        "Interfaces_Normalize",
        "Word_Upto",
        "Protocols_Normalize",
        "Remdups_Rev",
        "Ipassmt",
        "No_Spoof",
        "Common_Primitive_toString",
        "Routing_IpAssmt",
        "Output_Interface_Replace",
        "Interface_Replace",
        "Optimizing",
        "Transform",
        "Conntrack_State_Transform",
        "Primitive_Abstract",
        "SimpleFw_Compliance",
        "Semantics_Embeddings",
        "Iptables_Semantics",
        "Code_Interface",
        "Parser6",
        "No_Spoof_Embeddings",
        "Parser",
        "Code_haskell",
        "Access_Matrix_Embeddings",
        "Documentation"
    ]
}