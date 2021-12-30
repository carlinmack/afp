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
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
        {
            "2019": "2019-12-19"
        }
    ],
    "dependencies": [
        "Isar_Ref"
    ],
    "theories": [
        "C_Lexer_Language",
        "C_Ast",
        "files/AFP/Isabelle_C/C11-FrontEnd/generated/c_ast.ML",
        "C_Environment",
        "C_Parser_Language",
        "files/AFP/Isabelle_C/src_ext/mlton/lib/mlyacc-lib/base.sig",
        "files/AFP/Isabelle_C/src_ext/mlton/lib/mlyacc-lib/join.sml",
        "files/AFP/Isabelle_C/src_ext/mlton/lib/mlyacc-lib/lrtable.sml",
        "files/AFP/Isabelle_C/src_ext/mlton/lib/mlyacc-lib/stream.sml",
        "files/AFP/Isabelle_C/src_ext/mlton/lib/mlyacc-lib/parser1.sml",
        "files/AFP/Isabelle_C/C11-FrontEnd/generated/c_grammar_fun.grm.sig",
        "files/AFP/Isabelle_C/C11-FrontEnd/generated/c_grammar_fun.grm.sml",
        "C_Lexer_Annotation",
        "C_Parser_Annotation",
        "C_Eval",
        "C_Command",
        "C_Document",
        "C_Main",
        "C0",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/argument_scope.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/atomic_parenthesis.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/bitfield_declaration_ambiguity.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/bitfield_declaration_ambiguity.ok.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/block_scope.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/char-literal-printing.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/c-namespace.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/control-scope.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/dangling_else.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/declarators.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/designator.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/enum.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/enum_constant_visibility.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/enum_shadows_typedef.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/enum-trick.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/expressions.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/function-decls.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/local_scope.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/local_typedef.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/long-long-struct.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/namespaces.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/no_local_scope.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/parameter_declaration_ambiguity.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/parameter_declaration_ambiguity.test.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/statements.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/struct-recursion.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/typedef_star.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/types.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/variable_star.c",
        "files/AFP/Isabelle_C/src_ext/parser_menhir/tests/bitfield_declaration_ambiguity.fail.c",
        "C1",
        "C2",
        "C_paper",
        "C_Appendices",
        "README"
    ]
}