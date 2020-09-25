{
    "title": "Binomial Heaps and Skew Binomial Heaps",
    "authors": [
        "Rene Meis",
        "Finn Nielsen",
        "Peter Lammich"
    ],
    "date": "2010-10-28",
    "topics": [
        "Computer science-Data structures"
    ],
    "abstract": "\nWe implement and prove correct binomial heaps and skew binomial heaps.\nBoth are data-structures for priority queues.\nWhile binomial heaps have logarithmic <em>findMin</em>, <em>deleteMin</em>,\n<em>insert</em>, and <em>meld</em> operations,\nskew binomial heaps have constant time <em>findMin</em>, <em>insert</em>,\nand <em>meld</em> operations, and only the <em>deleteMin</em>-operation is\nlogarithmic. This is achieved by using <em>skew links</em> to avoid\ncascading linking on <em>insert</em>-operations, and <em>data-structural\nbootstrapping</em> to get constant-time <em>findMin</em> and <em>meld</em>\noperations.  Our implementation follows the paper by Brodal and Okasaki.",
    "notify": "peter.lammich@uni-muenster.de"
}