{
    "title": "Conservation of CSP Noninterference Security under Concurrent Composition",
    "authors": [
        "Pasquale Noce"
    ],
    "notify": "pasquale.noce.lavoro@gmail.com",
    "date": "2016-06-13",
    "topics": [
        "Computer science-Security",
        "Computer science-Concurrency-Process calculi"
    ],
    "abstract": "\n<p>In his outstanding work on Communicating Sequential Processes,\nHoare has defined two fundamental binary operations allowing to\ncompose the input processes into another, typically more complex,\nprocess: sequential composition and concurrent composition.\nParticularly, the output of the latter operation is a process in which\nany event not shared by both operands can occur whenever the operand\nthat admits the event can engage in it, whereas any event shared by\nboth operands can occur just in case both can engage in it.</p>\n<p>This paper formalizes Hoare's definition of concurrent composition\nand proves, in the general case of a possibly intransitive policy,\nthat CSP noninterference security is conserved under this operation.\nThis result, along with the previous analogous one concerning\nsequential composition, enables the construction of more and more\ncomplex processes enforcing noninterference security by composing,\nsequentially or concurrently, simpler secure processes, whose security\ncan in turn be proven using either the definition of security, or\nunwinding theorems.</p>",
    "licence": "BSD",
    "olderReleases": {
        "2016": "2016-06-13",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}