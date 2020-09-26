{
    "title": "Formalizing a Seligman-Style Tableau System for Hybrid Logic",
    "authors": [
        "Asta Halkjær From"
    ],
    "topics": [
        "Logic/General logic/Modal logic"
    ],
    "date": "2019-12-20",
    "notify": [
        "ahfrom@dtu.dk"
    ],
    "abstract": "\nThis work is a formalization of soundness and completeness proofs\nfor a Seligman-style tableau system for hybrid logic. The completeness\nresult is obtained via a synthetic approach using maximally\nconsistent sets of tableau blocks. The formalization differs from\nprevious work in a few ways. First, to avoid the need to backtrack in\nthe construction of a tableau, the formalized system has no unnamed\ninitial segment, and therefore no Name rule. Second, I show that the\nfull Bridge rule is admissible in the system. Third, I start from rules\nrestricted to only extend the branch with new formulas, including only\nwitnessing diamonds that are not already witnessed, and show that\nthe unrestricted rules are admissible. Similarly, I start from simpler\nversions of the @-rules and show that these are sufficient.\nThe GoTo rule is restricted using a notion of potential such that each\napplication consumes potential and potential is earned through applications of\nthe remaining rules. I show that if a branch can be closed then it can\nbe closed starting from a single unit. Finally, Nom is restricted by\na fixed set of allowed nominals. The resulting system should be terminating.",
    "extra-history": "\nChange history:\n[2020-06-03]: The fully restricted system has been shown complete by updating the synthetic completeness proof.",
    "licence": "BSD",
    "olderReleases": {
        "2019": "2020-01-07"
    }
}