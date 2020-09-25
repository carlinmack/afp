{
    "title": "A Variant of the Superposition Calculus",
    "authors": [
        "Nicolas Peltier"
    ],
    "notify": "Nicolas.Peltier@imag.fr",
    "date": "2016-09-06",
    "topic": "Logic/Proof theory",
    "abstract": "\nWe provide a formalization of a variant of the superposition\ncalculus, together with formal proofs of soundness and refutational\ncompleteness (w.r.t. the usual redundancy criteria based on clause\nordering). This version of the calculus uses all the standard\nrestrictions of the superposition rules, together with the following\nrefinement, inspired by the basic superposition calculus: each clause\nis associated with a set of terms which are assumed to be in normal\nform -- thus any application of the replacement rule on these terms is\nblocked. The set is initially empty and terms may be added or removed\nat each inference step. The set of terms that are assumed to be in\nnormal form includes any term introduced by previous unifiers as well\nas any term occurring in the parent clauses at a position that is\nsmaller (according to some given ordering on positions) than a\npreviously replaced term. The standard superposition calculus\ncorresponds to the case where the set of irreducible terms is always\nempty."
}