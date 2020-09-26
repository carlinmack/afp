{
    "title": "Refinement for Monadic Programs",
    "authors": [
        "Peter Lammich"
    ],
    "topics": [
        "Computer science/Programming languages/Logics"
    ],
    "date": "2012-01-30",
    "abstract": "We provide a framework for program and data refinement in Isabelle/HOL.\nThe framework is based on a nondeterminism-monad with assertions, i.e.,\nthe monad carries a set of results or an assertion failure.\nRecursion is expressed by fixed points. For convenience, we also provide\nwhile and foreach combinators.\n<p>\nThe framework provides tools to automatize canonical tasks, such as\nverification condition generation, finding appropriate data refinement relations,\nand refine an executable program to a form that is accepted by the\nIsabelle/HOL code generator.\n<p>\nThis submission comes with a collection of examples and a user-guide,\nillustrating the usage of the framework.",
    "extra": {
        "Change history": "[2012-04-23] Introduced ordered FOREACH loops<br>\n[2012-06] New features\nREC_rule_arb and RECT_rule_arb allow for generalizing over variables.\nprepare_code_thms - command extracts code equations for recursion combinators.<br>\n[2012-07] New example Nested DFS for emptiness check of Buchi-automata with witness.<br>\nNew feature\nfo_rule method to apply resolution using first-order matching. Useful for arg_conf, fun_cong.<br>\n[2012-08] Adaptation to ICF v2.<br>\n[2012-10-05] Adaptations to include support for Automatic Refinement Framework.<br>\n[2013-09] This entry now depends on Automatic Refinement<br>\n[2014-06] New feature vc_solve method to solve verification conditions.\nMaintenace changes VCG-rules for nfoldli, improved setup for FOREACH-loops.<br>\n[2014-07] Now defining recursion via flat domain. Dropped many single-valued prerequisites.\nChanged notion of data refinement. In single-valued case, this matches the old notion.\nIn non-single valued case, the new notion allows for more convenient rules.\nIn particular, the new definitions allow for projecting away ghost variables as a refinement step.<br>\n[2014-11] New features le-or-fail relation (leof), modular reasoning about loop invariants."
    },
    "notify": [
        "lammich@in.tum.de"
    ],
    "licence": "BSD",
    "olderReleases": {
        "2011-1": "2012-02-10",
        "2012": "2012-05-24",
        "2013": "2013-02-16",
        "2013-1": "2013-11-17",
        "2013-2": "2013-12-11",
        "2014": "2014-08-28",
        "2015": "2015-05-27",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}