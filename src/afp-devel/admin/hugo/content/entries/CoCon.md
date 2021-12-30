{
    "title": "CoCon: A Confidentiality-Verified Conference Management System",
    "authors": [
        "Andrei Popescu",
        "Peter Lammich",
        "Thomas Bauereiss"
    ],
    "topics": [
        "Computer science/Security"
    ],
    "date": "2021-08-16",
    "notify": [
        "thomas@bauereiss.name",
        "a.popescu@sheffield.ac.uk"
    ],
    "abstract": "\nThis entry contains the confidentiality verification of the\n(functional kernel of) the CoCon conference management system [<a\nhref=\"https://doi.org/10.1007/978-3-319-08867-9_11\">1</a>,\n<a href=\"https://doi.org/10.1007/s10817-020-09566-9\">2</a>].\nThe confidentiality properties refer to the documents managed by the\nsystem, namely papers, reviews, discussion logs and\nacceptance/rejection decisions, and also to the assignment of\nreviewers to papers. They have all been formulated as instances of BD\nSecurity [<a href=\"https://doi.org/10.4230/LIPIcs.ITP.2021.3\">3</a>,\n<a href=\"https://www.isa-afp.org/entries/Bounded_Deducibility_Security.html\">4</a>]\nand verified using the BD Security unwinding technique.",
    "licence": "BSD",
    "olderReleases": [],
    "dependencies": [
        "Bounded_Deducibility_Security",
        "Fresh_Identifiers"
    ],
    "relatedEntries": [
        "CoSMed",
        "CoSMeDis",
        "BD_Security_Compositional"
    ],
    "theories": [
        "Prelim",
        "System_Specification",
        "Automation_Setup",
        "Safety_Properties",
        "Observation_Setup",
        "Paper_Intro",
        "Paper_Value_Setup",
        "Paper_Aut_PC",
        "Paper_Aut",
        "Paper_All",
        "Review_Intro",
        "Review_Value_Setup",
        "Review_RAut",
        "Review_RAut_NCPC",
        "Review_RAut_NCPC_PAut",
        "Review_All",
        "Discussion_Intro",
        "Discussion_Value_Setup",
        "Discussion_NCPC",
        "Discussion_All",
        "Decision_Intro",
        "Decision_Value_Setup",
        "Decision_NCPC",
        "Decision_NCPC_Aut",
        "Decision_All",
        "Reviewer_Assignment_Intro",
        "Reviewer_Assignment_Value_Setup",
        "Reviewer_Assignment_NCPC",
        "Reviewer_Assignment_NCPC_Aut",
        "Reviewer_Assignment_All",
        "Traceback_Properties",
        "All_BD_Security_Instances_for_CoCon"
    ]
}