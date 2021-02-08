{
    "title": "Category Theory with Adjunctions and Limits",
    "authors": [
        "Eugene W. Stark"
    ],
    "notify": [
        "stark@cs.stonybrook.edu"
    ],
    "date": "2016-06-26",
    "topics": [
        "Mathematics/Category theory"
    ],
    "abstract": "\n<p>\nThis article attempts to develop a usable framework for doing category\ntheory in Isabelle/HOL.  Our point of view, which to some extent\ndiffers from that of the previous AFP articles on the subject, is to\ntry to explore how category theory can be done efficaciously within\nHOL, rather than trying to match exactly the way things are done using\na traditional approach.  To this end, we define the notion of category\nin an \"object-free\" style, in which a category is represented by a\nsingle partial composition operation on arrows.  This way of defining\ncategories provides some advantages in the context of HOL, including\nthe ability to avoid the use of records and the possibility of\ndefining functors and natural transformations simply as certain\nfunctions on arrows, rather than as composite objects.  We define\nvarious constructions associated with the basic notions, including:\ndual category, product category, functor category, discrete category,\nfree category, functor composition, and horizontal and vertical\ncomposite of natural transformations.  A \"set category\" locale is\ndefined that axiomatizes the notion \"category of all sets at a type\nand all functions between them,\" and a fairly extensive set of\nproperties of set categories is derived from the locale assumptions.\nThe notion of a set category is used to prove the Yoneda Lemma in a\ngeneral setting of a category equipped with a \"hom embedding,\" which\nmaps arrows of the category to the \"universe\" of the set category.  We\nalso give a treatment of adjunctions, defining adjunctions via left\nand right adjoint functors, natural bijections between hom-sets, and\nunit and counit natural transformations, and showing the equivalence\nof these definitions.  We also develop the theory of limits, including\nrepresentations of functors, diagrams and cones, and diagonal\nfunctors.  We show that right adjoint functors preserve limits, and\nthat limits can be constructed via products and equalizers.  We\ncharacterize the conditions under which limits exist in a set\ncategory. We also examine the case of limits in a functor category,\nultimately culminating in a proof that the Yoneda embedding preserves\nlimits.\n</p><p>\nRevisions made subsequent to the first version of this article added\nmaterial on equivalence of categories, cartesian categories,\ncategories with pullbacks, categories with finite limits, and\ncartesian closed categories.  A construction was given of the category\nof hereditarily finite sets and functions between them, and it was\nshown that this category is cartesian closed.\n</p>",
    "extra": {
        "Change history": "[2018-05-29]\nRevised axioms for the category locale.  Introduced notation for composition and \"in hom\".\n(revision 8318366d4575)<br>\n[2020-02-15]\nMove ConcreteCategory.thy from Bicategory to Category3 and use it systematically.\nMake other minor improvements throughout.\n(revision a51840d36867)<br>\n[2020-07-10]\nAdded new material, mostly centered around cartesian categories.\n(revision 06640f317a79)<br>\n[2020-11-04]\nMinor modifications and extensions made in conjunction with the addition\nof new material to Bicategory.\n(revision 472cb2268826)<br>"
    },
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
        },
        {
            "2016": "2016-06-26"
        }
    ],
    "dependencies": [
        "HereditarilyFinite"
    ],
    "theories": [
        "EquivalenceOfCategories",
        "ConcreteCategory",
        "HFSetCat",
        "DiscreteCategory",
        "Category",
        "CategoryWithFiniteLimits",
        "FreeCategory",
        "DualCategory",
        "InitialTerminal",
        "CartesianCategory",
        "EpiMonoIso",
        "Subcategory",
        "Adjunction",
        "Yoneda",
        "CartesianClosedCategory",
        "NaturalTransformation",
        "ProductCategory",
        "Limit",
        "Functor",
        "SetCategory",
        "CategoryWithPullbacks",
        "SetCat",
        "FunctorCategory",
        "BinaryFunctor"
    ]
}