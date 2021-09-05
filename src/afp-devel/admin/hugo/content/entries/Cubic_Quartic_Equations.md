{
    "title": "Solving Cubic and Quartic Equations",
    "authors": [
        "René Thiemann"
    ],
    "topics": [
        "Mathematics/Analysis"
    ],
    "date": "2021-09-03",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "abstract": "\n<p>We formalize Cardano's formula to solve a cubic equation\n$$ax^3 + bx^2 + cx + d = 0,$$ as well as Ferrari's formula to\nsolve a quartic equation. We further turn both formulas into\nexecutable algorithms based on the algebraic number implementation in\nthe AFP. To this end we also slightly extended this library, namely by\nmaking the minimal polynomial of an algebraic number executable, and\nby defining and implementing $n$-th roots of complex\nnumbers.</p>",
    "licence": "BSD",
    "dependencies": [
        "Algebraic_Numbers",
        "Complex_Geometry",
        "Hermite_Lindemann"
    ],
    "theories": [
        "Ferraris_Formula",
        "Cardanos_Formula",
        "Min_Int_Poly_Impl",
        "Complex_Roots",
        "Cubic_Polynomials",
        "Quartic_Polynomials"
    ]
}