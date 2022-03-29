{
    "title": "A Sequent Calculus Prover for First-Order Logic with Functions",
    "authors": [
        "Asta Halkjær From",
        "Frederik Krogsdal Jacobsen"
    ],
    "topics": [
        "Logic/General logic/Classical first-order logic",
        "Logic/Proof theory",
        "Logic/General logic/Mechanization of proofs"
    ],
    "date": "2022-01-31",
    "notify": [
        "ahfrom@dtu.dk",
        "fkjac@dtu.dk"
    ],
    "abstract": "\nWe formalize an automated theorem prover for first-order logic with\nfunctions. The proof search procedure is based on sequent calculus and\nwe verify its soundness and completeness using the Abstract Soundness\nand Abstract Completeness theories. Our analytic completeness proof\ncovers both open and closed formulas. Since our deterministic prover\nconsiders only the subset of terms relevant to proving a given\nsequent, we do so as well when building a countermodel from a failed\nproof. We formally connect our prover with the proof system and\nsemantics of the existing SeCaV system. In particular, the\nprover's output can be post-processed in Haskell to generate\nhuman-readable SeCaV proofs which are also machine-verifiable proof\ncertificates.",
    "licence": "BSD",
    "dependencies": [
        "Collections",
        "Abstract_Completeness",
        "Abstract_Soundness"
    ],
    "theories": [
        "SeCaV",
        "Sequent1",
        "Sequent_Calculus_Verifier",
        "Prover",
        "Export",
        "ProverLemmas",
        "Hintikka",
        "EPathHintikka",
        "Usemantics",
        "Countermodel",
        "Soundness",
        "Completeness",
        "Results"
    ],
    "relatedEntries": [
        "FOL_Seq_Calc3"
    ]
}