{
    "title": "Propositional Resolution and Prime Implicates Generation",
    "authors": [
        "Nicolas Peltier"
    ],
    "notify": [
        "Nicolas.Peltier@imag.fr"
    ],
    "date": "2016-03-11",
    "topics": [
        "Logic/General logic/Mechanization of proofs"
    ],
    "abstract": "\nWe provide formal proofs in Isabelle-HOL (using mostly structured Isar\nproofs) of the soundness and completeness of the Resolution rule in\npropositional logic.  The completeness proofs take into account the\nusual redundancy elimination rules (tautology elimination and\nsubsumption), and several refinements of the Resolution rule are\nconsidered: ordered resolution (with selection functions), positive\nand negative resolution, semantic resolution and unit resolution (the\nlatter refinement is complete only for clause sets that are Horn-\nrenamable). We also define a concrete procedure for computing\nsaturated sets and establish its soundness and completeness. The\nclause sets are not assumed to be finite, so that the results can be\napplied to formulas obtained by grounding sets of first-order clauses\n(however, a total ordering among atoms is assumed to be given).\nNext, we show that the unrestricted Resolution rule is deductive-\ncomplete, in the sense that it is able to generate all  (prime)\nimplicates of any set of propositional clauses (i.e., all entailment-\nminimal, non-valid, clausal consequences of the considered set). The\ngeneration of prime implicates is an important problem, with many\napplications in artificial intelligence and verification (for\nabductive reasoning, knowledge compilation, diagnosis, debugging\netc.). We also show that implicates can be computed in an incremental\nway, by fixing an ordering among all the atoms in the considered sets\nand resolving upon these atoms one by one in the considered order\n(with no backtracking). This feature is critical for the efficient\ncomputation of prime implicates. Building on these results, we provide\na procedure for computing such implicates and establish its soundness\nand completeness.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-03-11"
        }
    ],
    "theories": [
        "Propositional_Resolution",
        "Prime_Implicates"
    ]
}