{
    "title": "Root-Balanced Tree",
    "authors": [
        "Tobias Nipkow"
    ],
    "notify": [
        "nipkow@in.tum.de"
    ],
    "date": "2017-08-20",
    "topics": [
        "Computer science/Data structures"
    ],
    "abstract": "\n<p>\nAndersson introduced <em>general balanced trees</em>,\nsearch trees based on the design principle of partial rebuilding:\nperform update operations naively until the tree becomes too\nunbalanced, at which point a whole subtree is rebalanced.  This article\ndefines and analyzes a functional version of general balanced trees,\nwhich we call <em>root-balanced trees</em>. Using a lightweight model\nof execution time, amortized logarithmic complexity is verified in\nthe theorem prover Isabelle.\n</p>\n<p>\nThis is the Isabelle formalization of the material decribed in the APLAS 2017 article\n<a href=\"http://www21.in.tum.de/~nipkow/pubs/aplas17.html\">Verified Root-Balanced Trees</a>\nby the same author, which also presents experimental results that show\ncompetitiveness of root-balanced with AVL and red-black trees.\n</p>",
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
            "2016-1": "2017-08-20"
        }
    ],
    "dependencies": [
        "Amortized_Complexity"
    ],
    "theories": [
        "Root_Balanced_Tree",
        "Root_Balanced_Tree_Tab",
        "Time_Monad"
    ]
}