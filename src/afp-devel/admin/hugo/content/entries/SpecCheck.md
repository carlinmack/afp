{
    "title": "SpecCheck - Specification-Based Testing for Isabelle/ML",
    "authors": [
        "Kevin Kappelmann",
        "Lukas Bulwahn",
        "Sebastian Willenbrink"
    ],
    "topics": [
        "Tools"
    ],
    "date": "2021-07-01",
    "notify": [
        "kevin.kappelmann@tum.de"
    ],
    "abstract": "\nSpecCheck is a <a\nhref=\"https://en.wikipedia.org/wiki/QuickCheck\">QuickCheck</a>-like\ntesting framework for Isabelle/ML. You can use it to write\nspecifications for ML functions. SpecCheck then checks whether your\nspecification holds by testing your function against a given number of\ngenerated inputs. It helps you to identify bugs by printing\ncounterexamples on failure and provides you timing information.\nSpecCheck is customisable and allows you to specify your own input\ngenerators, test output formats, as well as pretty printers and\nshrinking functions for counterexamples among other things.",
    "licence": "BSD",
    "theories": [
        "SpecCheck_Base",
        "files/util.ML",
        "files/speccheck_base.ML",
        "files/property.ML",
        "files/configuration.ML",
        "files/random.ML",
        "SpecCheck_Generators",
        "files/gen_types.ML",
        "files/gen_base.ML",
        "files/gen_text.ML",
        "files/gen_int.ML",
        "files/gen_real.ML",
        "files/gen_function.ML",
        "files/gen_term.ML",
        "files/gen.ML",
        "SpecCheck_Show",
        "files/show_types.ML",
        "files/show_base.ML",
        "files/show.ML",
        "SpecCheck_Output_Style",
        "files/output_style_types.ML",
        "files/output_style_perl.ML",
        "files/output_style_custom.ML",
        "files/output_style.ML",
        "SpecCheck_Shrink",
        "files/shrink_types.ML",
        "files/shrink_base.ML",
        "files/shrink.ML",
        "SpecCheck",
        "files/speccheck.ML",
        "files/lecker.ML",
        "SpecCheck_Dynamic",
        "files/dynamic_construct.ML",
        "files/speccheck_dynamic.ML",
        "SpecCheck_Examples"
    ]
}