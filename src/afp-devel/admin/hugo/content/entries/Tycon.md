{
    "title": "Type Constructor Classes and Monad Transformers",
    "authors": [
        "Brian Huffman"
    ],
    "date": "2012-06-26",
    "topics": [
        "Computer science/Functional programming"
    ],
    "abstract": "\nThese theories contain a formalization of first class type constructors\nand axiomatic constructor classes for HOLCF. This work is described\nin detail in the ICFP 2012 paper <i>Formal Verification of Monad\nTransformers</i> by the author. The formalization is a revised and\nupdated version of earlier joint work with Matthews and White.\n<P>\nBased on the hierarchy of type classes in Haskell, we define classes\nfor functors, monads, monad-plus, etc. Each one includes all the\nstandard laws as axioms. We also provide a new user command,\ntycondef, for defining new type constructors in HOLCF. Using tycondef,\nwe instantiate the type class hierarchy with various monads and monad\ntransformers.",
    "notify": [
        "huffman@in.tum.de"
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
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-06-28"
        }
    ],
    "theories": [
        "Writer_Transformer",
        "Maybe_Monad",
        "Monad_Plus",
        "Functor",
        "Coerce",
        "Writer_Monad",
        "Monad_Transformer",
        "Monad",
        "State_Transformer",
        "Resumption_Transformer",
        "Error_Transformer",
        "Monad_Zero_Plus",
        "Lift_Monad",
        "Binary_Tree_Monad",
        "TypeApp",
        "Lazy_List_Monad",
        "Monad_Zero",
        "Error_Monad"
    ]
}