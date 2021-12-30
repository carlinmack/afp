{
    "title": "The Hermite–Lindemann–Weierstraß Transcendence Theorem",
    "authors": [
        "Manuel Eberl"
    ],
    "topics": [
        "Mathematics/Number theory"
    ],
    "date": "2021-03-03",
    "notify": [
        "manuel@pruvisto.org"
    ],
    "abstract": "\n<p>This article provides a formalisation of the\nHermite-Lindemann-Weierstraß Theorem (also known as simply\nHermite-Lindemann or Lindemann-Weierstraß). This theorem is one of the\ncrowning achievements of 19th century number theory.</p>\n<p>The theorem states that if $\\alpha_1, \\ldots,\n\\alpha_n\\in\\mathbb{C}$ are algebraic numbers that are linearly\nindependent over $\\mathbb{Z}$, then $e^{\\alpha_1},\\ldots,e^{\\alpha_n}$\nare algebraically independent over $\\mathbb{Q}$.</p>\n<p>Like the <a\nhref=\"https://doi.org/10.1007/978-3-319-66107-0_5\">previous\nformalisation in Coq by Bernard</a>, I proceeded by formalising\n<a\nhref=\"https://doi.org/10.1017/CBO9780511565977\">Baker's\nversion of the theorem and proof</a> and then deriving the\noriginal one from that. Baker's version states that for any\nalgebraic numbers $\\beta_1, \\ldots, \\beta_n\\in\\mathbb{C}$ and distinct\nalgebraic numbers $\\alpha_i, \\ldots, \\alpha_n\\in\\mathbb{C}$, we have\n$\\beta_1 e^{\\alpha_1} + \\ldots + \\beta_n e^{\\alpha_n} = 0$ if and only\nif all the $\\beta_i$ are zero.</p> <p>This has a number of\ndirect corollaries, e.g.:</p> <ul> <li>$e$ and $\\pi$\nare transcendental</li> <li>$e^z$, $\\sin z$, $\\tan z$,\netc. are transcendental for algebraic\n$z\\in\\mathbb{C}\\setminus\\{0\\}$</li> <li>$\\ln z$ is\ntranscendental for algebraic $z\\in\\mathbb{C}\\setminus\\{0,\n1\\}$</li> </ul>",
    "licence": "BSD",
    "dependencies": [
        "Pi_Transcendental",
        "Algebraic_Numbers",
        "Power_Sum_Polynomials"
    ],
    "theories": [
        "Algebraic_Integer_Divisibility",
        "More_Polynomial_HLW",
        "Min_Int_Poly",
        "Complex_Lexorder",
        "More_Multivariate_Polynomial_HLW",
        "More_Algebraic_Numbers_HLW",
        "Misc_HLW",
        "Hermite_Lindemann"
    ],
    "olderReleases": [
        {
            "2021": "2021-03-12"
        }
    ]
}