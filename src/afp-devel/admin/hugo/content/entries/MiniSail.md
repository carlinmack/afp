{
    "title": "MiniSail - A kernel language for the ISA specification language SAIL",
    "authors": [
        "Mark Wassell"
    ],
    "topics": [
        "Computer science/Programming languages/Type systems"
    ],
    "date": "2021-06-18",
    "notify": [
        "mpwassell@gmail.com"
    ],
    "abstract": "\nMiniSail is a kernel language for Sail, an instruction set\narchitecture (ISA) specification language. Sail is an imperative\nlanguage with a light-weight dependent type system similar to\nrefinement type systems. From an ISA specification, the Sail compiler\ncan generate theorem prover code and C (or OCaml) to give an\nexecutable emulator for an architecture. The idea behind MiniSail is\nto capture the key and novel features of Sail in terms of their\nsyntax, typing rules and operational semantics, and to confirm that\nthey work together by proving progress and preservation lemmas. We use\nthe Nominal2 library to handle binding.",
    "licence": "BSD",
    "dependencies": [
        "Nominal2",
        "Native_Word",
        "Show"
    ],
    "theories": [
        "Nominal-Utils",
        "Syntax",
        "IVSubst",
        "BTVSubst",
        "Wellformed",
        "RCLogic",
        "SyntaxL",
        "WellformedL",
        "Typing",
        "Operational",
        "SubstMethods",
        "RCLogicL",
        "TypingL",
        "ContextSubtypingL",
        "IVSubstTypingL",
        "BTVSubstTypingL",
        "Safety",
        "MiniSail"
    ]
}