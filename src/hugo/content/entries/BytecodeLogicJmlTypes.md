{
    "title": "A Bytecode Logic for JML and Types",
    "authors": [
        "Lennart Beringer",
        "Martin Hofmann"
    ],
    "date": "2008-12-12",
    "topics": [
        "Computer science-Programming languages-Logics"
    ],
    "abstract": "This document contains the Isabelle/HOL sources underlying the paper <i>A bytecode logic for JML and types</i> by Beringer and Hofmann, updated to Isabelle 2008. We present a program logic for a subset of sequential Java bytecode that is suitable for representing both, features found in high-level specification language JML as well as interpretations of high-level type systems. To this end, we introduce a fine-grained collection of assertions, including strong invariants, local annotations and VDM-reminiscent partial-correctness specifications. Thanks to a goal-oriented structure and interpretation of judgements, verification may proceed without recourse to an additional control flow analysis. The suitability for interpreting intensional type systems is illustrated by the proof-carrying-code style encoding of a type system for a first-order functional language which guarantees a constant upper bound on the number of objects allocated throughout an execution, be the execution terminating or non-terminating. Like the published paper, the formal development is restricted to a comparatively small subset of the JVML, lacking (among other features) exceptions, arrays, virtual methods, and static fields. This shortcoming has been overcome meanwhile, as our paper has formed the basis of the Mobius base logic, a program logic for the full sequential fragment of the JVML. Indeed, the present formalisation formed the basis of a subsequent formalisation of the Mobius base logic in the proof assistant Coq, which includes a proof of soundness with respect to the Bicolano operational semantics by Pichardie.",
    "notify": "",
    "licence": "BSD",
    "olderReleases": {
        "2008": "2008-12-22",
        "2009": "2009-04-29",
        "2009-1": "2009-12-12",
        "2009-2": "2010-06-30",
        "2011": "2011-02-11",
        "2011-1": "2011-10-11",
        "2012": "2012-05-24",
        "2013": "2013-02-16",
        "2013-1": "2013-11-17",
        "2013-2": "2013-12-11",
        "2014": "2014-08-28",
        "2015": "2015-05-27",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}