{
    "title": "Conservation of CSP Noninterference Security under Sequential Composition",
    "authors": [
        "Pasquale Noce"
    ],
    "date": "2016-04-26",
    "topics": [
        "Computer science/Security",
        "Computer science/Concurrency/Process calculi"
    ],
    "abstract": "\n<p>In his outstanding work on Communicating Sequential Processes, Hoare\nhas defined two fundamental binary operations allowing to compose the\ninput processes into another, typically more complex, process:\nsequential composition and concurrent composition. Particularly, the\noutput of the former operation is a process that initially behaves\nlike the first operand, and then like the second operand once the\nexecution of the first one has terminated successfully, as long as it\ndoes.</p>\n<p>This paper formalizes Hoare's definition of sequential\ncomposition and proves, in the general case of a possibly intransitive\npolicy, that CSP noninterference security is conserved under this\noperation, provided that successful termination cannot be affected by\nconfidential events and cannot occur as an alternative to other events\nin the traces of the first operand. Both of these assumptions are\nshown, by means of counterexamples, to be necessary for the theorem to\nhold.</p>",
    "notify": [
        "pasquale.noce.lavoro@gmail.com"
    ],
    "licence": "BSD",
    "olderReleases": {
        "2016": "2016-04-26",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    },
    "dependencies": [
        "Noninterference_Ipurge_Unwinding"
    ]
}