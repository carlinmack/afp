{
    "title": "Effect polymorphism in higher-order logic",
    "authors": [
        "Andreas Lochbihler"
    ],
    "topics": [
        "Computer science-Functional programming"
    ],
    "date": "2017-05-05",
    "notify": "mail@andreas-lochbihler.de",
    "abstract": "\nThe notion of a monad cannot be expressed within higher-order logic\n(HOL) due to type system restrictions. We show that if a monad is used\nwith values of only one type, this notion can be formalised in HOL.\nBased on this idea, we develop a library of effect specifications and\nimplementations of monads and monad transformers. Hence, we can\nabstract over the concrete monad in HOL definitions and thus use the\nsame definition for different (combinations of) effects. We illustrate\nthe usefulness of effect polymorphism with a monadic interpreter for a\nsimple language.",
    "extra-history": "\nChange history:\n[2018-02-15]:\nadded further specifications and implementations of non-determinism;\nmore examples\n(revision bc5399eea78e)<br>",
    "licence": "BSD",
    "olderReleases": {
        "2016-1": "2017-05-11",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}