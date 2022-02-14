{
    "title": "Multi-Head Monitoring of Metric Dynamic Logic",
    "authors": [
        "Martin Raszyk"
    ],
    "topics": [
        "Computer science/Algorithms"
    ],
    "date": "2022-02-13",
    "notify": [
        "m.raszyk@gmail.com"
    ],
    "abstract": "\nRuntime monitoring (or runtime verification) is an approach to\nchecking compliance of a system's execution with a specification\n(e.g., a temporal query). The system's execution is logged into a\ntrace---a sequence of time-points, each consisting of a time-stamp and\nobserved events. A monitor is an algorithm that produces verdicts on\nthe satisfaction of a temporal query on a trace.  We formalize a\nmonitoring algorithm for metric dynamic logic, an extension of metric\ntemporal logic with regular expressions. The monitor computes whether\na given query is satisfied at every position in an input trace of\ntime-stamped events. We formalize the time-stamps as an abstract\nalgebraic structure satisfying certain assumptions. Instances of this\nstructure include natural numbers, real numbers, and lexicographic\ncombinations of them. Our monitor follows the multi-head paradigm: it\nreads the input simultaneously at multiple positions and moves its\nreading heads asynchronously. This mode of operation results in\nunprecedented time and space complexity guarantees for metric dynamic\nlogic: The monitor's amortized time complexity to process a\ntime-point and the monitor's space complexity neither depends on\nthe event-rate, i.e., the number of events within a fixed time-unit,\nnor on the numeric constants occurring in the quantitative temporal\nconstraints in the given query.  The multi-head monitoring algorithm\nfor metric dynamic logic is reported in our paper \"Multi-Head\nMonitoring of Metric Dynamic Logic\" published at ATVA 2020. We\nhave also formalized unpublished specialized algorithms for the\ntemporal operators of metric temporal logic.",
    "licence": "BSD",
    "dependencies": [
        "Containers"
    ],
    "relatedEntries": [
        "MFOTL_Monitor"
    ],
    "theories": [
        "Timestamp",
        "Interval",
        "Trace",
        "MDL",
        "NFA",
        "Window",
        "Temporal",
        "Monitor",
        "Preliminaries",
        "Monitor_Code",
        "Timestamp_Lex",
        "Timestamp_Lex_Total",
        "Timestamp_Prod"
    ]
}