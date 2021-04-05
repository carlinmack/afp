{
    "title": "Semantics and Data Refinement of Invariant Based Programs",
    "authors": [
        "Viorel Preoteasa",
        "Ralph-Johan Back"
    ],
    "date": "2010-05-28",
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "abstract": "The invariant based programming is a technique of constructing correct programs by first identifying the basic situations (pre- and post-conditions and invariants) that can occur during the execution of the program, and then defining the transitions and proving that they preserve the invariants. Data refinement is a technique of building correct programs working on concrete datatypes as refinements of more abstract programs. In the theories presented here we formalize the predicate transformer semantics for invariant based programs and their data refinement.",
    "extra": {
        "Change history": "[2012-01-05] Moved some general complete lattice properties to the AFP entry Lattice Properties.\nChanged the definition of the data refinement relation to be more general and updated all corresponding theorems.\nAdded new syntax for demonic and angelic update statements."
    },
    "notify": [
        "viorel.preoteasa@aalto.fi"
    ],
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
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2011-10-11"
        },
        {
            "2011": "2011-02-11"
        },
        {
            "2009-2": "2010-06-30"
        },
        {
            "2009-1": "2010-05-28"
        }
    ],
    "dependencies": [
        "LatticeProperties"
    ],
    "theories": [
        "Preliminaries",
        "Statements",
        "Hoare",
        "Diagram",
        "DataRefinement"
    ],
    "relatedEntries": [
        "GraphMarkingIBP"
    ]
}