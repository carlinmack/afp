{
    "title": "Linear Recurrences",
    "authors": [
        "Manuel Eberl"
    ],
    "topics": [
        "Mathematics/Analysis"
    ],
    "date": "2017-10-12",
    "notify": [
        "eberlm@in.tum.de"
    ],
    "abstract": "\n<p> Linear recurrences with constant coefficients are an\ninteresting class of recurrence equations that can be solved\nexplicitly. The most famous example are certainly the Fibonacci\nnumbers with the equation <i>f</i>(<i>n</i>) =\n<i>f</i>(<i>n</i>-1) +\n<i>f</i>(<i>n</i> - 2) and the quite\nnon-obvious closed form\n(<i>&phi;</i><sup><i>n</i></sup>\n-\n(-<i>&phi;</i>)<sup>-<i>n</i></sup>)\n/ &radic;<span style=\"text-decoration:\noverline\">5</span> where &phi; is the golden ratio.\n</p> <p> In this work, I build on existing tools in\nIsabelle &ndash; such as formal power series and polynomial\nfactorisation algorithms &ndash; to develop a theory of these\nrecurrences and derive a fully executable solver for them that can be\nexported to programming languages like Haskell. </p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-17"
        }
    ],
    "dependencies": [
        "Count_Complex_Roots",
        "Polynomial_Factorization"
    ],
    "theories": [
        "Pochhammer_Polynomials",
        "Linear_Homogenous_Recurrences",
        "Rational_FPS_Solver",
        "Partial_Fraction_Decomposition",
        "Linear_Inhomogenous_Recurrences",
        "Rational_FPS_Asymptotics",
        "Linear_Recurrences_Misc",
        "Linear_Recurrences_Common",
        "Eulerian_Polynomials",
        "RatFPS",
        "Factorizations"
    ]
}