{
    "title": "Formalization of a Monitoring Algorithm for Metric First-Order Temporal Logic",
    "authors": [
        "Joshua Schneider",
        "Dmitriy Traytel"
    ],
    "topics": [
        "Computer science-Algorithms",
        "Logic-General logic-Temporal logic",
        "Computer science-Automata and formal languages"
    ],
    "date": "2019-07-04",
    "notify": "joshua.schneider@inf.ethz.ch, traytel@inf.ethz.ch",
    "abstract": "\nA monitor is a runtime verification tool that solves the following\nproblem: Given a stream of time-stamped events and a policy formulated\nin a specification language, decide whether the policy is satisfied at\nevery point in the stream. We verify the correctness of an executable\nmonitor for specifications given as formulas in metric first-order\ntemporal logic (MFOTL), an expressive extension of linear temporal\nlogic with real-time constraints and first-order quantification. The\nverified monitor implements a simplified variant of the algorithm used\nin the efficient MonPoly monitoring tool. The formalization is\npresented in a <a href=\"https://doi.org/10.1007/978-3-030-32079-9_18\">RV\n2019 paper</a>, which also compares the output of the verified\nmonitor to that of other monitoring tools on randomly generated\ninputs. This case study revealed several errors in the optimized but\nunverified tools.",
    "extra-history": "\nChange history:\n[2020-08-13]:\nadded the formalization of the abstract slicing framework and joint data\nslicer (revision b1639ed541b7)<br>",
    "licence": "BSD",
    "olderReleases": {
        "2019": "2019-07-05"
    }
}