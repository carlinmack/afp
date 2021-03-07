{
    "title": "Formalization of Generic Authenticated Data Structures",
    "authors": [
        "Matthias Brun",
        "Dmitriy Traytel"
    ],
    "topics": [
        "Computer science/Security",
        "Computer science/Programming languages/Lambda calculi"
    ],
    "date": "2019-05-14",
    "notify": [
        "traytel@inf.ethz.ch"
    ],
    "abstract": "\nAuthenticated data structures are a technique for outsourcing data\nstorage and maintenance to an untrusted server. The server is required\nto produce an efficiently checkable and cryptographically secure proof\nthat it carried out precisely the requested computation. <a\nhref=\"https://doi.org/10.1145/2535838.2535851\">Miller et\nal.</a> introduced &lambda;&bull; (pronounced\n<i>lambda auth</i>)&mdash;a functional programming\nlanguage with a built-in primitive authentication construct, which\nsupports a wide range of user-specified authenticated data structures\nwhile guaranteeing certain correctness and security properties for all\nwell-typed programs. We formalize &lambda;&bull; and prove its\ncorrectness and security properties. With Isabelle's help, we\nuncover and repair several mistakes in the informal proofs and lemma\nstatements. Our findings are summarized in a <a\nhref=\"http://people.inf.ethz.ch/trayteld/papers/lambdaauth/lambdaauth.pdf\">paper\ndraft</a>.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-05-15"
        }
    ],
    "dependencies": [
        "Nominal2"
    ],
    "theories": [
        "Nominal2_Lemmas",
        "FMap_Lemmas",
        "Syntax",
        "Semantics",
        "Agreement",
        "Results"
    ]
}