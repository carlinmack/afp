{
    "title": "Light-weight Containers",
    "authors": [
        "Andreas Lochbihler"
    ],
    "contributors": [
        "René Thiemann"
    ],
    "date": "2013-04-15",
    "topics": [
        "Computer science/Data structures"
    ],
    "abstract": "\nThis development provides a framework for container types like sets and maps such that generated code implements these containers with different (efficient) data structures.\nThanks to type classes and refinement during code generation, this light-weight approach can seamlessly replace Isabelle's default setup for code generation.\nHeuristics automatically pick one of the available data structures depending on the type of elements to be stored, but users can also choose on their own.\nThe extensible design permits to add more implementations at any time.\n<p>\nTo support arbitrary nesting of sets, we define a linear order on sets based on a linear order of the elements and provide efficient implementations.\nIt even allows to compare complements with non-complements.",
    "extra": {
        "Change history": "[2013-07-11] add pretty printing for sets (revision 7f3f52c5f5fa)<br>\n[2013-09-20]\nprovide generators for canonical type class instantiations\n(revision 159f4401f4a8 by René Thiemann)<br>\n[2014-07-08] add support for going from partial functions to mappings (revision 7a6fc957e8ed)<br>\n[2018-03-05] add two application examples depth-first search and 2SAT (revision e5e1a1da2411)"
    },
    "notify": [
        "mail@andreas-lochbihler.de"
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
        },
        {
            "2013": "2013-04-23"
        }
    ],
    "dependencies": [
        "Deriving",
        "Finger-Trees",
        "Regular-Sets",
        "Automatic_Refinement",
        "Collections"
    ],
    "theories": [
        "Containers_Auxiliary",
        "Card_Datatype",
        "List_Fusion",
        "Lexicographic_Order",
        "Extend_Partial_Order",
        "Set_Linorder",
        "Containers_Generator",
        "files/containers_generator.ML",
        "Collection_Order",
        "files/ccompare_generator.ML",
        "List_Proper_Interval",
        "Collection_Eq",
        "files/ceq_generator.ML",
        "Collection_Enum",
        "files/cenum_generator.ML",
        "Equal",
        "RBT_ext",
        "RBT_Mapping2",
        "AssocList",
        "DList_Set",
        "RBT_Set2",
        "Closure_Set",
        "Set_Impl",
        "files/set_impl_generator.ML",
        "Mapping_Impl",
        "files/mapping_impl_generator.ML",
        "Map_To_Mapping",
        "Containers",
        "Compatibility_Containers_Regular_Sets",
        "Containers_Userguide",
        "Card_Datatype_Ex",
        "Map_To_Mapping_Ex",
        "TwoSat_Ex",
        "Containers_DFS_Ex",
        "Containers_TwoSat_Ex"
    ],
    "relatedEntries": [
        "JinjaThreads",
        "ROBDD",
        "Separation_Logic_Imperative_HOL"
    ]
}