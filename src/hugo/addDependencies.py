import json
import os
import re


def addDependencies():
    entriesDir = "entries/"
    rootDir = "thys"

    for entry in os.listdir(rootDir):
        rootFile = os.path.join(rootDir, entry, "ROOT")
        if os.path.isfile(rootFile):
            with open(rootFile) as f:
                lines = f.read()

                parent = re.search(
                    rf"session \"?{re.escape(entry)}\"? .* = ([\w\"-]+) +", lines)
                imported = re.findall(
                    rf"session \"?{re.escape(entry)}\"? (.|\n)*?sessions([\s\w\"-]+?)\n  \w", lines)

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
                dependencies = [x for x in dependencies
                                if len(x) > 0 and not re.match("HOL", x)]

            if dependencies:
                data = {}
                with open("entries/" + entry + ".md") as file:
                    data = json.load(file)

                data["dependencies"] = dependencies

                with open("entries/" + entry + ".md", "w", encoding="utf-8") as f:
                    json.dump(data, f, ensure_ascii=False, indent=4)


if __name__ == '__main__':
    addDependencies()
