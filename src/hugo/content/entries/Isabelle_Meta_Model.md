{
    "title": "A Meta-Model for the Isabelle API",
    "authors": [
        "Frédéric Tuong",
        "Burkhart Wolff"
    ],
    "date": "2015-09-16",
    "topics": [
        "Computer science-Programming languages-Language definitions"
    ],
    "abstract": "\nWe represent a theory <i>of</i> (a fragment of) Isabelle/HOL <i>in</i>\nIsabelle/HOL. The purpose of this exercise is to write packages for\ndomain-specific specifications such as class models, B-machines, ...,\nand generally speaking, any domain-specific languages whose\nabstract syntax can be defined by a HOL \"datatype\". On this basis, the\nIsabelle code-generator can then be used to generate code for global\ncontext transformations as well as tactic code.\n<p>\nConsequently the package is geared towards\nparsing, printing and code-generation to the Isabelle API.\nIt is at the moment not sufficiently rich for doing meta theory on\nIsabelle itself. Extensions in this direction are possible though.\n<p>\nMoreover, the chosen fragment is fairly rudimentary. However it should be\neasily adapted to one's needs if a package is written on top of it.\nThe supported API contains types, terms, transformation of\nglobal context like definitions and data-type declarations as well\nas infrastructure for Isar-setups.\n<p>\nThis theory is drawn from the\n<a href=\"http://isa-afp.org/entries/Featherweight_OCL.html\">Featherweight OCL</a>\nproject where\nit is used to construct a package for object-oriented data-type theories\ngenerated from UML class diagrams. The Featherweight OCL, for example, allows for\nboth the direct execution of compiled tactic code by the Isabelle API\nas well as the generation of \".thy\"-files for debugging purposes.\n<p>\nGained experience from this project shows that the compiled code is sufficiently\nefficient for practical purposes while being based on a formal <i>model</i>\non which properties of the package can be proven such as termination of certain\ntransformations, correctness, etc.",
    "notify": "tuong@users.gforge.inria.fr, wolff@lri.fr"
}