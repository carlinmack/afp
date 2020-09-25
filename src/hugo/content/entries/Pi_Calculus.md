{
    "title": "The pi-calculus in nominal logic",
    "authors": [
        "Jesper Bengtson"
    ],
    "date": "2012-05-29",
    "topics": [
        "Computer science-Concurrency-Process calculi"
    ],
    "abstract": "We formalise the pi-calculus using the nominal datatype package, based on ideas from the nominal logic by Pitts et al., and demonstrate an implementation in Isabelle/HOL. The purpose is to derive powerful induction rules for the semantics in order to conduct machine checkable proofs, closely following the intuitive arguments found in manual proofs. In this way we have covered many of the standard theorems of bisimulation equivalence and congruence, both late and early, and both strong and weak in a uniform manner. We thus provide one of the most extensive formalisations of a the pi-calculus ever done inside a theorem prover.\n<p>\nA significant gain in our formulation is that agents are identified up to alpha-equivalence, thereby greatly reducing the arguments about bound names. This is a normal strategy for manual proofs about the pi-calculus, but that kind of hand waving has previously been difficult to incorporate smoothly in an interactive theorem prover. We show how the nominal logic formalism and its support in Isabelle accomplishes this and thus significantly reduces the tedium of conducting completely formal proofs. This improves on previous work using weak higher order abstract syntax since we do not need extra assumptions to filter out exotic terms and can keep all arguments within a familiar first-order logic.\n<p>\nThis entry is described in detail in <a href=\"http://www.itu.dk/people/jebe/files/thesis.pdf\">Bengtson's thesis</a>.",
    "notify": ""
}