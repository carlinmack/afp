import os
import json
from typing import Set
from writeFile import writeFile


def exportJsonMetadata():
    inputDir = "hugo/content/entries/"
    outputFile = "hugo/static/release/metadata.json"


    data = []

    for entry in os.listdir(inputDir):

        entryPath = os.path.join(inputDir, entry)
        
        if entry != "Example-Submission.md":
            data.append(processEntry(entryPath, entry))

    writeFile(outputFile, data, overwrite=True)


def processEntry(entryPath, entry):
    fileExists = os.path.isfile(entryPath)

    entryData = {"session": entry[:-3]}

    if fileExists:
        with open(entryPath) as r:
            entryData = {**entryData, **json.load(r)}

    # remove notify emails
    entryData.pop("notify", None)

    # remove related entries as they are not from the original data
    entryData.pop("relatedEntries", None)

    return entryData


if __name__ == "__main__":
    main()
