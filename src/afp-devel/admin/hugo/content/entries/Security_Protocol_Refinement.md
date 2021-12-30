{
    "title": "Developing Security Protocols by Refinement",
    "authors": [
        "Christoph Sprenger",
        "Ivano Somaini"
    ],
    "topics": [
        "Computer science/Security"
    ],
    "license": "LGPL",
    "date": "2017-05-24",
    "notify": [
        "sprenger@inf.ethz.ch"
    ],
    "abstract": "\nWe propose a development method for security protocols based on\nstepwise refinement. Our refinement strategy transforms abstract\nsecurity goals into protocols that are secure when operating over an\ninsecure channel controlled by a Dolev-Yao-style intruder. As\nintermediate levels of abstraction, we employ messageless guard\nprotocols and channel protocols communicating over channels with\nsecurity properties. These abstractions provide insights on why\nprotocols are secure and foster the development of families of\nprotocols sharing common structure and properties. We have implemented\nour method in Isabelle/HOL and used it to develop different entity\nauthentication and key establishment protocols, including realistic\nfeatures such as key confirmation, replay caches, and encrypted\ntickets. Our development highlights that guard protocols and channel\nprotocols provide fundamental abstractions for bridging the gap\nbetween security properties and standard protocol descriptions based\non cryptographic messages. It also shows that our refinement approach\nscales to protocols of nontrivial size and complexity.",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
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
            "2016-1": "2017-05-25"
        }
    ],
    "theories": [
        "Infra",
        "Refinement",
        "Agents",
        "Keys",
        "Atoms",
        "Runs",
        "Channels",
        "Message",
        "s0g_secrecy",
        "a0n_agree",
        "a0i_agree",
        "m1_auth",
        "m2_auth_chan",
        "m2_confid_chan",
        "m3_sig",
        "m3_enc",
        "m1_keydist",
        "m1_keydist_iirn",
        "m1_keydist_inrn",
        "m1_kerberos",
        "m2_kerberos",
        "m3_kerberos_par",
        "m3_kerberos5",
        "m3_kerberos4",
        "m1_nssk",
        "m2_nssk",
        "m3_nssk_par",
        "m3_nssk",
        "m1_ds",
        "m2_ds",
        "m3_ds_par",
        "m3_ds"
    ]
}