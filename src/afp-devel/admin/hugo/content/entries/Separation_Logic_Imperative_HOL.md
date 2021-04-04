{
    "title": "A Separation Logic Framework for Imperative HOL",
    "authors": [
        "Peter Lammich",
        "Rene Meis"
    ],
    "date": "2012-11-14",
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "license": "BSD",
    "abstract": "\nWe provide a framework for separation-logic based correctness proofs of\nImperative HOL programs. Our framework comes with a set of proof methods to\nautomate canonical tasks such as verification condition generation and\nframe inference. Moreover, we provide a set of examples that show the\napplicability of our framework. The examples include algorithms on lists,\nhash-tables, and union-find trees. We also provide abstract interfaces for\nlists, maps, and sets, that allow to develop generic imperative algorithms\nand use data-refinement techniques.\n<br>\nAs we target Imperative HOL, our programs can be translated to\nefficiently executable code in various target languages, including\nML, OCaml, Haskell, and Scala.",
    "notify": [
        "lammich@in.tum.de"
    ],
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
        },
        {
            "2013": "2013-03-02"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-11-15"
        }
    ],
    "dependencies": [
        "Automatic_Refinement",
        "Collections",
        "Native_Word"
    ],
    "theories": [
        "Imperative_HOL_Add",
        "Syntax_Match",
        "Run",
        "Assertions",
        "Hoare_Triple",
        "Automation",
        "Sep_Main",
        "Imp_List_Spec",
        "List_Seg",
        "Open_List",
        "Circ_List",
        "Imp_Map_Spec",
        "Hash_Table",
        "Hash_Map",
        "Hash_Map_Impl",
        "Imp_Set_Spec",
        "Hash_Set_Impl",
        "To_List_GA",
        "Union_Find",
        "Idioms",
        "Default_Insts",
        "Array_Blit",
        "Array_Map_Impl",
        "Array_Set_Impl",
        "From_List_GA",
        "Sep_Examples"
    ],
    "relatedEntries": [
        "JinjaThreads",
        "ROBDD",
        "Containers"
    ]
}