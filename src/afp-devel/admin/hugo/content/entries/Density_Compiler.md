{
    "title": "A Verified Compiler for Probability Density Functions",
    "authors": [
        "Manuel Eberl",
        "Johannes Hölzl",
        "Tobias Nipkow"
    ],
    "date": "2014-10-09",
    "topics": [
        "Mathematics/Probability theory",
        "Computer science/Programming languages/Compiling"
    ],
    "abstract": "\n<a href=\"https://doi.org/10.1007/978-3-642-36742-7_35\">Bhat et al. [TACAS 2013]</a> developed an inductive compiler that computes\ndensity functions for probability spaces described by programs in a\nprobabilistic functional language. In this work, we implement such a\ncompiler for a modified version of this language within the theorem prover\nIsabelle and give a formal proof of its soundness w.r.t. the semantics of\nthe source and target language.  Together with Isabelle's code generation\nfor inductive predicates, this yields a fully verified, executable density\ncompiler. The proof is done in two steps: First, an abstract compiler\nworking with abstract functions modelled directly in the theorem prover's\nlogic is defined and proved sound.  Then, this compiler is refined to a\nconcrete version that returns a target-language expression.\n<p>\nAn article with the same title and authors is published in the proceedings\nof ESOP 2015.\nA detailed presentation of this work can be found in the first author's\nmaster's thesis.",
    "notify": [
        "hoelzl@in.tum.de"
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
            "2014": "2014-12-22"
        },
        {
            "2014": "2014-10-09"
        }
    ],
    "theories": [
        "Density_Predicates",
        "PDF_Transformations",
        "PDF_Values",
        "PDF_Semantics",
        "PDF_Density_Contexts",
        "PDF_Compiler_Pred",
        "PDF_Target_Semantics",
        "PDF_Target_Density_Contexts",
        "PDF_Compiler"
    ]
}