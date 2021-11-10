{
    "title": "Real Exponents as the Limits of Sequences of Rational Exponents",
    "authors": [
        "Jacques D. Fleuriot"
    ],
    "topics": [
        "Mathematics/Analysis"
    ],
    "date": "2021-11-08",
    "notify": [
        "jdf@ed.ac.uk"
    ],
    "abstract": "\nIn this formalisation, we  construct real exponents as the limits of\nsequences of rational exponents. In particular, if $a \\ge 1$ and $x\n\\in \\mathbb{R}$, we choose an increasing rational sequence $r_n$ such\nthat $\\lim_{n\\to\\infty} {r_n} = x$. Then the sequence $a^{r_n}$ is\nincreasing and if $r$ is any rational number such that $r > x$,\n$a^{r_n}$ is bounded above by $a^r$. By the convergence criterion for\nmonotone sequences, $a^{r_n}$ converges. We define $a^ x =\n\\lim_{n\\to\\infty} a^{r_n}$ and show that it has the expected\nproperties (for $a \\ge 0$).  This particular construction of real\nexponents is needed instead of the usual one using the natural\nlogarithm and exponential functions (which already exists in Isabelle)\nto support our mechanical derivation of Euler's exponential\nseries as an ``infinite polynomial\". Aside from helping us avoid\ncircular reasoning, this is, as far as we are aware, the first time\nreal exponents are mechanised in this way within a proof assistant.",
    "licence": "BSD",
    "theories": [
        "RatPower",
        "RealPower",
        "Log"
    ]
}