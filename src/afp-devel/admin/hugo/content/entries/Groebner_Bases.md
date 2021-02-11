{
    "title": "Gröbner Bases Theory",
    "authors": [
        "Fabian Immler",
        "Alexander Maletzky"
    ],
    "date": "2016-05-02",
    "topics": [
        "Mathematics/Algebra",
        "Computer science/Algorithms/Mathematical"
    ],
    "abstract": "\nThis formalization is concerned with the theory of Gröbner bases in\n(commutative) multivariate polynomial rings over fields, originally\ndeveloped by Buchberger in his 1965 PhD thesis. Apart from the\nstatement and proof of the main theorem of the theory, the\nformalization also implements Buchberger's algorithm for actually\ncomputing Gröbner bases as a tail-recursive function, thus allowing to\neffectively decide ideal membership in finitely generated polynomial\nideals. Furthermore, all functions can be executed on a concrete\nrepresentation of multivariate polynomials as association lists.",
    "extra": {
        "Change history": "[2019-04-18] Specialized Gröbner bases to less abstract representation of polynomials, where\npower-products are represented as polynomial mappings.<br>"
    },
    "notify": [
        "alexander.maletzky@risc.jku.at"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-05-02"
        }
    ],
    "dependencies": [
        "Polynomials",
        "Jordan_Normal_Form",
        "Deriving"
    ],
    "theories": [
        "Reduction",
        "Reduced_GB_Examples",
        "Macaulay_Matrix",
        "Auto_Reduction",
        "Code_Target_Rat",
        "Syzygy",
        "Groebner_Bases",
        "General",
        "F4_Examples",
        "Reduced_GB",
        "Benchmarks",
        "Algorithm_Schema",
        "Syzygy_Examples",
        "More_MPoly_Type_Class",
        "Confluence",
        "F4",
        "Algorithm_Schema_Impl",
        "Buchberger_Examples",
        "Groebner_PM",
        "Buchberger"
    ],
    "relatedEntries": [
        "Deep_Learning"
    ]
}