{
    "title": "Representation and Partial Automation of the Principia Logico-Metaphysica in Isabelle/HOL",
    "authors": [
        "Daniel Kirchner"
    ],
    "topics": [
        "Logic/Philosophical aspects"
    ],
    "date": "2017-09-17",
    "notify": [
        "daniel@ekpyron.org"
    ],
    "abstract": "\n<p> We present an embedding of the second-order fragment of the\nTheory of Abstract Objects as described in Edward Zalta's\nupcoming work <a\nhref=\"https://mally.stanford.edu/principia.pdf\">Principia\nLogico-Metaphysica (PLM)</a> in the automated reasoning\nframework Isabelle/HOL. The Theory of Abstract Objects is a\nmetaphysical theory that reifies property patterns, as they for\nexample occur in the abstract reasoning of mathematics, as\n<b>abstract objects</b> and provides an axiomatic\nframework that allows to reason about these objects. It thereby serves\nas a fundamental metaphysical theory that can be used to axiomatize\nand describe a wide range of philosophical objects, such as Platonic\nforms or Leibniz' concepts, and has the ambition to function as a\nfoundational theory of mathematics. The target theory of our embedding\nas described in chapters 7-9 of PLM employs a modal relational type\ntheory as logical foundation for which a representation in functional\ntype theory is <a\nhref=\"https://mally.stanford.edu/Papers/rtt.pdf\">known to\nbe challenging</a>. </p> <p> Nevertheless we arrive\nat a functioning representation of the theory in the functional logic\nof Isabelle/HOL based on a semantical representation of an Aczel-model\nof the theory. Based on this representation we construct an\nimplementation of the deductive system of PLM which allows to\nautomatically and interactively find and verify theorems of PLM.\n</p> <p> Our work thereby supports the concept of shallow\nsemantical embeddings of logical systems in HOL as a universal tool\nfor logical reasoning <a\nhref=\"http://www.mi.fu-berlin.de/inf/groups/ag-ki/publications/Universal-Reasoning/1703_09620_pd.pdf\">as\npromoted by Christoph Benzm&uuml;ller</a>. </p>\n<p> The most notable result of the presented work is the\ndiscovery of a previously unknown paradox in the formulation of the\nTheory of Abstract Objects. The embedding of the theory in\nIsabelle/HOL played a vital part in this discovery. Furthermore it was\npossible to immediately offer several options to modify the theory to\nguarantee its consistency. Thereby our work could provide a\nsignificant contribution to the development of a proper grounding for\nobject theory. </p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
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
            "2016-1": "2017-09-19"
        }
    ],
    "theories": [
        "TAO_1_Embedding",
        "TAO_2_Semantics",
        "TAO_3_Quantifiable",
        "TAO_4_BasicDefinitions",
        "TAO_5_MetaSolver",
        "TAO_6_Identifiable",
        "TAO_7_Axioms",
        "TAO_8_Definitions",
        "TAO_9_PLM",
        "TAO_10_PossibleWorlds",
        "TAO_98_ArtificialTheorems",
        "TAO_99_SanityTests",
        "TAO_99_Paradox",
        "Thesis"
    ]
}