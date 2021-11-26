{
    "title": "Stream Fusion in HOL with Code Generation",
    "authors": [
        "Andreas Lochbihler",
        "Alexandra Maximova"
    ],
    "date": "2014-10-10",
    "topics": [
        "Computer science/Functional programming"
    ],
    "abstract": "Stream Fusion is a system for removing intermediate list data structures from functional programs, in particular Haskell. This entry adapts stream fusion to Isabelle/HOL and its code generator. We define stream types for finite and possibly infinite lists and stream versions for most of the fusible list functions in the theories List and Coinductive_List, and prove them correct with respect to the conversion functions between lists and streams. The Stream Fusion transformation itself is implemented as a simproc in the preprocessor of the code generator. [Brian Huffman's <a href=\"http://isa-afp.org/entries/Stream-Fusion.html\">AFP entry</a> formalises stream fusion in HOLCF for the domain of lazy lists to prove the GHC compiler rewrite rules correct. In contrast, this work enables Isabelle's code generator to perform stream fusion itself. To that end, it covers both finite and coinductive lists from the HOL library and the Coinductive entry. The fusible list functions require specification and proof principles different from Huffman's.]",
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
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-10-13"
        },
        {
            "2014": "2014-10-10"
        }
    ],
    "dependencies": [
        "Coinductive"
    ],
    "theories": [
        "Stream_Fusion",
        "files/stream_fusion.ML",
        "Stream_Fusion_List",
        "Stream_Fusion_LList",
        "Stream_Fusion_Examples"
    ],
    "relatedEntries": [
        "Stream-Fusion"
    ]
}