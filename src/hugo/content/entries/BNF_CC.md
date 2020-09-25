{
    "title": "Bounded Natural Functors with Covariance and Contravariance",
    "authors": [
        "Andreas Lochbihler",
        "Joshua Schneider"
    ],
    "topic": "Computer science/Functional programming, Tools",
    "date": "2018-04-24",
    "notify": "mail@andreas-lochbihler.de, joshua.schneider@inf.ethz.ch",
    "abstract": "\nBounded natural functors (BNFs) provide a modular framework for the\nconstruction of (co)datatypes in higher-order logic.  Their functorial\noperations, the mapper and relator, are restricted to a subset of the\nparameters, namely those where recursion can take place.  For certain\napplications, such as free theorems, data refinement, quotients, and\ngeneralised rewriting, it is desirable that these operations do not\nignore the other parameters.  In this article, we formalise the\ngeneralisation BNF<sub>CC</sub> that extends the mapper\nand relator to covariant and contravariant parameters.  We show that\n<ol> <li> BNF<sub>CC</sub>s are closed under\nfunctor composition and least and greatest fixpoints,</li>\n<li> subtypes inherit the BNF<sub>CC</sub> structure\nunder conditions that generalise those for the BNF case,\nand</li> <li> BNF<sub>CC</sub>s preserve\nquotients under mild conditions.</li> </ol> These proofs\nare carried out for abstract BNF<sub>CC</sub>s similar to\nthe AFP entry BNF Operations.  In addition, we apply the\nBNF<sub>CC</sub> theory to several concrete functors."
}