{
    "title": "Interval Arithmetic on 32-bit Words",
    "authors": [
        "Brandon Bohrer"
    ],
    "topics": [
        "Computer science/Data structures"
    ],
    "date": "2019-11-27",
    "notify": [
        "bjbohrer@gmail.com",
        "bbohrer@cs.cmu.edu"
    ],
    "abstract": "\nInterval_Arithmetic implements conservative interval arithmetic\ncomputations, then uses this interval arithmetic to implement a simple\nprogramming language where all terms have 32-bit signed word values,\nwith explicit infinities for terms outside the representable bounds.\nOur target use case is interpreters for languages that must have a\nwell-understood low-level behavior.  We include a formalization of\nbounded-length strings which are used for the identifiers of our\nlanguage. Bounded-length identifiers are useful in some applications,\nfor example the <a href=\"https://www.isa-afp.org/entries/Differential_Dynamic_Logic.html\">Differential_Dynamic_Logic</a> article,\nwhere a Euclidean space indexed by identifiers demands that identifiers\nare finitely many.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-11-28"
        }
    ],
    "dependencies": [
        "Word_Lib"
    ],
    "theories": [
        "Interpreter",
        "Finite_String",
        "Interval_Word32"
    ]
}