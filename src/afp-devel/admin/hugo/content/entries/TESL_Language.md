{
    "title": "A Formal Development of a Polychronous Polytimed Coordination Language",
    "authors": [
        "Hai Nguyen Van",
        "Frédéric Boulanger",
        "Burkhart Wolff"
    ],
    "topics": [
        "Computer science/System description languages",
        "Computer science/Semantics",
        "Computer science/Concurrency"
    ],
    "date": "2019-07-30",
    "notify": [
        "frederic.boulanger@centralesupelec.fr",
        "burkhart.wolff@lri.fr"
    ],
    "abstract": "\nThe design of complex systems involves different formalisms for\nmodeling their different parts or aspects. The global model of a\nsystem may therefore consist of a coordination of concurrent\nsub-models that use different paradigms.  We develop here a theory for\na language used to specify the timed coordination of such\nheterogeneous subsystems by addressing the following issues:\n<ul><li>the\nbehavior of the sub-systems is observed only at a series of discrete\ninstants,</li><li>events may occur in different sub-systems at unrelated\ntimes, leading to polychronous systems, which do not necessarily have\na common base clock,</li><li>coordination between subsystems involves\ncausality, so the occurrence of an event may enforce the occurrence of\nother events, possibly after a certain duration has elapsed or an\nevent has occurred a given number of times,</li><li>the domain of time\n(discrete, rational, continuous...) may be different in the\nsubsystems, leading to polytimed systems,</li><li>the time frames of\ndifferent sub-systems may be related (for instance, time in a GPS\nsatellite and in a GPS receiver on Earth are related although they are\nnot the same).</li></ul>\nFirstly, a denotational semantics of the language is\ndefined. Then, in order to be able to incrementally check the behavior\nof systems, an operational semantics is given, with proofs of\nprogress, soundness and completeness with regard to the denotational\nsemantics. These proofs are made according to a setup that can scale\nup when new operators are added to the language. In order for\nspecifications to be composed in a clean way, the language should be\ninvariant by stuttering (i.e., adding observation instants at which\nnothing happens). The proof of this invariance is also given.",
    "licence": "BSD",
    "olderReleases": [
        {
            "2021": "2021-02-23"
        },
        {
            "2020": "2020-04-20"
        },
        {
            "2019": "2019-07-31"
        }
    ],
    "theories": [
        "Introduction",
        "TESL",
        "Run",
        "Denotational",
        "SymbolicPrimitive",
        "Operational",
        "Corecursive_Prop",
        "Hygge_Theory",
        "StutteringDefs",
        "StutteringLemmas",
        "Stuttering",
        "Config_Morphisms"
    ]
}