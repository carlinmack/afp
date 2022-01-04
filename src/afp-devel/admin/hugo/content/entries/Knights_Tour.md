{
    "title": "Knight's Tour Revisited Revisited",
    "authors": [
        "Lukas Koller"
    ],
    "topics": [
        "Mathematics/Graph theory"
    ],
    "date": "2022-01-04",
    "notify": [
        "lukas.koller@tum.de"
    ],
    "abstract": "\nThis is a formalization of the article \"Knight's Tour Revisited\" by\nCull and De Curtins where they prove the existence of a Knight's\npath for arbitrary <i>n &times; m</i>-boards with <i>min(n,m) &le;\n5</i>. If <i>n &middot; m</i> is even, then there exists a Knight's\ncircuit.  A Knight's Path is a sequence of moves of a Knight on a\nchessboard s.t. the Knight visits every square of a chessboard\nexactly once.  Finding a Knight's path is a an instance of the\nHamiltonian path problem. A Knight's circuit is a Knight's path,\nwhere additionally the Knight can move from the last square to the\nfirst square of the path, forming a loop.  During the formalization\ntwo mistakes in the original proof were discovered. These mistakes\nare corrected in this formalization.",
    "licence": "BSD",
    "theories": [
        "KnightsTour"
    ]
}