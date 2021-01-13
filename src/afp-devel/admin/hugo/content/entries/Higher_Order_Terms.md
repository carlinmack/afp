{
    "title": "An Algebra for Higher-Order Terms",
    "authors": [
        "Lars Hupel"
    ],
    "contributors": [
        "Yu Zhang"
    ],
    "topics": [
        "Computer science/Programming languages/Lambda calculi"
    ],
    "date": "2019-01-15",
    "notify": [
        "lars@hupel.info"
    ],
    "abstract": "\nIn this formalization, I introduce a higher-order term algebra,\ngeneralizing the notions of free variables, matching, and\nsubstitution. The need arose from the work on a <a\nhref=\"http://dx.doi.org/10.1007/978-3-319-89884-1_35\">verified\ncompiler from Isabelle to CakeML</a>. Terms can be thought of as\nconsisting of a generic (free variables, constants, application) and\na specific part. As example applications, this entry provides\ninstantiations for de-Bruijn terms, terms with named variables, and\n<a\nhref=\"https://www.isa-afp.org/entries/Lambda_Free_RPOs.html\">Blanchette’s\n&lambda;-free higher-order terms</a>. Furthermore, I\nimplement translation functions between de-Bruijn terms and named\nterms and prove their correctness.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-01-15"
        }
    ],
    "dependencies": [
        "Datatype_Order_Generator",
        "List-Index",
        "Lambda_Free_RPOs"
    ],
    "theories": [
        "Disjoint_Sets",
        "Find_First",
        "Fresh_Class",
        "Fresh_Monad",
        "Lambda_Free_Compat",
        "Name",
        "Nterm",
        "Pats",
        "Term",
        "Term_Class",
        "Term_to_Nterm",
        "Term_Utils",
        "Unification_Compat"
    ]
}