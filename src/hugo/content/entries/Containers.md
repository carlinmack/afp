{
    "title": "Light-weight Containers",
    "authors": [
        "Andreas Lochbihler"
    ],
    "contributors": "René Thiemann <mailto:rene.thiemann@uibk.ac.at>",
    "date": "2013-04-15",
    "topics": [
        "Computer science-Data structures"
    ],
    "abstract": "\nThis development provides a framework for container types like sets and maps such that generated code implements these containers with different (efficient) data structures.\nThanks to type classes and refinement during code generation, this light-weight approach can seamlessly replace Isabelle's default setup for code generation.\nHeuristics automatically pick one of the available data structures depending on the type of elements to be stored, but users can also choose on their own.\nThe extensible design permits to add more implementations at any time.\n<p>\nTo support arbitrary nesting of sets, we define a linear order on sets based on a linear order of the elements and provide efficient implementations.\nIt even allows to compare complements with non-complements.",
    "extra-history": "\nChange history:\n[2013-07-11]: add pretty printing for sets (revision 7f3f52c5f5fa)<br>\n[2013-09-20]:\nprovide generators for canonical type class instantiations\n(revision 159f4401f4a8 by René Thiemann)<br>\n[2014-07-08]: add support for going from partial functions to mappings (revision 7a6fc957e8ed)<br>\n[2018-03-05]: add two application examples: depth-first search and 2SAT (revision e5e1a1da2411)",
    "notify": "mail@andreas-lochbihler.de",
    "licence": "BSD"
}