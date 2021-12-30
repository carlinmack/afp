{
    "title": "A Meta-Model for the Isabelle API",
    "authors": [
        "Frédéric Tuong",
        "Burkhart Wolff"
    ],
    "date": "2015-09-16",
    "topics": [
        "Computer science/Programming languages/Language definitions"
    ],
    "abstract": "\nWe represent a theory <i>of</i> (a fragment of) Isabelle/HOL <i>in</i>\nIsabelle/HOL. The purpose of this exercise is to write packages for\ndomain-specific specifications such as class models, B-machines, ...,\nand generally speaking, any domain-specific languages whose\nabstract syntax can be defined by a HOL \"datatype\". On this basis, the\nIsabelle code-generator can then be used to generate code for global\ncontext transformations as well as tactic code.\n<p>\nConsequently the package is geared towards\nparsing, printing and code-generation to the Isabelle API.\nIt is at the moment not sufficiently rich for doing meta theory on\nIsabelle itself. Extensions in this direction are possible though.\n<p>\nMoreover, the chosen fragment is fairly rudimentary. However it should be\neasily adapted to one's needs if a package is written on top of it.\nThe supported API contains types, terms, transformation of\nglobal context like definitions and data-type declarations as well\nas infrastructure for Isar-setups.\n<p>\nThis theory is drawn from the\n<a href=\"http://isa-afp.org/entries/Featherweight_OCL.html\">Featherweight OCL</a>\nproject where\nit is used to construct a package for object-oriented data-type theories\ngenerated from UML class diagrams. The Featherweight OCL, for example, allows for\nboth the direct execution of compiled tactic code by the Isabelle API\nas well as the generation of \".thy\"-files for debugging purposes.\n<p>\nGained experience from this project shows that the compiled code is sufficiently\nefficient for practical purposes while being based on a formal <i>model</i>\non which properties of the package can be proven such as termination of certain\ntransformations, correctness, etc.",
    "notify": [
        "tuong@users.gforge.inria.fr",
        "wolff@lri.fr"
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
            "2015": "2015-09-28"
        },
        {
            "2015": "2015-09-25"
        }
    ],
    "theories": [
        "Antiquote_Setup",
        "files/ISABELLE_HOME/src/Doc/antiquote_setup.ML",
        "Isabelle_Cartouche_Examples",
        "Isabelle_Main0",
        "Isabelle_code_target",
        "Isabelle_code_runtime",
        "Isabelle_Main1",
        "Isabelle_typedecl",
        "Isabelle_Main2",
        "Init",
        "Meta_Pure",
        "Parser_init",
        "Parser_Pure",
        "Meta_SML",
        "Meta_Isabelle",
        "Printer_init",
        "Printer_Pure",
        "Printer_SML",
        "Printer_Isabelle",
        "Toy_Library_Static",
        "Init_rbt",
        "Meta_Toy",
        "Meta_Toy_extended",
        "Meta_META",
        "Core_init",
        "Floor1_infra",
        "Floor1_access",
        "Floor1_examp",
        "Floor2_examp",
        "Floor1_ctxt",
        "Core",
        "Parser_Toy",
        "Parser_Toy_extended",
        "Parser_META",
        "Printer_Toy",
        "Printer_Toy_extended",
        "Printer_META",
        "Printer",
        "Generator_static",
        "Generator_dynamic_sequential",
        "Design_deep",
        "Toy_Library",
        "Design_shallow",
        "Rail",
        "Design_generated",
        "Design_generated_generated"
    ]
}