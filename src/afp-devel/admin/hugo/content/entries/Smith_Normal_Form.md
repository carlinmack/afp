{
    "title": "A verified algorithm for computing the Smith normal form of a matrix",
    "authors": [
        "Jose Divasón"
    ],
    "topics": [
        "Mathematics/Algebra",
        "Computer science/Algorithms/Mathematical"
    ],
    "date": "2020-05-23",
    "notify": [
        "jose.divason@unirioja.es"
    ],
    "abstract": "\nThis work presents a formal proof in Isabelle/HOL of an algorithm to\ntransform a matrix into its Smith normal form, a canonical matrix\nform, in a general setting: the algorithm is parameterized by\noperations to prove its existence over elementary divisor rings, while\nexecution is guaranteed over Euclidean domains. We also provide a\nformal proof on some results about the generality of this algorithm as\nwell as the uniqueness of the Smith normal form.  Since Isabelle/HOL\ndoes not feature dependent types, the development is carried out\nswitching conveniently between two different existing libraries: the\nHermite normal form (based on HOL Analysis) and the Jordan normal form\nAFP entries. This permits to reuse results from both developments and\nit is done by means of the lifting and transfer package together with\nthe use of local type definitions.",
    "licence": "BSD",
    "dependencies": [
        "Hermite",
        "Perron_Frobenius",
        "List-Index",
        "Berlekamp_Zassenhaus"
    ],
    "theories": [
        "SNF_Algorithm_Two_Steps",
        "Mod_Type_Connect",
        "Admits_SNF_From_Diagonal_Iff_Bezout_Ring",
        "SNF_Algorithm",
        "SNF_Missing_Lemmas",
        "Finite_Field_Mod_Type_Connection",
        "SNF_Algorithm_Two_Steps_JNF",
        "Cauchy_Binet",
        "SNF_Algorithm_HOL_Analysis",
        "Diagonalize",
        "Elementary_Divisor_Rings",
        "Diagonal_To_Smith_JNF",
        "Diagonal_To_Smith",
        "Smith_Normal_Form_JNF",
        "Smith_Certified",
        "Smith_Normal_Form",
        "SNF_Algorithm_Euclidean_Domain",
        "Cauchy_Binet_HOL_Analysis",
        "Rings2_Extended",
        "SNF_Uniqueness"
    ],
    "relatedEntries": [
        "Algebraic_Numbers"
    ]
}