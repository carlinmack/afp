{
    "title": "Nominal 2",
    "authors": [
        "Christian Urban",
        "Stefan Berghofer",
        "Cezary Kaliszyk"
    ],
    "date": "2013-02-21",
    "topics": [
        "Tools"
    ],
    "abstract": "\n<p>Dealing with binders, renaming of bound variables, capture-avoiding\nsubstitution, etc., is very often a major problem in formal\nproofs, especially in proofs by structural and rule\ninduction. Nominal Isabelle is designed to make such proofs easy to\nformalise: it provides an infrastructure for declaring nominal\ndatatypes (that is alpha-equivalence classes) and for defining\nfunctions over them by structural recursion. It also provides\ninduction principles that have Barendregt’s variable convention\nalready built in.\n</p><p>\nThis entry can be used as a more advanced replacement for\nHOL/Nominal in the Isabelle distribution.\n</p>",
    "notify": [
        "christian.urban@kcl.ac.uk"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
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
            "2016": "2016-04-24"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-02-24"
        }
    ],
    "dependencies": [
        "FinFun"
    ],
    "theories": [
        "Nominal2_Base",
        "files/nominal_basics.ML",
        "files/nominal_thmdecls.ML",
        "files/nominal_permeq.ML",
        "files/nominal_library.ML",
        "files/nominal_atoms.ML",
        "files/nominal_eqvt.ML",
        "Nominal2_Abs",
        "Nominal2_FCB",
        "Nominal2",
        "files/nominal_dt_data.ML",
        "files/nominal_dt_rawfuns.ML",
        "files/nominal_dt_alpha.ML",
        "files/nominal_dt_quot.ML",
        "files/nominal_induct.ML",
        "files/nominal_inductive.ML",
        "files/nominal_function_common.ML",
        "files/nominal_function_core.ML",
        "files/nominal_mutual.ML",
        "files/nominal_function.ML",
        "files/nominal_termination.ML",
        "Atoms",
        "Eqvt"
    ]
}