{
    "title": "Perron-Frobenius Theorem for Spectral Radius Analysis",
    "authors": [
        "Jose Divasón",
        "Ondřej Kunčar",
        "René Thiemann",
        "Akihisa Yamada"
    ],
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "date": "2016-05-20",
    "topics": [
        "Mathematics/Algebra"
    ],
    "abstract": "\n<p>The spectral radius of a matrix A is the maximum norm of all\neigenvalues of A. In previous work we already formalized that for a\ncomplex matrix A, the values in A<sup>n</sup> grow polynomially in n\nif and only if the spectral radius is at most one. One problem with\nthe above characterization is the determination of all\n<em>complex</em> eigenvalues. In case A contains only non-negative\nreal values, a simplification is possible with the help of the\nPerron&ndash;Frobenius theorem, which tells us that it suffices to consider only\nthe <em>real</em> eigenvalues of A, i.e., applying Sturm's method can\ndecide the polynomial growth of A<sup>n</sup>. </p><p> We formalize\nthe Perron&ndash;Frobenius theorem based on a proof via Brouwer's fixpoint\ntheorem, which is available in the HOL multivariate analysis (HMA)\nlibrary. Since the results on the spectral radius is based on matrices\nin the Jordan normal form (JNF) library, we further develop a\nconnection which allows us to easily transfer theorems between HMA and\nJNF. With this connection we derive the combined result: if A is a\nnon-negative real matrix, and no real eigenvalue of A is strictly\nlarger than one, then A<sup>n</sup> is polynomially bounded in n. </p>",
    "extra": {
        "Change history": "[2017-10-18]\nadded Perron-Frobenius theorem for irreducible matrices with generalization\n(revision bda1f1ce8a1c)<br/>\n[2018-05-17]\nprove conjecture of CPP'18 paper Jordan blocks of spectral radius have maximum size\n(revision ffdb3794e5d5)"
    },
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-18"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-05-20"
        }
    ],
    "dependencies": [
        "Jordan_Normal_Form",
        "Polynomial_Factorization",
        "Rank_Nullity_Theorem",
        "Sturm_Sequences"
    ],
    "theories": [
        "Cancel_Card_Constraint",
        "files/cancel_card_constraint.ML",
        "Bij_Nat",
        "HMA_Connect",
        "Perron_Frobenius_Aux",
        "Perron_Frobenius",
        "Roots_Unity",
        "Perron_Frobenius_Irreducible",
        "Perron_Frobenius_General",
        "Spectral_Radius_Theory",
        "Spectral_Radius_Largest_Jordan_Block",
        "Hom_Gauss_Jordan",
        "Spectral_Radius_Theory_2",
        "Check_Matrix_Growth"
    ],
    "relatedEntries": [
        "Jordan_Normal_Form",
        "Subresultants",
        "Algebraic_Numbers"
    ]
}