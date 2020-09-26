{
    "title": "Jinja with Threads",
    "authors": [
        "Andreas Lochbihler"
    ],
    "date": "2007-12-03",
    "topics": [
        "Computer science/Programming languages/Language definitions"
    ],
    "abstract": "We extend the Jinja source code semantics by Klein and Nipkow with Java-style arrays and threads. Concurrency is captured in a generic framework semantics for adding concurrency through interleaving to a sequential semantics, which features dynamic thread creation, inter-thread communication via shared memory, lock synchronisation and joins. Also, threads can suspend themselves and be notified by others. We instantiate the framework with the adapted versions of both Jinja source and byte code and show type safety for the multithreaded case. Equally, the compiler from source to byte code is extended, for which we prove weak bisimilarity between the source code small step semantics and the defensive Jinja virtual machine. On top of this, we formalise the JMM and show the DRF guarantee and consistency. For description of the different parts, see Lochbihler's papers at FOOL 2008, ESOP 2010, ITP 2011, and ESOP 2012.",
    "extra": {
        "Change history": "[2008-04-23]\nadded bytecode formalisation with arrays and threads, added thread joins\n(revision f74a8be156a7)<br>\n[2009-04-27]\nadded verified compiler from source code to bytecode;\nencapsulate native methods in separate semantics\n(revision e4f26541e58a)<br>\n[2009-11-30]\nextended compiler correctness proof to infinite and deadlocking computations\n(revision e50282397435)<br>\n[2010-06-08]\nadded thread interruption;\nnew abstract memory model with sequential consistency as implementation\n(revision 0cb9e8dbd78d)<br>\n[2010-06-28]\nnew thread interruption model\n(revision c0440d0a1177)<br>\n[2010-10-15]\npreliminary version of the Java memory model for source code\n(revision 02fee0ef3ca2)<br>\n[2010-12-16]\nimproved version of the Java memory model, also for bytecode\nexecutable scheduler for source code semantics\n(revision 1f41c1842f5a)<br>\n[2011-02-02]\nsimplified code generator setup\nnew random scheduler\n(revision 3059dafd013f)<br>\n[2011-07-21]\nnew interruption model,\ngeneralized JMM proof of DRF guarantee,\nallow class Object to declare methods and fields,\nsimplified subtyping relation,\ncorrected division and modulo implementation\n(revision 46e4181ed142)<br>\n[2012-02-16]\nadded example programs\n(revision bf0b06c8913d)<br>\n[2012-11-21]\ntype safety proof for the Java memory model,\nallow spurious wake-ups\n(revision 76063d860ae0)<br>\n[2013-05-16]\nsupport for non-deterministic memory allocators\n(revision cc3344a49ced)<br>\n[2017-10-20]\nadd an atomic compare-and-swap operation for volatile fields\n(revision a6189b1d6b30)<br>"
    },
    "notify": [
        "mail@andreas-lochbihler.de"
    ],
    "licence": "BSD",
    "olderReleases": {
        "2007": "2007-12-03",
        "2008": "2008-06-10",
        "2009": "2009-04-30",
        "2009-1": "2009-12-12",
        "2009-2": "2010-07-02",
        "2011": "2011-02-11",
        "2011-1": "2011-10-12",
        "2012": "2012-05-26",
        "2013": "2013-02-16",
        "2013-1": "2013-11-17",
        "2013-2": "2013-12-11",
        "2014": "2014-08-28",
        "2015": "2015-05-27",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-17",
        "2019": "2019-06-11"
    }
}