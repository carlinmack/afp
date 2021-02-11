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
        "Dynamic",
        "Op_example",
        "Inca_to_Ubx_simulation",
        "Unboxed",
        "Global",
        "Result",
        "Op",
        "Env",
        "Ubx",
        "Option_applicative",
        "Inca_to_Ubx_compiler",
        "OpInl",
        "Std",
        "Std_to_Inca_simulation",
        "Env_list",
        "List_util",
        "Ubx_type_inference",
        "Inca",
        "Std_to_Inca_compiler",
        "OpUbx",
        "Unboxed_lemmas"
    ]
}