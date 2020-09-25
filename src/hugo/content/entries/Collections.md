{
    "title": "Collections Framework",
    "authors": [
        "Peter Lammich"
    ],
    "contributors": "Andreas Lochbihler <http://www.andreas-lochbihler.de>, Thomas Tuerk <>",
    "date": "2009-11-25",
    "topics": [
        "Computer science-Data structures"
    ],
    "abstract": "This development provides an efficient, extensible, machine checked collections framework. The library adopts the concepts of interface, implementation and generic algorithm from object-oriented programming and implements them in Isabelle/HOL. The framework features the use of data refinement techniques to refine an abstract specification (using high-level concepts like sets) to a more concrete implementation (using collection datastructures, like red-black-trees). The code-generator of Isabelle/HOL can be used to generate efficient code.",
    "extra-history": "\nChange history:\n[2010-10-08]: New Interfaces: OrderedSet, OrderedMap, List.\nFifo now implements list-interface: Function names changed: put/get --> enqueue/dequeue.\nNew Implementations: ArrayList, ArrayHashMap, ArrayHashSet, TrieMap, TrieSet.\nInvariant-free datastructures: Invariant implicitely hidden in typedef.\nRecord-interfaces: All operations of an interface encapsulated as record.\nExamples moved to examples subdirectory.<br>\n[2010-12-01]: New Interfaces: Priority Queues, Annotated Lists. Implemented by finger trees, (skew) binomial queues.<br>\n[2011-10-10]: SetSpec: Added operations: sng, isSng, bexists, size_abort, diff, filter, iterate_rule_insertP\nMapSpec: Added operations: sng, isSng, iterate_rule_insertP, bexists, size, size_abort, restrict,\nmap_image_filter, map_value_image_filter\nSome maintenance changes<br>\n[2012-04-25]: New iterator foundation by Tuerk. Various maintenance changes.<br>\n[2012-08]: Collections V2. New features: Polymorphic iterators. Generic algorithm instantiation where required. Naming scheme changed from xx_opname to xx.opname.\nA compatibility file CollectionsV1 tries to simplify porting of existing theories, by providing old naming scheme and the old monomorphic iterator locales.<br>\n[2013-09]: Added Generic Collection Framework based on Autoref. The GenCF provides: Arbitrary nesting, full integration with Autoref.<br>\n[2014-06]: Maintenace changes to GenCF: Optimized inj_image on list_set. op_set_cart (Cartesian product). big-Union operation. atLeastLessThan - operation ({a..&lt;b})<br>",
    "notify": "lammich@in.tum.de"
}