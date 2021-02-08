{
    "title": "A Constructive Proof for FLP",
    "authors": [
        "Benjamin Bisping",
        "Paul-David Brodmann",
        "Tim Jungnickel",
        "Christina Rickmann",
        "Henning Seidler",
        "Anke Stüber",
        "Arno Wilhelm-Weidner",
        "Kirstin Peters",
        "Uwe Nestmann"
    ],
    "date": "2016-05-18",
    "topics": [
        "Computer science/Concurrency"
    ],
    "abstract": "\nThe impossibility of distributed consensus with one faulty process is\na result with important consequences for real world distributed\nsystems e.g., commits in replicated databases. Since proofs are not\nimmune to faults and even plausible proofs with a profound formalism\ncan conclude wrong results, we validate the fundamental result named\nFLP after Fischer, Lynch and Paterson.\nWe present a formalization of distributed systems\nand the aforementioned consensus problem. Our proof is based on Hagen\nVölzer's paper \"A constructive proof for FLP\". In addition to the\nenhanced confidence in the validity of Völzer's proof, we contribute\nthe missing gaps to show the correctness in Isabelle/HOL. We clarify\nthe proof details and even prove fairness of the infinite execution\nthat contradicts consensus. Our Isabelle formalization can also be\nreused for further proofs of properties of distributed systems.",
    "notify": [
        "henning.seidler@mailbox.tu-berlin.de"
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
            "2016": "2016-05-18"
        }
    ],
    "theories": [
        "FLPSystem",
        "Multiset",
        "FLPExistingSystem",
        "AsynchronousSystem",
        "FLPTheorem",
        "Execution",
        "ListUtilities"
    ]
}