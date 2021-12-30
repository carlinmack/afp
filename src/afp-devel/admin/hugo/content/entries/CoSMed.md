{
    "title": "CoSMed: A confidentiality-verified social media platform",
    "authors": [
        "Thomas Bauereiss",
        "Andrei Popescu"
    ],
    "topics": [
        "Computer science/Security"
    ],
    "date": "2021-08-16",
    "notify": [
        "thomas@bauereiss.name",
        "a.popescu@sheffield.ac.uk"
    ],
    "abstract": "\nThis entry contains the confidentiality verification of the\n(functional kernel of) the CoSMed  social media platform. The\nconfidentiality properties are formalized as instances of BD Security\n[<a href=\"https://doi.org/10.4230/LIPIcs.ITP.2021.3\">1</a>,\n<a href=\"https://www.isa-afp.org/entries/Bounded_Deducibility_Security.html\">2</a>].\nAn innovation in the deployment of BD Security compared to previous\nwork is the use of dynamic declassification triggers, incorporated as\npart of inductive bounds, for providing stronger guarantees that\naccount for the repeated opening and closing of access windows. To\nfurther strengthen the confidentiality guarantees, we also prove\n\"traceback\" properties about the accessibility decisions\naffecting the information managed by the system.",
    "licence": "BSD",
    "olderReleases": [],
    "dependencies": [
        "Bounded_Deducibility_Security",
        "Fresh_Identifiers"
    ],
    "relatedEntries": [
        "CoCon",
        "CoSMeDis",
        "BD_Security_Compositional"
    ],
    "theories": [
        "Prelim",
        "System_Specification",
        "Automation_Setup",
        "Safety_Properties",
        "Observation_Setup",
        "Post_Intro",
        "Post_Value_Setup",
        "Post",
        "Friend_Intro",
        "Friend_Value_Setup",
        "Friend",
        "Friend_Request_Intro",
        "Friend_Request_Value_Setup",
        "Friend_Request",
        "Traceback_Intro",
        "Post_Visibility_Traceback",
        "Friend_Traceback"
    ]
}