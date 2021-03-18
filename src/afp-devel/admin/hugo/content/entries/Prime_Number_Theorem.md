{
    "title": "The Prime Number Theorem",
    "authors": [
        "Manuel Eberl",
        "Lawrence C. Paulson"
    ],
    "topics": [
        "Mathematics/Number theory"
    ],
    "date": "2018-09-19",
    "notify": [
        "eberlm@in.tum.de"
    ],
    "abstract": "\n<p>This article provides a short proof of the Prime Number\nTheorem in several equivalent forms, most notably\n&pi;(<em>x</em>) ~ <em>x</em>/ln\n<em>x</em> where &pi;(<em>x</em>) is the\nnumber of primes no larger than <em>x</em>. It also\ndefines other basic number-theoretic functions related to primes like\nChebyshev's functions &thetasym; and &psi; and the\n&ldquo;<em>n</em>-th prime number&rdquo; function\np<sub><em>n</em></sub>. We also show various\nbounds and relationship between these functions are shown. Lastly, we\nderive Mertens' First and Second Theorem, i.&thinsp;e.\n&sum;<sub><em>p</em>&le;<em>x</em></sub>\nln <em>p</em>/<em>p</em> = ln\n<em>x</em> + <em>O</em>(1) and\n&sum;<sub><em>p</em>&le;<em>x</em></sub>\n1/<em>p</em> = ln ln <em>x</em> + M +\n<em>O</em>(1/ln <em>x</em>). We also give\nexplicit bounds for the remainder terms.</p> <p>The proof\nof the Prime Number Theorem builds on a library of Dirichlet series\nand analytic combinatorics. We essentially follow the presentation by\nNewman. The core part of the proof is a Tauberian theorem for\nDirichlet series, which is proven using complex analysis and then used\nto strengthen Mertens' First Theorem to\n&sum;<sub><em>p</em>&le;<em>x</em></sub>\nln <em>p</em>/<em>p</em> = ln\n<em>x</em> + c + <em>o</em>(1).</p>\n<p>A variant of this proof has been formalised before by\nHarrison in HOL Light, and formalisations of Selberg's elementary\nproof exist both by Avigad <em>et al.</em> in Isabelle and\nby Carneiro in Metamath. The advantage of the analytic proof is that,\nwhile it requires more powerful mathematical tools, it is considerably\nshorter and clearer. This article attempts to provide a short and\nclear formalisation of all components of that proof using the full\nrange of mathematical machinery available in Isabelle, staying as\nclose as possible to Newman's simple paper proof.</p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-09-20"
        }
    ],
    "dependencies": [
        "Zeta_Function",
        "Stirling_Formula"
    ],
    "theories": [
        "Prime_Number_Theorem_Library",
        "Newman_Ingham_Tauberian",
        "Prime_Counting_Functions",
        "Prime_Number_Theorem",
        "Mertens_Theorems"
    ],
    "relatedEntries": [
        "Prime_Distribution_Elementary",
        "Ptolemys_Theorem",
        "Dirichlet_L"
    ]
}