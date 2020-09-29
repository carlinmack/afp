{
    "title": "Isabelle/C",
    "authors": [
        "Frédéric Tuong",
        "Burkhart Wolff"
    ],
    "topics": [
        "Computer science/Programming languages/Language definitions",
        "Computer science/Semantics",
        "Tools"
    ],
    "date": "2019-10-22",
    "notify": [
        "tuong@users.gforge.inria.fr",
        "wolff@lri.fr"
    ],
    "abstract": "\nWe present a framework for C code in C11 syntax deeply integrated into\nthe Isabelle/PIDE development environment. Our framework provides an\nabstract interface for verification back-ends to be plugged-in\nindependently. Thus, various techniques such as deductive program\nverification or white-box testing can be applied to the same source,\nwhich is part of an integrated PIDE document model. Semantic back-ends\nare free to choose the supported C fragment and its semantics. In\nparticular, they can differ on the chosen memory model or the\nspecification mechanism for framing conditions. Our framework supports\nsemantic annotations of C sources in the form of comments. Annotations\nserve to locally control back-end settings, and can express the term\nfocus to which an annotation refers. Both the logical and the\nsyntactic context are available when semantic annotations are\nevaluated. As a consequence, a formula in an annotation can refer both\nto HOL or C variables. Our approach demonstrates the degree of\nmaturity and expressive power the Isabelle/PIDE sub-system has\nachieved in recent years. Our integration technique employs Lex and\nYacc style grammars to ensure efficient deterministic parsing.  This\nis the core-module of Isabelle/C; the AFP package for Clean and\nClean_wrapper as well as AutoCorres and AutoCorres_wrapper (available\nvia git) are applications of this front-end.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-12-19"
        }
    ],
    "dependencies": [
        "Isar_Ref"
    ]
}