{
    "title": "Monadification, Memoization and Dynamic Programming",
    "authors": [
        "Simon Wimmer",
        "Shuwei Hu",
        "Tobias Nipkow"
    ],
    "topics": [
        "Computer science/Programming languages/Transformations",
        "Computer science/Algorithms",
        "Computer science/Functional programming"
    ],
    "date": "2018-05-22",
    "notify": [
        "wimmers@in.tum.de"
    ],
    "abstract": "\nWe present a lightweight framework for the automatic verified\n(functional or imperative) memoization of recursive functions. Our\ntool can turn a pure Isabelle/HOL function definition into a\nmonadified version in a state monad or the Imperative HOL heap monad,\nand prove a correspondence theorem. We provide a variety of memory\nimplementations for the two types of monads. A number of simple\ntechniques allow us to achieve bottom-up computation and\nspace-efficient memoization. The framework’s utility is demonstrated\non a number of representative dynamic programming problems. A detailed\ndescription of our work can be found in the accompanying paper [2].",
    "licence": "BSD",
    "olderReleases": {
        "2017": "2018-05-23",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}