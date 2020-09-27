{
    "title": "A Fully Verified Executable LTL Model Checker",
    "authors": [
        "Javier Esparza",
        "Peter Lammich",
        "René Neumann",
        "Tobias Nipkow",
        "Alexander Schimpf",
        "Jan-Georg Smaus"
    ],
    "date": "2014-05-28",
    "topics": [
        "Computer science/Automata and formal languages"
    ],
    "abstract": "\nWe present an LTL model checker whose code has been completely verified\nusing the Isabelle theorem prover. The checker consists of over 4000\nlines of ML code. The code is produced using the Isabelle Refinement\nFramework, which allows us to split its correctness proof into (1) the\nproof of an abstract version of the checker, consisting of a few hundred\nlines of ``formalized pseudocode'', and (2) a verified refinement step\nin which mathematical sets and other abstract structures are replaced by\nimplementations of efficient structures like red-black trees and\nfunctional arrays. This leads to a checker that,\nwhile still slower than unverified checkers, can already be used as a\ntrusted reference implementation against which advanced implementations\ncan be tested.\n<p>\nAn early version of this model checker is described in the\n<a href=\"http://www21.in.tum.de/~nipkow/pubs/cav13.html\">CAV 2013 paper</a>\nwith the same title.",
    "notify": [
        "lammich@in.tum.de"
    ],
    "licence": "BSD",
    "olderReleases": {
        "2013-2": "2014-05-30",
        "2014": "2014-08-28",
        "2015": "2015-05-27",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    },
    "dependencies": [
        "CAVA_Automata",
        "SM_Base",
        "CAVA_Automata",
        "CAVA_Setup",
        "Partial_Order_Reduction",
        "DFS_Framework"
    ]
}