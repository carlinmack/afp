{
    "title": "Formalizing Statecharts using Hierarchical Automata",
    "authors": [
        "Steffen Helke",
        "Florian Kammüller"
    ],
    "topics": [
        "Computer science-Automata and formal languages"
    ],
    "date": "2010-08-08",
    "abstract": "We formalize in Isabelle/HOL the abtract syntax and a synchronous\nstep semantics for the specification language Statecharts. The formalization\nis based on Hierarchical Automata which allow a structural decomposition of\nStatecharts into Sequential Automata. To support the composition of\nStatecharts, we introduce calculating operators to construct a Hierarchical\nAutomaton in a stepwise manner. Furthermore, we present a complete semantics\nof Statecharts including a theory of data spaces, which enables the modelling\nof racing effects. We also adapt CTL for\nStatecharts to build a bridge for future combinations with model\nchecking. However the main motivation of this work is to provide a sound and\ncomplete basis for reasoning on Statecharts. As a central meta theorem we\nprove that the well-formedness of a Statechart is preserved by the semantics.",
    "notify": "nipkow@in.tum.de"
}