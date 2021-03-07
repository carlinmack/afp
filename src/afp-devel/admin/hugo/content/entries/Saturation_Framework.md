{
    "title": "A Comprehensive Framework for Saturation Theorem Proving",
    "authors": [
        "Sophie Tourret"
    ],
    "topics": [
        "Logic/General logic/Mechanization of proofs"
    ],
    "date": "2020-04-09",
    "notify": [
        "stourret@mpi-inf.mpg.de"
    ],
    "abstract": "\nThis Isabelle/HOL formalization is the companion of the technical\nreport “A comprehensive framework for saturation theorem proving”,\nitself companion of the eponym IJCAR 2020 paper, written by Uwe\nWaldmann, Sophie Tourret, Simon Robillard and Jasmin Blanchette. It\nverifies a framework for formal refutational completeness proofs of\nabstract provers that implement saturation calculi, such as ordered\nresolution or superposition, and allows to model entire prover\narchitectures in such a way that the static refutational completeness\nof a calculus immediately implies the dynamic  refutational\ncompleteness of a prover implementing the calculus using a variant of\nthe given clause loop.  The technical report “A comprehensive\nframework for saturation theorem proving” is available <a\nhref=\"http://matryoshka.gforge.inria.fr/pubs/satur_report.pdf\">on\nthe Matryoshka website</a>. The names of the Isabelle lemmas and\ntheorems corresponding to the results in the report are indicated in\nthe margin of the report.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2020-04-10"
        }
    ],
    "dependencies": [
        "Ordered_Resolution_Prover",
        "Lambda_Free_RPOs",
        "Well_Quasi_Orders"
    ],
    "theories": [
        "Calculus",
        "Intersection_Calculus",
        "Calculus_Variations",
        "Lifting_to_Non_Ground_Calculi",
        "Labeled_Lifting_to_Non_Ground_Calculi",
        "Given_Clause_Architectures"
    ],
    "relatedEntries": [
        "Saturation_Framework_Extensions",
        "Functional_Ordered_Resolution_Prover"
    ]
}