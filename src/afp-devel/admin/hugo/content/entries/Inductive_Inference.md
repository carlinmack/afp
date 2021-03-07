{
    "title": "Some classical results in inductive inference of recursive functions",
    "authors": [
        "Frank J. Balbach"
    ],
    "topics": [
        "Logic/Computability",
        "Computer science/Machine learning"
    ],
    "date": "2020-08-31",
    "notify": [
        "frank-balbach@gmx.de"
    ],
    "abstract": "\n<p> This entry formalizes some classical concepts and results\nfrom inductive inference of recursive functions. In the basic setting\na partial recursive function (\"strategy\") must identify\n(\"learn\") all functions from a set (\"class\") of\nrecursive functions. To that end the strategy receives more and more\nvalues $f(0), f(1), f(2), \\ldots$ of some function $f$ from the given\nclass and in turn outputs descriptions of partial recursive functions,\nfor example, Gödel numbers. The strategy is considered successful if\nthe sequence of outputs (\"hypotheses\") converges to a\ndescription of $f$. A class of functions learnable in this sense is\ncalled \"learnable in the limit\". The set of all these\nclasses is denoted by LIM. </p>  <p> Other types of\ninference considered are finite learning (FIN), behaviorally correct\nlearning in the limit (BC), and some variants of LIM with restrictions\non the hypotheses: total learning (TOTAL), consistent learning (CONS),\nand class-preserving learning (CP). The main results formalized are\nthe proper inclusions $\\mathrm{FIN} \\subset \\mathrm{CP} \\subset\n\\mathrm{TOTAL} \\subset \\mathrm{CONS} \\subset \\mathrm{LIM} \\subset\n\\mathrm{BC} \\subset 2^{\\mathcal{R}}$, where $\\mathcal{R}$ is the set\nof all total recursive functions.  Further results show that for all\nthese inference types except CONS, strategies can be assumed to be\ntotal recursive functions; that all inference types but CP are closed\nunder the subset relation between classes; and that no inference type\nis closed under the union of classes. </p>  <p> The above\nis based on a formalization of recursive functions heavily inspired by\nthe <a\nhref=\"https://www.isa-afp.org/entries/Universal_Turing_Machine.html\">Universal\nTuring Machine</a> entry by Xu et al., but different in that it\nmodels partial functions with codomain <em>nat\noption</em>. The formalization contains a construction of a\nuniversal partial recursive function, without resorting to Turing\nmachines, introduces decidability and recursive enumerability, and\nproves some standard results: existence of a Kleene normal form, the\n<em>s-m-n</em> theorem, Rice's theorem, and assorted\nfixed-point theorems (recursion theorems) by Kleene, Rogers, and\nSmullyan. </p>",
    "licence": "BSD",
    "theories": [
        "Partial_Recursive",
        "Universal",
        "Standard_Results",
        "Inductive_Inference_Basics",
        "CP_FIN_NUM",
        "CONS_LIM",
        "Lemma_R",
        "LIM_BC",
        "TOTAL_CONS",
        "R1_BC",
        "Union"
    ]
}