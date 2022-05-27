{
    "title": "Formalization of a Framework for the Sound Automation of Magic Wands",
    "authors": [
        "Thibault Dardinier"
    ],
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "date": "2022-05-18",
    "notify": [
        "thibault.dardinier@inf.ethz.ch"
    ],
    "abstract": "\nThe magic wand $\\mathbin{-\\!\\!*}$ (also called separating\nimplication) is a separation logic connective commonly used to specify\nproperties of partial data structures, for instance during iterative\ntraversals. A <em>footprint</em> of a magic wand formula\n$$A \\mathbin{-\\!\\!*} B$$ is a state that, combined with any state in\nwhich $A$ holds, yields a state in which $B$ holds. The key\nchallenge of proving a magic wand (also called\n<em>packaging</em> a wand) is to find such a footprint.\nExisting package algorithms either have a high annotation overhead or\nare unsound.  In this entry, we formally define a framework for the\nsound automation of magic wands, described in an <a href=\"https://www.cs.ubc.ca/~alexsumm/papers/DardinierParthasarathyWeeksMuellerSummers22.pdf\">upcoming\npaper at CAV 2022</a>, and prove that it is sound and complete.\nThis framework, called the <em>package logic</em>,\nprecisely characterises a wide design space of possible package\nalgorithms applicable to a large class of separation logics.",
    "licence": "BSD",
    "theories": [
        "SepAlgebra",
        "PackageLogic"
    ]
}