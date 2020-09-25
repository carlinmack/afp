{
    "title": "Jinja is not Java",
    "authors": [
        "Gerwin Klein",
        "Tobias Nipkow"
    ],
    "date": "2005-06-01",
    "topics": [
        "Computer science-Programming languages-Language definitions"
    ],
    "abstract": "We introduce Jinja, a Java-like programming language with a formal semantics designed to exhibit core features of the Java language architecture. Jinja is a compromise between realism of the language and tractability and clarity of the formal semantics. The following aspects are formalised: a big and a small step operational semantics for Jinja and a proof of their equivalence; a type system and a definite initialisation analysis; a type safety proof of the small step semantics; a virtual machine (JVM), its operational semantics and its type system; a type safety proof for the JVM; a bytecode verifier, i.e. data flow analyser for the JVM; a correctness proof of the bytecode verifier w.r.t. the type system; a compiler and a proof that it preserves semantics and well-typedness. The emphasis of this work is not on particular language features but on providing a unified model of the source language, the virtual machine and the compiler. The whole development has been carried out in the theorem prover Isabelle/HOL.",
    "notify": "kleing@cse.unsw.edu.au, nipkow@in.tum.de"
}