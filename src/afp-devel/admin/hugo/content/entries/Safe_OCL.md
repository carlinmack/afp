{
    "title": "Safe OCL",
    "authors": [
        "Denis Nikiforov"
    ],
    "topics": [
        "Computer science/Programming languages/Language definitions"
    ],
    "license": "LGPL",
    "date": "2019-03-09",
    "notify": [
        "denis.nikif@gmail.com"
    ],
    "abstract": "\n<p>The theory is a formalization of the\n<a href=\"https://www.omg.org/spec/OCL/\">OCL</a> type system, its abstract\nsyntax and expression typing rules. The theory does not define a concrete\nsyntax and a semantics. In contrast to\n<a href=\"https://www.isa-afp.org/entries/Featherweight_OCL.html\">Featherweight OCL</a>,\nit is based on a deep embedding approach. The type system is defined from scratch,\nit is not based on the Isabelle HOL type system.</p>\n<p>The Safe OCL distincts nullable and non-nullable types. Also the theory gives a\nformal definition of <a href=\"http://ceur-ws.org/Vol-1512/paper07.pdf\">safe\nnavigation operations</a>. The Safe OCL typing rules are much stricter than rules\ngiven in the OCL specification. It allows one to catch more errors on a type\nchecking phase.</p>\n<p>The type theory presented is four-layered: classes, basic types, generic types,\nerrorable types. We introduce the following new types: non-nullable types (T[1]),\nnullable types (T[?]), OclSuper. OclSuper is a supertype of all other types (basic\ntypes, collections, tuples). This type allows us to define a total supremum function,\nso types form an upper semilattice. It allows us to define rich expression typing\nrules in an elegant manner.</p>\n<p>The Preliminaries Chapter of the theory defines a number of helper lemmas for\ntransitive closures and tuples. It defines also a generic object model independent\nfrom OCL. It allows one to use the theory as a reference for formalization of analogous languages.</p>",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2019-03-14"
        }
    ],
    "theories": [
        "Errorable",
        "Finite_Map_Ext",
        "Object_Model",
        "OCL_Basic_Types",
        "OCL_Examples",
        "OCL_Normalization",
        "OCL_Object_Model",
        "OCL_Syntax",
        "OCL_Types",
        "OCL_Typing",
        "Transitive_Closure_Ext",
        "Tuple"
    ]
}