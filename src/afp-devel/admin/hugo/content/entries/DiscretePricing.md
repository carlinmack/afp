{
    "title": "Pricing in discrete financial models",
    "authors": [
        "Mnacho Echenim"
    ],
    "topics": [
        "Mathematics/Probability theory",
        "Mathematics/Games and economics"
    ],
    "date": "2018-07-16",
    "notify": [
        "mnacho.echenim@univ-grenoble-alpes.fr"
    ],
    "abstract": "\nWe have formalized the computation of fair prices for derivative\nproducts in discrete financial models. As an application, we derive a\nway to compute fair prices of derivative products in the\nCox-Ross-Rubinstein model of a financial market, thus completing the\nwork that was presented in this <a\nhref=\"https://hal.archives-ouvertes.fr/hal-01562944\">paper</a>.",
    "extra": {
        "Change history": "[2019-05-12]\nRenamed discr_mkt predicate to stk_strict_subs and got rid of predicate A for a more natural definition of the type discrete_market;\nrenamed basic quantity processes for coherent notation;\nrenamed value_process into val_process and closing_value_process to cls_val_process;\nrelaxed hypothesis of lemma CRR_market_fair_price.\nAdded functions to price some basic options.\n(revision 0b813a1a833f)<br>"
    },
    "licence": "BSD",
    "olderReleases": [
        {
            "2019": "2019-06-11"
        },
        {
            "2018": "2018-08-16"
        },
        {
            "2017": "2018-07-18"
        }
    ],
    "theories": [
        "Generated_Subalgebra",
        "Filtration",
        "Disc_Cond_Expect",
        "Fair_Price",
        "Infinite_Coin_Toss_Space",
        "Geometric_Random_Walk",
        "Martingale",
        "Option_Price_Examples",
        "CRR_Model"
    ]
}