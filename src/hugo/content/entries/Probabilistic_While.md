{
    "title": "Probabilistic while loop",
    "authors": [
        "Andreas Lochbihler"
    ],
    "topics": [
        "Computer science/Functional programming",
        "Mathematics/Probability theory",
        "Computer science/Algorithms"
    ],
    "date": "2017-05-05",
    "notify": [
        "mail@andreas-lochbihler.de"
    ],
    "abstract": "\nThis AFP entry defines a probabilistic while operator based on\nsub-probability mass functions and formalises zero-one laws and variant\nrules for probabilistic loop termination. As applications, we\nimplement probabilistic algorithms for the Bernoulli, geometric and\narbitrary uniform distributions that only use fair coin flips, and\nprove them correct and terminating with probability 1.",
    "extra": {
        "Change history": "[2018-02-02]\nAdded a proof that probabilistic conditioning can be implemented by repeated sampling.\n(revision 305867c4e911)<br>"
    },
    "licence": "BSD",
    "olderReleases": {
        "2016-1": "2017-05-11",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    },
    "dependencies": [
        "MFMC_Countable",
        "Pre_BZ"
    ]
}