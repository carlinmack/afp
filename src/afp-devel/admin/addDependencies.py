"""
The dependencies of an AFP entry are listed in the ROOT file, and as it 
is regular, this script uses a regular expression to extract the dependencies
and adds them to the JSON file of the entry.
"""
import os
import re

from writeFile import writeFile


def addDependencies():
    """For each entry in the thys/ directory, extract the dependencies and add
    them to the JSON file."""
    hugoDir = "hugo/"
    entriesDir = hugoDir + "content/entries/"
    rootDir = "../thys"

    for entry in os.listdir(rootDir):
        rootFile = os.path.join(rootDir, entry, "ROOT")
        if os.path.isfile(rootFile):
            with open(rootFile) as f:
                lines = f.read()

                parent = re.search(
                    rf"session \"?{re.escape(entry)}\"? .* = ([\w\"-]+) +", lines
                )
                imported = re.findall(
                    rf"session \"?{re.escape(entry)}\"? (.|\n)*?sessions([\s\w\"-]+?)\n  \w",
                    lines,
                )

                if parent:
                    parent = [parent.group(1)]
                else:
                    parent = []

                if imported:
                    imported = imported[0][1]
                    imported = imported.split("\n")
                    dependencies = parent + imported
                else:
                    dependencies = parent

                dependencies = [x.strip().replace('"', "") for x in dependencies]
                # remove dependencies outside the AFP
                dependencies = [
                    x
                    for x in dependencies
                    if len(x) > 0
                    and not re.match(
                        "(HOL|FOL|ZF|CCL|LCF|FOLP|Sequents|CTT|Cube|Pure)", x
                    )
                ]
                # remove duplicates but preserve order
                dependencies = list(dict.fromkeys(dependencies))

            if dependencies:
                data = {"dependencies": dependencies}
                writeFile(entriesDir + entry + ".md", data)


if __name__ == "__main__":
    addDependencies()
