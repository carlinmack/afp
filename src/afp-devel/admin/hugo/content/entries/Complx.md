{
    "title": "COMPLX: A Verification Framework for Concurrent Imperative Programs",
    "authors": [
        "Sidney Amani",
        "June Andronick",
        "Maksym Bortin",
        "Corey Lewis",
        "Christine Rizkallah",
        "Joseph Tuong"
    ],
    "notify": [
        "sidney.amani@data61.csiro.au",
        "corey.lewis@data61.csiro.au"
    ],
    "date": "2016-11-29",
    "topics": [
        "Computer science/Programming languages/Logics",
        "Computer science/Programming languages/Language definitions"
    ],
    "abstract": "\nWe propose a concurrency reasoning framework for imperative programs,\nbased on the Owicki-Gries (OG) foundational shared-variable\nconcurrency method. Our framework combines the approaches of\nHoare-Parallel, a formalisation of OG in Isabelle/HOL for a simple\nwhile-language, and Simpl, a generic imperative language embedded in\nIsabelle/HOL, allowing formal reasoning on C programs. We define the\nComplx language, extending the syntax and semantics of Simpl with\nsupport for parallel composition and synchronisation. We additionally\ndefine an OG logic, which we prove sound w.r.t. the  semantics, and a\nverification condition generator, both supporting involved low-level\nimperative constructs such as function calls and abrupt termination.\nWe illustrate our framework on an example that features exceptions,\nguards and function calls.  We aim to then target concurrent operating\nsystems, such as the interruptible eChronos embedded operating system\nfor which we already have a model-level OG proof using Hoare-Parallel.",
    "extra": {
        "Change history": "[2017-01-13]\nImprove VCG for nested parallels and sequential sections\n(revision 30739dbc3dcb)"
    },
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
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-11-29"
        }
    ],
    "dependencies": [
        "Word_Lib"
    ],
    "theories": [
        "Language",
        "SmallStep",
        "OG_Annotations",
        "OG_Hoare",
        "SeqCatch_decomp",
        "OG_Soundness",
        "Cache_Tactics",
        "OG_Tactics",
        "OG_Syntax",
        "Examples",
        "SumArr"
    ],
    "relatedEntries": [
        "Simpl"
    ]
}