"""
Runs the rest of the scripts in the correct order and provides feedback in the 
form of a progress bar.

Please run pip install -r requirements.txt before running this script.
"""

import time

from tqdm import tqdm

from addDependencies import addDependencies
from addOlderReleases import addOlderReleases
from addRelatedEntries import addRelatedEntries
from addStatistics import addStatistics
from exportJsonMetadata import exportJsonMetadata
from getTheories import getTheories

from generateKeywords import generateKeywords
from iniToJson import iniToJson


def exportMetadata():
    """Main method which calls each submodule in turn. No options can be passed."""
    t = tqdm(total=7, bar_format="{l_bar}{bar}| {n_fmt}/{total_fmt} {elapsed_s:.0f}s")

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

    updateProgressBar("Get theories", t)
    getTheories()

    t.close()


def updateProgressBar(desc: str, t):
    t.update()
    t.set_description(desc)


if __name__ == "__main__":
    exportMetadata()
