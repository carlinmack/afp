{
    "title": "Formal Network Models and Their Application to Firewall Policies",
    "authors": [
        "Achim D. Brucker",
        "Lukas Brügger",
        "Burkhart Wolff"
    ],
    "topics": [
        "Computer science/Security",
        "Computer science/Networks"
    ],
    "date": "2017-01-08",
    "notify": [
        "adbrucker@0x5f.org"
    ],
    "abstract": "\nWe present a formal model of network protocols and their application\nto modeling firewall policies. The formalization is based on the\nUnified Policy Framework (UPF). The formalization was originally\ndeveloped with for generating test cases for testing the security\nconfiguration actual firewall and router (middle-boxes) using\nHOL-TestGen. Our work focuses on modeling application level protocols\non top of tcp/ip.",
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
            "2016-1": "2017-01-11"
        }
    ],
    "dependencies": [
        "UPF"
    ],
    "theories": [
        "NetworkCore",
        "DatatypeAddress",
        "DatatypePort",
        "IntegerAddress",
        "IntegerPort",
        "IntegerPort_TCPUDP",
        "IPv4",
        "IPv4_TCPUDP",
        "NetworkModels",
        "PolicyCore",
        "PolicyCombinators",
        "PortCombinators",
        "ProtocolPortCombinators",
        "Ports",
        "PacketFilter",
        "NAT",
        "FWNormalisationCore",
        "NormalisationGenericProofs",
        "NormalisationIntegerPortProof",
        "NormalisationIPPProofs",
        "ElementaryRules",
        "FWNormalisation",
        "LTL_alike",
        "StatefulCore",
        "FTP",
        "FTP_WithPolicy",
        "VOIP",
        "FTPVOIP",
        "StatefulFW",
        "UPF-Firewall",
        "DMZDatatype",
        "DMZInteger",
        "DMZ",
        "Voice_over_IP",
        "Transformation01",
        "Transformation02",
        "Transformation",
        "NAT-FW",
        "PersonalFirewallInt",
        "PersonalFirewallIpv4",
        "PersonalFirewallDatatype",
        "PersonalFirewall",
        "Examples"
    ]
}