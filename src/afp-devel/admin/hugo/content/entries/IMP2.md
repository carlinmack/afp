{
    "title": "IMP2 – Simple Program Verification in Isabelle/HOL",
    "authors": [
        "Peter Lammich",
        "Simon Wimmer"
    ],
    "topics": [
        "Computer science/Programming languages/Logics",
        "Computer science/Algorithms"
    ],
    "date": "2019-01-15",
    "notify": [
        "lammich@in.tum.de"
    ],
    "abstract": "\nIMP2 is a simple imperative language together with Isabelle tooling to\ncreate a program verification environment in Isabelle/HOL. The tools\ninclude a C-like syntax, a verification condition generator, and\nIsabelle commands for the specification of programs. The framework is\nmodular, i.e., it allows easy reuse of already proved programs within\nlarger programs.  This entry comes with a quickstart guide and a large\ncollection of examples, spanning basic algorithms with simple proofs\nto more advanced algorithms and proof techniques like data refinement.\nSome highlights from the examples are: <ul> <li>Bisection\nSquare Root, </li> <li>Extended Euclid,  </li>\n<li>Exponentiation by Squaring,  </li> <li>Binary\nSearch,  </li> <li>Insertion Sort,  </li>\n<li>Quicksort,  </li> <li>Depth First Search.\n</li> </ul>  The abstract syntax and semantics are very\nsimple and well-documented. They are suitable to be used in a course,\nas extension to the IMP language which comes with the Isabelle\ndistribution.  While this entry is limited to a simple imperative\nlanguage, the ideas could be extended to more sophisticated languages.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-01-15"
        }
    ],
    "theories": [
        "IMP2"
    ]
}