{
    "title": "AI Planning Languages Semantics",
    "authors": [
        "Mohammad Abdulaziz",
        "Peter Lammich"
    ],
    "topics": [
        "Computer science/Artificial intelligence"
    ],
    "date": "2020-10-29",
    "notify": [
        "mohammad.abdulaziz8@gmail.com"
    ],
    "abstract": "\nThis is an Isabelle/HOL formalisation of the semantics of the\nmulti-valued planning tasks language that is used by the planning\nsystem Fast-Downward, the STRIPS fragment of the Planning Domain\nDefinition Language (PDDL), and the STRIPS soundness meta-theory\ndeveloped by Vladimir Lifschitz. It also contains formally verified\ncheckers for checking the well-formedness of problems specified in\neither language as well the correctness of potential solutions. The\nformalisation in this entry was described in an earlier publication.",
    "licence": "BSD",
    "dependencies": [
        "Certification_Monads",
        "Show",
        "Containers",
        "Propositional_Proof_Systems"
    ],
    "theories": [
        "Error_Monad_Add",
        "Option_Monad_Add",
        "SASP_Semantics",
        "SASP_Checker",
        "PDDL_STRIPS_Semantics",
        "PDDL_STRIPS_Checker",
        "Lifschitz_Consistency"
    ],
    "relatedEntries": [
        "XML",
        "Polynomial_Factorization"
    ],
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-10-30"
        }
    ]
}