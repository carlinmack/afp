{
    "title": "Abstract Interpretation of Annotated Commands",
    "authors": [
        "Tobias Nipkow"
    ],
    "notify": "nipkow@in.tum.de",
    "date": "2016-11-23",
    "topics": [
        "Computer science-Programming languages-Static analysis"
    ],
    "abstract": "\nThis is the Isabelle formalization of the material decribed in the\neponymous <a href=\"https://doi.org/10.1007/978-3-642-32347-8_9\">ITP 2012 paper</a>.\nIt develops a generic abstract interpreter for a\nwhile-language, including widening and narrowing. The collecting\nsemantics and the abstract interpreter operate on annotated commands:\nthe program is represented as a syntax tree with the semantic\ninformation directly embedded, without auxiliary labels. The aim of\nthe formalization is simplicity, not efficiency or\nprecision. This is motivated by the inclusion of the material in a\ntheorem prover based course on semantics. A similar (but more\npolished) development is covered in the book\n<a href=\"https://doi.org/10.1007/978-3-319-10542-0\">Concrete Semantics</a>."
}