{
    "title": "A Formal Model of the Safely Composable Document Object Model with Shadow Roots",
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
    "abstract": "\nIn this AFP entry, we extend our formalization of the safely\ncomposable DOM with Shadow Roots. This is a proposal for Shadow Roots\nwith stricter safety guarantess than the standard compliant\nformalization (see \"Shadow DOM\"). Shadow Roots are a recent\nproposal of the web community to support a component-based development\napproach for client-side web applications.  Shadow roots are a\nsignificant extension to the DOM standard and, as web standards are\ncondemned to be backward compatible, such extensions often result in\ncomplex specification that may contain unwanted subtleties that can be\ndetected by a formalization.  Our Isabelle/HOL formalization is, in\nthe sense of object-orientation, an extension of our formalization of\nthe core DOM and enjoys the same basic properties, i.e., it is\nextensible, i.e., can be extended without the need of re-proving\nalready proven properties and executable, i.e., we can generate\nexecutable code from our specification. We exploit the executability\nto show that our formalization complies to the official standard of\nthe W3C, respectively, the WHATWG.",
    "licence": "BSD",
    "dependencies": [
        "Core_SC_DOM"
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
        "Shadow_DOM"
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