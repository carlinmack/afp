{
    "title": "Attack Trees in Isabelle for GDPR compliance of IoT healthcare systems",
    "authors": [
        "Florian Kammüller"
    ],
    "topics": [
        "Computer science/Security"
    ],
    "date": "2020-04-27",
    "notify": [
        "florian.kammuller@gmail.com"
    ],
    "abstract": "\nIn this article, we present a proof theory for Attack Trees. Attack\nTrees are a well established and useful model for the construction of\nattacks on systems since they allow a stepwise exploration of high\nlevel attacks in application scenarios. Using the expressiveness of\nHigher Order Logic in Isabelle, we develop a generic\ntheory of Attack Trees with a state-based semantics based on Kripke\nstructures and CTL. The resulting framework\nallows mechanically supported logic analysis of the meta-theory of the\nproof calculus of Attack Trees and at the same time the developed\nproof theory enables application to case studies. A central\ncorrectness and completeness result proved in Isabelle establishes a\nconnection between the notion of Attack Tree validity and CTL. The\napplication is illustrated on the example of a healthcare IoT system\nand GDPR compliance verification.",
    "licence": "BSD",
    "theories": [
        "MC",
        "AT",
        "Infrastructure",
        "GDPRhealthcare"
    ]
}