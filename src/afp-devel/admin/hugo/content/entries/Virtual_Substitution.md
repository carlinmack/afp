{
    "title": "Verified Quadratic Virtual Substitution for Real Arithmetic",
    "authors": [
        "Matias Scharager",
        "Katherine Cordwell",
        "Stefan Mitsch",
        "André Platzer"
    ],
    "topics": [
        "Computer science/Algorithms/Mathematical"
    ],
    "date": "2021-10-02",
    "notify": [
        "mscharag@cs.cmu.edu",
        "kcordwel@cs.cmu.edu",
        "smitsch@cs.cmu.edu",
        "aplatzer@cs.cmu.edu"
    ],
    "abstract": "\nThis paper presents a formally verified quantifier elimination (QE)\nalgorithm for first-order real arithmetic by linear and quadratic\nvirtual substitution (VS) in Isabelle/HOL. The Tarski-Seidenberg\ntheorem established that the first-order logic of real arithmetic is\ndecidable by QE. However, in practice, QE algorithms are highly\ncomplicated and often combine multiple methods for performance. VS is\na practically successful method for QE that targets formulas with\nlow-degree polynomials. To our knowledge, this is the first work to\nformalize VS for quadratic real arithmetic including inequalities. The\nproofs necessitate various contributions to the existing multivariate\npolynomial libraries in Isabelle/HOL. Our framework is modularized and\neasily expandable (to facilitate integrating future optimizations),\nand could serve as a basis for developing practical general-purpose QE\nalgorithms. Further, as our formalization is designed with\npracticality in mind, we export our development to SML and test the\nresulting code on 378 benchmarks from the literature, comparing to\nRedlog, Z3, Wolfram Engine, and SMT-RAT. This identified\ninconsistencies in some tools, underscoring the significance of a\nverified approach for the intricacies of real arithmetic.",
    "licence": "BSD",
    "dependencies": [
        "Polynomials"
    ],
    "theories": [
        "QE",
        "MPolyExtension",
        "ExecutiblePolyProps",
        "PolyAtoms",
        "Debruijn",
        "Reindex",
        "Optimizations",
        "OptimizationProofs",
        "VSAlgos",
        "Heuristic",
        "PrettyPrinting",
        "Exports",
        "LinearCase",
        "QuadraticCase",
        "EliminateVariable",
        "LuckyFind",
        "EqualityVS",
        "UniAtoms",
        "NegInfinity",
        "NegInfinityUni",
        "Infinitesimals",
        "InfinitesimalsUni",
        "DNFUni",
        "GeneralVSProofs",
        "DNF",
        "VSQuad",
        "HeuristicProofs",
        "ExportProofs"
    ]
}