from tqdm import tqdm

from addDependencies import addDependencies
from addOlderReleases import addOlderReleases
from addStatistics import addStatistics
from iniToJson import iniToJson
from relatedEntries import addRelatedEntries
from addTheories import addTheories

def updateProgressBar(desc, t):
    t.update()
    t.set_description(desc)

if __name__ == "__main__":
    t = tqdm(total=6, bar_format='{l_bar}{bar}| {n_fmt}/{total_fmt} {elapsed_s:.0f}s')
    
    updateProgressBar("Export metadata to JSON", t)
    iniToJson()

    updateProgressBar("Add older releases", t)
    addOlderReleases()

    updateProgressBar("Add dependencies", t)
    addDependencies()
    
    updateProgressBar("Add theories", t)
    addTheories()

    updateProgressBar("Export statistics", t)
    # for this to work add `return data` at line 212 in templates.py
    addStatistics()
    
    updateProgressBar("Add related entries", t)
    addRelatedEntries()

    t.close()
