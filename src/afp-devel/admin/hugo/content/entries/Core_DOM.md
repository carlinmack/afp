{
    "title": "A Formal Model of the Document Object Model",
    "authors": [
        "Achim D. Brucker",
        "Michael Herzberg"
    ],
    "topics": [
        "Computer science/Data structures"
    ],
    "date": "2018-12-26",
    "notify": [
        "adbrucker@0x5f.org"
    ],
    "abstract": "\nIn this AFP entry, we formalize the core of the Document Object Model\n(DOM).  At its core, the DOM defines a tree-like data structure for\nrepresenting documents in general and HTML documents in particular. It\nis the heart of any modern web browser.  Formalizing the key concepts\nof the DOM is a prerequisite for the formal reasoning over client-side\nJavaScript programs and for the analysis of security concepts in\nmodern web browsers.  We present a formalization of the core DOM, with\nfocus on the node-tree and the operations defined on node-trees, in\nIsabelle/HOL. We use the formalization to verify the functional\ncorrectness of the most important functions defined in the DOM\nstandard. Moreover, our formalization is 1) extensible, i.e., can be\nextended without the need of re-proving already proven properties and\n2) executable, i.e., we can generate executable code from our\nspecification.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-01-07"
        }
    ],
    "theories": [
        "Hiding_Type_Variables",
        "Ref",
        "Core_DOM_Basic_Datatypes",
        "BaseClass",
        "Heap_Error_Monad",
        "BaseMonad",
        "ObjectPointer",
        "ObjectClass",
        "ObjectMonad",
        "NodePointer",
        "NodeClass",
        "NodeMonad",
        "ElementPointer",
        "CharacterDataPointer",
        "DocumentPointer",
        "ShadowRootPointer",
        "ElementClass",
        "ElementMonad",
        "CharacterDataClass",
        "CharacterDataMonad",
        "DocumentClass",
        "DocumentMonad",
        "Core_DOM_Functions",
        "Core_DOM_Heap_WF",
        "Core_DOM",
        "Testing_Utils",
        "Core_DOM_BaseTest",
        "Document_adoptNode",
        "Document_getElementById",
        "Node_insertBefore",
        "Node_removeChild",
        "Core_DOM_Tests"
    ]
}