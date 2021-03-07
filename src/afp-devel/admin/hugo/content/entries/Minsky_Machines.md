{
    "title": "Minsky Machines",
    "authors": [
        "Bertram Felgenhauer"
    ],
    "topics": [
        "Logic/Computability"
    ],
    "date": "2018-08-14",
    "notify": [
        "int-e@gmx.de"
    ],
    "abstract": "\n<p> We formalize undecidablity results for Minsky machines. To\nthis end, we also formalize recursive inseparability.\n</p><p> We start by proving that Minsky machines can\ncompute arbitrary primitive recursive and recursive functions. We then\nshow that there is a deterministic Minsky machine with one argument\nand two final states such that the set of inputs that are accepted in\none state is recursively inseparable from the set of inputs that are\naccepted in the other state. </p><p> As a corollary, the\nset of Minsky configurations that reach the first state but not the\nsecond recursively inseparable from the set of Minsky configurations\nthat reach the second state but not the first. In particular both\nthese sets are undecidable. </p><p> We do\n<em>not</em> prove that recursive functions can simulate\nMinsky machines. </p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-08-14"
        }
    ],
    "dependencies": [
        "Abstract-Rewriting",
        "Recursion-Theory-I"
    ],
    "theories": [
        "Recursive_Inseparability",
        "Minsky"
    ]
}