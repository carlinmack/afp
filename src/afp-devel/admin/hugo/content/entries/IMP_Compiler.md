{
    "title": "A Shorter Compiler Correctness Proof for Language IMP",
    "authors": [
        "Pasquale Noce"
    ],
    "topics": [
        "Computer science/Programming languages/Compiling"
    ],
    "date": "2021-06-04",
    "notify": [
        "pasquale.noce.lavoro@gmail.com"
    ],
    "abstract": "\nThis paper presents a compiler correctness proof for the didactic\nimperative programming language IMP, introduced in Nipkow and\nKlein's book on formal programming language semantics (version of\nMarch 2021), whose size is just two thirds of the book's proof in\nthe number of formal text lines. As such, it promises to constitute a\nfurther enhanced reference for the formal verification of compilers\nmeant for larger, real-world programming languages.  The presented\nproof does not depend on language determinism, so that the proposed\napproach can be applied to non-deterministic languages as well. As a\nconfirmation, this paper extends IMP with an additional\nnon-deterministic choice command, and proves compiler correctness,\nviz. the simulation of compiled code execution by source code, for\nsuch extended language.",
    "licence": "BSD",
    "theories": [
        "Compiler",
        "Compiler2"
    ]
}