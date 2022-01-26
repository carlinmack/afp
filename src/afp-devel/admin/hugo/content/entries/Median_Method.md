{
    "title": "Median Method",
    "authors": [
        "Emin Karayel"
    ],
    "topics": [
        "Mathematics/Probability theory"
    ],
    "date": "2022-01-25",
    "notify": [
        "me@eminkarayel.de"
    ],
    "abstract": "\n<p>The median method is an amplification result for randomized\napproximation algorithms described in [<a\nhref=\"https://doi.org/10.1006/jcss.1997.1545\">1</a>].\nGiven an algorithm whose result is in a desired interval with a\nprobability larger than <i>1/2</i>, it is possible to\nimprove the success probability, by running the algorithm multiple\ntimes independently and using the median. In contrast to using the\nmean, the amplification of the success probability grows exponentially\nwith the number of independent runs.</p> <p>This entry\ncontains a formalization of the underlying theorem: Given a sequence\nof n independent random variables, which are in a desired interval\nwith a probability <i>1/2 + a</i>. Then their median will\nbe in the desired interval with a probability of <i>1 −\nexp(−2a<sup>2</sup> n)</i>. In particular, the\nsuccess probability approaches <i>1</i> exponentially with\nthe number of variables.</p> <p>In addition to that, this\nentry also contains a proof that order-statistics of Borel-measurable\nrandom variables are themselves measurable and that generalized\nintervals in linearly ordered Borel-spaces are measurable.</p>",
    "licence": "BSD",
    "theories": [
        "Median"
    ]
}