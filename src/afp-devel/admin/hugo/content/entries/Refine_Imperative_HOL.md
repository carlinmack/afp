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
        "Sepref",
        "Sepref_Basic",
        "Sepref_Chapter_Setup",
        "Sepref_Chapter_Tool",
        "Sepref_Combinator_Setup",
        "Sepref_Constraints",
        "Sepref_Definition",
        "Sepref_Foreach",
        "Sepref_Frame",
        "Sepref_HOL_Bindings",
        "Sepref_ICF_Bindings",
        "Sepref_Id_Op",
        "Sepref_Improper",
        "Sepref_Intf_Util",
        "Sepref_Monadify",
        "Sepref_Rules",
        "Sepref_Tool",
        "Sepref_Translate"
    ]
}