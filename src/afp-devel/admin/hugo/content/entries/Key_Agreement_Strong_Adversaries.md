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
        "Runs",
        "pfslvl1",
        "sklvl3_symmetric",
        "dhlvl3",
        "Implem_lemmas",
        "Implem",
        "Infra",
        "dhlvl2",
        "AuthenticationI",
        "Implem_symmetric",
        "dhlvl3_symmetric",
        "dhlvl3_asymmetric",
        "Import_all",
        "AuthenticationN",
        "sklvl1",
        "Refinement",
        "pfslvl2",
        "pfslvl3",
        "Message_derivation",
        "IK",
        "dhlvl1",
        "Channels",
        "pfslvl3_asymmetric",
        "sklvl2",
        "Payloads",
        "sklvl3_asymmetric",
        "Secrecy",
        "sklvl3",
        "Messages",
        "pfslvl3_symmetric",
        "Implem_asymmetric"
    ]
}