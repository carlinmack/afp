{
    "title": "A Formalization of Safely Composable Web Components",
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
    "abstract": "\nWhile the (safely composable) DOM with shadow trees provide the\ntechnical basis for defining web components, it does neither defines\nthe concept of web components nor specifies the safety properties that\nweb components should guarantee. Consequently, the standard also does\nnot discuss how or even if the methods for modifying the DOM respect\ncomponent boundaries. In AFP entry, we present a formally verified\nmodel of safely composable web components and define safety properties\nwhich ensure that different web components can only interact with each\nother using well-defined interfaces. Moreover, our verification of the\napplication programming interface (API) of the DOM revealed numerous\ninvariants that implementations of the DOM API need to preserve to\nensure the integrity of components.  In comparison to the strict\nstandard compliance formalization of Web Components in the AFP entry\n\"DOM_Components\", the notion of components in this entry\n(based on \"SC_DOM\" and \"Shadow_SC_DOM\") provides\nmuch stronger safety guarantees.",
    "licence": "BSD",
    "dependencies": [
        "Shadow_SC_DOM"
    ],
    "theories": [
        "Core_DOM_SC_DOM_Components",
        "Shadow_DOM_DOM_Components",
        "Core_DOM_DOM_Components",
        "Shadow_DOM_SC_DOM_Components"
    ]
}