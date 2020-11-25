{
    "title": "Verifying Fault-Tolerant Distributed Algorithms in the Heard-Of Model",
    "date": "2012-07-27",
    "authors": [
        "Henri Debrat",
        "Stephan Merz"
    ],
    "topics": [
        "Computer science/Algorithms/Distributed"
    ],
    "abstract": "\nDistributed computing is inherently based on replication, promising\nincreased tolerance to failures of individual computing nodes or\ncommunication channels. Realizing this promise, however, involves\nquite subtle algorithmic mechanisms, and requires precise statements\nabout the kinds and numbers of faults that an algorithm tolerates (such\nas process crashes, communication faults or corrupted values).  The\nlandmark theorem due to Fischer, Lynch, and Paterson shows that it is\nimpossible to achieve Consensus among N asynchronously communicating\nnodes in the presence of even a single permanent failure. Existing\nsolutions must rely on assumptions of \"partial synchrony\".\n<p>\nIndeed, there have been numerous misunderstandings on what exactly a given\nalgorithm is supposed to realize in what kinds of environments. Moreover, the\nabundance of subtly different computational models complicates comparisons\nbetween different algorithms. Charron-Bost and Schiper introduced the Heard-Of\nmodel for representing algorithms and failure assumptions in a uniform\nframework, simplifying comparisons between algorithms.\n<p>\nIn this contribution, we represent the Heard-Of model in Isabelle/HOL. We define\ntwo semantics of runs of algorithms with different unit of atomicity and relate\nthese through a reduction theorem that allows us to verify algorithms in the\ncoarse-grained semantics (where proofs are easier) and infer their correctness\nfor the fine-grained one (which corresponds to actual executions). We\ninstantiate the framework by verifying six Consensus algorithms that differ in\nthe underlying algorithmic mechanisms and the kinds of faults they tolerate.",
    "notify": [
        "Stephan.Merz@loria.fr"
    ],
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-10-10"
        },
        {
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-03-02"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-07-30"
        }
    ],
    "dependencies": [
        "Stuttering_Equivalence"
    ],
    "relatedEntries": [
        "Consensus_Refined"
    ]
}