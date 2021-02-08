{
    "title": "Native Word",
    "authors": [
        "Andreas Lochbihler"
    ],
    "contributors": [
        "Peter Lammich"
    ],
    "date": "2013-09-17",
    "topics": [
        "Computer science/Data structures"
    ],
    "abstract": "This entry makes machine words and machine arithmetic available for code generation from Isabelle/HOL.  It provides a common abstraction that hides the differences between the different target languages.  The code generator maps these operations to the APIs of the target languages.  Apart from that, we extend the available bit operations on types int and integer, and map them to the operations in the target languages.",
    "extra": {
        "Change history": "[2013-11-06]\nadded conversion function between native words and characters\n(revision fd23d9a7fe3a)<br>\n[2014-03-31]\nadded words of default size in the target language (by Peter Lammich)\n(revision 25caf5065833)<br>\n[2014-10-06]\nproper test setup with compilation and execution of tests in all target languages\n(revision 5d7a1c9ae047)<br>\n[2017-09-02]\nadded 64-bit words (revision c89f86244e3c)<br>\n[2018-07-15]\nadded cast operators for default-size words (revision fc1f1fb8dd30)<br>"
    },
    "notify": [
        "mail@andreas-lochbihler.de"
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
    "dependencies": [
        "Word_Lib"
    ],
    "theories": [
        "Native_Word_Test_PolyML",
        "Native_Word_Test_SMLNJ",
        "Native_Word_Test_OCaml2",
        "Native_Word_Test_Emu",
        "Uint32",
        "Bits_Integer",
        "Native_Word_Test_GHC",
        "Native_Word_Test_SMLNJ2",
        "Native_Cast_Uint",
        "Native_Word_Test_PolyML2",
        "Code_Target_Word_Base",
        "Uint16",
        "Uint",
        "Uint64",
        "Native_Word_Imperative_HOL",
        "Code_Symbolic_Bits_Int",
        "Native_Cast",
        "More_Bits_Int",
        "Native_Word_Test",
        "Native_Word_Test_MLton2",
        "Native_Word_Test_OCaml",
        "Code_Target_Bits_Int",
        "Native_Word_Test_Scala",
        "Native_Word_Test_MLton",
        "Uint_Userguide",
        "Native_Word_Test_PolyML64",
        "Uint8"
    ],
    "relatedEntries": [
        "IEEE_Floating_Point"
    ]
}