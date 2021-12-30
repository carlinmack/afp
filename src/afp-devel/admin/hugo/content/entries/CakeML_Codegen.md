{
    "title": "A Verified Code Generator from Isabelle/HOL to CakeML",
    "authors": [
        "Lars Hupel"
    ],
    "topics": [
        "Computer science/Programming languages/Compiling",
        "Logic/Rewriting"
    ],
    "date": "2019-07-08",
    "notify": [
        "lars@hupel.info"
    ],
    "abstract": "\nThis entry contains the formalization that accompanies my PhD thesis\n(see https://lars.hupel.info/research/codegen/). I develop a verified\ncompilation toolchain from executable specifications in Isabelle/HOL\nto CakeML abstract syntax trees. This improves over the\nstate-of-the-art in Isabelle by providing a trustworthy procedure for\ncode generation.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
        {
            "2019": "2019-07-11"
        }
    ],
    "dependencies": [
        "CakeML",
        "Constructor_Funs",
        "Dict_Construction",
        "Higher_Order_Terms",
        "Huffman",
        "Pairing_Heap",
        "Root_Balanced_Tree",
        "Show"
    ],
    "theories": [
        "ML_Utils",
        "files/utils.ML",
        "Compiler_Utils",
        "Code_Utils",
        "files/pattern_compatibility.ML",
        "files/dynamic_unfold.ML",
        "CakeML_Utils",
        "Test_Utils",
        "Doc_Terms",
        "Terms_Extras",
        "files/hol_term.ML",
        "HOL_Datatype",
        "files/hol_datatype.ML",
        "Constructors",
        "Consts",
        "Strong_Term",
        "Sterm",
        "Pterm",
        "Term_as_Value",
        "Value",
        "Doc_CupCake",
        "CupCake_Env",
        "CupCake_Semantics",
        "Doc_Rewriting",
        "General_Rewriting",
        "Rewriting_Term",
        "Rewriting_Nterm",
        "Rewriting_Pterm_Elim",
        "Rewriting_Pterm",
        "Rewriting_Sterm",
        "Big_Step_Sterm",
        "Big_Step_Value",
        "Big_Step_Value_ML",
        "Doc_Preproc",
        "Eval_Class",
        "files/tactics.ML",
        "Embed",
        "files/embed.ML",
        "Eval_Instances",
        "files/eval_instances.ML",
        "Doc_Backend",
        "CakeML_Setup",
        "CakeML_Backend",
        "CakeML_Correctness",
        "CakeML_Byte",
        "Doc_Compiler",
        "Composition",
        "Compiler",
        "Test_Composition",
        "Test_Print",
        "Test_Embed_Data",
        "Test_Embed_Data2",
        "Test_Embed_Tree",
        "Test_Datatypes"
    ]
}