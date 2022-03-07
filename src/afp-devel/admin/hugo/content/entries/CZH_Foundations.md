{
    "title": "Category Theory for ZFC in HOL I: Foundations: Design Patterns, Set Theory, Digraphs, Semicategories",
    "authors": [
        "Mihails Milehins"
    ],
    "topics": [
        "Mathematics/Category theory",
        "Logic/Set theory"
    ],
    "date": "2021-09-06",
    "notify": [
        "mihailsmilehins@gmail.com"
    ],
    "abstract": "\nThis article provides a foundational framework for the formalization\nof category theory in the object logic ZFC in HOL of the formal proof\nassistant Isabelle. More specifically, this article provides a\nformalization of canonical set-theoretic constructions internalized in\nthe type <i>V</i> associated with the ZFC in HOL,\nestablishes a design pattern for the formalization of mathematical\nstructures using sequences and locales, and showcases the developed\ninfrastructure by providing formalizations of the elementary theories\nof digraphs and semicategories. The methodology chosen for the\nformalization of the theories of digraphs and semicategories (and\ncategories in future articles) rests on the ideas that were originally\nexpressed in the article <i>Set-Theoretical Foundations of\nCategory Theory</i> written by Solomon Feferman and Georg\nKreisel. Thus, in the context of this work, each of the aforementioned\nmathematical structures is represented as a term of the type\n<i>V</i> embedded into a stage of the von Neumann\nhierarchy.",
    "licence": "BSD",
    "dependencies": [
        "Intro_Dest_Elim",
        "Conditional_Simplification"
    ],
    "theories": [
        "CZH_Sets_MIF",
        "CZH_Utilities",
        "CZH_Introduction",
        "CZH_Sets_Introduction",
        "CZH_Sets_Sets",
        "CZH_Sets_Nat",
        "CZH_Sets_BRelations",
        "CZH_Sets_IF",
        "CZH_Sets_Equipollence",
        "CZH_Sets_Cardinality",
        "CZH_Sets_Ordinals",
        "CZH_Sets_FSequences",
        "CZH_Sets_FBRelations",
        "CZH_Sets_VNHS",
        "CZH_Sets_NOP",
        "HOL_CContinuum",
        "CZH_Sets_ZQR",
        "CZH_EX_Replacement",
        "CZH_EX_TS",
        "CZH_EX_Algebra",
        "CZH_Sets_Conclusions",
        "CZH_DG_Introduction",
        "CZH_DG_Digraph",
        "CZH_DG_Small_Digraph",
        "CZH_DG_DGHM",
        "CZH_DG_Small_DGHM",
        "CZH_DG_TDGHM",
        "CZH_DG_Small_TDGHM",
        "CZH_DG_PDigraph",
        "CZH_DG_Subdigraph",
        "CZH_DG_Simple",
        "CZH_DG_GRPH",
        "CZH_DG_Rel",
        "CZH_DG_Par",
        "CZH_DG_Set",
        "CZH_DG_Conclusions",
        "CZH_SMC_Introduction",
        "CZH_SMC_Semicategory",
        "CZH_SMC_Small_Semicategory",
        "CZH_SMC_Semifunctor",
        "CZH_SMC_Small_Semifunctor",
        "CZH_SMC_NTSMCF",
        "CZH_SMC_Small_NTSMCF",
        "CZH_SMC_PSemicategory",
        "CZH_SMC_Subsemicategory",
        "CZH_SMC_Simple",
        "CZH_SMC_GRPH",
        "CZH_DG_SemiCAT",
        "CZH_SMC_SemiCAT",
        "CZH_SMC_Rel",
        "CZH_SMC_Par",
        "CZH_SMC_Set",
        "CZH_SMC_Conclusions"
    ],
    "relatedEntries": [
        "CZH_Universal_Constructions",
        "CZH_Elementary_Categories"
    ],
    "olderReleases": [
        {
            "2021": "2021-10-05"
        },
        {
            "2021": "2021-09-14"
        }
    ]
}