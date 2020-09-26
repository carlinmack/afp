{
    "title": "Minimal Static Single Assignment Form",
    "authors": [
        "Max Wagner",
        "Denis Lohner"
    ],
    "topics": [
        "Computer science-Programming languages-Transformations"
    ],
    "date": "2017-01-17",
    "notify": "denis.lohner@kit.edu",
    "abstract": "\n<p>This formalization is an extension to <a\nhref=\"https://www.isa-afp.org/entries/Formal_SSA.html\">\"Verified\nConstruction of Static Single Assignment Form\"</a>. In\ntheir work, the authors have shown that <a\nhref=\"https://doi.org/10.1007/978-3-642-37051-9_6\">Braun\net al.'s static single assignment (SSA) construction\nalgorithm</a> produces minimal SSA form for input programs with\na reducible control flow graph (CFG). However Braun et al. also\nproposed an extension to their algorithm that they claim produces\nminimal SSA form even for irreducible CFGs.<br> In this\nformalization we support that claim by giving a mechanized proof.\n</p>\n<p>As the extension of Braun et al.'s algorithm\naims for removing so-called redundant strongly connected components of\nphi functions, we show that this suffices to guarantee minimality\naccording to <a href=\"https://doi.org/10.1145/115372.115320\">Cytron et\nal.</a>.</p>",
    "licence": "BSD"
}