{
    "title": "First-Order Terms",
    "authors": [
        "Christian Sternagel",
        "René Thiemann"
    ],
    "topics": [
        "Logic/Rewriting",
        "Computer science/Algorithms"
    ],
    "license": "LGPL",
    "date": "2018-02-06",
    "notify": [
        "c.sternagel@gmail.com",
        "rene.thiemann@uibk.ac.at"
    ],
    "abstract": "\nWe formalize basic results on first-order terms, including matching and a\nfirst-order unification algorithm, as well as well-foundedness of the\nsubsumption order. This entry is part of the <i>Isabelle\nFormalization of Rewriting</i> <a\nhref=\"http://cl-informatik.uibk.ac.at/isafor\">IsaFoR</a>,\nwhere first-order terms are omni-present: the unification algorithm is\nused to certify several confluence and termination techniques, like\ncritical-pair computation and dependency graph approximations; and the\nsubsumption order is a crucial ingredient for completion.",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-02-07"
        },
        {
            "2017": "2018-02-06"
        }
    ],
    "dependencies": [
        "Abstract-Rewriting"
    ],
    "theories": [
        "Abstract_Unification",
        "Unification",
        "Seq_More",
        "Option_Monad",
        "Transitive_Closure_More",
        "Term_Pair_Multiset",
        "Matching",
        "Fun_More",
        "Subsumption",
        "Abstract_Matching",
        "Unifiers",
        "Term"
    ]
}