{
    "title": "Declarative Semantics for Functional Languages",
    "authors": [
        "Jeremy Siek"
    ],
    "topic": "Computer science/Programming languages",
    "date": "2017-07-21",
    "notify": "jsiek@indiana.edu",
    "abstract": "\nWe present a semantics for an applied call-by-value lambda-calculus\nthat is compositional, extensional, and elementary. We present four\ndifferent views of the semantics: 1) as a relational (big-step)\nsemantics that is not operational but instead declarative, 2) as a\ndenotational semantics that does not use domain theory, 3) as a\nnon-deterministic interpreter, and 4) as a variant of the intersection\ntype systems of the Torino group.  We prove that the semantics is\ncorrect by showing that it is sound and complete with respect to\noperational semantics on programs and that is sound with respect to\ncontextual equivalence. We have not yet investigated whether it is\nfully abstract. We demonstrate that this approach to semantics is\nuseful with three case studies. First, we use the semantics to prove\ncorrectness of a compiler optimization that inlines function\napplication. Second, we adapt the semantics to the polymorphic\nlambda-calculus extended with general recursion and prove semantic\ntype soundness.  Third, we adapt the semantics to the call-by-value\nlambda-calculus with mutable references.\n<br>\nThe paper that accompanies these Isabelle theories is <a href=\"https://arxiv.org/abs/1707.03762\">available on arXiv</a>."
}