{
    "title": "A Dependent Security Type System for Concurrent Imperative Programs",
    "authors": [
        "Toby Murray",
        "Robert Sison<>",
        "Edward Pierzchalski<>",
        "Christine Rizkallah<https://www.mpi-inf.mpg.de/~crizkall/>"
    ],
    "notify": "toby.murray@unimelb.edu.au",
    "date": "2016-06-25",
    "topic": "Computer science/Security, Computer science/Programming languages/Type systems",
    "abstract": "\nThe paper \"Compositional Verification and Refinement of Concurrent\nValue-Dependent Noninterference\" by Murray et. al. (CSF 2016) presents\na dependent security type system for compositionally verifying a\nvalue-dependent noninterference property, defined in (Murray, PLAS\n2015), for concurrent programs. This development formalises that\nsecurity definition, the type system and its soundness proof, and\ndemonstrates its application on some small examples. It was derived\nfrom the SIFUM_Type_Systems AFP entry, by Sylvia Grewe, Heiko Mantel\nand Daniel Schoepe, and whose structure it inherits.",
    "extra-history": "\nChange history:\n[2016-08-19]:\nRemoved unused \"stop\" parameter and \"stop_no_eval\" assumption from the sifum_security locale.\n(revision dbc482d36372)\n[2016-09-27]:\nAdded security locale support for the imposition of requirements on the initial memory.\n(revision cce4ceb74ddb)"
}