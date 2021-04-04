import time

from tqdm import tqdm

from addDependencies import addDependencies
from addOlderReleases import addOlderReleases
from addRelatedEntries import addRelatedEntries
from addStatistics import addStatistics
from exportJsonMetadata import exportJsonMetadata
from generateKeywords import generateKeywords
from iniToJson import iniToJson


def updateProgressBar(desc, t):
    t.update()
    t.set_description(desc)


if __name__ == "__main__":
    t = tqdm(total=7, bar_format="{l_bar}{bar}| {n_fmt}/{total_fmt} {elapsed_s:.0f}s")
    tick = time.time()
    updateProgressBar("Export metadata to JSON", t)
    iniToJson()

    updateProgressBar("Add older releases", t)
    addOlderReleases()

    updateProgressBar("Add dependencies", t)
    addDependencies()

    updateProgressBar("Generate keywords", t)
    generateKeywords()

    updateProgressBar("Add related entries", t)
    addRelatedEntries()

    updateProgressBar("Export metadata.json", t)
    exportJsonMetadata()

    updateProgressBar("Export statistics", t)
    # for this to work add `return data` at line 212 in templates.py
    addStatistics()

    t.close()
