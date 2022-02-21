{
    "title": "Universal Hash Families",
    "authors": [
        "Emin Karayel"
    ],
    "topics": [
        "Mathematics/Probability theory",
        "Computer science/Algorithms"
    ],
    "date": "2022-02-20",
    "notify": [
        "me@eminkarayel.de"
    ],
    "abstract": "\nA <i>k</i>-universal hash family is a probability\nspace of functions, which have uniform distribution and form\n<i>k</i>-wise independent random variables. They can often be used\nin place of classic (or cryptographic) hash functions and allow the\nrigorous analysis of the performance of randomized algorithms and\ndata structures that rely on hash functions. In 1981\n<a href=\"https://doi.org/10.1016/0022-0000(81)90033-7\">Wegman and Carter</a>\nintroduced a generic construction for such families with arbitrary\n<i>k</i> using polynomials over a finite field. This entry\ncontains a formalization of them and establishes the property of\n<i>k</i>-universality. To be useful the formalization also provides\nan explicit construction of finite fields using the factor ring of\nintegers modulo a prime. Additionally, some generic results about\nindependent families are shown that might be of independent interest.",
    "licence": "BSD",
    "dependencies": [
        "Interpolation_Polynomials_HOL_Algebra"
    ],
    "theories": [
        "Definitions",
        "Preliminary_Results",
        "Carter_Wegman_Hash_Family",
        "Field"
    ]
}