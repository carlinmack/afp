{
    "title": "The CAVA Automata Library",
    "authors": [
        "Peter Lammich"
    ],
    "date": "2014-05-28",
    "topics": [
        "Computer science-Automata and formal languages"
    ],
    "abstract": "\nWe report on the graph and automata library that is used in the fully\nverified LTL model checker CAVA.\nAs most components of CAVA use some type of graphs or automata, a common\nautomata library simplifies assembly of the components and reduces\nredundancy.\n<p>\nThe CAVA Automata Library provides a hierarchy of graph and automata\nclasses, together with some standard algorithms.\nIts object oriented design allows for sharing of algorithms, theorems,\nand implementations between its classes, and also simplifies extensions\nof the library.\nMoreover, it is integrated into the Automatic Refinement Framework,\nsupporting automatic refinement of the abstract automata types to\nefficient data structures.\n<p>\nNote that the CAVA Automata Library is work in progress. Currently, it\nis very specifically tailored towards the requirements of the CAVA model\nchecker.\nNevertheless, the formalization techniques presented here allow an\nextension of the library to a wider scope. Moreover, they are not\nlimited to graph libraries, but apply to class hierarchies in general.\n<p>\nThe CAVA Automata Library is described in the paper: Peter Lammich, The\nCAVA Automata Library, Isabelle Workshop 2014.",
    "notify": "lammich@in.tum.de",
    "licence": "BSD"
}