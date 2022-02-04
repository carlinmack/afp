{
    "title": "Quasi-Borel Spaces",
    "authors": [
        "Michikazu Hirata",
        "Yasuhiko Minamide",
        "Tetsuya Sato"
    ],
    "topics": [
        "Computer science/Semantics"
    ],
    "date": "2022-02-03",
    "notify": [
        "hirata.m.ac@m.titech.ac.jp",
        "minamide@is.titech.ac.jp",
        "tsato@c.titech.ac.jp"
    ],
    "abstract": "\nThe notion of quasi-Borel spaces was introduced by <a\nhref=\"https://dl.acm.org/doi/10.5555/3329995.3330072\">\nHeunen et al</a>. The theory provides a suitable\ndenotational model for higher-order probabilistic programming\nlanguages with continuous distributions. This entry is a formalization\nof the theory of quasi-Borel spaces, including construction of\nquasi-Borel spaces (product, coproduct, function spaces), the\nadjunction between the category of measurable spaces and the category\nof quasi-Borel spaces, and the probability monad on quasi-Borel\nspaces. This entry also contains the formalization of the Bayesian\nregression presented in the work of Heunen et al. This work is a part\nof the work by same authors, <i>Program Logic for Higher-Order\nProbabilistic Programs in Isabelle/HOL</i>, which will be\npublished in the proceedings of the 16th International Symposium on\nFunctional and Logic Programming (FLOPS 2022).",
    "licence": "BSD",
    "theories": [
        "StandardBorel",
        "QuasiBorel",
        "Measure_QuasiBorel_Adjunction",
        "Binary_Product_QuasiBorel",
        "Product_QuasiBorel",
        "Binary_CoProduct_QuasiBorel",
        "CoProduct_QuasiBorel",
        "Exponent_QuasiBorel",
        "Probability_Space_QuasiBorel",
        "Monad_QuasiBorel",
        "Pair_QuasiBorel_Measure",
        "Measure_as_QuasiBorel_Measure",
        "Bayesian_Linear_Regression"
    ]
}