{
    "title": "Jinja is not Java",
    "authors": [
        "Gerwin Klein",
        "Tobias Nipkow"
    ],
    "date": "2005-06-01",
    "topics": [
        "Computer science/Programming languages/Language definitions"
    ],
    "abstract": "We introduce Jinja, a Java-like programming language with a formal semantics designed to exhibit core features of the Java language architecture. Jinja is a compromise between realism of the language and tractability and clarity of the formal semantics. The following aspects are formalised: a big and a small step operational semantics for Jinja and a proof of their equivalence; a type system and a definite initialisation analysis; a type safety proof of the small step semantics; a virtual machine (JVM), its operational semantics and its type system; a type safety proof for the JVM; a bytecode verifier, i.e. data flow analyser for the JVM; a correctness proof of the bytecode verifier w.r.t. the type system; a compiler and a proof that it preserves semantics and well-typedness. The emphasis of this work is not on particular language features but on providing a unified model of the source language, the virtual machine and the compiler. The whole development has been carried out in the theorem prover Isabelle/HOL.",
    "notify": [
        "kleing@cse.unsw.edu.au",
        "nipkow@in.tum.de"
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
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2011-10-11"
        },
        {
            "2011": "2011-02-11"
        },
        {
            "2009-2": "2010-07-01"
        },
        {
            "2009-1": "2009-12-12"
        },
        {
            "2009": "2009-04-29"
        },
        {
            "2008": "2008-06-10"
        },
        {
            "2007": "2007-11-27"
        },
        {
            "2005": "2006-08-08"
        },
        {
            "2005": "2005-10-14"
        }
    ],
    "dependencies": [
        "List-Index"
    ],
    "theories": [
        "Auxiliary",
        "Type",
        "Decl",
        "TypeRel",
        "Value",
        "Objects",
        "Exceptions",
        "Expr",
        "State",
        "BigStep",
        "SmallStep",
        "SystemClasses",
        "WellForm",
        "WWellForm",
        "Equivalence",
        "WellType",
        "WellTypeRT",
        "DefAss",
        "Conform",
        "Progress",
        "JWellForm",
        "TypeSafe",
        "Annotate",
        "Examples",
        "execute_Bigstep",
        "execute_WellType",
        "JVMState",
        "JVMInstructions",
        "JVMExecInstr",
        "JVMExceptions",
        "JVMExec",
        "JVMDefensive",
        "JVMListExample",
        "Semilat",
        "Err",
        "Opt",
        "Product",
        "Listn",
        "Semilattices",
        "Typing_Framework",
        "SemilatAlg",
        "Typing_Framework_err",
        "Kildall",
        "LBVSpec",
        "LBVCorrect",
        "LBVComplete",
        "Abstract_BV",
        "SemiType",
        "JVM_SemiType",
        "Effect",
        "EffectMono",
        "BVSpec",
        "TF_JVM",
        "BVExec",
        "LBVJVM",
        "BVConform",
        "BVSpecTypeSafe",
        "BVNoTypeError",
        "BVExample",
        "J1",
        "J1WellForm",
        "PCompiler",
        "Hidden",
        "Compiler1",
        "Correctness1",
        "Compiler2",
        "Correctness2",
        "Compiler",
        "TypeComp",
        "Jinja"
    ],
    "relatedEntries": [
        "JinjaThreads"
    ]
}