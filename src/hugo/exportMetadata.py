import time

from addOlderReleases import addOlderReleases
from iniToJson import iniToJson

if __name__ == "__main__":
    tick = time.time()
    
    iniToJson()
    addOlderReleases()

    print("--- %s seconds ---" % (time.time() - tick))

