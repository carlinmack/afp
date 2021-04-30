{
    "title": "The BKR Decision Procedure for Univariate Real Arithmetic",
    "authors": [
        "Katherine Cordwell",
        "Yong Kiam Tan",
        "André Platzer"
    ],
    "topics": [
        "Computer science/Algorithms/Mathematical"
    ],
    "date": "2021-04-24",
    "notify": [
        "kcordwel@cs.cmu.edu",
        "yongkiat@cs.cmu.edu",
        "aplatzer@cs.cmu.edu"
    ],
    "abstract": "\nWe formalize the univariate case of Ben-Or, Kozen, and Reif's\ndecision procedure for first-order real arithmetic (the BKR\nalgorithm). We also formalize the univariate case of Renegar's\nvariation of the BKR algorithm. The two formalizations differ\nmathematically in minor ways (that have significant impact on the\nmultivariate case), but are quite similar in proof structure.  Both\nrely on sign-determination (finding the set of consistent sign\nassignments for a set of polynomials).  The method used for\nsign-determination is similar to Tarski's original quantifier\nelimination algorithm (it stores key information in a matrix\nequation), but with a reduction step to keep complexity low.",
    "licence": "BSD",
    "dependencies": [
        "Algebraic_Numbers",
        "Sturm_Tarski"
    ],
    "theories": [
        "More_Matrix",
        "BKR_Algorithm",
        "Matrix_Equation_Construction",
        "BKR_Proofs",
        "BKR_Decision",
        "Renegar_Algorithm",
        "Renegar_Proofs",
        "Renegar_Decision"
    ]
}