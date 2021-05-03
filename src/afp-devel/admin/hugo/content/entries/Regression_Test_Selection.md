{
    "title": "Regression Test Selection",
    "authors": [
        "Susannah Mansky"
    ],
    "topics": [
        "Computer science/Algorithms"
    ],
    "date": "2021-04-30",
    "notify": [
        "sjohnsn2@illinois.edu",
        "susannahej@gmail.com"
    ],
    "abstract": "\nThis development provides a general definition for safe Regression\nTest Selection (RTS) algorithms. RTS algorithms select which tests to\nrerun on revised code, reducing the time required to check for newly\nintroduced errors. An RTS algorithm is considered safe if and only if\nall deselected tests would have unchanged results.  This definition is\ninstantiated with two class-collection-based RTS algorithms run over\nthe JVM as modeled by JinjaDCI. This is achieved with a general\ndefinition for Collection Semantics, small-step semantics instrumented\nto collect information during execution. As the RTS definition\nmandates safety, these instantiations include proofs of safety.  This\nwork is described in Mansky and Gunter's LSFA 2020 paper and\nMansky's doctoral thesis (UIUC, 2020).",
    "licence": "BSD",
    "dependencies": [
        "JinjaDCI"
    ]
}