{
    "title": "Formalization of Conflict Analysis of Programs with Procedures, Thread Creation, and Monitors",
    "topics": [
        "Computer science/Programming languages/Static analysis"
    ],
    "authors": [
        "Peter Lammich",
        "Markus Müller-Olm"
    ],
    "date": "2007-12-14",
    "abstract": "In this work we formally verify the soundness and precision of a static program analysis that detects conflicts (e. g. data races) in programs with procedures, thread creation and monitors with the Isabelle theorem prover. As common in static program analysis, our program model abstracts guarded branching by nondeterministic branching, but completely interprets the call-/return behavior of procedures, synchronization by monitors, and thread creation. The analysis is based on the observation that all conflicts already occur in a class of particularly restricted schedules. These restricted schedules are suited to constraint-system-based program analysis. The formalization is based upon a flowgraph-based program model with an operational semantics as reference point.",
    "notify": [
        "peter.lammich@uni-muenster.de"
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
            "2013": "2013-03-02"
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
            "2009-2": "2010-07-01"
        },
        {
            "2009-1": "2009-12-12"
        },
        {
            "2009": "2009-04-29"
        },
        {
            "2008": "2008-06-10"
        },
        {
            "2007": "2007-12-20"
        }
    ],
    "theories": [
        "MainResult",
        "Interleave",
        "ConstraintSystems",
        "ThreadTracking",
        "Normalization",
        "ConsInterleave",
        "LTS",
        "AcquisitionHistory",
        "Misc",
        "Semantics",
        "Flowgraph"
    ]
}