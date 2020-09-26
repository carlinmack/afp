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
    "licence": "BSD",
    "olderReleases": {
        "2005": "2006-03-15",
        "2007": "2007-11-27",
        "2008": "2008-06-10",
        "2009": "2009-04-29",
        "2009-1": "2009-12-12",
        "2009-2": "2010-06-30",
        "2011": "2011-02-11",
        "2011-1": "2011-10-11",
        "2012": "2012-05-24",
        "2013": "2013-03-02",
        "2013-1": "2013-11-17",
        "2013-2": "2013-12-11",
        "2014": "2014-08-28",
        "2015": "2015-05-27",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}