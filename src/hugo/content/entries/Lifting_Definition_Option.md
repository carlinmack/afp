{
    "title": "Lifting Definition Option",
    "authors": [
        "René Thiemann"
    ],
    "topics": [
        "Computer science-Functional programming"
    ],
    "date": "2014-10-13",
    "license": "LGPL",
    "abstract": "\nWe implemented a command that can be used to easily generate\nelements of a restricted type <tt>{x :: 'a. P x}</tt>,\nprovided the definition is of the form\n<tt>f ys = (if check ys then Some(generate ys :: 'a) else None)</tt> where\n<tt>ys</tt> is a list of variables <tt>y1 ... yn</tt> and\n<tt>check ys ==> P(generate ys)</tt> can be proved.\n<p>\nIn principle, such a definition is also directly possible using the\n<tt>lift_definition</tt> command. However, then this definition will not be\nsuitable for code-generation. To this end, we automated a more complex\nconstruction of Joachim Breitner which is amenable for code-generation, and\nwhere the test <tt>check ys</tt> will only be performed once.  In the\nautomation, one auxiliary type is created, and Isabelle's lifting- and\ntransfer-package is invoked several times.",
    "notify": "rene.thiemann@uibk.ac.at"
}