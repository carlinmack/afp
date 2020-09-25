{
    "title": "The Hereditarily Finite Sets",
    "authors": [
        "Lawrence C. Paulson"
    ],
    "date": "2013-11-17",
    "topic": "Logic/Set theory",
    "abstract": "The theory of hereditarily finite sets is formalised, following\nthe <a href=\"http://journals.impan.gov.pl/dm/Inf/422-0-1.html\">development</a> of Swierczkowski.\nAn HF set is a finite collection of other HF sets; they enjoy an induction principle\nand satisfy all the axioms of ZF set theory apart from the axiom of infinity, which is negated.\nAll constructions that are possible in ZF set theory (Cartesian products, disjoint sums, natural numbers,\nfunctions) without using infinite sets are possible here.\nThe definition of addition for the HF sets follows Kirby.\nThis development forms the foundation for the Isabelle proof of Gödel's incompleteness theorems,\nwhich has been <a href=\"Incompleteness.html\">formalised separately</a>.",
    "extra-history": "\nChange history:\n[2015-02-23]: Added the theory \"Finitary\" defining the class of types that can be embedded in hf, including int, char, option, list, etc.",
    "notify": "lp15@cam.ac.uk"
}