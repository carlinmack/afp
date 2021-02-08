{
    "title": "Executable Transitive Closures of Finite Relations",
    "topics": [
        "Computer science/Algorithms/Graph"
    ],
    "date": "2011-03-14",
    "authors": [
        "Christian Sternagel",
        "René Thiemann"
    ],
    "license": "LGPL",
    "abstract": "We provide a generic work-list algorithm to compute the transitive closure of finite relations where only successors of newly detected states are generated. This algorithm is then instantiated for lists over arbitrary carriers and red black trees (which are faster but require a linear order on the carrier), respectively.  Our formalization was performed as part of the IsaFoR/CeTA project where reflexive transitive closures of large tree automata have to be computed.",
    "extra": {
        "Change history": "[2014-09-04] added example simprocs in Finite_Transitive_Closure_Simprocs"
    },
    "notify": [
        "c.sternagel@gmail.com",
        "rene.thiemann@uibk.ac.at"
    ],
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
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2011-10-12"
        },
        {
            "2011-1": "2011-10-11"
        },
        {
            "2011": "2011-03-14"
        }
    ],
    "dependencies": [
        "Collections",
        "Matrix"
    ],
    "theories": [
        "RBT_Map_Set_Extension",
        "Transitive_Closure_Impl",
        "Finite_Transitive_Closure_Simprocs",
        "Transitive_Closure_RBT_Impl",
        "Transitive_Closure_List_Impl"
    ],
    "relatedEntries": [
        "Transitive-Closure-II"
    ]
}