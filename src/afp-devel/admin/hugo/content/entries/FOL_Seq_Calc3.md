{
    "title": "A Naive Prover for First-Order Logic",
    "authors": [
        "Asta Halkjær From"
    ],
    "topics": [
        "Logic/General logic/Classical first-order logic",
        "Logic/Proof theory",
        "Logic/General logic/Mechanization of proofs"
    ],
    "date": "2022-03-22",
    "notify": [
        "ahfrom@dtu.dk"
    ],
    "abstract": "\n<p> The AFP entry <a\nhref=\"https://www.isa-afp.org/entries/Abstract_Completeness.html\">Abstract\nCompleteness</a> by Blanchette, Popescu and Traytel formalizes\nthe core of Beth/Hintikka-style completeness proofs for first-order\nlogic and can be used to formalize executable sequent calculus\nprovers. In the Journal of Automated Reasoning, the authors\ninstantiate the framework with a sequent calculus for first-order\nlogic and prove its completeness. Their use of an infinite set of\nproof rules indexed by formulas yields very direct arguments. A fair\nstream of these rules controls the prover, making its definition\nremarkably simple. The AFP entry, however, only contains a toy example\nfor propositional logic. The AFP entry <a\nhref=\"https://www.isa-afp.org/entries/FOL_Seq_Calc2.html\">A\nSequent Calculus Prover for First-Order Logic with Functions</a>\nby From and Jacobsen also uses the framework, but uses a finite set of\ngeneric rules resulting in a more sophisticated prover with more\ncomplicated proofs. </p> <p> This entry contains an\nexecutable sequent calculus prover for first-order logic with\nfunctions in the style presented by Blanchette et al. The prover can\nbe exported to Haskell and this entry includes formalized proofs of\nits soundness and completeness. The proofs are simpler than those for\nthe prover by From and Jacobsen but the performance of the prover is\nsignificantly worse. </p> <p> The included theory\n<em>Fair-Stream</em> first proves that the sequence of\nnatural numbers 0, 0, 1, 0, 1, 2, etc. is fair. It then proves that\nmapping any surjective function across the sequence preserves\nfairness. This method of obtaining a fair stream of rules is similar\nto the one given by Blanchette et al. The concrete functions from\nnatural numbers to terms, formulas and rules are defined using the\n<em>Nat-Bijection</em> theory in the HOL-Library.\n</p>",
    "licence": "BSD",
    "dependencies": [
        "Abstract_Soundness",
        "Abstract_Completeness"
    ],
    "relatedEntries": [
        "FOL_Seq_Calc2"
    ],
    "theories": [
        "List_Syntax",
        "Fair_Stream",
        "Syntax",
        "Semantics",
        "Encoding",
        "Prover",
        "Export",
        "Soundness",
        "Completeness",
        "Result"
    ]
}