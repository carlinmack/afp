{
    "title": "Finger Trees",
    "authors": [
        "Benedikt Nordhoff",
        "Stefan Körner",
        "Peter Lammich"
    ],
    "date": "2010-10-28",
    "topics": [
        "Computer science-Data structures"
    ],
    "abstract": "\nWe implement and prove correct 2-3 finger trees.\nFinger trees are a general purpose data structure, that can be used to\nefficiently implement other data structures, such as priority queues.\nIntuitively, a finger tree is an annotated sequence, where the annotations are\nelements of a monoid. Apart from operations to access the ends of the sequence,\nthe main operation is to split the sequence at the point where a\n<em>monotone predicate</em> over the sum of the left part of the sequence\nbecomes true for the first time.\nThe implementation follows the paper of Hinze and Paterson.\nThe code generator can be used to get efficient, verified code.",
    "notify": "peter.lammich@uni-muenster.de"
}