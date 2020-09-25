{
    "title": "Iptables Semantics",
    "authors": [
        "Cornelius Diekmann",
        "Lars Hupel"
    ],
    "notify": "diekmann@net.in.tum.de, hupel@in.tum.de",
    "date": "2016-09-09",
    "topics": [
        "Computer science-Networks"
    ],
    "abstract": "\nWe present a big step semantics of the filtering behavior of the\nLinux/netfilter iptables firewall. We provide algorithms to simplify\ncomplex iptables rulests to a simple firewall model (c.f. AFP entry <a\nhref=\"https://www.isa-afp.org/entries/Simple_Firewall.html\">Simple_Firewall</a>)\nand to verify spoofing protection of a ruleset.\nInternally, we embed our semantics into ternary logic, ultimately\nsupporting every iptables match condition by abstracting over\nunknowns. Using this AFP entry and all entries it depends on, we\ncreated an easy-to-use, stand-alone haskell tool called <a\nhref=\"http://iptables.isabelle.systems\">fffuu</a>. The tool does not\nrequire any input &mdash;except for the <tt>iptables-save</tt> dump of\nthe analyzed firewall&mdash; and presents interesting results about\nthe user's ruleset. Real-Word firewall errors have been uncovered, and\nthe correctness of rulesets has been proved, with the help of\nour tool."
}