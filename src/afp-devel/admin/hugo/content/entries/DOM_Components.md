{
    "title": "A Formalization of Web Components",
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
    "abstract": "\nWhile the DOM with shadow trees provide the technical basis for\ndefining web components, the DOM standard neither defines the concept\nof web components nor specifies the safety properties that web\ncomponents should guarantee. Consequently, the standard also does not\ndiscuss how or even if the methods for modifying the DOM respect\ncomponent boundaries.  In AFP entry, we present a formally verified\nmodel of web components and define safety properties which ensure that\ndifferent web components can only interact with each other using\nwell-defined interfaces. Moreover, our verification of the application\nprogramming interface (API) of the DOM revealed numerous invariants\nthat implementations of the DOM API need to preserve to ensure the\nintegrity of components.",
    "licence": "BSD",
    "dependencies": [
        "Shadow_DOM"
    ],
    "theories": [
        "Core_DOM_Components",
        "Shadow_DOM_Components"
    ]
}