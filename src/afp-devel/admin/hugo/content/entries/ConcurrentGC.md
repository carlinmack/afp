{
    "title": "Relaxing Safely: Verified On-the-Fly Garbage Collection for x86-TSO",
    "authors": [
        "Peter Gammie",
        "Tony Hosking",
        "Kai Engelhardt"
    ],
    "date": "2015-04-13",
    "topics": [
        "Computer science/Algorithms/Concurrent"
    ],
    "abstract": "\n<p>\nWe use ConcurrentIMP to model Schism, a state-of-the-art real-time\ngarbage collection scheme for weak memory, and show that it is safe\non x86-TSO.</p>\n<p>\nThis development accompanies the PLDI 2015 paper of the same name.\n</p>",
    "notify": [
        "peteg42@gmail.com"
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
            "2014": "2015-04-15"
        }
    ],
    "dependencies": [
        "ConcurrentIMP"
    ],
    "theories": [
        "Model",
        "Proofs_Basis",
        "Global_Invariants",
        "Local_Invariants",
        "Tactics",
        "Global_Invariants_Lemmas",
        "Local_Invariants_Lemmas",
        "Initial_Conditions",
        "Noninterference",
        "Global_Noninterference",
        "MarkObject",
        "Phases",
        "StrongTricolour",
        "TSO",
        "Valid_Refs",
        "Worklists",
        "Proofs",
        "Concrete_heap",
        "Concrete"
    ]
}