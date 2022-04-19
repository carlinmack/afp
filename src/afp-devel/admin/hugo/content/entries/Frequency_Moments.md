{
    "title": "Formalization of Randomized Approximation Algorithms for Frequency Moments",
    "authors": [
        "Emin Karayel"
    ],
    "topics": [
        "Computer science/Algorithms/Approximation",
        "Mathematics/Probability theory"
    ],
    "date": "2022-04-08",
    "notify": [
        "me@eminkarayel.de"
    ],
    "abstract": "\nIn 1999 Alon et. al. introduced the still active research topic of\napproximating the frequency moments of a data stream using randomized\nalgorithms with minimal space usage. This includes the problem of\nestimating the cardinality of the stream elements - the zeroth\nfrequency moment. But, also higher-order frequency moments that\nprovide information about the skew of the data stream. (The\n<i>k</i>-th frequency moment of a data stream is the sum\nof the <i>k</i>-th powers of the occurrence counts of each\nelement in the stream.) This entry formalizes three randomized\nalgorithms for the approximation of\n<i>F<sub>0</sub></i>,\n<i>F<sub>2</sub></i> and\n<i>F<sub>k</sub></i> for <i>k ≥\n3</i> based on [<a\nhref=\"https://doi.org/10.1006/jcss.1997.1545\">1</a>,\n<a\nhref=\"https://doi.org/10.1007/3-540-45726-7_1\">2</a>]\nand verifies their expected accuracy, success probability and space\nusage.",
    "licence": "BSD",
    "dependencies": [
        "Bertrands_Postulate",
        "Equivalence_Relation_Enumeration",
        "Interpolation_Polynomials_HOL_Algebra",
        "Lp",
        "Prefix_Free_Code_Combinators",
        "Median_Method",
        "Universal_Hash_Families"
    ],
    "theories": [
        "Frequency_Moments_Preliminary_Results",
        "Frequency_Moments",
        "K_Smallest",
        "Landau_Ext",
        "Probability_Ext",
        "Product_PMF_Ext",
        "Frequency_Moment_0",
        "Frequency_Moment_2",
        "Frequency_Moment_k"
    ]
}