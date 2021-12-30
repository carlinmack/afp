{
    "title": "Verified Approximation Algorithms",
    "authors": [
        "Robin Eßmann",
        "Tobias Nipkow",
        "Simon Robillard",
        "Ujkan Sulejmani"
    ],
    "topics": [
        "Computer science/Algorithms/Approximation"
    ],
    "date": "2020-01-16",
    "notify": [
        "nipkow@in.tum.de"
    ],
    "abstract": "\nWe present the first formal verification of approximation algorithms\nfor NP-complete optimization problems: vertex cover, set cover, independent set,\ncenter selection, load balancing, and bin packing. The proofs correct incompletenesses\nin existing proofs and improve the approximation ratio in one case.\nA detailed description of our work (excluding center selection) has been published in the proceedings of\n<a href=\"https://doi.org/10.1007/978-3-030-51054-1_17\">IJCAR 2020</a>.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
        },
        {
            "2019": "2020-01-16"
        }
    ],
    "theories": [
        "Approx_VC_Hoare",
        "Approx_SC_Hoare",
        "Approx_MIS_Hoare",
        "Approx_LB_Hoare",
        "Approx_BP_Hoare"
    ],
    "extra": {
        "Change history": "[2021-02-08]\nadded theory Approx_SC_Hoare (Set Cover) by Robin Eßmann<br>\n[2021-06-29]\nadded theory Center_Selection by Ujkan Sulejmani"
    }
}