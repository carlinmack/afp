{
    "title": "Towards Certified Slicing",
    "authors": [
        "Daniel Wasserrab"
    ],
    "date": "2008-09-16",
    "topics": [
        "Computer science-Programming languages-Static analysis"
    ],
    "abstract": "Slicing is a widely-used technique with applications in e.g. compiler technology and software security. Thus verification of algorithms in these areas is often based on the correctness of slicing, which should ideally be proven independent of concrete programming languages and with the help of well-known verifying techniques such as proof assistants. As a first step in this direction, this contribution presents a framework for dynamic and static intraprocedural slicing based on control flow and program dependence graphs. Abstracting from concrete syntax we base the framework on a graph representation of the program fulfilling certain structural and well-formedness properties.<br><br>The formalization consists of the basic framework (in subdirectory Basic/), the correctness proof for dynamic slicing (in subdirectory Dynamic/), the correctness proof for static intraprocedural slicing (in subdirectory StaticIntra/) and instantiations of the framework with a simple While language (in subdirectory While/) and the sophisticated object-oriented bytecode language of Jinja (in subdirectory JinjaVM/). For more information on the framework, see the TPHOLS 2008 paper by Wasserrab and Lochbihler and the PLAS 2009 paper by Wasserrab et al.",
    "notify": ""
}