{
    "title": "WebAssembly",
    "authors": [
        "Conrad Watt"
    ],
    "topics": [
        "Computer science/Programming languages/Language definitions"
    ],
    "date": "2018-04-29",
    "notify": [
        "caw77@cam.ac.uk"
    ],
    "abstract": "\nThis is a mechanised specification of the WebAssembly language, drawn\nmainly from the previously published paper formalisation of Haas et\nal. Also included is a full proof of soundness of the type system,\ntogether with a verified type checker and interpreter. We include only\na partial procedure for the extraction of the type checker and\ninterpreter here. For more details, please see our paper in CPP 2018.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-04-30"
        },
        {
            "2017": "2018-04-29"
        }
    ],
    "dependencies": [
        "Native_Word"
    ],
    "theories": [
        "Wasm_Ast",
        "Wasm_Type_Abs",
        "Wasm_Base_Defs",
        "Wasm",
        "Wasm_Axioms",
        "Wasm_Properties_Aux",
        "Wasm_Properties",
        "Wasm_Soundness",
        "Wasm_Checker_Types",
        "Wasm_Checker",
        "Wasm_Checker_Properties",
        "Wasm_Interpreter",
        "Wasm_Interpreter_Properties",
        "Wasm_Checker_Printing",
        "Wasm_Interpreter_Printing",
        "Wasm_Type_Abs_Printing",
        "Wasm_Printing",
        "Wasm_Interpreter_Printing_Pure"
    ]
}