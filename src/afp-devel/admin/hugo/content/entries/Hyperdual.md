{
    "title": "Hyperdual Numbers and Forward Differentiation",
    "authors": [
        "Filip Smola",
        "Jacques Fleuriot"
    ],
    "topics": [
        "Mathematics/Algebra",
        "Mathematics/Analysis"
    ],
    "date": "2021-12-31",
    "notify": [
        "f.smola@sms.ed.ac.uk",
        "Jacques.Fleuriot@ed.ac.uk"
    ],
    "abstract": "\n<p>Hyperdual numbers are ones with a real component and a number\nof infinitesimal components, usually written as $a_0 + a_1 \\cdot\n\\epsilon_1 + a_2 \\cdot \\epsilon_2 + a_3 \\cdot \\epsilon_1\\epsilon_2$.\nThey have been proposed by <a\nhref=\"https://doi.org/10.2514/6.2011-886\">Fike and\nAlonso</a> in an approach to automatic\ndifferentiation.</p> <p>In this entry we formalise\nhyperdual numbers and their application to forward differentiation. We\nshow them to be an instance of multiple algebraic structures and then,\nalong with facts about twice-differentiability, we define what we call\nthe hyperdual extensions of functions on real-normed fields. This\nextension formally represents the proposed way that the first and\nsecond derivatives of a function can be automatically calculated. We\ndemonstrate it on the standard logistic function $f(x) = \\frac{1}{1 +\ne^{-x}}$ and also reproduce the example analytic function $f(x) =\n\\frac{e^x}{\\sqrt{sin(x)^3 + cos(x)^3}}$ used for demonstration by Fike\nand Alonso.</p>",
    "licence": "BSD",
    "theories": [
        "Hyperdual",
        "TwiceFieldDifferentiable",
        "HyperdualFunctionExtension",
        "LogisticFunction",
        "AnalyticTestFunction"
    ]
}