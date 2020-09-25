{
    "title": "Routing",
    "authors": [
        "Julius Michaelis",
        "Cornelius Diekmann"
    ],
    "notify": "afp@liftm.de",
    "date": "2016-08-31",
    "topic": "Computer science/Networks",
    "abstract": "\nThis entry contains definitions for routing with routing\ntables/longest prefix matching.  A routing table entry is modelled as\na record of a prefix match, a metric, an output port, and an optional\nnext hop. A routing table is a list of entries, sorted by prefix\nlength and metric. Additionally, a parser and serializer for the\noutput of the ip-route command, a function to create a relation from\noutput port to corresponding destination IP space, and a model of a\nLinux-style router are included."
}