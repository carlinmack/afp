{
    "title": "Verified Construction of Static Single Assignment Form",
    "authors": [
        "Sebastian Ullrich",
        "Denis Lohner"
    ],
    "date": "2016-02-05",
    "topics": [
        "Computer science-Algorithms",
        "Computer science-Programming languages-Transformations"
    ],
    "abstract": "\n<p>\nWe define a functional variant of the static single assignment (SSA)\nform construction algorithm described by <a\nhref=\"https://doi.org/10.1007/978-3-642-37051-9_6\">Braun et al.</a>,\nwhich combines simplicity and efficiency. The definition is based on a\ngeneral, abstract control flow graph representation using Isabelle locales.\n</p>\n<p>\nWe prove that the algorithm's output is semantically equivalent to the\ninput according to a small-step semantics, and that it is in minimal SSA\nform for the common special case of reducible inputs. We then show the\nsatisfiability of the locale assumptions by giving instantiations for a\nsimple While language.\n</p>\n<p>\nFurthermore, we use a generic instantiation based on typedefs in order\nto extract OCaml code and replace the unverified SSA construction\nalgorithm of the <a href=\"https://doi.org/10.1145/2579080\">CompCertSSA\nproject</a> with it.\n</p>\n<p>\nA more detailed description of the verified SSA construction can be found\nin the paper <a href=\"https://doi.org/10.1145/2892208.2892211\">Verified\nConstruction of Static Single Assignment Form</a>, CC 2016.\n</p>",
    "notify": "denis.lohner@kit.edu",
    "licence": "BSD",
    "olderReleases": {
        "2015": "2016-02-08",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}