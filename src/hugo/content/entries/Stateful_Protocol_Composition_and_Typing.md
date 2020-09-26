{
    "title": "Stateful Protocol Composition and Typing",
    "authors": [
        "Andreas V. Hess",
        "Sebastian Mödersheim",
        "Achim D. Brucker"
    ],
    "topics": [
        "Computer science-Security"
    ],
    "date": "2020-04-08",
    "notify": "avhe@dtu.dk, andreasvhess@gmail.com, samo@dtu.dk, brucker@spamfence.net, andschl@dtu.dk",
    "abstract": "\nWe provide in this AFP entry several relative soundness results for\nsecurity protocols. In particular, we prove typing and\ncompositionality results for stateful protocols (i.e., protocols with\nmutable state that may span several sessions), and that focuses on\nreachability properties. Such results are useful to simplify protocol\nverification by reducing it to a simpler problem: Typing results give\nconditions under which it is safe to verify a protocol in a typed\nmodel where only \"well-typed\" attacks can occur whereas\ncompositionality results allow us to verify a composed protocol by\nonly verifying the component protocols in isolation. The conditions on\nthe protocols under which the results hold are furthermore syntactic\nin nature allowing for full automation. The foundation presented here\nis used in another entry to provide fully automated and formalized\nsecurity proofs of stateful protocols.",
    "licence": "BSD"
}