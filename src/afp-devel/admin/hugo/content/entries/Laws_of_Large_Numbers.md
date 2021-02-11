{
    "title": "The Laws of Large Numbers",
    "authors": [
        "Manuel Eberl"
    ],
    "topics": [
        "Mathematics/Probability theory"
    ],
    "date": "2021-02-10",
    "notify": [
        "eberlm@in.tum.de"
    ],
    "abstract": "\n<p>The Law of Large Numbers states that, informally, if one\nperforms a random experiment $X$ many times and takes the average of\nthe results, that average will be very close to the expected value\n$E[X]$.</p> <p> More formally, let\n$(X_i)_{i\\in\\mathbb{N}}$ be a sequence of independently identically\ndistributed random variables whose expected value $E[X_1]$ exists.\nDenote the running average of $X_1, \\ldots, X_n$ as $\\overline{X}_n$.\nThen:</p> <ul> <li>The Weak Law of Large Numbers\nstates that $\\overline{X}_{n} \\longrightarrow E[X_1]$ in probability\nfor $n\\to\\infty$, i.e. $\\mathcal{P}(|\\overline{X}_{n} - E[X_1]| >\n\\varepsilon) \\longrightarrow 0$ as $n\\to\\infty$ for any $\\varepsilon\n> 0$.</li> <li>The Strong Law of Large Numbers states\nthat $\\overline{X}_{n} \\longrightarrow E[X_1]$ almost surely for\n$n\\to\\infty$, i.e. $\\mathcal{P}(\\overline{X}_{n} \\longrightarrow\nE[X_1]) = 1$.</li> </ul> <p>In this entry, I\nformally prove the strong law and from it the weak law. The approach\nused for the proof of the strong law is a particularly quick and slick\none based on ergodic theory, which was formalised by Gouëzel in\nanother AFP entry.</p>",
    "licence": "BSD",
    "dependencies": [
        "Ergodic_Theory"
    ],
    "theories": [
        "Laws_of_Large_Numbers",
        "Laws_of_Large_Numbers_Example"
    ]
}