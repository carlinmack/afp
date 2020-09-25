{
    "title": "Automatic Data Refinement",
    "authors": [
        "Peter Lammich"
    ],
    "topic": "Computer science/Programming languages/Logics",
    "date": "2013-10-02",
    "abstract": "We present the Autoref tool for Isabelle/HOL, which automatically\nrefines algorithms specified over abstract concepts like maps\nand sets to algorithms over concrete implementations like red-black-trees,\nand produces a refinement theorem. It is based on ideas borrowed from\nrelational parametricity due to Reynolds and Wadler.\nThe tool allows for rapid prototyping of verified, executable algorithms.\nMoreover, it can be configured to fine-tune the result to the user~s needs.\nOur tool is able to automatically instantiate generic algorithms, which\ngreatly simplifies the implementation of executable data structures.\n<p>\nThis AFP-entry provides the basic tool, which is then used by the\nRefinement and Collection Framework to provide automatic data refinement for\nthe nondeterminism monad and various collection datastructures.",
    "notify": "lammich@in.tum.de"
}