{
    "title": "LOFT — Verified Migration of Linux Firewalls to SDN",
    "authors": [
        "Julius Michaelis",
        "Cornelius Diekmann"
    ],
    "notify": [
        "isabelleopenflow@liftm.de"
    ],
    "date": "2016-10-21",
    "topics": [
        "Computer science/Networks"
    ],
    "abstract": "\nWe present LOFT — Linux firewall OpenFlow Translator, a system that\ntransforms the main routing table and FORWARD chain of iptables of a\nLinux-based firewall into a set of static OpenFlow rules. Our\nimplementation is verified against a model of a simplified Linux-based\nrouter and we can directly show how much of the original functionality\nis preserved.",
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
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-10-21"
        }
    ],
    "dependencies": [
        "Iptables_Semantics"
    ],
    "theories": [
        "OpenFlow_Helpers",
        "Sort_Descending",
        "List_Group",
        "OpenFlow_Matches",
        "OpenFlow_Action",
        "Semantics_OpenFlow",
        "OpenFlow_Serialize",
        "Featherweight_OpenFlow_Comparison",
        "LinuxRouter_OpenFlow_Translation",
        "OF_conv_test",
        "RFC2544",
        "OpenFlow_Documentation"
    ]
}