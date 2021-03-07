import os
from os.path import isdir

from writeFile import writeFile


def addTheories():
    hugoDir = "hugo/"
    entriesDir = hugoDir + "content/entries/"
    theoriesDir = hugoDir + "content/theories/"
    rootDir = "../thys"

    if not os.path.exists(theoriesDir):
        os.mkdir(theoriesDir)

    for entry in os.listdir(rootDir):
        if entry != "Example-Submission" and os.path.isdir(
            os.path.join(rootDir, entry)
        ):
            files = os.listdir(os.path.join(rootDir, entry))
            theories = [file[:-4] for file in files if file.endswith(".thy")]

            if theories:
                data = {
                    "url": "entries" + "/" + entry.lower() + "/" + "theories",
                    "title": "Session " + entry,
                }
                writeFile(theoriesDir + entry + ".md", data)


if __name__ == "__main__":
    addTheories()
