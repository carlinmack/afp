{
    "title": "The Generic Unwinding Theorem for CSP Noninterference Security",
    "authors": [
        "Pasquale Noce"
    ],
    "date": "2015-06-11",
    "topics": [
        "Computer science-Security",
        "Computer science-Concurrency-Process calculi"
    ],
    "abstract": "\n<p>\nThe classical definition of noninterference security for a deterministic state\nmachine with outputs requires to consider the outputs produced by machine\nactions after any trace, i.e. any indefinitely long sequence of actions, of the\nmachine. In order to render the verification of the security of such a machine\nmore straightforward, there is a need of some sufficient condition for security\nsuch that just individual actions, rather than unbounded sequences of actions,\nhave to be considered.\n</p><p>\nBy extending previous results applying to transitive noninterference policies,\nRushby has proven an unwinding theorem that provides a sufficient condition of\nthis kind in the general case of a possibly intransitive policy. This condition\nhas to be satisfied by a generic function mapping security domains into\nequivalence relations over machine states.\n</p><p>\nAn analogous problem arises for CSP noninterference security, whose definition\nrequires to consider any possible future, i.e. any indefinitely long sequence of\nsubsequent events and any indefinitely large set of refused events associated to\nthat sequence, for each process trace.\n</p><p>\nThis paper provides a sufficient condition for CSP noninterference security,\nwhich indeed requires to just consider individual accepted and refused events\nand applies to the general case of a possibly intransitive policy. This\ncondition follows Rushby's one for classical noninterference security, and has\nto be satisfied by a generic function mapping security domains into equivalence\nrelations over process traces; hence its name, Generic Unwinding Theorem.\nVariants of this theorem applying to deterministic processes and trace set\nprocesses are also proven. Finally, the sufficient condition for security\nexpressed by the theorem is shown not to be a necessary condition as well, viz.\nthere exists a secure process such that no domain-relation map satisfying the\ncondition exists.\n</p>",
    "notify": "",
    "licence": "BSD",
    "olderReleases": {
        "2015": "2015-06-13",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}