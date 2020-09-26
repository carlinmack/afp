{
    "title": "Stuttering Equivalence",
    "authors": [
        "Stephan Merz"
    ],
    "topics": [
        "Computer science-Automata and formal languages"
    ],
    "date": "2012-05-07",
    "abstract": "<p>Two omega-sequences are stuttering equivalent if they differ only by finite repetitions of elements. Stuttering equivalence is a fundamental concept in the theory of concurrent and distributed systems. Notably, Lamport argues that refinement notions for such systems should be insensitive to finite stuttering. Peled and Wilke showed that all PLTL (propositional linear-time temporal logic) properties that are insensitive to stuttering equivalence can be expressed without the next-time operator. Stuttering equivalence is also important for certain verification techniques such as partial-order reduction for model checking.</p> <p>We formalize stuttering equivalence in Isabelle/HOL. Our development relies on the notion of stuttering sampling functions that may skip blocks of identical sequence elements. We also encode PLTL and prove the theorem due to Peled and Wilke.</p>",
    "extra-history": "\nChange history:\n[2013-01-31]: Added encoding of PLTL and proved Peled and Wilke's theorem. Adjusted abstract accordingly.",
    "notify": "Stephan.Merz@loria.fr",
    "licence": "BSD"
}