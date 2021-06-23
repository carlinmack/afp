"""
This script traverses the `metadata/release-dates` and `metadata/releases`
files and adds all the releases (except the most recent) of each entry
to its JSON file.
"""

import re
from datetime import date

from writeFile import writeFile


def addOlderReleases():
    """First build a list of release dates, second traverse each release and 
    add all but the most recent to its entry file."""
    releaseNames = []
    releaseDates = []

    hugoDir = "hugo/"
    entriesDir = hugoDir + "content/entries/"

    with open("../metadata/release-dates", "r") as f:
        for line in f.readlines():
            line = line.strip()
            tuple = line.split(" = ")
            releaseNames.append(tuple[0])
            releaseDates.append(date.fromisoformat(tuple[1]))

    with open("../metadata/releases", "r") as f:
        prevName = ""
        entryReleases = []
        for line in f:
            line = line.strip()
            name, entryDateString = re.findall(
                "afp-(.*)-(\d{4}-\d{2}-\d{2}).tar.gz", line
            )[0]
            entryReleaseDate = date.fromisoformat(entryDateString)

            if name != prevName:
                if entryReleases:
                    # remove most recent release
                    entryReleases = entryReleases[:-1]
                    # reverse list for display
                    entryReleases = list(reversed(entryReleases))

                    data = {"olderReleases": entryReleases}
                    writeFile(entriesDir + prevName + ".md", data)

                prevName = name
                entryReleases = []

            # - 1 as we ignore the most recent release
            numReleases = len(releaseDates)
            for i in range(numReleases):
                if i + 1 < numReleases:
                    # finding which release it corresponds to
                    if (
                        entryReleaseDate >= releaseDates[i]
                        and entryReleaseDate < releaseDates[i + 1]
                    ):
                        entryReleases.append({releaseNames[i]: entryDateString})
                        break
                else:
                    # use the most recent release
                    entryReleases.append({releaseNames[-1]: entryDateString})


if __name__ == "__main__":
    addOlderReleases()
