{
    "title": "Verification of the Deutsch-Schorr-Waite Graph Marking Algorithm using Data Refinement",
    "authors": [
        "Viorel Preoteasa",
        "Ralph-Johan Back"
    ],
    "date": "2010-05-28",
    "topics": [
        "Computer science/Algorithms/Graph"
    ],
    "abstract": "The verification of the Deutsch-Schorr-Waite graph marking algorithm is used as a benchmark in many formalizations of pointer programs. The main purpose of this mechanization is to show how data refinement of invariant based programs can be used in verifying practical algorithms. The verification starts with an abstract algorithm working on a graph given by a relation <i>next</i> on nodes. Gradually the abstract program is refined into Deutsch-Schorr-Waite graph marking algorithm where only one bit per graph node of additional memory is used for marking.",
    "extra": {
        "Change history": "[2012-01-05] Updated for the new definition of data refinement and the new syntax for demonic and angelic update statements"
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
            "2011-1": "2012-03-15"
        },
        {
            "2011-1": "2011-10-11"
        },
        {
            "2011": "2011-02-11"
        },
        {
            "2009-2": "2010-07-01"
        },
        {
            "2009-1": "2010-05-28"
        }
    ],
    "dependencies": [
        "DataRefinementIBP"
    ],
    "theories": [
        "Graph",
        "SetMark",
        "StackMark",
        "LinkMark",
        "DSWMark"
    ],
    "relatedEntries": [
        "DataRefinementIBP"
    ]
}