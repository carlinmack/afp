{
    "title": "The string search algorithm by Knuth, Morris and Pratt",
    "authors": [
        "Fabian Hellauer",
        "Peter Lammich"
    ],
    "topics": [
        "Computer science/Algorithms"
    ],
    "date": "2017-12-18",
    "notify": [
        "hellauer@in.tum.de",
        "lammich@in.tum.de"
    ],
    "abstract": "\nThe Knuth-Morris-Pratt algorithm is often used to show that the\nproblem of finding a string <i>s</i> in a text\n<i>t</i> can be solved deterministically in\n<i>O(|s| + |t|)</i> time. We use the Isabelle\nRefinement Framework to formulate and verify the algorithm. Via\nrefinement, we apply some optimisations and finally use the\n<em>Sepref</em> tool to obtain executable code in\n<em>Imperative/HOL</em>.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2017-12-18"
        }
    ],
    "dependencies": [
        "Sepref_IICF"
    ]
}