{
    "title": "A formal model for the SPARCv8 ISA and a proof of non-interference for the LEON3 processor",
    "authors": [
        "Zhe Hou",
        "David Sanan",
        "Alwen Tiu",
        "Yang Liu"
    ],
    "notify": "zhe.hou@ntu.edu.sg, sanan@ntu.edu.sg",
    "date": "2016-10-19",
    "topics": [
        "Computer science-Security",
        "Computer science-Hardware"
    ],
    "abstract": "\nWe formalise the SPARCv8 instruction set architecture (ISA) which is\nused in processors such as LEON3. Our formalisation can be specialised\nto any SPARCv8 CPU, here we use LEON3 as a running example. Our model\ncovers the operational semantics for all the instructions in the\ninteger unit of the SPARCv8 architecture and it supports Isabelle code\nexport, which effectively turns the Isabelle model into a SPARCv8 CPU\nsimulator. We prove the language-based non-interference property for\nthe LEON3 processor.  Our model is based on deterministic monad, which\nis a modified version of the non-deterministic monad from NICTA/l4v.",
    "licence": "BSD"
}