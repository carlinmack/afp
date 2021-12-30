{
    "title": "Markov Decision Processes with Rewards",
    "authors": [
        "Maximilian Schäffeler",
        "Mohammad Abdulaziz"
    ],
    "topics": [
        "Mathematics/Probability theory"
    ],
    "date": "2021-12-16",
    "notify": [
        "schaeffm@in.tum.de",
        "mansour@in.tum.de"
    ],
    "abstract": "\nWe present a formalization of Markov Decision Processes with rewards.\nIn particular we first build on Hölzl's formalization  of MDPs\n(AFP entry: Markov_Models) and extend them with rewards. We proceed\nwith an analysis of the expected total discounted reward criterion for\ninfinite horizon MDPs. The central result is the construction of the\niteration rule for the Bellman operator. We prove the optimality\nequations for this operator and show the existence of an optimal\nstationary deterministic solution. The analysis can be used to obtain\ndynamic programming algorithms such as value iteration and policy\niteration to solve MDPs with formal guarantees. Our formalization is\nbased on chapters 5 and 6 in Puterman's book \"Markov\nDecision Processes: Discrete Stochastic Dynamic Programming\".",
    "licence": "BSD",
    "theories": [
        "Bounded_Functions",
        "Blinfun_Util",
        "MDP_reward_Util",
        "MDP_cont",
        "MDP_disc",
        "MDP_reward"
    ]
}