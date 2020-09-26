{
    "title": "A Formal Model of IEEE Floating Point Arithmetic",
    "authors": [
        "Lei Yu"
    ],
    "contributors": "Fabian Hellauer <mailto:hellauer@in.tum.de>, Fabian Immler <http://www21.in.tum.de/~immler>",
    "date": "2013-07-27",
    "topics": [
        "Computer science/Data structures"
    ],
    "abstract": "This development provides a formal model of IEEE-754 floating-point arithmetic. This formalization, including formal specification of the standard and proofs of important properties of floating-point arithmetic, forms the foundation for verifying programs with floating-point computation. There is also a code generation setup for floats so that we can execute programs using this formalization in functional programming languages.",
    "notify": [
        "lp15@cam.ac.uk",
        "immler@in.tum.de"
    ],
    "extra-history": "\nChange history:\n[2017-09-25]: Added conversions from and to software floating point numbers\n(by Fabian Hellauer and Fabian Immler).<br>\n[2018-02-05]: 'Modernized' representation following the formalization in HOL4:\nformer \"float_format\" and predicate \"is_valid\" is now encoded in a type \"('e, 'f) float\" where\n'e and 'f encode the size of exponent and fraction.",
    "licence": "BSD",
    "olderReleases": {
        "2013": "2013-07-28",
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