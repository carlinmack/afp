{
    "title": "Abstract Rewriting",
    "topics": [
        "Logic/Rewriting"
    ],
    "date": "2010-06-14",
    "authors": [
        "Christian Sternagel",
        "René Thiemann"
    ],
    "license": "LGPL",
    "abstract": "\nWe present an Isabelle formalization of abstract rewriting (see, e.g.,\nthe book by Baader and Nipkow). First, we define standard relations like\n<i>joinability</i>, <i>meetability</i>, <i>conversion</i>, etc. Then, we\nformalize important properties of abstract rewrite systems, e.g.,\nconfluence and strong normalization. Our main concern is on strong\nnormalization, since this formalization is the basis of <a\nhref=\"http://cl-informatik.uibk.ac.at/software/ceta\">CeTA</a> (which is\nmainly about strong normalization of term rewrite systems). Hence lemmas\ninvolving strong normalization constitute by far the biggest part of this\ntheory. One of those is Newman's lemma.",
    "extra": {
        "Change history": "[2010-09-17] Added theories defining several (ordered)\nsemirings related to strong normalization and giving some standard\ninstances. <br>\n[2013-10-16] Generalized delta-orders from rationals to Archimedean fields."
    },
    "notify": [
        "christian.sternagel@uibk.ac.at",
        "rene.thiemann@uibk.ac.at"
    ],
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
            "2009-1": "2010-06-17"
        }
    ],
    "dependencies": [
        "Regular-Sets"
    ],
    "theories": [
        "SN_Order_Carrier",
        "Seq",
        "Relative_Rewriting",
        "SN_Orders",
        "Abstract_Rewriting"
    ]
}