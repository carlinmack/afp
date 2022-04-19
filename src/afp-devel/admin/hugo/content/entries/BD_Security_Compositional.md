{
    "title": "Compositional BD Security",
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
    "abstract": "\nBuilding on a previous <a\nhref=\"https://www.isa-afp.org/entries/Bounded_Deducibility_Security.html\">AFP\nentry</a> that formalizes the Bounded-Deducibility Security (BD\nSecurity) framework <a href=\"https://doi.org/10.4230/LIPIcs.ITP.2021.3\">[1]</a>,\nwe formalize compositionality and transport theorems for information\nflow security. These results allow lifting BD Security properties from\nindividual components specified as transition systems, to a\ncomposition of systems specified as communicating products of\ntransition systems. The underlying ideas of these results are\npresented in the papers <a href=\"https://doi.org/10.4230/LIPIcs.ITP.2021.3\">[1]</a>\nand <a href=\"https://doi.org/10.1109/SP.2017.24\">[2]</a>.\nThe latter paper also describes a major case study where these results\nhave been used: on verifying the CoSMeDis distributed social media\nplatform (itself formalized as an <a\nhref=\"https://www.isa-afp.org/entries/CoSMeDis.html\">AFP\nentry</a> that builds on this entry).",
    "licence": "BSD",
    "olderReleases": [],
    "dependencies": [
        "Bounded_Deducibility_Security"
    ],
    "relatedEntries": [
        "Bounded_Deducibility_Security",
        "CoSMed",
        "CoCon"
    ],
    "theories": [
        "Composing_Security",
        "Trivial_Security",
        "Transporting_Security",
        "Composing_Security_Network",
        "Independent_Secrets"
    ]
}