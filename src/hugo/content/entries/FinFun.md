{
    "title": "Code Generation for Functions as Data",
    "authors": [
        "Andreas Lochbihler"
    ],
    "date": "2009-05-06",
    "topics": [
        "Computer science-Data structures"
    ],
    "abstract": "FinFuns are total functions that are constant except for a finite set of points, i.e. a generalisation of finite maps. They are formalised as a new type in Isabelle/HOL such that the code generator can handle equality tests and quantification on FinFuns. On the code output level, FinFuns are explicitly represented by constant functions and pointwise updates, similarly to associative lists. Inside the logic, they behave like ordinary functions with extensionality. Via the update/constant pattern, a recursion combinator and an induction rule for FinFuns allow for defining and reasoning about operators on FinFun that are also executable.",
    "extra-history": "\nChange history:\n[2010-08-13]:\nnew concept domain of a FinFun as a FinFun\n(revision 34b3517cbc09)<br>\n[2010-11-04]:\nnew conversion function from FinFun to list of elements in the domain\n(revision 0c167102e6ed)<br>\n[2012-03-07]:\nreplace sets as FinFuns by predicates as FinFuns because the set type constructor has been reintroduced\n(revision b7aa87989f3a)",
    "notify": "nipkow@in.tum.de"
}