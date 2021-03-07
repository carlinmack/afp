{
    "title": "Poincaré Disc Model",
    "authors": [
        "Danijela Simić",
        "Filip Marić",
        "Pierre Boutry"
    ],
    "topics": [
        "Mathematics/Geometry"
    ],
    "date": "2019-12-16",
    "notify": [
        "danijela@matf.bg.ac.rs",
        "filip@matf.bg.ac.rs",
        "boutry@unistra.fr"
    ],
    "abstract": "\nWe describe formalization of the Poincaré disc model of hyperbolic\ngeometry within the Isabelle/HOL proof assistant. The model is defined\nwithin the extended complex plane (one dimensional complex projectives\nspace &#8450;P1), formalized in the AFP entry “Complex Geometry”.\nPoints, lines, congruence of pairs of points, betweenness of triples\nof points, circles, and isometries are defined within the model. It is\nshown that the model satisfies all Tarski's axioms except the\nEuclid's axiom. It is shown that it satisfies its negation and\nthe limiting parallels axiom (which proves it to be a model of\nhyperbolic geometry).",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2020-01-17"
        }
    ],
    "dependencies": [
        "Complex_Geometry"
    ],
    "theories": [
        "Hyperbolic_Functions",
        "Tarski",
        "Poincare_Lines",
        "Poincare_Lines_Ideal_Points",
        "Poincare_Distance",
        "Poincare_Circles",
        "Poincare_Between",
        "Poincare_Lines_Axis_Intersections",
        "Poincare_Perpendicular",
        "Poincare",
        "Poincare_Tarski"
    ]
}