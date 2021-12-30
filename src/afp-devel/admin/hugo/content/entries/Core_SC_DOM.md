{
    "title": "The Safely Composable DOM",
    "authors": [
        "Achim D. Brucker",
        "Michael Herzberg"
    ],
    "topics": [
        "Computer science/Data structures"
    ],
    "date": "2020-09-28",
    "notify": [
        "adbrucker@0x5f.org",
        "mail@michael-herzberg.de"
    ],
    "abstract": "\nIn this AFP entry, we formalize the core of the Safely Composable\nDocument Object Model (SC DOM). The SC DOM improve the standard DOM\n(as formalized in the AFP entry \"Core DOM\") by strengthening\nthe tree boundaries set by shadow roots: in the SC DOM, the shadow\nroot is a sub-class of the document class (instead of a base class).\nThis modifications also results in changes to some API methods (e.g.,\ngetOwnerDocument) to return the nearest shadow root rather than the\ndocument root. As a result, many API methods that, when called on a\nnode inside a shadow tree, would previously ``break out''\nand return or modify nodes that are possibly outside the shadow tree,\nnow stay within its boundaries. This change in behavior makes programs\nthat operate on shadow trees more predictable for the developer and\nallows them to make more assumptions about other code accessing the\nDOM.",
    "licence": "BSD",
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
    ],
    "relatedEntries": [
        "SC_DOM_Components"
    ],
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-11-26"
        }
    ]
}