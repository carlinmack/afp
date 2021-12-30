{
    "title": "Optics",
    "authors": [
        "Simon Foster",
        "Frank Zeyda"
    ],
    "topics": [
        "Computer science/Functional programming",
        "Mathematics/Algebra"
    ],
    "date": "2017-05-25",
    "notify": [
        "simon.foster@york.ac.uk"
    ],
    "abstract": "\nLenses provide an abstract interface for manipulating data types\nthrough spatially-separated views. They are defined abstractly in\nterms of two functions, <em>get</em>, the return a value\nfrom the source type, and <em>put</em> that updates the\nvalue. We mechanise the underlying theory of lenses, in terms of an\nalgebraic hierarchy of lenses, including well-behaved and very\nwell-behaved lenses, each lens class being characterised by a set of\nlens laws. We also mechanise a lens algebra in Isabelle that enables\ntheir composition and comparison, so as to allow construction of\ncomplex lenses. This is accompanied by a large library of algebraic\nlaws. Moreover we also show how the lens classes can be applied by\ninstantiating them with a number of Isabelle data types.",
    "extra": {
        "Change history": "[2020-03-02]\nAdded partial bijective and symmetric lenses.\nImproved alphabet command generating additional lenses and results.\nSeveral additional lens relations, including observational equivalence.\nAdditional theorems throughout.\nAdaptations for Isabelle 2020.\n(revision 44e2e5c)<br>\n[2021-01-27]\nAddition of new theorems throughout, particularly for prisms.\nNew \"chantype\" command allows the definition of an algebraic datatype with generated prisms.\nNew \"dataspace\" command allows the definition of a local-based state space, including lenses and prisms.\nAddition of various examples for the above.\n(revision 89cf045a)<br>\n[2021-11-15]\nImprovement of alphabet and chantype commands to support code generation.\nAddition of a tactic \"rename_alpha_vars\" that removes the subscript vs in proof goals.\nBug fixes and improvements to alphabet command ML implementation.\nAdditional laws for scenes.\n(revisions 9f8bcd71c121 and c061bf9f46f3)<br>"
    },
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
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
            "2016-1": "2017-06-01"
        }
    ],
    "theories": [
        "Interp",
        "Two",
        "Lens_Laws",
        "Lens_Algebra",
        "Lens_Order",
        "Lens_Symmetric",
        "Lens_Instances",
        "files/Lens_Lib.ML",
        "files/Lens_Record.ML",
        "files/Lens_Statespace.ML",
        "Lenses",
        "Prisms",
        "files/Prism_Lib.ML",
        "Channel_Type",
        "files/Channel_Type.ML",
        "Dataspace",
        "files/Dataspace.ML",
        "Scenes",
        "Optics",
        "Lens_Record_Example",
        "Lens_State"
    ]
}