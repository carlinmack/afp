{
    "title": "Syntax-Independent Logic Infrastructure",
    "date": "2020-09-16T00:00:00.000Z",
    "draft": false,
    "authors": [
        "Andrei Popescu",
        "Dmitriy Traytel"
    ],
    "abstract": "We formalize a notion of logic whose terms and formulas are kept abstract. In particular, logical connectives, substitution, free variables, and provability are not defined, but characterized by their general properties as locale assumptions. Based on this abstract characterization, we develop further reusable reasoning infrastructure. For example, we define parallel substitution (along with proving its characterizing theorems) from single-point substitution. Similarly, we develop a natural deduction style proof system starting from the abstract Hilbert-style one. These one-time efforts benefit different concrete logics satisfying our locales' assumptions. We instantiate the syntax-independent logic infrastructure to Robinson arithmetic (also known as Q) in the AFP entry Robinson_Arithmetic and to hereditarily finite set theory in the AFP entries Goedel_HFSet_Semantic and Goedel_HFSet_Semanticless, which are part of our formalization of Gödel's Incompleteness Theorems described in our CADE-27 paper A Formally Verified Abstract Account of Gödel's Incompleteness Theorems.",
    "bibtex": "@article{Syntax_Independent_Logic-AFP,\n  author  = {Andrei Popescu and Dmitriy Traytel},\n  title   = {Syntax-Independent Logic Infrastructure},\n  journal = {Archive of Formal Proofs},\n  month   = sep,\n  year    = 2020,\n  note    = {\\url{http://isa-afp.org/entries/Syntax_Independent_Logic.html},\n            Formal proof development},\n  ISSN    = {2150-914x},\n}",
    "license": "BSD License",
    "usedBy": ["Goedel_Incompleteness", "Robinson_Arithmetic"]
}
