{
    "title": "Ordinal Partitions",
    "authors": [
        "Lawrence C. Paulson"
    ],
    "topics": [
        "Mathematics/Combinatorics",
        "Logic/Set theory"
    ],
    "date": "2020-08-03",
    "notify": [
        "lp15@cam.ac.uk"
    ],
    "abstract": "\nThe theory of partition relations concerns generalisations of\nRamsey's theorem. For any ordinal $\\alpha$, write $\\alpha \\to\n(\\alpha, m)^2$ if for each function $f$ from unordered pairs of\nelements of $\\alpha$ into $\\{0,1\\}$, either there is a subset\n$X\\subseteq \\alpha$ order-isomorphic to $\\alpha$ such that\n$f\\{x,y\\}=0$ for all $\\{x,y\\}\\subseteq X$, or there is an $m$ element\nset $Y\\subseteq \\alpha$ such that $f\\{x,y\\}=1$ for all\n$\\{x,y\\}\\subseteq Y$. (In both cases, with $\\{x,y\\}$ we require\n$x\\not=y$.) In particular, the infinite Ramsey theorem can be written\nin this notation as $\\omega \\to (\\omega, \\omega)^2$, or if we\nrestrict $m$ to the positive integers as above, then $\\omega \\to\n(\\omega, m)^2$ for all $m$.  This entry formalises Larson's proof\nof $\\omega^\\omega \\to (\\omega^\\omega, m)^2$ along with a similar proof\nof a result due to Specker: $\\omega^2 \\to (\\omega^2, m)^2$. Also\nproved is a necessary result by Erdős and Milner:\n$\\omega^{1+\\alpha\\cdot n} \\to (\\omega^{1+\\alpha}, 2^n)^2$.",
    "licence": "BSD",
    "theories": [
        "Library_Additions",
        "Partitions",
        "Erdos_Milner",
        "Omega_Omega"
    ]
}