{
    "title": "An Efficient Normalisation Procedure for Linear Temporal Logic: Isabelle/HOL Formalisation",
    "authors": [
        "Salomon Sickert"
    ],
    "topics": [
        "Computer science/Automata and formal languages",
        "Logic/General logic/Temporal logic"
    ],
    "date": "2020-05-08",
    "notify": [
        "s.sickert@tum.de"
    ],
    "abstract": "\nIn the mid 80s, Lichtenstein, Pnueli, and Zuck proved a classical\ntheorem stating that every formula of Past LTL (the extension of LTL\nwith past operators) is equivalent to a formula of the form\n$\\bigwedge_{i=1}^n \\mathbf{G}\\mathbf{F} \\varphi_i \\vee\n\\mathbf{F}\\mathbf{G} \\psi_i$,  where $\\varphi_i$ and $\\psi_i$ contain\nonly past operators. Some years later, Chang, Manna, and Pnueli built\non this result to derive a similar normal form for LTL. Both\nnormalisation procedures have a non-elementary worst-case blow-up, and\nfollow an involved path from formulas to counter-free automata to\nstar-free regular expressions and back to formulas. We improve on both\npoints. We present an executable formalisation of a direct and purely\nsyntactic normalisation procedure for LTL yielding a normal form,\ncomparable to the one by Chang, Manna, and Pnueli, that has only a\nsingle exponential blow-up.",
    "licence": "BSD",
    "dependencies": [
        "LTL",
        "LTL_Master_Theorem"
    ],
    "theories": [
        "Normal_Form",
        "Normal_Form_Complexity",
        "Normal_Form_Code_Export"
    ],
    "relatedEntries": [
        "Stuttering_Equivalence",
        "LTL_to_GBA",
        "LTL_to_DRA"
    ]
}