{
    "title": "IP Addresses",
    "authors": [
        "Cornelius Diekmann",
        "Julius Michaelis",
        "Lars Hupel"
    ],
    "notify": "diekmann@net.in.tum.de",
    "date": "2016-06-28",
    "topic": "Computer science/Networks",
    "abstract": "\nThis entry contains a definition of IP addresses and a library to work\nwith them.  Generic IP addresses are modeled as machine words of\narbitrary length. Derived from this generic definition, IPv4 addresses\nare 32bit machine words, IPv6 addresses are 128bit words.\nAdditionally, IPv4 addresses can be represented in dot-decimal\nnotation and IPv6 addresses in (compressed) colon-separated notation.\nWe support toString functions and parsers for both notations. Sets of\nIP addresses can be represented with a netmask (e.g.\n192.168.0.0/255.255.0.0) or in CIDR notation (e.g. 192.168.0.0/16). To\nprovide executable code for set operations on IP address ranges, the\nlibrary includes a datatype to work on arbitrary intervals of machine\nwords."
}