import json
import os
from os.path import isdir
import re


def addTheories():
    hugoDir = "hugo/"
    entriesDir = hugoDir + "content/entries/"
    theoriesDir = hugoDir + "content/theories/"
    rootDir = "../thys"

    for entry in os.listdir(rootDir):
        if entry != "Example-Submission" and os.path.isdir(
            os.path.join(rootDir, entry)
        ):
            files = os.listdir(os.path.join(rootDir, entry))
            theories = [file[:-4] for file in files if file.endswith(".thy")]

            if theories:
                data = {}
                with open(entriesDir + entry + ".md") as r:
                    data = json.load(r)

                data["theories"] = theories

                with open(entriesDir + entry + ".md", "w", encoding="utf-8") as w:
                    json.dump(data, w, ensure_ascii=False, indent=4)

                data = {
                    "theories": theories,
                    "url": "entries" + "/" + entry.lower() + "/" + "theories",
                    "title": "Session " + entry
                }

                with open(theoriesDir + entry + ".md", "w", encoding="utf-8") as w:
                    json.dump(data, w, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    addTheories()
