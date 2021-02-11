{
    "title": "Bicategories",
    "authors": [
        "Eugene W. Stark"
    ],
    "topics": [
        "Mathematics/Category theory"
    ],
    "date": "2020-01-06",
    "notify": [
        "stark@cs.stonybrook.edu"
    ],
    "abstract": "\n<p>\nTaking as a starting point the author's previous work on\ndeveloping aspects of category theory in Isabelle/HOL, this article\ngives a compatible formalization of the notion of\n\"bicategory\" and develops a framework within which formal\nproofs of facts about bicategories can be given.  The framework\nincludes a number of basic results, including the Coherence Theorem,\nthe Strictness Theorem, pseudofunctors and biequivalence, and facts\nabout internal equivalences and adjunctions in a bicategory.  As a\ndriving application and demonstration of the utility of the framework,\nit is used to give a formal proof of a theorem, due to Carboni,\nKasangian, and Street, that characterizes up to biequivalence the\nbicategories of spans in a category with pullbacks.  The formalization\neffort necessitated the filling-in of many details that were not\nevident from the brief presentation in the original paper, as well as\nidentifying a few minor corrections along the way.\n</p><p>\nRevisions made subsequent to the first version of this article added\nadditional material on pseudofunctors, pseudonatural transformations,\nmodifications, and equivalence of bicategories; the main thrust being\nto give a proof that a pseudofunctor is a biequivalence if and only\nif it can be extended to an equivalence of bicategories.\n</p>",
    "extra": {
        "Change history": "[2020-02-15]\nMove ConcreteCategory.thy from Bicategory to Category3 and use it systematically.\nMake other minor improvements throughout.\n(revision a51840d36867)<br>\n[2020-11-04]\nAdded new material on equivalence of bicategories, with associated changes.\n(revision 472cb2268826)<br>"
    },
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2020-01-09"
        }
    ],
    "dependencies": [
        "MonoidalCategory"
    ],
    "theories": [
        "Strictness",
        "BicategoryOfSpans",
        "CanonicalIsos",
        "Prebicategory",
        "Bicategory",
        "EquivalenceOfBicategories",
        "Modification",
        "Pseudofunctor",
        "Tabulation",
        "IsomorphismClass",
        "InternalEquivalence",
        "PseudonaturalTransformation",
        "SpanBicategory",
        "Coherence",
        "InternalAdjunction",
        "Subbicategory"
    ]
}