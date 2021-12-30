{
    "title": "Relational Disjoint-Set Forests",
    "authors": [
        "Walter Guttmann"
    ],
    "topics": [
        "Computer science/Data structures"
    ],
    "date": "2020-08-26",
    "notify": [
        "walter.guttmann@canterbury.ac.nz"
    ],
    "abstract": "\nWe give a simple relation-algebraic semantics of read and write\noperations on associative arrays. The array operations seamlessly\nintegrate with assignments in the Hoare-logic library. Using relation\nalgebras and Kleene algebras we verify the correctness of an\narray-based implementation of disjoint-set forests with a naive union\noperation and a find operation with path compression.",
    "licence": "BSD",
    "dependencies": [
        "Stone_Kleene_Relation_Algebras"
    ],
    "theories": [
        "Disjoint_Set_Forests"
    ],
    "extra": {
        "Change history": "[2021-06-19]\nadded path halving, path splitting, relational Peano structures, union by rank\n(revision 98c7aa03457d)"
    },
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-08-26"
        }
    ]
}