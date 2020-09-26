{
    "title": "Backing up Slicing: Verifying the Interprocedural Two-Phase Horwitz-Reps-Binkley Slicer",
    "authors": [
        "Daniel Wasserrab"
    ],
    "date": "2009-11-13",
    "topics": [
        "Computer science-Programming languages-Static analysis"
    ],
    "abstract": "After verifying <a href=\"Slicing.html\">dynamic and static interprocedural slicing</a>, we present a modular framework for static interprocedural slicing. To this end, we formalized the standard two-phase slicer from Horwitz, Reps and Binkley (see their TOPLAS 12(1) 1990 paper) together with summary edges as presented by Reps et al. (see FSE 1994). The framework is again modular in the programming language by using an abstract CFG, defined via structural and well-formedness properties. Using a weak simulation between the original and sliced graph, we were able to prove the correctness of static interprocedural slicing. We also instantiate our framework with a simple While language with procedures. This shows that the chosen abstractions are indeed valid.",
    "notify": "nipkow@in.tum.de",
    "licence": "BSD"
}