{
    "title": "A Theory of Architectural Design Patterns",
    "authors": [
        "Diego Marmsoler"
    ],
    "topics": [
        "Computer science/System description languages"
    ],
    "date": "2018-03-01",
    "notify": [
        "diego.marmsoler@tum.de"
    ],
    "abstract": "\nThe following document formalizes and verifies several architectural\ndesign patterns. Each pattern specification is formalized in terms of\na locale where the locale assumptions correspond to the assumptions\nwhich a pattern poses on an architecture. Thus, pattern specifications\nmay build on top of each other by interpreting the corresponding\nlocale. A pattern is verified using the framework provided by the AFP\nentry Dynamic Architectures. Currently, the document consists of\nformalizations of 4 different patterns: the singleton, the publisher\nsubscriber, the blackboard pattern, and the blockchain pattern.\nThereby, the publisher component of the publisher subscriber pattern\nis modeled as an instance of the singleton pattern and the blackboard\npattern is modeled as an instance of the publisher subscriber pattern.\nIn general, this entry provides the first steps towards an overall\ntheory of architectural design patterns.",
    "extra": {
        "Change history": "[2018-05-25] changing the major assumption for blockchain architectures from alternative minings to relative mining frequencies (revision 5043c5c71685)<br>\n[2019-04-08] adapting the terminology honest instead of trusted, dishonest instead of untrusted (revision 7af3431a22ae)"
    },
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-03-01"
        }
    ],
    "dependencies": [
        "DynamicArchitectures"
    ],
    "theories": [
        "Blockchain",
        "Singleton",
        "Publisher_Subscriber",
        "Blackboard",
        "RF_LTL",
        "Auxiliary"
    ]
}