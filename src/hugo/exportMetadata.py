import time

from addOlderReleases import addOlderReleases
from iniToJson import iniToJson
from addDependencies import addDependencies
from addStatistics import addStatistics

if __name__ == "__main__":
    tick = time.time()
    
    iniToJson()
    addOlderReleases()
    addDependencies()
    # for this to work add `return data` at line 212 in templates.py
    addStatistics()

    print("--- %s seconds ---" % (time.time() - tick))

