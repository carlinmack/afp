{
    "title": "Clean - An Abstract Imperative Programming Language and its Theory",
    "authors": [
        "Frédéric Tuong",
        "Burkhart Wolff"
    ],
    "topics": [
        "Computer science-Programming languages",
        "Computer science-Semantics"
    ],
    "date": "2019-10-04",
    "notify": "wolff@lri.fr, ftuong@lri.fr",
    "abstract": "\nClean is based on a simple, abstract execution model for an imperative\ntarget language. “Abstract” is understood in contrast to “Concrete\nSemantics”; alternatively, the term “shallow-style embedding” could be\nused. It strives for a type-safe notion of program-variables, an\nincremental construction of the typed state-space, support of\nincremental verification, and open-world extensibility of new type\ndefinitions being intertwined with the program definitions. Clean is\nbased on a “no-frills” state-exception monad with the usual\ndefinitions of bind and unit for the compositional glue of state-based\ncomputations. Clean offers conditionals and loops supporting C-like\ncontrol-flow operators such as break and return. The state-space\nconstruction is based on the extensible record package. Direct\nrecursion of procedures is supported. Clean’s design strives for\nextreme simplicity. It is geared towards symbolic execution and proven\ncorrect verification tools. The underlying libraries of this package,\nhowever, deliberately restrict themselves to the most elementary\ninfrastructure for these tasks. The package is intended to serve as\ndemonstrator semantic backend for Isabelle/C, or for the\ntest-generation techniques."
}