import configparser
import json
import os
import re
import time
from datetime import date


def addOlderReleases(dir: str = "../plots/",):
    releaseNames = []
    releaseDates = []

    with open("release-dates", "r") as f:
        for line in f.readlines():
            line = line.strip()
            tuple = line.split(" = ")
            releaseNames.append(tuple[0])
            releaseDates.append(date.fromisoformat(tuple[1]))

    with open("releases", "r") as f:
        prevName = ""
        entryReleases = {}
        for line in f:
            line = line.strip()
            name, entryDateString = re.findall(
                "afp-(.*)-(\d{4}-\d{2}-\d{2}).tar.gz", line
            )[0]
            entryReleaseDate = date.fromisoformat(entryDateString)

            if name != prevName:
                if entryReleases:
                    data = {}
                    with open("../entries/" + prevName + ".md") as file:
                        data = json.load(file)

                    data["olderReleases"] = entryReleases

                    with open(
                        "../entries/" + prevName + ".md", "w", encoding="utf-8"
                    ) as f:
                        json.dump(data, f, ensure_ascii=False, indent=4)

                prevName = name
                entryReleases = {}

            # - 1 as we ignore the most recent release
            for i in range(len(releaseDates) - 1):
                if (
                    entryReleaseDate >= releaseDates[i]
                    and entryReleaseDate < releaseDates[i + 1]
                ):
                    entryReleases[releaseNames[i]] = entryDateString
                    break


if __name__ == "__main__":
    addOlderReleases()
