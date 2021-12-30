{
    "title": "A Definitional Encoding of TLA* in Isabelle/HOL",
    "authors": [
        "Gudmund Grov",
        "Stephan Merz"
    ],
    "date": "2011-11-19",
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "abstract": "We mechanise the logic TLA*\n<a href=\"http://www.springerlink.com/content/ax3qk557qkdyt7n6/\">[Merz 1999]</a>,\nan extension of Lamport's  Temporal Logic of Actions (TLA)\n<a href=\"http://dl.acm.org/citation.cfm?doid=177492.177726\">[Lamport 1994]</a>\nfor specifying and reasoning\nabout concurrent and reactive systems. Aiming at a framework for mechanising]  the verification of TLA (or TLA*) specifications, this contribution reuses\nsome elements from a previous axiomatic encoding of TLA in Isabelle/HOL\nby the second author [Merz 1998], which has been part of the Isabelle\ndistribution. In contrast to that previous work, we give here a shallow,\ndefinitional embedding, with the following highlights:\n<ul>\n<li>a theory of infinite sequences, including a formalisation of the concepts of stuttering invariance central to TLA and TLA*;\n<li>a definition of the semantics of TLA*, which extends TLA by a mutually-recursive definition of formulas and pre-formulas, generalising TLA action formulas;\n<li>a substantial set of derived proof rules, including the TLA* axioms and Lamport's proof rules for system verification;\n<li>a set of examples illustrating the usage of Isabelle/TLA* for reasoning about systems.\n</ul>\nNote that this work is unrelated to the ongoing development of a proof system\nfor the specification language TLA+, which includes an encoding of TLA+ as a\nnew Isabelle object logic <a href=\"http://www.springerlink.com/content/354026160p14j175/\">[Chaudhuri et al 2010]</a>.",
    "notify": [
        "ggrov@inf.ed.ac.uk"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
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
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-03-02"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2011-11-27"
        }
    ],
    "theories": [
        "Sequence",
        "Intensional",
        "Semantics",
        "PreFormulas",
        "Rules",
        "Liveness",
        "State",
        "Even",
        "Inc",
        "Buffer"
    ]
}