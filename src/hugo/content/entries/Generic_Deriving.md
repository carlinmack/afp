{
    "title": "Deriving generic class instances for datatypes",
    "authors": [
        "Jonas Rädle",
        "Lars Hupel"
    ],
    "topics": [
        "Computer science/Data structures"
    ],
    "date": "2018-11-06",
    "notify": [
        "jonas.raedle@gmail.com"
    ],
    "abstract": "\n<p>We provide a framework for automatically deriving instances for\ngeneric type classes. Our approach is inspired by Haskell's\n<i>generic-deriving</i> package and Scala's\n<i>shapeless</i> library.  In addition to generating the\ncode for type class functions, we also attempt to automatically prove\ntype class laws for these instances. As of now, however, some manual\nproofs are still required for recursive datatypes.</p>\n<p>Note: There are already articles in the AFP that provide\nautomatic instantiation for a number of classes. Concretely, <a href=\"https://www.isa-afp.org/entries/Deriving.html\">Deriving</a> allows the automatic instantiation of comparators, linear orders, equality, and hashing. <a href=\"https://www.isa-afp.org/entries/Show.html\">Show</a> instantiates a Haskell-style <i>show</i> class.</p><p>Our approach works for arbitrary classes (with some Isabelle/HOL overhead for each class), but a smaller set of datatypes.</p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-11-21"
        }
    ]
}