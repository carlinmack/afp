{
    "title": "Syntax-Independent Logic Infrastructure",
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
    "abstract": "\nWe formalize a notion of logic whose terms and formulas are kept\nabstract. In particular, logical connectives, substitution, free\nvariables, and provability are not defined, but characterized by their\ngeneral properties as locale assumptions. Based on this abstract\ncharacterization, we develop further reusable reasoning\ninfrastructure. For example, we define parallel substitution (along\nwith proving its characterizing theorems) from single-point\nsubstitution. Similarly, we develop a natural deduction style proof\nsystem starting from the abstract Hilbert-style one. These one-time\nefforts benefit different concrete logics satisfying our locales'\nassumptions.  We instantiate the syntax-independent logic\ninfrastructure to Robinson arithmetic (also known as Q) in the AFP\nentry <a\nhref=\"https://www.isa-afp.org/entries/Robinson_Arithmetic.html\">Robinson_Arithmetic</a>\nand to hereditarily finite set theory in the AFP entries <a\nhref=\"https://www.isa-afp.org/entries/Goedel_HFSet_Semantic.html\">Goedel_HFSet_Semantic</a>\nand <a\nhref=\"https://www.isa-afp.org/entries/Goedel_HFSet_Semanticless.html\">Goedel_HFSet_Semanticless</a>,\nwhich are part of our formalization of G&ouml;del's\nIncompleteness Theorems described in our CADE-27 paper <a\nhref=\"https://dx.doi.org/10.1007/978-3-030-29436-6_26\">A\nFormally Verified Abstract Account of Gödel's Incompleteness\nTheorems</a>.",
    "licence": "BSD",
    "theories": [
        "Prelim",
        "Deduction",
        "Deduction_Q",
        "Natural_Deduction",
        "Pseudo_Term",
        "Syntax",
        "Syntax_Arith",
        "Standard_Model"
    ],
    "relatedEntries": [
        "Goedel_HFSet_Semantic",
        "HereditarilyFinite"
    ]
}