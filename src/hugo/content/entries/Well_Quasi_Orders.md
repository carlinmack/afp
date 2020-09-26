{
    "title": "Well-Quasi-Orders",
    "authors": [
        "Christian Sternagel"
    ],
    "date": "2012-04-13",
    "topics": [
        "Mathematics/Combinatorics"
    ],
    "abstract": "Based on Isabelle/HOL's type class for preorders,\nwe introduce a type class for well-quasi-orders (wqo)\nwhich is characterized by the absence of \"bad\" sequences\n(our proofs are along the lines of the proof of Nash-Williams,\nfrom which we also borrow terminology). Our main results are\ninstantiations for the product type, the list type, and a type of finite trees,\nwhich (almost) directly follow from our proofs of (1) Dickson's Lemma, (2)\nHigman's Lemma, and (3) Kruskal's Tree Theorem. More concretely:\n<ul>\n<li>If the sets A and B are wqo then their Cartesian product is wqo.</li>\n<li>If the set A is wqo then the set of finite lists over A is wqo.</li>\n<li>If the set A is wqo then the set of finite trees over A is wqo.</li>\n</ul>\nThe research was funded by the Austrian Science Fund (FWF): J3202.",
    "extra-history": "\nChange history:\n[2012-06-11]: Added Kruskal's Tree Theorem.<br>\n[2012-12-19]: New variant of Kruskal's tree theorem for terms (as opposed to\nvariadic terms, i.e., trees), plus finite version of the tree theorem as\ncorollary.<br>\n[2013-05-16]: Simplified construction of minimal bad sequences.<br>\n[2014-07-09]: Simplified proofs of Higman's lemma and Kruskal's tree theorem,\nbased on homogeneous sequences.<br>\n[2016-01-03]: An alternative proof of Higman's lemma by open induction.<br>\n[2017-06-08]: Proved (classical) equivalence to inductive definition of\nalmost-full relations according to the ITP 2012 paper \"Stop When You Are\nAlmost-Full\" by Vytiniotis, Coquand, and Wahlstedt.",
    "notify": [
        "c.sternagel@gmail.com"
    ],
    "licence": "BSD",
    "olderReleases": {
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