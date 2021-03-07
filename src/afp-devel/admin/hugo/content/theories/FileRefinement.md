{
    "theories": [
        {
            "CArrays": [
                "makeCArrayCorrect",
                "writeCArrayCorrect1",
                "writeCArrayCorrect2"
            ]
        },
        {
            "ResizableArrays": [
                "raWriteSizeSame",
                "raWriteSizeGrows",
                "raWriteContentChanged",
                "raWriteContentOld",
                "raWriteContentFill"
            ]
        },
        {
            "FileRefinement": [
                "nextFreeBlockInvariant1",
                "unallocatedBlocksInvariant1",
                "lastBlockInvariant1",
                "makeCFpreserves",
                "cfWriteNoExtendPreservesFileSize",
                "cfWriteExtendFileSize",
                "fileSizeIncreases",
                "nextFreeBlockIncreases",
                "cfWritePreservesNextFreeBlockInvariant",
                "modInequalityLemma",
                "mod_round_lt",
                "blockNumNELemma",
                "cfWritePreservesUnallocatedBlocksInvariant",
                "cfWritePreservesLastBlockInvariant",
                "cfWritePreserves",
                "makeCFCorrect",
                "fileSizeCorrect",
                "readCorrect",
                "writeNoExtendCorrect",
                "writeExtendCorrect",
                "writeSucceedCorrect",
                "writeFailCorrect",
                "writeCorrect"
            ]
        }
    ],
    "url": "entries/filerefinement/theories",
    "title": "Session FileRefinement"
}