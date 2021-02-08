{
    "title": "Formalization of Concurrent Revisions",
    "authors": [
        "Roy Overbeek"
    ],
    "topics": [
        "Computer science/Concurrency"
    ],
    "date": "2018-12-25",
    "notify": [
        "Roy.Overbeek@cwi.nl"
    ],
    "abstract": "\nConcurrent revisions is a concurrency control model developed by\nMicrosoft Research. It has many interesting properties that\ndistinguish it from other well-known models such as transactional\nmemory. One of these properties is <em>determinacy</em>:\nprograms written within the model always produce the same outcome,\nindependent of scheduling activity. The concurrent revisions model has\nan operational semantics, with an informal proof of determinacy. This\ndocument contains an Isabelle/HOL formalization of this semantics and\nthe proof of determinacy.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-01-03"
        }
    ],
    "theories": [
        "Determinacy",
        "Renaming",
        "Data",
        "Executions",
        "Occurrences",
        "Substitution",
        "OperationalSemantics"
    ]
}