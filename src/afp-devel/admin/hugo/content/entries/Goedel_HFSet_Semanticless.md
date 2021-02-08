{
    "title": "From Abstract to Concrete G&ouml;del's Incompleteness Theorems&mdash;Part II",
    "authors": [
        "Andrei Popescu",
        "Dmitriy Traytel"
    ],
    "topics": [
        "Logic/Proof theory"
    ],
    "date": "2020-09-16",
    "notify": [
        "a.popescu@sheffield.ac.uk",
        "traytel@di.ku.dk"
    ],
    "abstract": "\nWe validate an abstract formulation of G&ouml;del's Second\nIncompleteness Theorem from a <a\nhref=\"https://www.isa-afp.org/entries/Goedel_Incompleteness.html\">separate\nAFP entry</a> by instantiating it to the case of <i>finite\nconsistent extensions of the Hereditarily Finite (HF) Set\ntheory</i>, i.e., consistent FOL theories extending the HF Set\ntheory with a finite set of axioms.  The instantiation draws heavily\non infrastructure previously developed by Larry Paulson in his <a\nhref=\"https://www.isa-afp.org/entries/Incompleteness.html\">direct\nformalisation of the concrete result</a>. It strengthens\nPaulson's formalization of G&ouml;del's Second from that\nentry by <i>not</i> assuming soundness, and in fact not\nrelying on any notion of model or semantic interpretation. The\nstrengthening was obtained by first replacing some of Paulson’s\nsemantic arguments with proofs within his HF calculus, and then\nplugging in some of Paulson's (modified) lemmas to instantiate\nour soundness-free G&ouml;del's Second locale.",
    "licence": "BSD",
    "dependencies": [
        "Goedel_Incompleteness",
        "HereditarilyFinite",
        "Nominal2"
    ],
    "theories": [
        "Functions",
        "Coding",
        "Instance",
        "Pseudo_Coding",
        "Pf_Predicates",
        "II_Prelims",
        "Goedel_I",
        "Sigma",
        "Coding_Predicates",
        "Quote",
        "SyntaxN",
        "Predicates"
    ],
    "relatedEntries": [
        "Goedel_HFSet_Semantic",
        "Incompleteness",
        "Robinson_Arithmetic"
    ]
}