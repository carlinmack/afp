{
    "title": "Executable Transitive Closures",
    "topics": [
        "Computer science/Algorithms/Graph"
    ],
    "date": "2012-02-29",
    "authors": [
        "René Thiemann"
    ],
    "license": "LGPL",
    "abstract": "\n<p>\nWe provide a generic work-list algorithm to compute the\n(reflexive-)transitive closure of relations where only successors of newly\ndetected states are generated.\nIn contrast to our previous work, the relations do not have to be finite,\nbut each element must only have finitely many (indirect) successors.\nMoreover, a subsumption relation can be used instead of pure equality.\nAn executable variant of the algorithm is available where the generic operations\nare instantiated with list operations.\n</p><p>\nThis formalization was performed as part of the IsaFoR/CeTA project,\nand it has been used to certify size-change\ntermination proofs where large transitive closures have to be computed.\n</p>",
    "notify": [
        "rene.thiemann@uibk.ac.at"
    ],
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
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
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2012-03-15"
        },
        {
            "2011-1": "2012-02-29"
        }
    ],
    "dependencies": [
        "Regular-Sets"
    ],
    "theories": [
        "RTrancl"
    ],
    "relatedEntries": [
        "Transitive-Closure"
    ]
}