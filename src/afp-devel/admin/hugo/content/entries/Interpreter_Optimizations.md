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
        "Env",
        "Env_list",
        "List_util",
        "Option_applicative",
        "Result",
        "Global",
        "Op",
        "OpInl",
        "Dynamic",
        "Inca",
        "Unboxed",
        "OpUbx",
        "Ubx",
        "Ubx_type_inference",
        "Unboxed_lemmas",
        "Inca_to_Ubx_simulation",
        "Inca_to_Ubx_compiler",
        "Op_example",
        "Std",
        "Std_to_Inca_simulation",
        "Std_to_Inca_compiler"
    ]
}