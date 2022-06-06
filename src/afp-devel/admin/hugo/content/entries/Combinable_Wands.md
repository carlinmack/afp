{
    "title": "A Restricted Definition of the Magic Wand to Soundly Combine Fractions of a Wand",
    "authors": [
        "Thibault Dardinier"
    ],
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "date": "2022-05-30",
    "notify": [
        "thibault.dardinier@inf.ethz.ch"
    ],
    "abstract": "\nMany separation logics support <em>fractional\npermissions</em> to distinguish between read and write access to\na heap location, for instance, to allow concurrent reads while\nenforcing exclusive writes. The concept has been generalized to\nfractional assertions. $A^p$ (where $A$ is a separation logic\nassertion and $p$ a fraction between $0$ and $1$) represents a\nfraction $p$ of $A$. $A^p$ holds in a state $\\sigma$ iff there exists\na state $\\sigma_A$ in which $A$ holds and $\\sigma$ is obtained from\n$\\sigma_A$ by multiplying all permission amounts held by $p$.  While\n$A^{p + q}$ can always be split into $A^p * A^q$, recombining $A^p *\nA^q$ into $A^{p+q}$ is not always sound. We say that $A$ is\n<em>combinable</em> iff the entailment $A^p * A^q \\models\nA^{p+q}$ holds for any two positive fractions $p$ and $q$ such that $p\n+ q \\le 1$. Combinable assertions are particularly useful to reason\nabout concurrent programs, for instance, to combine the postconditions\nof parallel branches when they terminate. Unfortunately, the magic\nwand assertion $A \\mathbin{-\\!\\!*} B$, commonly used to specify properties of\npartial data structures, is typically <em>not</em>\ncombinable.  In this entry, we formalize a novel, restricted\ndefinition of the magic wand, described in <a\nhref=\"https://arxiv.org/abs/2205.11325\">a paper at CAV\n22</a>, which we call the <em>combinable wand</em>.\nWe prove some key properties of the combinable wand; in particular, a\ncombinable wand is combinable if its right-hand side is combinable.",
    "licence": "BSD",
    "dependencies": [
        "Package_logic"
    ],
    "theories": [
        "PosRat",
        "Mask",
        "PartialHeapSA",
        "CombinableWands"
    ]
}