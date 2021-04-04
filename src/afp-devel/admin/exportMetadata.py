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

def outputTime(tick):
    print('--- %s seconds ---' % (time.time() - tick))
    return time.time()

if __name__ == "__main__":
    t = tqdm(total=6, bar_format="{l_bar}{bar}| {n_fmt}/{total_fmt} {elapsed_s:.0f}s")
    tick = time.time()
    updateProgressBar("Export metadata to JSON", t)
    iniToJson()
    tick = outputTime(tick)

    updateProgressBar("Add older releases", t)
    addOlderReleases()
    tick = outputTime(tick)

    updateProgressBar("Add dependencies", t)
    addDependencies()
    tick = outputTime(tick)

    updateProgressBar("Add related entries", t)
    addRelatedEntries()
    tick = outputTime(tick)

    updateProgressBar("Generate keywords", t)
    generateKeywords()
    tick = outputTime(tick)

    updateProgressBar("Export metadata.json", t)
    exportJsonMetadata()
    tick = outputTime(tick)

    updateProgressBar("Export statistics", t)
    # for this to work add `return data` at line 212 in templates.py
    addStatistics()
    tick = outputTime(tick)

    t.close()
