{
    "title": "Residuated Transition Systems",
    "authors": [
        "Eugene W. Stark"
    ],
    "topics": [
        "Computer science/Automata and formal languages",
        "Computer science/Concurrency",
        "Computer science/Programming languages/Lambda calculi"
    ],
    "date": "2022-02-28",
    "notify": [
        "stark@cs.stonybrook.edu"
    ],
    "abstract": "\n<p> A <em>residuated transition system</em> (RTS) is\na transition system that is equipped with a certain partial binary\noperation, called <em>residuation</em>, on transitions.\nUsing the residuation operation, one can express nuances, such as a\ndistinction between nondeterministic and concurrent choice, as well as\npartial commutativity relationships between transitions, which are not\ncaptured by ordinary transition systems. A version of residuated\ntransition systems was introduced in previous work by the author, in\nwhich they were called “concurrent transition systems” in view of the\noriginal motivation for their definition from the study of\nconcurrency. In the first part of the present article, we give a\nformal development that generalizes and subsumes the original\npresentation. We give an axiomatic definition of residuated transition\nsystems that assumes only a single partial binary operation as given\nstructure. From the axioms, we derive notions of “arrow“ (transition),\n“source”, “target”, “identity”, as well as “composition” and “join” of\ntransitions; thereby recovering structure that in the previous work\nwas assumed as given. We formalize and generalize the result, that\nresiduation extends from transitions to transition paths, and we\nsystematically develop the properties of this extension. A significant\ngeneralization made in the present work is the identification of a\ngeneral notion of congruence on RTS’s, along with an associated\nquotient construction. </p> <p> In the second part of this\narticle, we use the RTS framework to formalize several results in the\ntheory of reduction in Church’s λ-calculus. Using a de Bruijn\nindex-based syntax in which terms represent parallel reduction steps,\nwe define residuation on terms and show that it satisfies the axioms\nfor an RTS. An application of the results on paths from the first part\nof the article allows us to prove the classical Church-Rosser Theorem\nwith little additional effort. We then use residuation to define the\nnotion of “development” and we prove the Finite Developments Theorem,\nthat every development is finite, formalizing and adapting to de\nBruijn indices a proof by de Vrijer. We also use residuation to define\nthe notion of a “standard reduction path”, and we prove the\nStandardization Theorem: that every reduction path is congruent to a\nstandard one. As a corollary of the Standardization Theorem, we obtain\nthe Leftmost Reduction Theorem: that leftmost reduction is a\nnormalizing strategy. </p>",
    "licence": "BSD",
    "theories": [
        "ResiduatedTransitionSystem",
        "LambdaCalculus"
    ]
}