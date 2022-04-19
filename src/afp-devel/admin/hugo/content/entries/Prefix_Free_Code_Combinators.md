{
    "title": "A Combinator Library for Prefix-Free Codes",
    "authors": [
        "Emin Karayel"
    ],
    "topics": [
        "Computer science/Algorithms",
        "Computer science/Data structures"
    ],
    "date": "2022-04-08",
    "notify": [
        "me@eminkarayel.de"
    ],
    "abstract": "\nThis entry contains a set of binary encodings for primitive data\ntypes, such as natural numbers, integers, floating-point numbers as\nwell as combinators to construct encodings for products, lists, sets\nor functions of/between such types.  For natural numbers and integers,\nthe entry contains various encodings, such as Elias-Gamma-Codes and\nexponential Golomb Codes, which are efficient variable-length codes in\nuse by current compression formats.  A use-case for this library is\nmeasuring the persisted size of a complex data structure without\nhaving to hand-craft a dedicated encoding for it, independent of\nIsabelle's internal representation.",
    "licence": "BSD",
    "theories": [
        "Prefix_Free_Code_Combinators",
        "Examples"
    ]
}