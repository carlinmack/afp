{
    "title": "Simple Firewall",
    "authors": [
        "Cornelius Diekmann",
        "Julius Michaelis",
        "Maximilian P. L. Haslbeck"
    ],
    "notify": [
        "diekmann@net.in.tum.de",
        "max.haslbeck@gmx.de"
    ],
    "date": "2016-08-24",
    "topics": [
        "Computer science/Networks"
    ],
    "abstract": "\nWe present a simple model of a firewall. The firewall can accept or\ndrop a packet and can match on interfaces, IP addresses, protocol, and\nports. It was designed to feature nice mathematical properties: The\ntype of match expressions was carefully crafted such that the\nconjunction of two match expressions is only one match expression.\nThis model is too simplistic to mirror all aspects of the real world.\nIn the upcoming entry \"Iptables Semantics\", we will translate the\nLinux firewall iptables to this model.  For a fixed service (e.g. ssh,\nhttp), we provide an algorithm to compute an overview of the\nfirewall's filtering behavior. The algorithm computes minimal service\nmatrices, i.e. graphs which partition the complete IPv4 and IPv6\naddress space and visualize the allowed accesses between partitions.\nFor a detailed description, see\n<a href=\"http://dl.ifip.org/db/conf/networking/networking2016/1570232858.pdf\">Verified iptables Firewall\nAnalysis</a>, IFIP Networking 2016.",
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
            "2016": "2016-08-24"
        }
    ],
    "dependencies": [
        "IP_Addresses"
    ],
    "theories": [
        "Lib_Enum_toString",
        "L4_Protocol",
        "Simple_Packet",
        "Firewall_Common_Decision_State",
        "Iface",
        "SimpleFw_Syntax",
        "SimpleFw_Semantics",
        "List_Product_More",
        "Option_Helpers",
        "Generic_SimpleFw",
        "Shadowed",
        "IP_Partition_Preliminaries",
        "GroupF",
        "IP_Addr_WordInterval_toString",
        "Primitives_toString",
        "Service_Matrix",
        "SimpleFw_toString"
    ],
    "relatedEntries": [
        "Iptables_Semantics"
    ]
}