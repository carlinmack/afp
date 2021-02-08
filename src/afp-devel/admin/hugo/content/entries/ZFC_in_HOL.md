{
    "title": "Zermelo Fraenkel Set Theory in Higher-Order Logic",
    "authors": [
        "Lawrence C. Paulson"
    ],
    "topics": [
        "Logic/Set theory"
    ],
    "date": "2019-10-24",
    "notify": [
        "lp15@cam.ac.uk"
    ],
    "abstract": "\n<p>This entry is a new formalisation of ZFC set theory in Isabelle/HOL. It is\nlogically equivalent to Obua's HOLZF; the point is to have the closest\npossible integration with the rest of Isabelle/HOL, minimising the amount of\nnew notations and exploiting type classes.</p>\n<p>There is a type <em>V</em> of sets and a function <em>elts :: V =&gt; V\nset</em> mapping a set to its elements. Classes simply have type <em>V\nset</em>, and a predicate identifies the small classes: those that correspond\nto actual sets. Type classes connected with orders and lattices are used to\nminimise the amount of new notation for concepts such as the subset relation,\nunion and intersection. Basic concepts — Cartesian products, disjoint sums,\nnatural numbers, functions, etc. — are formalised.</p>\n<p>More advanced set-theoretic concepts, such as transfinite induction,\nordinals, cardinals and the transitive closure of a set, are also provided.\nThe definition of addition and multiplication for general sets (not just\nordinals) follows Kirby.</p>\n<p>The theory provides two type classes with the aim of facilitating\ndevelopments that combine <em>V</em> with other Isabelle/HOL types:\n<em>embeddable</em>, the class of types that can be injected into <em>V</em>\n(including <em>V</em> itself as well as <em>V*V</em>, etc.), and\n<em>small</em>, the class of types that correspond to some ZF set.</p>\nextra-history =\nChange history:\n[2020-01-28]:  Generalisation of the \"small\" predicate and order types to arbitrary sets;\nordinal exponentiation;\nintroduction of the coercion ord_of_nat :: \"nat => V\";\nnumerous new lemmas. (revision 6081d5be8d08)",
    "licence": "BSD",
    "theories": [
        "Cantor_NF",
        "ZFC_Typeclasses",
        "Ordinal_Exp",
        "ZFC_in_HOL",
        "ZFC_Cardinals",
        "ZFC_Library",
        "Kirby"
    ]
}