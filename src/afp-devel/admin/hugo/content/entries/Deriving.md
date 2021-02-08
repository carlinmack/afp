{
    "title": "Deriving class instances for datatypes",
    "authors": [
        "Christian Sternagel",
        "René Thiemann"
    ],
    "date": "2015-03-11",
    "topics": [
        "Computer science/Data structures"
    ],
    "abstract": "\n<p>We provide a framework for registering automatic methods\nto derive class instances of datatypes,\nas it is possible using Haskell's ``deriving Ord, Show, ...'' feature.</p>\n<p>We further implemented such automatic methods to derive comparators, linear orders, parametrizable equality functions,\nand hash-functions which are required in the\nIsabelle Collection Framework and the Container Framework.\nMoreover, for the tactic of Blanchette to show that a datatype is countable, we implemented a\nwrapper so that this tactic becomes accessible in our framework. All of the generators are based on\nthe infrastructure that is provided by the BNF-based datatype package.</p>\n<p>Our formalization was performed as part of the <a href=\"http://cl-informatik.uibk.ac.at/software/ceta\">IsaFoR/CeTA</a> project.\nWith our new tactics we could remove\nseveral tedious proofs for (conditional) linear orders, and conditional equality operators\nwithin IsaFoR and the Container Framework.</p>",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
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
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        }
    ],
    "dependencies": [
        "Collections"
    ],
    "theories": [
        "Derive_Examples",
        "Derive",
        "Generator_Aux",
        "Derive_Manager"
    ],
    "relatedEntries": [
        "Datatype_Order_Generator"
    ]
}