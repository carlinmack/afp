import json
import os
from os.path import isdir
import re


def addTheories():
    hugoDir = "hugo/"
    entriesDir = hugoDir + "content/entries/"
    rootDir = "../thys"

    for entry in os.listdir(rootDir):
        if entry != "Example-Submission" and os.path.isdir(
            os.path.join(rootDir, entry)
        ):
            files = os.listdir(os.path.join(rootDir, entry))
            theories = [file[:-4] for file in files if file.endswith(".thy")]

            if theories:
                data = {}
                with open(entriesDir + entry + ".md") as file:
                    data = json.load(file)

                data["theories"] = theories

                with open(entriesDir + entry + ".md", "w", encoding="utf-8") as f:
                    json.dump(data, f, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    addTheories()
