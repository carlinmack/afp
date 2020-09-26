{
    "title": "Decision Procedures for MSO on Words Based on Derivatives of Regular Expressions",
    "authors": [
        "Dmitriy Traytel",
        "Tobias Nipkow"
    ],
    "topics": [
        "Computer science/Automata and formal languages",
        "Logic/General logic/Decidability of theories"
    ],
    "date": "2014-06-12",
    "abstract": "\nMonadic second-order logic on finite words (MSO) is a decidable yet\nexpressive logic into which many decision problems can be encoded. Since MSO\nformulas correspond to regular languages, equivalence of MSO formulas can be\nreduced to the equivalence of some regular structures (e.g. automata). We\nverify an executable decision procedure for MSO formulas that is not based\non automata but on regular expressions.\n<p>\nDecision procedures for regular expression equivalence have been formalized\nbefore, usually based on Brzozowski derivatives. Yet, for a straightforward\nembedding of MSO formulas into regular expressions an extension of regular\nexpressions with a projection operation is required. We prove total\ncorrectness and completeness of an equivalence checker for regular\nexpressions extended in that way. We also define a language-preserving\ntranslation of formulas into regular expressions with respect to two\ndifferent semantics of MSO.\n<p>\nThe formalization is described in this <a href=\"http://www21.in.tum.de/~nipkow/pubs/icfp13.html\">ICFP 2013 functional pearl</a>.",
    "notify": [
        "traytel@in.tum.de",
        "nipkow@in.tum.de"
    ],
    "licence": "BSD",
    "olderReleases": {
        "2013-2": "2014-06-12",
        "2014": "2014-08-28",
        "2015": "2015-05-27",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}