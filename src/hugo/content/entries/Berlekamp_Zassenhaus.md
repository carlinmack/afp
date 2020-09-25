{
    "title": "The Factorization Algorithm of Berlekamp and Zassenhaus",
    "authors": [
        "Jose Divasón",
        "Sebastiaan Joosten",
        "René Thiemann",
        "Akihisa Yamada"
    ],
    "notify": "rene.thiemann@uibk.ac.at",
    "date": "2016-10-14",
    "topic": "Mathematics/Algebra",
    "abstract": "\n<p>We formalize the Berlekamp-Zassenhaus algorithm for factoring\nsquare-free integer polynomials in Isabelle/HOL. We further adapt an\nexisting formalization of Yun’s square-free factorization algorithm to\ninteger polynomials, and thus provide an efficient and certified\nfactorization algorithm for arbitrary univariate polynomials.\n</p>\n<p>The algorithm first performs a factorization in the prime field GF(p) and\nthen performs computations in the integer ring modulo p^k, where both\np and k are determined at runtime. Since a natural modeling of these\nstructures via dependent types is not possible in Isabelle/HOL, we\nformalize the whole algorithm using Isabelle’s recent addition of\nlocal type definitions.\n</p>\n<p>Through experiments we verify that our algorithm factors polynomials of degree\n100 within seconds.\n</p>"
}