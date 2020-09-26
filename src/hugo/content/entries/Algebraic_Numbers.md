{
    "title": "Algebraic Numbers in Isabelle/HOL",
    "topics": [
        "Mathematics-Algebra"
    ],
    "authors": [
        "René Thiemann",
        "Akihisa Yamada",
        "Sebastiaan Joosten"
    ],
    "date": "2015-12-22",
    "abstract": "Based on existing libraries for matrices, factorization of rational polynomials, and Sturm's theorem, we formalized algebraic numbers in Isabelle/HOL. Our development serves as an implementation for real and complex numbers, and it admits to compute roots and completely factorize real and complex polynomials, provided that all coefficients are rational numbers. Moreover, we provide two implementations to display algebraic numbers, an injective and expensive one, or a faster but approximative version.\n</p><p>\nTo this end, we mechanized several results on resultants, which also required us to prove that polynomials over a unique factorization domain form again a unique factorization domain.\n</p>",
    "extra-history": "\nChange history:\n[2016-01-29]: Split off Polynomial Interpolation and Polynomial Factorization<br>\n[2017-04-16]: Use certified Berlekamp-Zassenhaus factorization, use subresultant algorithm for computing resultants, improved bisection algorithm",
    "notify": "rene.thiemann@uibk.ac.at, ayamada@trs.cm.is.nagoya-u.ac.jp, sebastiaan.joosten@uibk.ac.at",
    "licence": "BSD",
    "olderReleases": {
        "2015": "2015-12-22",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}