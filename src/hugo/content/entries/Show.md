{
    "title": "Haskell's Show Class in Isabelle/HOL",
    "authors": [
        "Christian Sternagel",
        "René Thiemann"
    ],
    "date": "2014-07-29",
    "topics": [
        "Computer science-Functional programming"
    ],
    "license": "LGPL",
    "abstract": "\nWe implemented a type class for \"to-string\" functions, similar to\nHaskell's Show class. Moreover, we provide instantiations for Isabelle/HOL's\nstandard types like bool, prod, sum, nats, ints, and rats. It is further\npossible, to automatically derive show functions for arbitrary user defined\ndatatypes similar to Haskell's \"deriving Show\".",
    "extra-history": "\nChange history:\n[2015-03-11]: Adapted development to new-style (BNF-based) datatypes.<br>\n[2015-04-10]: Moved development for old-style datatypes into subdirectory\n\"Old_Datatype\".<br>",
    "notify": "christian.sternagel@uibk.ac.at, rene.thiemann@uibk.ac.at"
}