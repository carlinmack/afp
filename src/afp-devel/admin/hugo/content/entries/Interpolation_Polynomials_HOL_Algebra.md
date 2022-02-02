{
    "title": "Interpolation Polynomials (in HOL-Algebra)",
    "authors": [
        "Emin Karayel"
    ],
    "topics": [
        "Mathematics/Algebra"
    ],
    "date": "2022-01-29",
    "notify": [
        "me@eminkarayel.de"
    ],
    "abstract": "\n<p>A well known result from algebra is that, on any field, there\nis exactly one polynomial of degree less than n interpolating n points\n[<a\nhref=\"https://doi.org/10.1017/CBO9780511814549\">1</a>,\n§7].</p> <p>This entry contains a formalization of the\nabove result, as well as the following generalization in the case of\nfinite fields <i>F</i>: There are\n<i>|F|<sup>m-n</sup></i> polynomials of degree\nless than <i>m ≥ n</i> interpolating the same n points,\nwhere <i>|F|</i> denotes the size of the domain of the\nfield. To establish the result the entry also includes a formalization\nof Lagrange interpolation, which might be of independent\ninterest.</p> <p>The formalized results are defined on the\nalgebraic structures from HOL-Algebra, which are distinct from the\ntype-class based structures defined in HOL. Note that there is an\nexisting formalization for polynomial interpolation and, in\nparticular, Lagrange interpolation by Thiemann and Yamada [<a\nhref=\"https://www.isa-afp.org/entries/Polynomial_Interpolation.html\">2</a>]\non the type-class based structures in HOL.</p>",
    "licence": "BSD",
    "theories": [
        "Bounded_Degree_Polynomials",
        "Lagrange_Interpolation",
        "Interpolation_Polynomial_Cardinalities"
    ]
}