{
    "title": "Monad normalisation",
    "authors": [
        "Joshua Schneider",
        "Manuel Eberl",
        "Andreas Lochbihler"
    ],
    "topics": [
        "Tools",
        "Computer science-Functional programming",
        "Logic-Rewriting"
    ],
    "date": "2017-05-05",
    "notify": "mail@andreas-lochbihler.de",
    "abstract": "\nThe usual monad laws can directly be used as rewrite rules for Isabelle’s\nsimplifier to normalise monadic HOL terms and decide equivalences.\nIn a commutative monad, however, the commutativity law is a\nhigher-order permutative rewrite rule that makes the simplifier loop.\nThis AFP entry implements a simproc that normalises monadic\nexpressions in commutative monads using ordered rewriting. The\nsimproc can also permute computations across control operators like if\nand case.",
    "licence": "BSD"
}