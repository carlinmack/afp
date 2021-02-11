{
    "title": "A Sound Type System for Physical Quantities, Units, and Measurements",
    "authors": [
        "Simon Foster",
        "Burkhart Wolff"
    ],
    "topics": [
        "Mathematics/Physics",
        "Computer science/Programming languages/Type systems"
    ],
    "date": "2020-10-20",
    "notify": [
        "simon.foster@york.ac.uk",
        "wolff@lri.fr"
    ],
    "abstract": "\nThe present Isabelle theory builds a formal model for both the\nInternational System of Quantities (ISQ) and the International System\nof Units (SI), which are both fundamental for physics and engineering.\nBoth the ISQ and the SI are deeply integrated into Isabelle's\ntype system. Quantities are parameterised by dimension types, which\ncorrespond to base vectors, and thus only quantities of the same\ndimension can be equated. Since the underlying \"algebra of\nquantities\" induces congruences on quantity and SI types,\nspecific tactic support is developed to capture these. Our\nconstruction is validated by a test-set of known equivalences between\nboth quantities and SI units. Moreover, the presented theory can be\nused for type-safe conversions between the SI system and others, like\nthe British Imperial System (BIS).",
    "licence": "BSD",
    "theories": [
        "ISQ_Conversion",
        "SI_Units",
        "SI_Derived",
        "SI_Accepted",
        "Power_int",
        "SI_Prefix",
        "ISQ_Units",
        "ISQ_Algebra",
        "CGS",
        "SI",
        "Enum_extra",
        "SI_Constants",
        "Groups_mult",
        "SI_Astronomical",
        "SI_Pretty",
        "ISQ",
        "ISQ_Proof",
        "ISQ_Dimensions",
        "ISQ_Quantities",
        "SI_Imperial",
        "BIS"
    ]
}