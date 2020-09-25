{
    "title": "Native Word",
    "authors": [
        "Andreas Lochbihler"
    ],
    "contributors": "Peter Lammich <http://www21.in.tum.de/~lammich>",
    "date": "2013-09-17",
    "topics": [
        "Computer science-Data structures"
    ],
    "abstract": "This entry makes machine words and machine arithmetic available for code generation from Isabelle/HOL.  It provides a common abstraction that hides the differences between the different target languages.  The code generator maps these operations to the APIs of the target languages.  Apart from that, we extend the available bit operations on types int and integer, and map them to the operations in the target languages.",
    "extra-history": "\nChange history:\n[2013-11-06]:\nadded conversion function between native words and characters\n(revision fd23d9a7fe3a)<br>\n[2014-03-31]:\nadded words of default size in the target language (by Peter Lammich)\n(revision 25caf5065833)<br>\n[2014-10-06]:\nproper test setup with compilation and execution of tests in all target languages\n(revision 5d7a1c9ae047)<br>\n[2017-09-02]:\nadded 64-bit words (revision c89f86244e3c)<br>\n[2018-07-15]:\nadded cast operators for default-size words (revision fc1f1fb8dd30)<br>",
    "notify": "mail@andreas-lochbihler.de"
}