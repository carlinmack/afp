{
    "title": "A Correctness Proof for the Volpano/Smith Security Typing System",
    "authors": [
        "Gregor Snelting",
        "Daniel Wasserrab"
    ],
    "date": "2008-09-02",
    "topics": [
        "Computer science-Programming languages-Type systems",
        "Computer science-Security"
    ],
    "abstract": "The Volpano/Smith/Irvine security type systems requires that variables are annotated as high (secret) or low (public), and provides typing rules which guarantee that secret values cannot leak to public output ports. This property of a program is called confidentiality. For a simple while-language without threads, our proof shows that typeability in the Volpano/Smith system guarantees noninterference. Noninterference means that if two initial states for program execution are low-equivalent, then the final states are low-equivalent as well. This indeed implies that secret values cannot leak to public ports. The proof defines an abstract syntax and operational semantics for programs, formalizes noninterference, and then proceeds by rule induction on the operational semantics. The mathematically most intricate part is the treatment of implicit flows. Note that the Volpano/Smith system is not flow-sensitive and thus quite unprecise, resulting in false alarms. However, due to the correctness property, all potential breaks of confidentiality are discovered.",
    "notify": "",
    "licence": "BSD"
}