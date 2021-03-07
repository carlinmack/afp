{
    "title": "Treaps",
    "authors": [
        "Maximilian Haslbeck",
        "Manuel Eberl",
        "Tobias Nipkow"
    ],
    "topics": [
        "Computer science/Data structures"
    ],
    "date": "2018-02-06",
    "notify": [
        "eberlm@in.tum.de"
    ],
    "abstract": "\n<p> A Treap is a binary tree whose nodes contain pairs\nconsisting of some payload and an associated priority. It must have\nthe search-tree property w.r.t. the payloads and the heap property\nw.r.t. the priorities. Treaps are an interesting data structure that\nis related to binary search trees (BSTs) in the following way: if one\nforgets all the priorities of a treap, the resulting BST is exactly\nthe same as if one had inserted the elements into an empty BST in\norder of ascending priority. This means that a treap behaves like a\nBST where we can pretend the elements were inserted in a different\norder from the one in which they were actually inserted. </p>\n<p> In particular, by choosing these priorities at random upon\ninsertion of an element, we can pretend that we inserted the elements\nin <em>random order</em>, so that the shape of the\nresulting tree is that of a random BST no matter in what order we\ninsert the elements. This is the main result of this\nformalisation.</p>",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-02-07"
        },
        {
            "2017": "2018-02-06"
        }
    ],
    "dependencies": [
        "Random_BSTs",
        "Comparison_Sort_Lower_Bound"
    ],
    "theories": [
        "Probability_Misc",
        "Treap",
        "Random_List_Permutation",
        "Treap_Sort_and_BSTs",
        "Random_Treap"
    ]
}