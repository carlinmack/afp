{
    "title": "Formalization of Timely Dataflow's Progress Tracking Protocol",
    "authors": [
        "Matthias Brun",
        "Sára Decova",
        "Andrea Lattuada",
        "Dmitriy Traytel"
    ],
    "topics": [
        "Computer science/Algorithms/Distributed"
    ],
    "date": "2021-04-13",
    "notify": [
        "matthias.brun@inf.ethz.ch",
        "traytel@di.ku.dk"
    ],
    "abstract": "\nLarge-scale stream processing systems often follow the dataflow\nparadigm, which enforces a program structure that exposes a high\ndegree of parallelism. The Timely Dataflow distributed system supports\nexpressive cyclic dataflows for which it offers low-latency data- and\npipeline-parallel stream processing. To achieve high expressiveness\nand performance, Timely Dataflow uses an intricate distributed\nprotocol for tracking the computation’s progress. We formalize this\nprogress tracking protocol and verify its safety. Our formalization is\ndescribed in detail in our forthcoming <a\nhref=\"https://traytel.bitbucket.io/papers/itp21-progress_tracking/safe.pdf\">ITP'21\npaper</a>.",
    "licence": "BSD",
    "dependencies": [
        "Nested_Multisets_Ordinals"
    ]
}