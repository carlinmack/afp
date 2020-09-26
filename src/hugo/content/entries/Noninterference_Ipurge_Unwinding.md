{
    "title": "The Ipurge Unwinding Theorem for CSP Noninterference Security",
    "authors": [
        "Pasquale Noce"
    ],
    "date": "2015-06-11",
    "topics": [
        "Computer science-Security"
    ],
    "abstract": "\n<p>\nThe definition of noninterference security for Communicating Sequential\nProcesses requires to consider any possible future, i.e. any indefinitely long\nsequence of subsequent events and any indefinitely large set of refused events\nassociated to that sequence, for each process trace. In order to render the\nverification of the security of a process more straightforward, there is a need\nof some sufficient condition for security such that just individual accepted and\nrefused events, rather than unbounded sequences and sets of events, have to be\nconsidered.\n</p><p>\nOf course, if such a sufficient condition were necessary as well, it would be\neven more valuable, since it would permit to prove not only that a process is\nsecure by verifying that the condition holds, but also that a process is not\nsecure by verifying that the condition fails to hold.\n</p><p>\nThis paper provides a necessary and sufficient condition for CSP noninterference\nsecurity, which indeed requires to just consider individual accepted and refused\nevents and applies to the general case of a possibly intransitive policy. This\ncondition follows Rushby's output consistency for deterministic state machines\nwith outputs, and has to be satisfied by a specific function mapping security\ndomains into equivalence relations over process traces. The definition of this\nfunction makes use of an intransitive purge function following Rushby's one;\nhence the name given to the condition, Ipurge Unwinding Theorem.\n</p><p>\nFurthermore, in accordance with Hoare's formal definition of deterministic\nprocesses, it is shown that a process is deterministic just in case it is a\ntrace set process, i.e. it may be identified by means of a trace set alone,\nmatching the set of its traces, in place of a failures-divergences pair. Then,\nvariants of the Ipurge Unwinding Theorem are proven for deterministic processes\nand trace set processes.\n</p>",
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