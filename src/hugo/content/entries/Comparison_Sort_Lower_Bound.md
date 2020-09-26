{
    "title": "Lower bound on comparison-based sorting algorithms",
    "authors": [
        "Manuel Eberl"
    ],
    "topics": [
        "Computer science-Algorithms"
    ],
    "date": "2017-03-15",
    "notify": "eberlm@in.tum.de",
    "abstract": "\n<p>This article contains a formal proof of the well-known fact\nthat number of comparisons that a comparison-based sorting algorithm\nneeds to perform to sort a list of length <em>n</em> is at\nleast <em>log<sub>2</sub>&nbsp;(n!)</em>\nin the worst case, i.&thinsp;e.&nbsp;<em>Ω(n log\nn)</em>.</p>  <p>For this purpose, a shallow\nembedding for comparison-based sorting algorithms is defined: a\nsorting algorithm is a recursive datatype containing either a HOL\nfunction or a query of a comparison oracle with a continuation\ncontaining the remaining computation. This makes it possible to force\nthe algorithm to use only comparisons and to track the number of\ncomparisons made.</p>",
    "licence": "BSD"
}