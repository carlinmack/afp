{
    "title": "A Codatatype of Formal Languages",
    "authors": [
        "Dmitriy Traytel"
    ],
    "topic": "Computer science/Automata and formal languages",
    "date": "2013-11-15",
    "abstract": "<p>We define formal languages as a codataype of infinite trees\nbranching over the alphabet. Each node in such a tree indicates whether the\npath to this node constitutes a word inside or outside of the language. This\ncodatatype is isormorphic to the set of lists representation of languages,\nbut caters for definitions by corecursion and proofs by coinduction.</p>\n<p>Regular operations on languages are then defined by primitive corecursion.\nA difficulty arises here, since the standard definitions of concatenation and\niteration from the coalgebraic literature are not primitively\ncorecursive-they require guardedness up-to union/concatenation.\nWithout support for up-to corecursion, these operation must be defined as a\ncomposition of primitive ones (and proved being equal to the standard\ndefinitions). As an exercise in coinduction we also prove the axioms of\nKleene algebra for the defined regular operations.</p>\n<p>Furthermore, a language for context-free grammars given by productions in\nGreibach normal form and an initial nonterminal is constructed by primitive\ncorecursion, yielding an executable decision procedure for the word problem\nwithout further ado.</p>",
    "notify": "traytel@in.tum.de"
}