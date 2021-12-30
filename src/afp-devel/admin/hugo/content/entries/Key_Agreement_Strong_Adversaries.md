{
    "title": "Refining Authenticated Key Agreement with Strong Adversaries",
    "authors": [
        "Joseph Lallemand",
        "Christoph Sprenger"
    ],
    "topics": [
        "Computer science/Security"
    ],
    "license": "LGPL",
    "date": "2017-01-31",
    "notify": [
        "joseph.lallemand@loria.fr",
        "sprenger@inf.ethz.ch"
    ],
    "abstract": "\nWe develop a family of key agreement protocols that are correct by\nconstruction. Our work substantially extends prior work on developing\nsecurity protocols by refinement. First, we strengthen the adversary\nby allowing him to compromise different resources of protocol\nparticipants, such as their long-term keys or their session keys. This\nenables the systematic development of protocols that ensure strong\nproperties such as perfect forward secrecy. Second, we broaden the\nclass of protocols supported to include those with non-atomic keys and\nequationally defined cryptographic operators. We use these extensions\nto develop key agreement protocols including signed Diffie-Hellman and\nthe core of IKEv1 and SKEME.",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-18"
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
            "2016-1": "2017-02-03"
        }
    ],
    "theories": [
        "Infra",
        "Refinement",
        "Messages",
        "Message_derivation",
        "IK",
        "Secrecy",
        "AuthenticationN",
        "AuthenticationI",
        "Runs",
        "Channels",
        "Payloads",
        "Implem",
        "Implem_lemmas",
        "Implem_symmetric",
        "Implem_asymmetric",
        "pfslvl1",
        "pfslvl2",
        "pfslvl3",
        "pfslvl3_asymmetric",
        "pfslvl3_symmetric",
        "dhlvl1",
        "dhlvl2",
        "dhlvl3",
        "dhlvl3_asymmetric",
        "dhlvl3_symmetric",
        "sklvl1",
        "sklvl2",
        "sklvl3",
        "sklvl3_asymmetric",
        "sklvl3_symmetric"
    ]
}