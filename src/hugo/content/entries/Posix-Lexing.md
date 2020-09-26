{
    "title": "POSIX Lexing with Derivatives of Regular Expressions",
    "authors": [
        "Fahad Ausaf",
        "Roy Dyckhoff",
        "Christian Urban"
    ],
    "notify": "christian.urban@kcl.ac.uk",
    "date": "2016-05-24",
    "topics": [
        "Computer science-Automata and formal languages"
    ],
    "abstract": "\nBrzozowski introduced the notion of derivatives for regular\nexpressions. They can be used for a very simple regular expression\nmatching algorithm. Sulzmann and Lu cleverly extended this algorithm\nin order to deal with POSIX matching, which is the underlying\ndisambiguation strategy for regular expressions needed in lexers. In\nthis entry we give our inductive definition of what a POSIX value is\nand show (i) that such a value is unique (for given regular expression\nand string being matched) and (ii) that Sulzmann and Lu's algorithm\nalways generates such a value (provided that the regular expression\nmatches the string). We also prove the correctness of an optimised\nversion of the POSIX matching algorithm.",
    "licence": "BSD"
}