{
    "title": "A Correctness Proof for the Volpano/Smith Security Typing System",
    "authors": [
        "Gregor Snelting",
        "Daniel Wasserrab"
    ],
    "date": "2008-09-02",
    "topics": [
        "Computer science/Programming languages/Type systems",
        "Computer science/Security"
    ],
    "abstract": "The Volpano/Smith/Irvine security type systems requires that variables are annotated as high (secret) or low (public), and provides typing rules which guarantee that secret values cannot leak to public output ports. This property of a program is called confidentiality. For a simple while-language without threads, our proof shows that typeability in the Volpano/Smith system guarantees noninterference. Noninterference means that if two initial states for program execution are low-equivalent, then the final states are low-equivalent as well. This indeed implies that secret values cannot leak to public ports. The proof defines an abstract syntax and operational semantics for programs, formalizes noninterference, and then proceeds by rule induction on the operational semantics. The mathematically most intricate part is the treatment of implicit flows. Note that the Volpano/Smith system is not flow-sensitive and thus quite unprecise, resulting in false alarms. However, due to the correctness property, all potential breaks of confidentiality are discovered.",
    "notify": [
        ""
    ],
    "licence": "BSD",
    "olderReleases": {
        "2008": "2008-09-05",
        "2009": "2009-04-29",
        "2009-1": "2009-12-12",
        "2009-2": "2010-07-01",
        "2011": "2011-02-11",
        "2011-1": "2011-10-11",
        "2012": "2012-05-24",
        "2013": "2013-02-16",
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