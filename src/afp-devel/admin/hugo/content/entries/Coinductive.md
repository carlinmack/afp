{
    "title": "Coinductive",
    "topics": [
        "Computer science/Functional programming"
    ],
    "authors": [
        "Andreas Lochbihler"
    ],
    "contributors": [
        "Johannes Hölzl"
    ],
    "date": "2010-02-12",
    "abstract": "This article collects formalisations of general-purpose coinductive data types and sets. Currently, it contains coinductive natural numbers, coinductive lists, i.e. lazy lists or streams, infinite streams, coinductive terminated lists, coinductive resumptions, a library of operations on coinductive lists, and a version of König's lemma as an application for coinductive lists.<br>The initial theory was contributed by Paulson and Wenzel. Extensions and other coinductive formalisations of general interest are welcome.",
    "extra": {
        "Change history": "[2010-06-10]\ncoinductive lists setup for quotient package\n(revision 015574f3bf3c)<br>\n[2010-06-28]\nnew codatatype terminated lazy lists\n(revision e12de475c558)<br>\n[2010-08-04]\nterminated lazy lists setup for quotient package;\nmore lemmas\n(revision 6ead626f1d01)<br>\n[2010-08-17]\nKoenig's lemma as an example application for coinductive lists\n(revision f81ce373fa96)<br>\n[2011-02-01]\nlazy implementation of coinductive (terminated) lists for the code generator\n(revision 6034973dce83)<br>\n[2011-07-20]\nnew codatatype resumption\n(revision 811364c776c7)<br>\n[2012-06-27]\nnew codatatype stream with operations (with contributions by Peter Gammie)\n(revision dd789a56473c)<br>\n[2013-03-13]\nconstruct codatatypes with the BNF package and adjust the definitions and proofs,\nsetup for lifting and transfer packages\n(revision f593eda5b2c0)<br>\n[2013-09-20]\nstream theory uses type and operations from HOL/BNF/Examples/Stream\n(revision 692809b2b262)<br>\n[2014-04-03]\nccpo structure on codatatypes used to define ldrop, ldropWhile, lfilter, lconcat as least fixpoint;\nccpo topology on coinductive lists contributed by Johannes Hölzl;\nadded examples\n(revision 23cd8156bd42)<br>"
    },
    "notify": [
        "mail@andreas-lochbihler.de"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-03-02"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2011-10-11"
        },
        {
            "2011": "2011-02-11"
        },
        {
            "2009-2": "2010-06-30"
        },
        {
            "2009-1": "2010-02-15"
        },
        {
            "2009-1": "2010-02-14"
        }
    ],
    "theories": [
        "Lazy_TLList",
        "Coinductive_List",
        "Coinductive",
        "Coinductive_Stream",
        "Lazy_LList",
        "TLList",
        "Quotient_Coinductive_List",
        "Quotient_TLList",
        "Coinductive_Nat",
        "Coinductive_List_Prefix",
        "TLList_CCPO"
    ]
}