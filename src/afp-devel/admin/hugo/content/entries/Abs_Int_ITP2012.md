{
    "title": "Abstract Interpretation of Annotated Commands",
    "authors": [
        "Tobias Nipkow"
    ],
    "notify": [
        "nipkow@in.tum.de"
    ],
    "date": "2016-11-23",
    "topics": [
        "Computer science/Programming languages/Static analysis"
    ],
    "abstract": "\nThis is the Isabelle formalization of the material decribed in the\neponymous <a href=\"https://doi.org/10.1007/978-3-642-32347-8_9\">ITP 2012 paper</a>.\nIt develops a generic abstract interpreter for a\nwhile-language, including widening and narrowing. The collecting\nsemantics and the abstract interpreter operate on annotated commands:\nthe program is represented as a syntax tree with the semantic\ninformation directly embedded, without auxiliary labels. The aim of\nthe formalization is simplicity, not efficiency or\nprecision. This is motivated by the inclusion of the material in a\ntheorem prover based course on semantics. A similar (but more\npolished) development is covered in the book\n<a href=\"https://doi.org/10.1007/978-3-319-10542-0\">Concrete Semantics</a>.",
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
        }
    ],
    "theories": [
        "Abs_Int0",
        "Abs_Int1",
        "Abs_Int1_const",
        "Abs_Int1_parity",
        "Abs_Int2",
        "Abs_Int2_ivl",
        "Abs_Int3",
        "Abs_State",
        "ACom",
        "Collecting",
        "Complete_Lattice_ix"
    ]
}