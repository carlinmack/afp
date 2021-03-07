{
    "title": "Binomial Heaps and Skew Binomial Heaps",
    "authors": [
        "Rene Meis",
        "Finn Nielsen",
        "Peter Lammich"
    ],
    "date": "2010-10-28",
    "topics": [
        "Computer science/Data structures"
    ],
    "abstract": "\nWe implement and prove correct binomial heaps and skew binomial heaps.\nBoth are data-structures for priority queues.\nWhile binomial heaps have logarithmic <em>findMin</em>, <em>deleteMin</em>,\n<em>insert</em>, and <em>meld</em> operations,\nskew binomial heaps have constant time <em>findMin</em>, <em>insert</em>,\nand <em>meld</em> operations, and only the <em>deleteMin</em>-operation is\nlogarithmic. This is achieved by using <em>skew links</em> to avoid\ncascading linking on <em>insert</em>-operations, and <em>data-structural\nbootstrapping</em> to get constant-time <em>findMin</em> and <em>meld</em>\noperations.  Our implementation follows the paper by Brodal and Okasaki.",
    "notify": [
        "peter.lammich@uni-muenster.de"
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
            "2009-2": "2010-10-28"
        }
    ],
    "theories": [
        "BinomialHeap",
        "SkewBinomialHeap",
        "Test"
    ]
}