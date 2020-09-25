{
    "title": "Signature-Based Gröbner Basis Algorithms",
    "authors": [
        "Alexander Maletzky"
    ],
    "topic": "Mathematics/Algebra, Computer science/Algorithms/Mathematical",
    "date": "2018-09-20",
    "notify": "alexander.maletzky@risc.jku.at",
    "abstract": "\n<p>This article formalizes signature-based algorithms for computing\nGr&ouml;bner bases. Such algorithms are, in general, superior to\nother algorithms in terms of efficiency, and have not been formalized\nin any proof assistant so far. The present development is both\ngeneric, in the sense that most known variants of signature-based\nalgorithms are covered by it, and effectively executable on concrete\ninput thanks to Isabelle's code generator. Sample computations of\nbenchmark problems show that the verified implementation of\nsignature-based algorithms indeed outperforms the existing\nimplementation of Buchberger's algorithm in Isabelle/HOL.</p>\n<p>Besides total correctness of the algorithms, the article also proves\nthat under certain conditions they a-priori detect and avoid all\nuseless zero-reductions, and always return 'minimal' (in\nsome sense) Gr&ouml;bner bases if an input parameter is chosen in\nthe right way.</p><p>The formalization follows the recent survey article by\nEder and Faug&egrave;re.</p>"
}