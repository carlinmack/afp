{
    "title": "Executable Multivariate Polynomials",
    "authors": [
        "Christian Sternagel",
        "René Thiemann",
        "Alexander Maletzky",
        "Fabian Immler",
        "Florian Haftmann",
        "Andreas Lochbihler",
        "Alexander Bentkamp"
    ],
    "date": "2010-08-10",
    "topics": [
        "Mathematics/Analysis",
        "Mathematics/Algebra",
        "Computer science/Algorithms/Mathematical"
    ],
    "license": "LGPL",
    "abstract": "\nWe define multivariate polynomials over arbitrary (ordered) semirings in\ncombination with (executable) operations like addition, multiplication,\nand substitution. We also define (weak) monotonicity of polynomials and\ncomparison of polynomials where we provide standard estimations like\nabsolute positiveness or the more recent approach of Neurauter, Zankl,\nand Middeldorp. Moreover, it is proven that strongly normalizing\n(monotone) orders can be lifted to strongly normalizing (monotone) orders\nover polynomials. Our formalization was performed as part of the <a\nhref=\"http://cl-informatik.uibk.ac.at/software/ceta\">IsaFoR/CeTA-system</a>\nwhich contains several termination techniques. The provided theories have\nbeen essential to  formalize polynomial interpretations.\n<p>\nThis formalization also contains an abstract representation as coefficient functions with finite\nsupport and a type of power-products. If this type is ordered by a linear (term) ordering, various\nadditional notions, such as leading power-product, leading coefficient etc., are introduced as\nwell. Furthermore, a lot of generic properties of, and functions on, multivariate polynomials are\nformalized, including the substitution and evaluation homomorphisms, embeddings of polynomial rings\ninto larger rings (i.e. with one additional indeterminate), homogenization and dehomogenization of\npolynomials, and the canonical isomorphism between R[X,Y] and R[X][Y].",
    "extra": {
        "Change history": "[2010-09-17] Moved theories on arbitrary (ordered) semirings to Abstract Rewriting.<br>\n[2016-10-28] Added abstract representation of polynomials and authors Maletzky/Immler.<br>\n[2018-01-23] Added authors Haftmann, Lochbihler after incorporating\ntheir formalization of multivariate polynomials based on Polynomial mappings.\nMoved material from Bentkamp's entry \"Deep Learning\".<br>\n[2019-04-18] Added material about polynomials whose power-products are represented themselves\nby polynomial mappings."
    },
    "notify": [
        "rene.thiemann@uibk.ac.at",
        "christian.sternagel@uibk.ac.at",
        "alexander.maletzky@risc.jku.at",
        "immler@in.tum.de"
    ],
    "olderReleases": [
        {
            "2019": "2020-01-14"
        },
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
            "2009-2": "2010-08-11"
        }
    ],
    "dependencies": [
        "Abstract-Rewriting",
        "Matrix",
        "Show",
        "Well_Quasi_Orders"
    ],
    "theories": [
        "Utils",
        "MPoly_Type",
        "More_MPoly_Type",
        "Power_Products",
        "More_Modules",
        "MPoly_Type_Class",
        "MPoly_Type_Class_Ordered",
        "Poly_Mapping_Finite_Map",
        "MPoly_Type_Class_FMap",
        "PP_Type",
        "OAlist",
        "OAlist_Poly_Mapping",
        "Term_Order",
        "MPoly_Type_Class_OAlist",
        "Quasi_PM_Power_Products",
        "MPoly_PM",
        "MPoly_Type_Univariate",
        "Polynomials",
        "Show_Polynomials",
        "NZM"
    ],
    "relatedEntries": [
        "Matrix",
        "Decreasing-Diagrams-II",
        "Myhill-Nerode"
    ]
}