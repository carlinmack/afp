{
    "title": "Optics",
    "authors": [
        "Simon Foster",
        "Frank Zeyda"
    ],
    "topics": [
        "Computer science-Functional programming",
        "Mathematics-Algebra"
    ],
    "date": "2017-05-25",
    "notify": "simon.foster@york.ac.uk",
    "abstract": "\nLenses provide an abstract interface for manipulating data types\nthrough spatially-separated views. They are defined abstractly in\nterms of two functions, <em>get</em>, the return a value\nfrom the source type, and <em>put</em> that updates the\nvalue. We mechanise the underlying theory of lenses, in terms of an\nalgebraic hierarchy of lenses, including well-behaved and very\nwell-behaved lenses, each lens class being characterised by a set of\nlens laws. We also mechanise a lens algebra in Isabelle that enables\ntheir composition and comparison, so as to allow construction of\ncomplex lenses. This is accompanied by a large library of algebraic\nlaws. Moreover we also show how the lens classes can be applied by\ninstantiating them with a number of Isabelle data types.",
    "extra-history": "\nChange history:\n[2020-03-02]:\nAdded partial bijective and symmetric lenses.\nImproved alphabet command generating additional lenses and results.\nSeveral additional lens relations, including observational equivalence.\nAdditional theorems throughout.\nAdaptations for Isabelle 2020.\n(revision 44e2e5c)"
}