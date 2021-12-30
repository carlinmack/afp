{
    "title": "Automatic Data Refinement",
    "authors": [
        "Peter Lammich"
    ],
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "date": "2013-10-02",
    "abstract": "We present the Autoref tool for Isabelle/HOL, which automatically\nrefines algorithms specified over abstract concepts like maps\nand sets to algorithms over concrete implementations like red-black-trees,\nand produces a refinement theorem. It is based on ideas borrowed from\nrelational parametricity due to Reynolds and Wadler.\nThe tool allows for rapid prototyping of verified, executable algorithms.\nMoreover, it can be configured to fine-tune the result to the user~s needs.\nOur tool is able to automatically instantiate generic algorithms, which\ngreatly simplifies the implementation of executable data structures.\n<p>\nThis AFP-entry provides the basic tool, which is then used by the\nRefinement and Collection Framework to provide automatic data refinement for\nthe nondeterminism monad and various collection datastructures.",
    "notify": [
        "lammich@in.tum.de"
    ],
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
        },
        {
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        }
    ],
    "theories": [
        "Refine_Util_Bootstrap1",
        "Mpat_Antiquot",
        "Mk_Term_Antiquot",
        "Refine_Util",
        "Attr_Comb",
        "Named_Sorted_Thms",
        "Prio_List",
        "Tagged_Solver",
        "Anti_Unification",
        "Misc",
        "Foldi",
        "Indep_Vars",
        "Select_Solve",
        "Mk_Record_Simp",
        "Refine_Lib",
        "files/Cond_Rewr_Conv.ML",
        "files/Revert_Abbrev.ML",
        "Param_Chapter",
        "Relators",
        "Param_Tool",
        "Param_HOL",
        "Parametricity",
        "Autoref_Phases",
        "Autoref_Data",
        "Autoref_Tagging",
        "Autoref_Id_Ops",
        "Autoref_Fix_Rel",
        "Autoref_Relator_Interface",
        "Autoref_Translate",
        "Autoref_Gen_Algo",
        "Autoref_Chapter",
        "Autoref_Tool",
        "Autoref_Bindings_HOL",
        "Automatic_Refinement"
    ],
    "relatedEntries": [
        "Collections"
    ]
}