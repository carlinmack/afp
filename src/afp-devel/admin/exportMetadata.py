from tqdm import tqdm

from addDependencies import addDependencies
from addOlderReleases import addOlderReleases
from addStatistics import addStatistics
from iniToJson import iniToJson

if __name__ == "__main__":
    t = tqdm(total=4, bar_format='{l_bar}{bar}| {n_fmt}/{total_fmt} {elapsed_s:.0f}s')
    
    t.set_description("Export metadata to JSON")
    iniToJson()
    t.update()
    t.set_description("Add older releases")
    addOlderReleases()
    t.update()
    t.set_description("Add dependencies")
    addDependencies()
    t.update()
    t.set_description("Export statistics")
    # for this to work add `return data` at line 212 in templates.py
    addStatistics()
    t.update()

    t.close()
