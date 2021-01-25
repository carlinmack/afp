"""
Designed to be run once on new release of Isabelle. Takes around 40 minutes.
"""
import argparse

import os
import re
from os.path import isdir

import requests
from bs4 import BeautifulSoup
from tqdm import tqdm
import warnings

from writeFile import writeFile


def getTheories(all=False):
    hugoDir = "hugo/"
    theoriesHtmlDir = hugoDir + "static/theories/"
    theoriesJsonDir = hugoDir + "content/theories/"
    rootDir = "../thys"

    numEntries = len(os.listdir(rootDir))

    t = tqdm(
        total=numEntries,
        bar_format="{l_bar}{bar}| {n_fmt}/{total_fmt} {elapsed_s:.0f}s",
    )

    for entry in os.listdir(rootDir):
        updateProgressBar(entry, t)
        entryPath = os.path.join(rootDir, entry)

        if entry != "Example-Submission" and os.path.isdir(entryPath):
            if all or not os.path.isfile(theoriesHtmlDir + entry + ".html"):
                url = "https://devel.isa-afp.org/browser_info/current/AFP/%s/" % entry

                names, links = theoryLinks(url)

                if links != 0:
                    theories = ""

                    for i, link in enumerate(links):
                        theories += getTheory(url + link, names[i])

                    with open(theoriesHtmlDir + entry + ".html", "w") as w:
                        w.write(theories)

                    writeFile(theoriesJsonDir + entry + ".md", {"theories": names})


def theoryLinks(url):
    content = requests.get(url).content
    soup = BeautifulSoup(content, features="lxml")
    try:
        theories = soup.find("div", {"class": "contents"}).findAll("a")
    except AttributeError:
        warnings.warn("%s not found" % url, Warning)
        return 0
    links = [a["href"] for a in theories]
    names = [a.text for a in theories]
    return names, links


def getTheory(url, name):
    content = requests.get(url).content
    soup = BeautifulSoup(content, features="lxml")
    contents = soup.body
    contents.name = "div"
    contents["id"] = name
    return str(contents)


def updateProgressBar(desc, t):
    t.update()
    t.set_description(desc)


def defineArgParser():
    """Creates parser for command line arguments"""
    parser = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )

    parser.add_argument(
        "-a", "--all", help="Get all theories, update all files", action="store_true"
    )

    return parser


if __name__ == "__main__":
    argParser = defineArgParser()
    clArgs = argParser.parse_args()

    getTheories(clArgs.all)