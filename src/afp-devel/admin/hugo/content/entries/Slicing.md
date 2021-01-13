{
    "title": "Towards Certified Slicing",
    "authors": [
        "Daniel Wasserrab"
    ],
    "date": "2008-09-16",
    "topics": [
        "Computer science/Programming languages/Static analysis"
    ],
    "abstract": "Slicing is a widely-used technique with applications in e.g. compiler technology and software security. Thus verification of algorithms in these areas is often based on the correctness of slicing, which should ideally be proven independent of concrete programming languages and with the help of well-known verifying techniques such as proof assistants. As a first step in this direction, this contribution presents a framework for dynamic and static intraprocedural slicing based on control flow and program dependence graphs. Abstracting from concrete syntax we base the framework on a graph representation of the program fulfilling certain structural and well-formedness properties.<br><br>The formalization consists of the basic framework (in subdirectory Basic/), the correctness proof for dynamic slicing (in subdirectory Dynamic/), the correctness proof for static intraprocedural slicing (in subdirectory StaticIntra/) and instantiations of the framework with a simple While language (in subdirectory While/) and the sophisticated object-oriented bytecode language of Jinja (in subdirectory JinjaVM/). For more information on the framework, see the TPHOLS 2008 paper by Wasserrab and Lochbihler and the PLAS 2009 paper by Wasserrab et al.",
    "notify": [
        ""
    ],
    "licence": "BSD",
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
            "2013-2": "2013-12-11"
        },
        {
            "2013-1": "2013-11-17"
        },
        {
            "2013": "2013-02-16"
        },
        {
            "2012": "2012-05-24"
        },
        {
            "2011-1": "2011-10-11"
        },
        {
            "2011": "2011-02-11"
        },
        {
            "2009-2": "2010-07-01"
        },
        {
            "2009-1": "2009-12-12"
        },
        {
            "2009": "2009-04-30"
        },
        {
            "2009": "2009-04-29"
        },
        {
            "2008": "2008-09-22"
        }
    ],
    "dependencies": [
        "Jinja"
    ],
    "theories": [
        "Slicing"
    ],
    "relatedEntries": [
        "HRB-Slicing"
    ]
}