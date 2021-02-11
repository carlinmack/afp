{
    "title": "Formalization of an Optimized Monitoring Algorithm for Metric First-Order Dynamic Logic with Aggregations",
    "authors": [
        "Thibault Dardinier",
        "Lukas Heimes",
        "Martin Raszyk",
        "Joshua Schneider",
        "Dmitriy Traytel"
    ],
    "topics": [
        "Computer science/Algorithms",
        "Logic/General logic/Modal logic",
        "Computer science/Automata and formal languages"
    ],
    "date": "2020-04-09",
    "notify": [
        "martin.raszyk@inf.ethz.ch",
        "joshua.schneider@inf.ethz.ch",
        "traytel@inf.ethz.ch"
    ],
    "abstract": "\nA monitor is a runtime verification tool that solves the following\nproblem: Given a stream of time-stamped events and a policy formulated\nin a specification language, decide whether the policy is satisfied at\nevery point in the stream. We verify the correctness of an executable\nmonitor for specifications given as formulas in metric first-order\ndynamic logic (MFODL), which combines the features of metric\nfirst-order temporal logic (MFOTL) and metric dynamic logic. Thus,\nMFODL supports real-time constraints, first-order parameters, and\nregular expressions. Additionally, the monitor supports aggregation\noperations such as count and sum. This formalization, which is\ndescribed in a <a\nhref=\"http://people.inf.ethz.ch/trayteld/papers/ijcar20-verimonplus/verimonplus.pdf\">\nforthcoming paper at IJCAR 2020</a>, significantly extends <a\nhref=\"https://www.isa-afp.org/entries/MFOTL_Monitor.html\">previous\nwork on a verified monitor</a> for MFOTL. Apart from the\naddition of regular expressions and aggregations, we implemented <a\nhref=\"https://www.isa-afp.org/entries/Generic_Join.html\">multi-way\njoins</a> and a specialized sliding window algorithm to further\noptimize the monitor.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2020-04-12"
        },
        {
            "2019": "2020-04-11"
        }
    ],
    "dependencies": [
        "MFOTL_Monitor",
        "IEEE_Floating_Point",
        "Generic_Join"
    ],
    "theories": [
        "Monitor_Code",
        "Optimized_Join",
        "Formula",
        "Code_Double",
        "Regex",
        "Event_Data",
        "Monitor",
        "Monitor_Impl",
        "Optimized_MTL"
    ],
    "relatedEntries": [
        "MFOTL_Monitor"
    ]
}