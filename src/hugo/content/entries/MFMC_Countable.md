{
    "title": "A Formal Proof of the Max-Flow Min-Cut Theorem for Countable Networks",
    "authors": [
        "Andreas Lochbihler"
    ],
    "date": "2016-05-09",
    "topics": [
        "Mathematics/Graph theory"
    ],
    "abstract": "\nThis article formalises a proof of the maximum-flow minimal-cut\ntheorem for networks with countably many edges.  A network is a\ndirected graph with non-negative real-valued edge labels and two\ndedicated vertices, the source and the sink.  A flow in a network\nassigns non-negative real numbers to the edges such that for all\nvertices except for the source and the sink, the sum of values on\nincoming edges equals the sum of values on outgoing edges.  A cut is a\nsubset of the vertices which contains the source, but not the sink.\nOur theorem states that in every network, there is a flow and a cut\nsuch that the flow saturates all the edges going out of the cut and is\nzero on all the incoming edges.  The proof is based on the paper\n<emph>The Max-Flow Min-Cut theorem for countable networks</emph> by\nAharoni et al.  Additionally, we prove a characterisation of the\nlifting operation for relations on discrete probability distributions,\nwhich leads to a concise proof of its distributivity over relation\ncomposition.",
    "notify": [
        "mail@andreas-lochbihler.de"
    ],
    "extra": {
        "Change history": "[2017-09-06]\nderive characterisation for the lifting operations on discrete distributions from finite version of the max-flow min-cut theorem\n(revision a7a198f5bab0)<br>"
    },
    "licence": "BSD",
    "olderReleases": {
        "2016": "2016-05-09",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    },
    "dependencies": [
        "EdmondsKarp_Maxflow"
    ]
}