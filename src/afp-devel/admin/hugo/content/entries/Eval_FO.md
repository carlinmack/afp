{
    "title": "First-Order Query Evaluation",
    "authors": [
        "Martin Raszyk"
    ],
    "topics": [
        "Logic/General logic/Classical first-order logic"
    ],
    "date": "2022-02-15",
    "notify": [
        "m.raszyk@gmail.com"
    ],
    "abstract": "\nWe formalize first-order query evaluation over an infinite domain with\nequality. We first define the syntax and semantics of first-order\nlogic with equality. Next we define a locale\n<i>eval&lowbar;fo</i> abstracting a representation of\na potentially infinite set of tuples satisfying a first-order query\nover finite relations. Inside the locale, we define a function\n<i>eval</i> checking if the set of tuples satisfying a\nfirst-order query over a database (an interpretation of the\nquery's predicates) is finite (i.e., deciding <i>relative\nsafety</i>) and computing the set of satisfying tuples if it is\nfinite. Altogether the function <i>eval</i> solves\n<i>capturability</i> (Avron and Hirshfeld, 1991) of\nfirst-order logic with equality. We also use the function\n<i>eval</i> to prove a code equation for the semantics of\nfirst-order logic, i.e., the function checking if a first-order query\nover a database is satisfied by a variable assignment.<br/> We provide an\ninterpretation of the locale <i>eval&lowbar;fo</i>\nbased on the approach by Ailamazyan et al. A core notion in the\ninterpretation is the active domain of a query and a database that\ncontains all domain elements that occur in the database or interpret\nthe query's constants. We prove the main theorem of Ailamazyan et\nal. relating the satisfaction of a first-order query over an infinite\ndomain to the satisfaction of this query over a finite domain\nconsisting of the active domain and a few additional domain elements\n(outside the active domain) whose number only depends on the query. In\nour interpretation of the locale\n<i>eval&lowbar;fo</i>, we use a potentially higher\nnumber of the additional domain elements, but their number still only\ndepends on the query and thus has no effect on the data complexity\n(Vardi, 1982) of query evaluation. Our interpretation yields an\n<i>executable</i> function <i>eval</i>. The\ntime complexity of <i>eval</i> on a query is linear in the\ntotal number of tuples in the intermediate relations for the\nsubqueries. Specifically, we build a database index to evaluate a\nconjunction. We also optimize the case of a negated subquery in a\nconjunction. Finally, we export code for the infinite domain of\nnatural numbers.",
    "licence": "BSD",
    "dependencies": [
        "Containers"
    ],
    "theories": [
        "Infinite",
        "FO",
        "Eval_FO",
        "Mapping_Code",
        "Cluster",
        "Ailamazyan",
        "Ailamazyan_Code"
    ]
}