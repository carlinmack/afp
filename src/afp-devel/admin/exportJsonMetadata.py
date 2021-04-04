import os
import json
from typing import Set
from tqdm import tqdm
from writeFile import writeFile


def exportJsonMetadata():
    inputDir = "hugo/content/entries/"
    outputFile = "hugo/static/release/metadata.json"

    numEntries = len(os.listdir(inputDir))

    t = tqdm(
        total=numEntries,
        desc="Output entries.json",
        bar_format="{l_bar}{bar}| {n_fmt}/{total_fmt} {elapsed_s:.0f}s",
    )

    data = []

    for entry in os.listdir(inputDir):
        updateProgressBar(t)

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


def updateProgressBar(t):
    t.update()


if __name__ == "__main__":
    main()
