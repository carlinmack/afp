{
    "title": "The Unified Policy Framework (UPF)",
    "authors": [
        "Achim D. Brucker",
        "Lukas Brügger",
        "Burkhart Wolff"
    ],
    "date": "2014-11-28",
    "topics": [
        "Computer science/Security"
    ],
    "abstract": "\nWe present the Unified Policy Framework (UPF), a generic framework\nfor modelling security (access-control) policies. UPF emphasizes\nthe view that a policy is a policy decision function that grants or\ndenies access to resources, permissions, etc. In other words,\ninstead of modelling the relations of permitted or prohibited\nrequests directly, we model the concrete function that implements\nthe policy decision point in a system.  In more detail, UPF is\nbased on the following four principles: 1) Functional representation\nof policies, 2) No conflicts are possible, 3) Three-valued decision\ntype (allow, deny, undefined), 4) Output type not containing the\ndecision only.",
    "notify": [
        "adbrucker@0x5f.org",
        "wolff@lri.fr",
        "lukas.a.bruegger@gmail.com"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
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
            "2014": "2015-01-28"
        },
        {
            "2014": "2014-11-30"
        }
    ],
    "theories": [
        "Monads",
        "UPFCore",
        "ElementaryPolicies",
        "SeqComposition",
        "ParallelComposition",
        "Normalisation",
        "NormalisationTestSpecification",
        "Analysis",
        "UPF",
        "Service",
        "ServiceExample"
    ]
}