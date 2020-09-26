{
    "title": "A verified LLL algorithm",
    "authors": [
        "Ralph Bottesch",
        "Jose Divasón",
        "Maximilian Haslbeck",
        "Sebastiaan Joosten",
        "René Thiemann",
        "Akihisa Yamada"
    ],
    "topics": [
        "Computer science/Algorithms/Mathematical",
        "Mathematics/Algebra"
    ],
    "date": "2018-02-02",
    "notify": [
        "ralph.bottesch@uibk.ac.at",
        "jose.divason@unirioja.es",
        "maximilian.haslbeck@uibk.ac.at",
        "s.j.c.joosten@utwente.nl",
        "rene.thiemann@uibk.ac.at",
        "ayamada@trs.cm.is.nagoya-u.ac.jp"
    ],
    "abstract": "\nThe Lenstra-Lenstra-Lovász basis reduction algorithm, also known as\nLLL algorithm, is an algorithm to find a basis with short, nearly\northogonal vectors of an integer lattice. Thereby, it can also be seen\nas an approximation to solve the shortest vector problem (SVP), which\nis an NP-hard problem, where the approximation quality solely depends\non the dimension of the lattice, but not the lattice itself. The\nalgorithm also possesses many applications in diverse fields of\ncomputer science, from cryptanalysis to number theory, but it is\nspecially well-known since it was used to implement the first\npolynomial-time algorithm to factor polynomials. In this work we\npresent the first mechanized soundness proof of the LLL algorithm to\ncompute short vectors in lattices. The formalization follows a\ntextbook by von zur Gathen and Gerhard.",
    "extra": {
        "Change history": "[2018-04-16] Integrated formal complexity bounds (Haslbeck, Thiemann)\n[2018-05-25] Integrated much faster LLL implementation based on integer arithmetic (Bottesch, Haslbeck, Thiemann)"
    },
    "licence": "BSD",
    "olderReleases": {
        "2017": "2018-02-03",
        "2018": "2018-09-07",
        "2019": "2019-06-11"
    }
}