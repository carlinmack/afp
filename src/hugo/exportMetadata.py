import time

from addOlderReleases import addOlderReleases
from iniToJson import iniToJson
from addDependencies import addDependencies

if __name__ == "__main__":
    tick = time.time()
    
    iniToJson()
    addOlderReleases()
    addDependencies()

    print("--- %s seconds ---" % (time.time() - tick))

