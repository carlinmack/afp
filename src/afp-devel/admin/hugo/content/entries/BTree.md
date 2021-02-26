{
    "title": "A Verified Imperative Implementation of B-Trees",
    "authors": [
        "Niels Mündler"
    ],
    "topics": [
        "Computer science/Data structures"
    ],
    "date": "2021-02-24",
    "notify": [
        "n.muendler@tum.de"
    ],
    "abstract": "\nIn this work, we use the interactive theorem prover Isabelle/HOL to\nverify an imperative implementation of the classical B-tree data\nstructure invented by Bayer and McCreight [ACM 1970]. The\nimplementation supports set membership and insertion queries with\nefficient binary search for intra-node navigation. This is\naccomplished by first specifying the structure abstractly in the\nfunctional modeling language HOL and proving functional correctness.\nUsing manual refinement, we derive an imperative implementation in\nImperative/HOL. We show the validity of this refinement using the\nseparation logic utilities from the <a\nhref=\"https://www.isa-afp.org/entries/Refine_Imperative_HOL.html\">\nIsabelle Refinement Framework </a> . The code can be exported to\nthe programming languages SML and Scala. We examine the runtime of all\noperations indirectly by reproducing results of the logarithmic\nrelationship between height and the number of nodes.  The results are\ndiscussed in greater detail in the corresponding <a\nhref=\"https://mediatum.ub.tum.de/1596550\">Bachelor's\nThesis</a>.",
    "licence": "BSD",
    "dependencies": [
        "Refine_Imperative_HOL"
    ],
    "theories": [
        "Basic_Assn",
        "Array_SBlit",
        "Partially_Filled_Array",
        "BTree_Set",
        "BTree_ImpSet",
        "BTree_Imp",
        "Imperative_Loops",
        "BTree_ImpSplit",
        "BTree_Height",
        "BTree",
        "BTree_Split"
    ]
}