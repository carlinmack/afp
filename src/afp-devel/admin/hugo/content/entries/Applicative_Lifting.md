{
    "title": "Applicative Lifting",
    "authors": [
        "Andreas Lochbihler",
        "Joshua Schneider"
    ],
    "date": "2015-12-22",
    "topics": [
        "Computer science/Functional programming"
    ],
    "abstract": "Applicative functors augment computations with effects by lifting function application to types which model the effects.  As the structure of the computation cannot depend on the effects, applicative expressions can be analysed statically.  This allows us to lift universally quantified equations to the effectful types, as observed by Hinze. Thus, equational reasoning over effectful computations can be reduced to pure types.\n</p><p>\nThis entry provides a package for registering applicative functors and two proof methods for lifting of equations over applicative functors. The first method normalises applicative expressions according to the laws of applicative functors. This way, equations whose two sides contain the same list of variables can be lifted to every applicative functor.\n</p><p>\nTo lift larger classes of equations, the second method exploits a number of additional properties (e.g., commutativity of effects) provided the properties have been declared for the concrete applicative functor at hand upon registration.\n</p><p>\nWe declare several types from the Isabelle library as applicative functors and illustrate the use of the methods with two examples: the lifting of the arithmetic type class hierarchy to streams and the verification of a relabelling function on binary trees. We also formalise and verify the normalisation algorithm used by the first proof method.\n</p>",
    "extra": {
        "Change history": "[2016-03-03] added formalisation of lifting with combinators<br>\n[2016-06-10]\nimplemented automatic derivation of lifted combinator reductions;\nsupport arbitrary lifted relations using relators;\nimproved compatibility with locale interpretation\n(revision ec336f354f37)<br>"
    },
    "notify": [
        "mail@andreas-lochbihler.de"
    ],
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
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-12-22"
        }
    ],
    "theories": [
        "Applicative",
        "files/applicative.ML",
        "Applicative_Environment",
        "Applicative_Option",
        "Applicative_Sum",
        "Applicative_Set",
        "Applicative_List",
        "Applicative_DNEList",
        "Applicative_Monoid",
        "Applicative_Filter",
        "Applicative_State",
        "Applicative_Stream",
        "Applicative_Open_State",
        "Applicative_PMF",
        "Applicative_Probability_List",
        "Applicative_Star",
        "Applicative_Vector",
        "Applicative_Functor",
        "Applicative_Environment_Algebra",
        "Stream_Algebra",
        "Tree_Relabelling",
        "Applicative_Examples",
        "Joinable",
        "Beta_Eta",
        "Combinators",
        "Idiomatic_Terms",
        "Abstract_AF",
        "Applicative_Test"
    ]
}