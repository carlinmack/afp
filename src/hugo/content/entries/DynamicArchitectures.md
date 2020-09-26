{
    "title": "Dynamic Architectures",
    "authors": [
        "Diego Marmsoler"
    ],
    "topics": [
        "Computer science/System description languages"
    ],
    "date": "2017-07-28",
    "notify": [
        "diego.marmsoler@tum.de"
    ],
    "abstract": "\nThe architecture of a system describes the system's overall\norganization into components and connections between those components.\nWith the emergence of mobile computing, dynamic architectures have\nbecome increasingly important. In such architectures, components may\nappear or disappear, and connections may change over time. In the\nfollowing we mechanize a theory of dynamic architectures and verify\nthe soundness of a corresponding calculus. Therefore, we first\nformalize the notion of configuration traces as a model for dynamic\narchitectures. Then, the behavior of single components is formalized\nin terms of behavior traces and an operator is introduced and studied\nto extract the behavior of a single component out of a given\nconfiguration trace. Then, behavior trace assertions are introduced as\na temporal specification technique to specify behavior of components.\nReasoning about component behavior in a dynamic context is formalized\nin terms of a calculus for dynamic architectures. Finally, the\nsoundness of the calculus is verified by introducing an alternative\ninterpretation for behavior trace assertions over configuration traces\nand proving the rules of the calculus. Since projection may lead to\nfinite as well as infinite behavior traces, they are formalized in\nterms of coinductive lists. Thus, our theory is based on\nLochbihler's formalization of coinductive lists. The theory may\nbe applied to verify properties for dynamic architectures.",
    "extra-history": "\nChange history:\n[2018-06-07]: adding logical operators to specify configuration traces (revision 09178f08f050)<br>",
    "licence": "BSD",
    "olderReleases": {
        "2016-1": "2017-07-31",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}