{
    "title": "Developing Security Protocols by Refinement",
    "authors": [
        "Christoph Sprenger",
        "Ivano Somaini<>"
    ],
    "topic": "Computer science/Security",
    "license": "LGPL",
    "date": "2017-05-24",
    "notify": "sprenger@inf.ethz.ch",
    "abstract": "\nWe propose a development method for security protocols based on\nstepwise refinement. Our refinement strategy transforms abstract\nsecurity goals into protocols that are secure when operating over an\ninsecure channel controlled by a Dolev-Yao-style intruder. As\nintermediate levels of abstraction, we employ messageless guard\nprotocols and channel protocols communicating over channels with\nsecurity properties. These abstractions provide insights on why\nprotocols are secure and foster the development of families of\nprotocols sharing common structure and properties. We have implemented\nour method in Isabelle/HOL and used it to develop different entity\nauthentication and key establishment protocols, including realistic\nfeatures such as key confirmation, replay caches, and encrypted\ntickets. Our development highlights that guard protocols and channel\nprotocols provide fundamental abstractions for bridging the gap\nbetween security properties and standard protocol descriptions based\non cryptographic messages. It also shows that our refinement approach\nscales to protocols of nontrivial size and complexity."
}