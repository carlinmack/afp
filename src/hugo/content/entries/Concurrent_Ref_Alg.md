{
    "title": "Concurrent Refinement Algebra and Rely Quotients",
    "authors": [
        "Julian Fell",
        "Ian J. Hayes",
        "Andrius Velykis"
    ],
    "topics": [
        "Computer science/Concurrency"
    ],
    "date": "2016-12-30",
    "notify": [
        "Ian.Hayes@itee.uq.edu.au"
    ],
    "abstract": "\nThe concurrent refinement algebra developed here is designed to\nprovide a foundation for rely/guarantee reasoning about concurrent\nprograms. The algebra builds on a complete lattice of commands by\nproviding sequential composition, parallel composition and a novel\nweak conjunction operator. The weak conjunction operator coincides\nwith the lattice supremum providing its arguments are non-aborting,\nbut aborts if either of its arguments do. Weak conjunction provides an\nabstract version of a guarantee condition as a guarantee process. We\ndistinguish between models that distribute sequential composition over\nnon-deterministic choice from the left (referred to as being\nconjunctive in the refinement calculus literature) and those that\ndon't. Least and greatest fixed points of monotone functions are\nprovided to allow recursion and iteration operators to be added to the\nlanguage. Additional iteration laws are available for conjunctive\nmodels. The rely quotient of processes <i>c</i> and\n<i>i</i> is the process that, if executed in parallel with\n<i>i</i> implements <i>c</i>. It represents an\nabstract version of a rely condition generalised to a process.",
    "licence": "BSD",
    "olderReleases": {
        "2016-1": "2017-01-04",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}