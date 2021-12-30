{
    "title": "Verified Algorithms for Solving Markov Decision Processes",
    "authors": [
        "Maximilian Schäffeler",
        "Mohammad Abdulaziz"
    ],
    "topics": [
        "Mathematics/Probability theory",
        "Computer science/Algorithms"
    ],
    "date": "2021-12-16",
    "notify": [
        "schaeffm@in.tum.de",
        "mansour@in.tum.de"
    ],
    "abstract": "\nWe present a formalization of algorithms for solving Markov Decision\nProcesses (MDPs) with formal guarantees on the optimality of their\nsolutions. In particular we build on our analysis of the Bellman\noperator for discounted infinite horizon MDPs. From the iterator rule\non the Bellman operator we directly derive executable value iteration\nand policy iteration algorithms to iteratively solve finite MDPs. We\nalso prove correct optimized versions of value iteration that use\nmatrix splittings to improve the convergence rate. In particular, we\nformally verify Gauss-Seidel value iteration and modified policy\niteration. The algorithms are evaluated on two standard examples from\nthe literature, namely, inventory management and gridworld. Our\nformalization covers most of chapter 6 in Puterman's book\n\"Markov Decision Processes: Discrete Stochastic Dynamic\nProgramming\".",
    "licence": "BSD",
    "dependencies": [
        "MDP-Rewards",
        "Gauss_Jordan"
    ],
    "theories": [
        "Value_Iteration",
        "Policy_Iteration",
        "Modified_Policy_Iteration",
        "Matrix_Util",
        "Blinfun_Matrix",
        "Splitting_Methods",
        "Algorithms",
        "Code_DP",
        "Code_Mod",
        "Code_Real_Approx_By_Float_Fix",
        "Code_Inventory",
        "Code_Gridworld",
        "Examples"
    ]
}