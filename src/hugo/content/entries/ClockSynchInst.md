{
    "title": "Instances of Schneider's generalized protocol of clock synchronization",
    "authors": [
        "Damián Barsotti"
    ],
    "date": "2006-03-15",
    "topics": [
        "Computer science-Algorithms-Distributed"
    ],
    "abstract": "F. B. Schneider (\"Understanding protocols for Byzantine clock synchronization\") generalizes a number of protocols for Byzantine fault-tolerant clock synchronization and presents a uniform proof for their correctness. In Schneider's schema, each processor maintains a local clock by periodically adjusting each value to one computed by a convergence function applied to the readings of all the clocks. Then, correctness of an algorithm, i.e. that the readings of two clocks at any time are within a fixed bound of each other, is based upon some conditions on the convergence function. To prove that a particular clock synchronization algorithm is correct it suffices to show that the convergence function used by the algorithm meets Schneider's conditions. Using the theorem prover Isabelle, we formalize the proofs that the convergence functions of two algorithms, namely, the Interactive Convergence Algorithm (ICA) of Lamport and Melliar-Smith and the Fault-tolerant Midpoint algorithm of Lundelius-Lynch, meet Schneider's conditions. Furthermore, we experiment on handling some parts of the proofs with fully automatic tools like ICS and CVC-lite. These theories are part of a joint work with Alwen Tiu and Leonor P. Nieto <a href=\"http://users.rsise.anu.edu.au/~tiu/clocksync.pdf\">\"Verification of Clock Synchronization Algorithms: Experiments on a combination of deductive tools\"</a> in proceedings of AVOCS 2005. In this work the correctness of Schneider schema was also verified using Isabelle (entry <a href=\"GenClock.html\">GenClock</a> in AFP).",
    "notify": "kleing@cse.unsw.edu.au",
    "licence": "BSD"
}