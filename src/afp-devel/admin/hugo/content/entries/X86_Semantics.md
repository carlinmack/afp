{
    "title": "X86 instruction semantics and basic block symbolic execution",
    "authors": [
        "Freek Verbeek",
        "Abhijith Bharadwaj",
        "Joshua Bockenek",
        "Ian Roessle",
        "Timmy Weerwag",
        "Binoy Ravindran"
    ],
    "topics": [
        "Computer science/Hardware",
        "Computer science/Semantics"
    ],
    "date": "2021-10-13",
    "notify": [
        "freek@vt.edu"
    ],
    "abstract": "\nThis AFP entry provides semantics for roughly 120 different X86-64\nassembly instructions. These instructions include various moves,\narithmetic/logical operations, jumps, call/return, SIMD extensions and\nothers. External functions are supported by allowing a user to provide\ncustom semantics for these calls. Floating-point operations are mapped\nto uninterpreted functions. The model provides semantics for register\naliasing and a byte-level little-endian memory model. The semantics\nare purposefully incomplete, but overapproximative. For example, the\nprecise effect of flags may be undefined for certain instructions, or\ninstructions may simply have no semantics at all. In those cases, the\nsemantics are mapped to universally quantified uninterpreted terms\nfrom a locale. Second, this entry provides a method to symbolic\nexecution of basic blocks. The method, called\n''se_step'' (for: symbolic execution step) fetches\nan instruction and updates the current symbolic state while keeping\ntrack of assumptions made over the memory model. A key component is a\nset of theorems that prove how reads from memory resolve after writes\nhave occurred. Thirdly, this entry provides a parser that allows the\nuser to copy-paste the output of the standard disassembly tool objdump\ninto Isabelle/HOL. A couple small and explanatory examples are\nincluded, including functions from the word count program. Several\nexamples can be supplied upon request (they are not included due to\nthe running time of verification): functions from the floating-point\nmodulo function from FDLIBM, the GLIBC strlen function and the\nCoreUtils SHA256 implementation.",
    "licence": "BSD",
    "dependencies": [
        "Word_Lib"
    ]
}