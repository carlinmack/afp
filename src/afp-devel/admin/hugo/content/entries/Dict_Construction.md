{
    "title": "Dictionary Construction",
    "authors": [
        "Lars Hupel"
    ],
    "topics": [
        "Tools"
    ],
    "date": "2017-05-24",
    "notify": [
        "hupel@in.tum.de"
    ],
    "abstract": "\nIsabelle's code generator natively supports type classes. For\ntargets that do not have language support for classes and instances,\nit performs the well-known dictionary translation, as described by\nHaftmann and Nipkow. This translation happens outside the logic, i.e.,\nthere is no guarantee that it is correct, besides the pen-and-paper\nproof. This work implements a certified dictionary translation that\nproduces new class-free constants and derives equality theorems.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        }
    ],
    "dependencies": [
        "Automatic_Refinement",
        "Lazy_Case",
        "Show"
    ],
    "theories": [
        "Introduction",
        "Impossibility",
        "Dict_Construction",
        "files/dict_construction_util.ML",
        "files/transfer_termination.ML",
        "files/congruences.ML",
        "files/side_conditions.ML",
        "files/class_graph.ML",
        "files/dict_construction.ML",
        "Termination",
        "Test_Dict_Construction",
        "Test_Side_Conditions",
        "Test_Lazy_Case"
    ]
}