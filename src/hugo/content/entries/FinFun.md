{
    "title": "Code Generation for Functions as Data",
    "authors": [
        "Andreas Lochbihler"
    ],
    "date": "2009-05-06",
    "topics": [
        "Computer science/Data structures"
    ],
    "abstract": "FinFuns are total functions that are constant except for a finite set of points, i.e. a generalisation of finite maps. They are formalised as a new type in Isabelle/HOL such that the code generator can handle equality tests and quantification on FinFuns. On the code output level, FinFuns are explicitly represented by constant functions and pointwise updates, similarly to associative lists. Inside the logic, they behave like ordinary functions with extensionality. Via the update/constant pattern, a recursion combinator and an induction rule for FinFuns allow for defining and reasoning about operators on FinFun that are also executable.",
    "extra-history": "\nChange history:\n[2010-08-13]:\nnew concept domain of a FinFun as a FinFun\n(revision 34b3517cbc09)<br>\n[2010-11-04]:\nnew conversion function from FinFun to list of elements in the domain\n(revision 0c167102e6ed)<br>\n[2012-03-07]:\nreplace sets as FinFuns by predicates as FinFuns because the set type constructor has been reintroduced\n(revision b7aa87989f3a)",
    "notify": [
        "nipkow@in.tum.de"
    ],
    "licence": "BSD",
    "olderReleases": {
        "2009": "2009-05-25",
        "2009-1": "2009-12-12",
        "2009-2": "2010-06-30",
        "2011": "2011-02-11",
        "2011-1": "2011-10-11",
        "2012": "2012-05-24",
        "2013": "2013-03-02",
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