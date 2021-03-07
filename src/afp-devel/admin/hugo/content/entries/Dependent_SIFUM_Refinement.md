{
    "title": "Compositional Security-Preserving Refinement for Concurrent Imperative Programs",
    "authors": [
        "Toby Murray",
        "Robert Sison",
        "Edward Pierzchalski",
        "Christine Rizkallah"
    ],
    "notify": [
        "toby.murray@unimelb.edu.au"
    ],
    "date": "2016-06-28",
    "topics": [
        "Computer science/Security"
    ],
    "abstract": "\nThe paper \"Compositional Verification and Refinement of Concurrent\nValue-Dependent Noninterference\" by Murray et. al. (CSF 2016) presents\na compositional theory of refinement for a value-dependent\nnoninterference property, defined in (Murray, PLAS 2015), for\nconcurrent programs. This development formalises that refinement\ntheory, and demonstrates its application on some small examples.",
    "extra": {
        "Change history": "[2016-08-19]\nRemoved unused \"stop\" parameters from the sifum_refinement locale.\n(revision dbc482d36372)\n[2016-09-02]\nTobyM extended \"simple\" refinement theory to be usable for all bisimulations.\n(revision 547f31c25f60)"
    },
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
            "2016": "2016-06-28"
        }
    ],
    "dependencies": [
        "Dependent_SIFUM_Type_Systems"
    ],
    "theories": [
        "CompositionalRefinement",
        "Eg1",
        "Eg1RefinementTrivial",
        "Eg2",
        "Eg1Eg2",
        "Eg1Eg2RefinementSimple",
        "EgHighBranchRevC"
    ],
    "relatedEntries": [
        "Dependent_SIFUM_Type_Systems"
    ]
}