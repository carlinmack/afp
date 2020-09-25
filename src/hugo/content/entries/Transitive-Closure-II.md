{
    "title": "Executable Transitive Closures",
    "topics": [
        "Computer science-Algorithms-Graph"
    ],
    "date": "2012-02-29",
    "authors": [
        "René Thiemann"
    ],
    "license": "LGPL",
    "abstract": "\n<p>\nWe provide a generic work-list algorithm to compute the\n(reflexive-)transitive closure of relations where only successors of newly\ndetected states are generated.\nIn contrast to our previous work, the relations do not have to be finite,\nbut each element must only have finitely many (indirect) successors.\nMoreover, a subsumption relation can be used instead of pure equality.\nAn executable variant of the algorithm is available where the generic operations\nare instantiated with list operations.\n</p><p>\nThis formalization was performed as part of the IsaFoR/CeTA project,\nand it has been used to certify size-change\ntermination proofs where large transitive closures have to be computed.\n</p>",
    "notify": "rene.thiemann@uibk.ac.at"
}