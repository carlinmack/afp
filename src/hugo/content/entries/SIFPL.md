{
    "title": "Secure information flow and program logics",
    "authors": [
        "Lennart Beringer",
        "Martin Hofmann"
    ],
    "date": "2008-11-10",
    "topics": [
        "Computer science-Programming languages-Logics",
        "Computer science-Security"
    ],
    "abstract": "We present interpretations of type systems for secure information flow in Hoare logic, complementing previous encodings in relational program logics. We first treat the imperative language IMP, extended by a simple procedure call mechanism. For this language we consider base-line non-interference in the style of Volpano et al. and the flow-sensitive type system by Hunt and Sands. In both cases, we show how typing derivations may be used to automatically generate proofs in the program logic that certify the absence of illicit flows. We then add instructions for object creation and manipulation, and derive appropriate proof rules for base-line non-interference. As a consequence of our work, standard verification technology may be used for verifying that a concrete program satisfies the non-interference property.<br><br>The present proof development represents an update of the formalisation underlying our paper [CSF 2007] and is intended to resolve any ambiguities that may be present in the paper.",
    "notify": "lennart.beringer@ifi.lmu.de"
}