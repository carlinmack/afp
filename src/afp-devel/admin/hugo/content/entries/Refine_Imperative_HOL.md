{
    "title": "The Imperative Refinement Framework",
    "authors": [
        "Peter Lammich"
    ],
    "notify": [
        "lammich@in.tum.de"
    ],
    "date": "2016-08-08",
    "topics": [
        "Computer science/Programming languages/Transformations",
        "Computer science/Data structures"
    ],
    "abstract": "\nWe present the Imperative Refinement Framework (IRF), a tool that\nsupports a stepwise refinement based approach to imperative programs.\nThis entry is based on the material we presented in [ITP-2015,\nCPP-2016].  It uses the Monadic Refinement Framework as a frontend for\nthe specification of the abstract programs, and Imperative/HOL as a\nbackend to generate executable imperative programs.  The IRF comes\nwith tool support to synthesize imperative programs from more\nabstract, functional ones, using efficient imperative implementations\nfor the abstract data structures.  This entry also includes the\nImperative Isabelle Collection Framework (IICF), which provides a\nlibrary of re-usable imperative collection data structures.  Moreover,\nthis entry contains a quickstart guide and a reference manual, which\nprovide an introduction to using the IRF for Isabelle/HOL experts. It\nalso provids a collection of (partly commented) practical examples,\nsome highlights being Dijkstra's Algorithm, Nested-DFS, and a generic\nworklist algorithm with subsumption.  Finally, this entry contains\nbenchmark scripts that compare the runtime of some examples against\nreference implementations of the algorithms in Java and C++.\n[ITP-2015] Peter Lammich: Refinement to Imperative/HOL. ITP 2015:\n253--269  [CPP-2016] Peter Lammich: Refinement based verification of\nimperative data structures. CPP 2016: 27--36",
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
            "2016": "2016-08-08"
        }
    ],
    "dependencies": [
        "Sepref_Prereq",
        "Isar_Ref",
        "List-Index",
        "Collections_Examples",
        "DFS_Framework",
        "Dijkstra_Shortest_Path"
    ],
    "theories": [
        "Concl_Pres_Clarification",
        "Named_Theorems_Rev",
        "Pf_Add",
        "Pf_Mono_Prover",
        "PO_Normalizer",
        "files/PO_Normalizer.ML",
        "Sepref_Misc",
        "Structured_Apply",
        "Term_Synth",
        "User_Smashing",
        "Sepref_Chapter_Tool",
        "Sepref_Id_Op",
        "Sepref_Basic",
        "Sepref_Monadify",
        "Sepref_Constraints",
        "Sepref_Frame",
        "Sepref_Rules",
        "Sepref_Combinator_Setup",
        "Sepref_Translate",
        "Sepref_Definition",
        "Sepref_Intf_Util",
        "Sepref_Tool",
        "Sepref_Chapter_Setup",
        "Sepref_HOL_Bindings",
        "Sepref_Foreach",
        "Sepref_Improper",
        "Sepref",
        "Sepref_Chapter_IICF",
        "IICF_Set",
        "IICF_List_SetO",
        "IICF_Multiset",
        "IICF_Prio_Bag",
        "IICF_List_Mset",
        "IICF_List_MsetO",
        "IICF_List",
        "IICF_Abs_Heap",
        "IICF_HOL_List",
        "IICF_Array_List",
        "IICF_Impl_Heap",
        "IICF_Map",
        "IICF_Prio_Map",
        "IICF_Abs_Heapmap",
        "IICF_Array",
        "IICF_MS_Array_List",
        "IICF_Indexed_Array_List",
        "IICF_Impl_Heapmap",
        "IICF_Matrix",
        "IICF_Array_Matrix",
        "IICF_Sepl_Binding",
        "IICF",
        "Sepref_Chapter_Userguides",
        "Sepref_Guide_Quickstart",
        "Sepref_Guide_Reference",
        "Sepref_Guide_General_Util",
        "Sepref_ICF_Bindings",
        "Sepref_WGraph",
        "Sepref_Chapter_Examples",
        "Sepref_Graph",
        "Sepref_DFS",
        "Sepref_Dijkstra",
        "Sepref_NDFS",
        "Sepref_Minitests",
        "Worklist_Subsumption",
        "Worklist_Subsumption_Impl",
        "Sepref_Snip_Datatype",
        "Sepref_Snip_Combinator",
        "Sepref_All_Examples",
        "Sepref_Chapter_Benchmarks",
        "Heapmap_Bench",
        "Dijkstra_Benchmark",
        "NDFS_Benchmark"
    ]
}