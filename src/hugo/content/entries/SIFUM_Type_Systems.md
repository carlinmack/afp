{
    "title": "A Formalization of Assumptions and Guarantees for Compositional Noninterference",
    "authors": [
        "Sylvia Grewe",
        "Heiko Mantel",
        "Daniel Schoepe"
    ],
    "date": "2014-04-23",
    "topic": "Computer science/Security, Computer science/Programming languages/Type systems",
    "abstract": "Research in information-flow security aims at developing methods to\nidentify undesired information leaks within programs from private\n(high) sources to public (low) sinks. For a concurrent system, it is\ndesirable to have compositional analysis methods that allow for\nanalyzing each thread independently and that nevertheless guarantee\nthat the parallel composition of successfully analyzed threads\nsatisfies a global security guarantee. However, such a compositional\nanalysis should not be overly pessimistic about what an environment\nmight do with shared resources. Otherwise, the analysis will reject\nmany intuitively secure programs.\n<p>\nThe paper \"Assumptions and Guarantees for Compositional\nNoninterference\" by Mantel et. al. presents one solution for this problem:\nan approach for compositionally reasoning about non-interference in\nconcurrent programs via rely-guarantee-style reasoning.  We present an\nIsabelle/HOL formalization of the concepts and proofs of this approach.",
    "notify": "grewe@cs.tu-darmstadt.de"
}