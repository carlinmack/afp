{
    "title": "Formalization of Conflict Analysis of Programs with Procedures, Thread Creation, and Monitors",
    "topic": "Computer science/Programming languages/Static analysis",
    "authors": [
        "Peter Lammich",
        "Markus Müller-Olm"
    ],
    "date": "2007-12-14",
    "abstract": "In this work we formally verify the soundness and precision of a static program analysis that detects conflicts (e. g. data races) in programs with procedures, thread creation and monitors with the Isabelle theorem prover. As common in static program analysis, our program model abstracts guarded branching by nondeterministic branching, but completely interprets the call-/return behavior of procedures, synchronization by monitors, and thread creation. The analysis is based on the observation that all conflicts already occur in a class of particularly restricted schedules. These restricted schedules are suited to constraint-system-based program analysis. The formalization is based upon a flowgraph-based program model with an operational semantics as reference point.",
    "notify": "peter.lammich@uni-muenster.de"
}