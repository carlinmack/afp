{
    "title": "The Safety of Call Arity",
    "authors": [
        "Joachim Breitner"
    ],
    "date": "2015-02-20",
    "topics": [
        "Computer science-Programming languages-Transformations"
    ],
    "abstract": "\nWe formalize the Call Arity analysis, as implemented in GHC, and prove\nboth functional correctness and, more interestingly, safety (i.e. the\ntransformation does not increase allocation).\n<p>\nWe use syntax and the denotational semantics from the entry\n\"Launchbury\", where we formalized Launchbury's natural semantics for\nlazy evaluation.\n<p>\nThe functional correctness of Call Arity is proved with regard to that\ndenotational semantics. The operational properties are shown with\nregard to a small-step semantics akin to Sestoft's mark 1 machine,\nwhich we prove to be equivalent to Launchbury's semantics.\n<p>\nWe use Christian Urban's Nominal2 package to define our terms and make\nuse of Brian Huffman's HOLCF package for the domain-theoretical\naspects of the development.",
    "extra-history": "\nChange history:\n[2015-03-16]: This entry now builds on top of the Launchbury entry,\nand the equivalency proof of the natural and the small-step semantics\nwas added.",
    "notify": "",
    "licence": "BSD",
    "olderReleases": {
        "2014": "2015-05-11",
        "2015": "2015-05-27",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}