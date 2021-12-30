{
    "title": "A Formal Model of the Document Object Model with Shadow Roots",
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
    "abstract": "\nIn this AFP entry, we extend our formalization of the core DOM with\nShadow Roots. Shadow roots are a recent proposal of the web community\nto support a component-based development approach for client-side web\napplications.  Shadow roots are a significant extension to the DOM\nstandard and, as web standards are condemned to be backward\ncompatible, such extensions often result in complex specification that\nmay contain unwanted subtleties that can be detected by a\nformalization.  Our Isabelle/HOL formalization is, in the sense of\nobject-orientation, an extension of our formalization of the core DOM\nand enjoys the same basic properties, i.e., it is extensible, i.e.,\ncan be extended without the need of re-proving already proven\nproperties and executable, i.e., we can generate executable code from\nour specification. We exploit the executability to show that our\nformalization complies to the official standard of the W3C,\nrespectively, the WHATWG.",
    "licence": "BSD",
    "dependencies": [
        "Core_DOM"
    ],
    "theories": [
        "ShadowRootClass",
        "ShadowRootMonad",
        "Shadow_DOM",
        "Shadow_DOM_BaseTest",
        "slots",
        "slots_fallback",
        "Shadow_DOM_Document_adoptNode",
        "Shadow_DOM_Document_getElementById",
        "Shadow_DOM_Node_insertBefore",
        "Shadow_DOM_Node_removeChild",
        "Shadow_DOM_Tests"
    ],
    "relatedEntries": [
        "Shadow_SC_DOM"
    ],
    "olderReleases": [
        {
            "2021": "2021-02-23"
        }
    ]
}