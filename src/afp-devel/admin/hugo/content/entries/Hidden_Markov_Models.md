{
    "title": "Hidden Markov Models",
    "authors": [
        "Simon Wimmer"
    ],
    "topics": [
        "Mathematics/Probability theory",
        "Computer science/Algorithms"
    ],
    "date": "2018-05-25",
    "notify": [
        "wimmers@in.tum.de"
    ],
    "abstract": "\nThis entry contains a formalization of hidden Markov models [3] based\non Johannes Hölzl's formalization of discrete time Markov chains\n[1]. The basic definitions are provided and the correctness of two\nmain (dynamic programming) algorithms for hidden Markov models is\nproved: the forward algorithm for computing the likelihood of an\nobserved sequence, and the Viterbi algorithm for decoding the most\nprobable hidden state sequence. The Viterbi algorithm is made\nexecutable including memoization.  Hidden markov models have various\napplications in natural language processing. For an introduction see\nJurafsky and Martin [2].",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-05-25"
        }
    ],
    "dependencies": [
        "Markov_Models",
        "Monad_Memo_DP"
    ],
    "theories": [
        "Auxiliary",
        "Hidden_Markov_Model",
        "HMM_Implementation",
        "HMM_Example"
    ],
    "relatedEntries": [
        "Optimal_BST"
    ]
}