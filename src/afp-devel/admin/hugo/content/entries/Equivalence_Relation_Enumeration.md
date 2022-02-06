{
    "title": "Enumeration of Equivalence Relations",
    "authors": [
        "Emin Karayel"
    ],
    "topics": [
        "Mathematics/Combinatorics",
        "Computer science/Algorithms/Mathematical"
    ],
    "date": "2022-02-04",
    "notify": [
        "me@eminkarayel.de"
    ],
    "abstract": "\n<p>This entry contains a formalization of an algorithm\nenumerating all equivalence relations on an initial segment of the\nnatural numbers. The approach follows the method described by Stanton\nand White <a\nhref=\"https://doi.org/10.1007/978-1-4612-4968-9\">[5,§\n1.5]</a> using restricted growth functions.</p>\n<p>The algorithm internally enumerates restricted growth\nfunctions (as lists), whose equivalence kernels then form the\nequivalence relations. This has the advantage that the representation\nis compact and lookup of the relation reduces to a list lookup\noperation.</p> <p>The algorithm can also be used within a\nproof and an example application is included, where a sequence of\nvariables is split by the possible partitions they can form.</p>",
    "licence": "BSD",
    "dependencies": [
        "Card_Equiv_Relations"
    ],
    "theories": [
        "Equivalence_Relation_Enumeration"
    ]
}