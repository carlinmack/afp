{
    "title": "A Reduction Theorem for Store Buffers",
    "authors": [
        "Ernie Cohen",
        "Norbert Schirmer"
    ],
    "topics": [
        "Computer science/Concurrency"
    ],
    "date": "2019-01-07",
    "notify": [
        "norbert.schirmer@web.de"
    ],
    "abstract": "\nWhen verifying a concurrent program, it is usual to assume that memory\nis sequentially consistent.  However, most modern multiprocessors\ndepend on store buffering for efficiency, and provide native\nsequential consistency only at a substantial performance penalty.  To\nregain sequential consistency, a programmer has to follow an\nappropriate programming discipline. However, na&iuml;ve disciplines,\nsuch as protecting all shared accesses with locks, are not flexible\nenough for building high-performance multiprocessor software.  We\npresent a new discipline for concurrent programming under TSO (total\nstore order, with store buffer forwarding). It does not depend on\nconcurrency primitives, such as locks. Instead, threads use ghost\noperations to acquire and release ownership of memory addresses. A\nthread can write to an address only if no other thread owns it, and\ncan read from an address only if it owns it or it is shared and the\nthread has flushed its store buffer since it last wrote to an address\nit did not own. This discipline covers both coarse-grained concurrency\n(where data is protected by locks) as well as fine-grained concurrency\n(where atomic operations race to memory).  We formalize this\ndiscipline in Isabelle/HOL, and prove that if every execution of a\nprogram in a system without store buffers follows the discipline, then\nevery execution of the program with store buffers is sequentially\nconsistent. Thus, we can show sequential consistency under TSO by\nordinary assertional reasoning about the program, without having to\nconsider store buffers at all.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-01-11"
        }
    ],
    "theories": [
        "PIMP",
        "SyntaxTweaks",
        "ReduceStoreBufferSimulation",
        "Preliminaries",
        "ReduceStoreBuffer",
        "Abbrevs",
        "Text",
        "Variants"
    ]
}