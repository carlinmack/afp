{
    "title": "Haskell's Show Class in Isabelle/HOL",
    "authors": [
        "Christian Sternagel",
        "René Thiemann"
    ],
    "date": "2014-07-29",
    "topics": [
        "Computer science/Functional programming"
    ],
    "license": "LGPL",
    "abstract": "\nWe implemented a type class for \"to-string\" functions, similar to\nHaskell's Show class. Moreover, we provide instantiations for Isabelle/HOL's\nstandard types like bool, prod, sum, nats, ints, and rats. It is further\npossible, to automatically derive show functions for arbitrary user defined\ndatatypes similar to Haskell's \"deriving Show\".",
    "extra": {
        "Change history": "[2015-03-11] Adapted development to new-style (BNF-based) datatypes.<br>\n[2015-04-10] Moved development for old-style datatypes into subdirectory\n\"Old_Datatype\".<br>"
    },
    "notify": [
        "christian.sternagel@uibk.ac.at",
        "rene.thiemann@uibk.ac.at"
    ],
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
        },
        {
            "2014": "2014-08-29"
        },
        {
            "2014": "2014-08-28"
        }
    ],
    "dependencies": [
        "Deriving"
    ],
    "theories": [
        "Show",
        "files/show_generator.ML",
        "Show_Instances",
        "Show_Poly",
        "Show_Real",
        "Show_Complex",
        "Show_Real_Impl"
    ]
}