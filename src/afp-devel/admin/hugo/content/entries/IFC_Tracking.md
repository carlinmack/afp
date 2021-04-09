{
    "title": "Information Flow Control via Dependency Tracking",
    "authors": [
        "Benedikt Nordhoff"
    ],
    "topics": [
        "Computer science/Security"
    ],
    "date": "2021-04-01",
    "notify": [
        "b.n@wwu.de"
    ],
    "abstract": "\nWe provide a characterisation of how information is propagated by\nprogram executions based on the tracking data and control dependencies\nwithin executions themselves.  The characterisation might be used for\nderiving approximative safety properties to be targeted by static\nanalyses or checked at runtime.  We utilise a simple yet versatile\ncontrol flow graph model as a program representation.  As our model is\nnot assumed to be finite it can be instantiated for a broad class of\nprograms.  The targeted security property is indistinguishable\nsecurity where executions produce sequences of observations and only\nnon-terminating executions are allowed to drop a tail of those.  A\nvery crude approximation of our characterisation is slicing based on\nprogram dependence graphs, which we use as a minimal example and\nderive a corresponding soundness result.  For further details and\napplications refer to the authors upcoming dissertation.",
    "licence": "BSD",
    "theories": [
        "IFC",
        "PDG"
    ]
}