{
    "title": "Network Security Policy Verification",
    "authors": [
        "Cornelius Diekmann"
    ],
    "date": "2014-07-04",
    "topics": [
        "Computer science/Security"
    ],
    "abstract": "\nWe present a unified theory for verifying network security policies.\nA security policy is represented as directed graph.\nTo check high-level security goals, security invariants over the policy are\nexpressed. We cover monotonic security invariants, i.e. prohibiting more does not harm\nsecurity. We provide the following contributions for the security invariant theory.\n<ul>\n<li>Secure auto-completion of scenario-specific knowledge, which eases usability.</li>\n<li>Security violations can be repaired by tightening the policy iff the\nsecurity invariants hold for the deny-all policy.</li>\n<li>An algorithm to compute a security policy.</li>\n<li>A formalization of stateful connection semantics in network security mechanisms.</li>\n<li>An algorithm to compute a secure stateful implementation of a policy.</li>\n<li>An executable implementation of all the theory.</li>\n<li>Examples, ranging from an aircraft cabin data network to the analysis\nof a large real-world firewall.</li>\n<li>More examples: A fully automated translation of high-level security goals to both\nfirewall and SDN configurations (see Examples/Distributed_WebApp.thy).</li>\n</ul>\nFor a detailed description, see\n<ul>\n<li>C. Diekmann, A. Korsten, and G. Carle.\n<a href=\"http://www.net.in.tum.de/fileadmin/bibtex/publications/papers/diekmann2015mansdnnfv.pdf\">Demonstrating\ntopoS: Theorem-prover-based synthesis of secure network configurations.</a>\nIn 2nd International Workshop on Management of SDN and NFV Systems, manSDN/NFV, Barcelona, Spain, November 2015.</li>\n<li>C. Diekmann, S.-A. Posselt, H. Niedermayer, H. Kinkelin, O. Hanka, and G. Carle.\n<a href=\"http://www.net.in.tum.de/pub/diekmann/forte14.pdf\">Verifying Security Policies using Host Attributes.</a>\nIn FORTE, 34th IFIP International Conference on Formal Techniques for Distributed Objects,\nComponents and Systems, Berlin, Germany, June 2014.</li>\n<li>C. Diekmann, L. Hupel, and G. Carle. Directed Security Policies:\n<a href=\"http://rvg.web.cse.unsw.edu.au/eptcs/paper.cgi?ESSS2014.3\">A Stateful Network Implementation.</a>\nIn J. Pang and Y. Liu, editors, Engineering Safety and Security Systems,\nvolume 150 of Electronic Proceedings in Theoretical Computer Science,\npages 20-34, Singapore, May 2014. Open Publishing Association.</li>\n</ul>",
    "extra": {
        "Change history": "[2015-04-14]\nAdded Distributed WebApp example and improved graphviz visualization\n(revision 4dde08ca2ab8)<br>"
    },
    "notify": [
        "diekmann@net.in.tum.de"
    ],
    "licence": "BSD",
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
            "2016-1": "2016-12-17"
        },
        {
            "2016": "2016-02-22"
        },
        {
            "2015": "2015-05-27"
        },
        {
            "2014": "2014-08-28"
        },
        {
            "2013-2": "2014-07-09"
        }
    ],
    "dependencies": [
        "Transitive-Closure",
        "Automatic_Refinement"
    ],
    "theories": [
        "ML_GraphViz",
        "ML_GraphViz_Disable",
        "FiniteGraph",
        "FiniteListGraph",
        "TopoS_Util",
        "Efficient_Distinct",
        "FiniteListGraph_Impl",
        "TopoS_Vertices",
        "TopoS_Interface",
        "TopoS_withOffendingFlows",
        "TopoS_ENF",
        "vertex_example_simps",
        "TopoS_Helper",
        "SINVAR_Subnets2",
        "SINVAR_BLPstrict",
        "SINVAR_Tainting",
        "SINVAR_BLPbasic",
        "SINVAR_TaintingTrusted",
        "SINVAR_BLPtrusted",
        "Analysis_Tainting",
        "TopoS_Interface_impl",
        "SINVAR_BLPbasic_impl",
        "SINVAR_Subnets",
        "SINVAR_Subnets_impl",
        "SINVAR_DomainHierarchyNG",
        "SINVAR_DomainHierarchyNG_impl",
        "SINVAR_BLPtrusted_impl",
        "SINVAR_SecGwExt",
        "SINVAR_SecGwExt_impl",
        "SINVAR_Sink",
        "SINVAR_Sink_impl",
        "SINVAR_SubnetsInGW",
        "SINVAR_SubnetsInGW_impl",
        "SINVAR_CommunicationPartners",
        "SINVAR_CommunicationPartners_impl",
        "SINVAR_NoRefl",
        "SINVAR_NoRefl_impl",
        "SINVAR_Tainting_impl",
        "SINVAR_TaintingTrusted_impl",
        "SINVAR_Dependability",
        "SINVAR_Dependability_impl",
        "SINVAR_NonInterference",
        "SINVAR_NonInterference_impl",
        "SINVAR_ACLcommunicateWith",
        "SINVAR_ACLnotCommunicateWith",
        "SINVAR_ACLnotCommunicateWith_impl",
        "SINVAR_ACLcommunicateWith_impl",
        "SINVAR_Dependability_norefl",
        "SINVAR_Dependability_norefl_impl",
        "TopoS_Library",
        "TopoS_Composition_Theory",
        "TopoS_Stateful_Policy",
        "TopoS_Composition_Theory_impl",
        "TopoS_Stateful_Policy_Algorithm",
        "TopoS_Stateful_Policy_impl",
        "METASINVAR_SystemBoundary",
        "TopoS_Impl",
        "Network_Security_Policy_Verification",
        "Example_BLP",
        "TopoS_generateCode",
        "attic",
        "Impl_List_Playground_ChairNetwork",
        "Impl_List_Playground_statefulpolicycompliance",
        "Example",
        "Example_NetModel",
        "Example_Forte14",
        "Distributed_WebApp",
        "I8_SSH_Landscape",
        "Impl_List_Playground",
        "Impl_List_Playground_ChairNetwork_statefulpolicy_example",
        "CryptoDB",
        "IDEM",
        "MeasrDroid",
        "SINVAR_Examples",
        "Imaginary_Factory_Network"
    ]
}