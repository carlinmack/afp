{
    "title": "Stirling's formula",
    "authors": [
        "Manuel Eberl"
    ],
    "notify": [
        "eberlm@in.tum.de"
    ],
    "date": "2016-09-01",
    "topics": [
        "Mathematics/Analysis"
    ],
    "abstract": "\n<p>This work contains a proof of Stirling's formula both for the factorial $n! \\sim \\sqrt{2\\pi n} (n/e)^n$ on natural numbers and the real\nGamma function $\\Gamma(x)\\sim \\sqrt{2\\pi/x} (x/e)^x$. The proof is based on work by <a\nhref=\"http://www.maths.lancs.ac.uk/~jameson/stirlgamma.pdf\">Graham Jameson</a>.</p>\n<p>This is then extended to the full asymptotic expansion\n$$\\log\\Gamma(z) = \\big(z - \\tfrac{1}{2}\\big)\\log z - z + \\tfrac{1}{2}\\log(2\\pi) + \\sum_{k=1}^{n-1} \\frac{B_{k+1}}{k(k+1)} z^{-k}\\\\\n{} - \\frac{1}{n} \\int_0^\\infty B_n([t])(t + z)^{-n}\\,\\text{d}t$$\nuniformly for all complex $z\\neq 0$ in the cone $\\text{arg}(z)\\leq \\alpha$ for any $\\alpha\\in(0,\\pi)$, with which the above asymptotic\nrelation for &Gamma; is also extended to complex arguments.</p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        }
    ],
    "dependencies": [
        "Bernoulli",
        "Landau_Symbols"
    ],
    "theories": [
        "Stirling_Formula",
        "Gamma_Asymptotics"
    ],
    "relatedEntries": [
        "Euler_MacLaurin",
        "Error_Function",
        "Lambert_W"
    ]
}