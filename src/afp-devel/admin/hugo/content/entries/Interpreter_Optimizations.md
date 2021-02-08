{
    "title": "Inline Caching and Unboxing Optimization for Interpreters",
    "authors": [
        "Martin Desharnais"
    ],
    "topics": [
        "Computer science/Programming languages/Misc"
    ],
    "date": "2020-12-07",
    "notify": [
        "martin.desharnais@unibw.de"
    ],
    "abstract": "\nThis Isabelle/HOL formalization builds on the\n<em>VeriComp</em> entry of the <em>Archive of Formal\nProofs</em> to provide the following contributions:  <ul>\n<li>an operational semantics for a realistic virtual machine\n(Std) for dynamically typed programming languages;</li>\n<li>the formalization of an inline caching optimization (Inca),\na proof of bisimulation with (Std), and a compilation\nfunction;</li> <li>the formalization of an unboxing\noptimization (Ubx), a proof of bisimulation with (Inca), and a simple\ncompilation function.</li> </ul>  This formalization was\ndescribed in the CPP 2021 paper <em>Towards Efficient and\nVerified Virtual Machines for Dynamic Languages</em>",
    "licence": "BSD",
    "dependencies": [
        "VeriComp"
    ],
    "theories": [
        "Std_to_Inca_simulation",
        "Std_to_Inca_compiler",
        "OpInl",
        "OpUbx",
        "Env",
        "Inca",
        "Dynamic",
        "Ubx_type_inference",
        "Unboxed_lemmas",
        "Env_list",
        "Result",
        "Ubx",
        "Std",
        "Unboxed",
        "Global",
        "List_util",
        "Inca_to_Ubx_simulation",
        "Inca_to_Ubx_compiler",
        "Op",
        "Option_applicative",
        "Op_example"
    ]
}