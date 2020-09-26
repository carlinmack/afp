{
    "title": "Reasoning about Lists via List Interleaving",
    "authors": [
        "Pasquale Noce"
    ],
    "date": "2015-06-11",
    "topics": [
        "Computer science-Data structures"
    ],
    "abstract": "\n<p>\nAmong the various mathematical tools introduced in his outstanding work on\nCommunicating Sequential Processes, Hoare has defined \"interleaves\" as the\npredicate satisfied by any three lists such that the first list may be\nsplit into sublists alternately extracted from the other two ones, whatever\nis the criterion for extracting an item from either one list or the other\nin each step.\n</p><p>\nThis paper enriches Hoare's definition by identifying such criterion with\nthe truth value of a predicate taking as inputs the head and the tail of\nthe first list. This enhanced \"interleaves\" predicate turns out to permit\nthe proof of equalities between lists without the need of an induction.\nSome rules that allow to infer \"interleaves\" statements without induction,\nparticularly applying to the addition or removal of a prefix to the input\nlists, are also proven. Finally, a stronger version of the predicate, named\n\"Interleaves\", is shown to fulfil further rules applying to the addition or\nremoval of a suffix to the input lists.\n</p>",
    "notify": "",
    "licence": "BSD"
}