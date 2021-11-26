{
    "title": "van Emde Boas Trees",
    "authors": [
        "Thomas Ammer",
        "Peter Lammich"
    ],
    "topics": [
        "Computer science/Data structures"
    ],
    "date": "2021-11-23",
    "notify": [
        "lammich@in.tum.de"
    ],
    "abstract": "\nThe <em>van Emde Boas tree</em> or <em>van Emde Boas\npriority queue</em> is a data structure supporting membership\ntest, insertion, predecessor and successor search, minimum and maximum\ndetermination and deletion in <em>O(log log U)</em> time, where <em>U =\n0,...,2<sup>n-1</sup></em> is the overall range to be\nconsidered. <p/> The presented formalization follows Chapter 20\nof the popular <em>Introduction to Algorithms (3rd\ned.)</em> by Cormen, Leiserson, Rivest and Stein (CLRS),\nextending the list of formally verified CLRS algorithms. Our current\nformalization is based on the first author's bachelor's\nthesis. <p/> First, we prove correct a\n<em>functional</em> implementation, w.r.t. an abstract\ndata type for sets. Apart from functional correctness, we show a\nresource bound, and runtime bounds w.r.t. manually defined timing\nfunctions for the operations. <p/> Next, we refine the\noperations to Imperative HOL with time, and show correctness and\ncomplexity. This yields a practically more efficient implementation,\nand eliminates the manually defined timing functions from the trusted\nbase of the proof.",
    "licence": "BSD",
    "relatedEntries": [
        "Binomial-Queues"
    ],
    "theories": [
        "Heap_Time_Monad",
        "Array_Time",
        "Heap",
        "Ref_Time",
        "Imperative_HOL_Time",
        "Syntax_Match",
        "Assertions",
        "Hoare_Triple",
        "Refine_Imp_Hol",
        "Automation",
        "Sep_Main",
        "Imperative_HOL_Add",
        "Time_Reasoning",
        "Simple_TBOUND_Cond",
        "VEBT_Example_Setup",
        "VEBT_Definitions",
        "VEBT_Member",
        "VEBT_Insert",
        "VEBT_InsertCorrectness",
        "VEBT_MinMax",
        "VEBT_Succ",
        "VEBT_Pred",
        "VEBT_Delete",
        "VEBT_DeleteCorrectness",
        "VEBT_Uniqueness",
        "VEBT_Height",
        "VEBT_Bounds",
        "VEBT_DeleteBounds",
        "VEBT_Space",
        "VEBT_Intf_Functional",
        "VEBT_List_Assn",
        "VEBT_BuildupMemImp",
        "VEBT_SuccPredImperative",
        "VEBT_DelImperative",
        "VEBT_Intf_Imperative",
        "VEBT_Example"
    ]
}