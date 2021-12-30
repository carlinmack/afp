{
    "title": "A formal model for the SPARCv8 ISA and a proof of non-interference for the LEON3 processor",
    "authors": [
        "Zhe Hou",
        "David Sanan",
        "Alwen Tiu",
        "Yang Liu"
    ],
    "notify": [
        "zhe.hou@ntu.edu.sg",
        "sanan@ntu.edu.sg"
    ],
    "date": "2016-10-19",
    "topics": [
        "Computer science/Security",
        "Computer science/Hardware"
    ],
    "abstract": "\nWe formalise the SPARCv8 instruction set architecture (ISA) which is\nused in processors such as LEON3. Our formalisation can be specialised\nto any SPARCv8 CPU, here we use LEON3 as a running example. Our model\ncovers the operational semantics for all the instructions in the\ninteger unit of the SPARCv8 architecture and it supports Isabelle code\nexport, which effectively turns the Isabelle model into a SPARCv8 CPU\nsimulator. We prove the language-based non-interference property for\nthe LEON3 processor.  Our model is based on deterministic monad, which\nis a modified version of the non-deterministic monad from NICTA/l4v.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-10-19"
        }
    ],
    "dependencies": [
        "Word_Lib"
    ],
    "theories": [
        "WordDecl",
        "Sparc_Types",
        "Lib",
        "DetMonad",
        "DetMonadLemmas",
        "RegistersOps",
        "MMU",
        "Sparc_State",
        "Sparc_Instruction",
        "Sparc_Execution",
        "Sparc_Properties",
        "Sparc_Init_State",
        "Sparc_Code_Gen"
    ]
}