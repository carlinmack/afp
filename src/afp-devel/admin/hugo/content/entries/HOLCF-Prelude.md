{
    "title": "HOLCF-Prelude",
    "authors": [
        "Joachim Breitner",
        "Brian Huffman",
        "Neil Mitchell",
        "Christian Sternagel"
    ],
    "topics": [
        "Computer science/Functional programming"
    ],
    "date": "2017-07-15",
    "notify": [
        "c.sternagel@gmail.com",
        "joachim@cis.upenn.edu",
        "hupel@in.tum.de"
    ],
    "abstract": "\nThe Isabelle/HOLCF-Prelude is a formalization of a large part of\nHaskell's standard prelude in Isabelle/HOLCF. We use it to prove\nthe correctness of the Eratosthenes' Sieve, in its\nself-referential implementation commonly used to showcase\nHaskell's laziness; prove correctness of GHC's\n\"fold/build\" rule and related rewrite rules; and certify a\nnumber of hints suggested by HLint.",
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
            "2016-1": "2017-07-15"
        }
    ],
    "theories": [
        "HOLCF_Main",
        "Type_Classes",
        "Numeral_Cpo",
        "Data_Function",
        "Data_Bool",
        "Data_Tuple",
        "Data_Integer",
        "Data_List",
        "Data_Maybe",
        "Definedness",
        "List_Comprehension",
        "Num_Class",
        "HOLCF_Prelude",
        "Fibs",
        "Sieve_Primes",
        "GHC_Rewrite_Rules",
        "HLint"
    ]
}