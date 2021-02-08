{
    "title": "IP Addresses",
    "authors": [
        "Cornelius Diekmann",
        "Julius Michaelis",
        "Lars Hupel"
    ],
    "notify": [
        "diekmann@net.in.tum.de"
    ],
    "date": "2016-06-28",
    "topics": [
        "Computer science/Networks"
    ],
    "abstract": "\nThis entry contains a definition of IP addresses and a library to work\nwith them.  Generic IP addresses are modeled as machine words of\narbitrary length. Derived from this generic definition, IPv4 addresses\nare 32bit machine words, IPv6 addresses are 128bit words.\nAdditionally, IPv4 addresses can be represented in dot-decimal\nnotation and IPv6 addresses in (compressed) colon-separated notation.\nWe support toString functions and parsers for both notations. Sets of\nIP addresses can be represented with a netmask (e.g.\n192.168.0.0/255.255.0.0) or in CIDR notation (e.g. 192.168.0.0/16). To\nprovide executable code for set operations on IP address ranges, the\nlibrary includes a datatype to work on arbitrary intervals of machine\nwords.",
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
            "2016": "2016-06-28"
        }
    ],
    "dependencies": [
        "Word_Lib",
        "Automatic_Refinement"
    ],
    "theories": [
        "Prefix_Match_toString",
        "IPv6",
        "Prefix_Match",
        "IP_Address",
        "Hs_Compat",
        "CIDR_Split",
        "Lib_Word_toString",
        "NumberWang_IPv6",
        "NumberWang_IPv4",
        "WordInterval_Sorted",
        "Lib_List_toString",
        "IPv4",
        "WordInterval",
        "Lib_Numbers_toString",
        "IP_Address_Parser",
        "IP_Address_toString"
    ]
}