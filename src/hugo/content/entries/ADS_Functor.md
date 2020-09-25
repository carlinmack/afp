{
    "title": "Authenticated Data Structures As Functors",
    "authors": [
        "Andreas Lochbihler",
        "Ognjen Marić"
    ],
    "topics": [
        "Computer science-Data structures"
    ],
    "date": "2020-04-16",
    "notify": "andreas.lochbihler@digitalasset.com, mail@andreas-lochbihler.de",
    "abstract": "\nAuthenticated data structures allow several systems to convince each\nother that they are referring to the same data structure, even if each\nof them knows only a part of the data structure. Using inclusion\nproofs, knowledgeable systems can selectively share their knowledge\nwith other systems and the latter can verify the authenticity of what\nis being shared.  In this article, we show how to modularly define\nauthenticated data structures, their inclusion proofs, and operations\nthereon as datatypes in Isabelle/HOL, using a shallow embedding.\nModularity allows us to construct complicated trees from reusable\nbuilding blocks, which we call Merkle functors. Merkle functors\ninclude sums, products, and function spaces and are closed under\ncomposition and least fixpoints.  As a practical application, we model\nthe hierarchical transactions of <a\nhref=\"https://www.canton.io\">Canton</a>, a\npractical interoperability protocol for distributed ledgers, as\nauthenticated data structures. This is a first step towards\nformalizing the Canton protocol and verifying its integrity and\nsecurity guarantees."
}