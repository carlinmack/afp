{
    "title": "Two algorithms based on modular arithmetic: lattice basis reduction and Hermite normal form computation",
    "authors": [
        "Ralph Bottesch",
        "Jose Divasón",
        "René Thiemann"
    ],
    "topics": [
        "Computer science/Algorithms/Mathematical"
    ],
    "date": "2021-03-12",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "abstract": "\nWe verify two algorithms for which modular arithmetic plays an\nessential role: Storjohann's variant of the LLL lattice basis\nreduction algorithm and Kopparty's algorithm for computing the\nHermite normal form of a matrix. To do this, we also formalize some\nfacts about the modulo operation with symmetric range. Our\nimplementations are based on the original papers, but are otherwise\nefficient. For basis reduction we formalize two versions: one that\nincludes all of the optimizations/heuristics from Storjohann's\npaper, and one excluding a heuristic that we observed to often\ndecrease efficiency. We also provide a fast, self-contained certifier\nfor basis reduction, based on the efficient Hermite normal form\nalgorithm.",
    "licence": "BSD",
    "dependencies": [
        "Smith_Normal_Form",
        "LLL_Basis_Reduction",
        "Show",
        "Jordan_Normal_Form",
        "Hermite"
    ],
    "theories": [
        "Matrix_Change_Row",
        "Signed_Modulo",
        "Storjohann_Mod_Operation",
        "Storjohann",
        "Storjohann_Impl",
        "Uniqueness_Hermite",
        "Uniqueness_Hermite_JNF",
        "HNF_Mod_Det_Algorithm",
        "HNF_Mod_Det_Soundness",
        "LLL_Certification_via_HNF"
    ],
    "olderReleases": [
        {
            "2021": "2021-03-14"
        }
    ]
}