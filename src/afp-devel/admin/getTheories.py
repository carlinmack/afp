"""
Designed to be run once on new release of Isabelle. Takes around 80 minutes?
"""
import argparse
import os
import re
import warnings

import requests
from bs4 import BeautifulSoup
from bs4.element import NavigableString
from tqdm import tqdm

from writeFile import writeFile


def getTheories(all=False, entry=""):
    hugoDir = "hugo/"
    theoriesHtmlDir = hugoDir + "static/theories/"
    theoriesJsonDir = hugoDir + "content/theories/"
    entriesJsonDir = hugoDir + "content/entries/"
    rootDir = "../thys"

    if entry:
        processURL(entry, theoriesHtmlDir, theoriesJsonDir, entriesJsonDir)
        return

    numEntries = len(os.listdir(rootDir))

    t = tqdm(
        total=numEntries,
        bar_format="{l_bar}{bar}| {n_fmt}/{total_fmt} {elapsed_s:.0f}s",
    )

    for entry in os.listdir(rootDir):
        updateProgressBar(entry, t)

        entryPath = os.path.join(rootDir, entry)
        # Don't correctly handle the example submission yet
        # The second two are broken due to excessively nested html (hundreds of elements)
        brokenEntries = ["Example-Submission", "MonoidalCategory", "Bicategory"]
        if entry not in brokenEntries and os.path.isdir(entryPath):
            if all or not os.path.isfile(theoriesHtmlDir + entry + ".html"):
                processURL(entry, theoriesHtmlDir, theoriesJsonDir, entriesJsonDir)


def processURL(entry, theoriesHtmlDir, theoriesJsonDir, entriesJsonDir):
    names, links = theoryLinks(entry)

    if links != 0:
        theoriesHtml = ""
        theoriesJson = []

        for i, link in enumerate(links):
            html, lemmas = getTheory(link, names[i])
            theoriesHtml += html
            theoriesJson.append({names[i]: lemmas})

        with open(theoriesHtmlDir + entry + ".html", "w") as w:
            w.write(theoriesHtml)

        theoryData = {
            "url": "entries" + "/" + entry.lower() + "/" + "theories",
            "title": "Session " + entry,
            "theories": theoriesJson,
        }

        writeFile(theoriesJsonDir + entry + ".md", theoryData)
        writeFile(entriesJsonDir + entry + ".md", {"theories": names})


def theoryLinks(entry):
    def getTheoryLinks(url):
        content = requests.get(url).content
        soup = BeautifulSoup(content, features="lxml")
        theories = soup.find("div", {"class": "contents"}).findAll("a")

        return theories

    def getOutput(theories, url):
        names = [re.sub(".html$", "", a["href"]) for a in theories]
        links = [url + a["href"] for a in theories]
        return names, links

    url = "https://devel.isa-afp.org/browser_info/current/AFP/%s/" % entry
    try:
        theories = getTheoryLinks(url)
        names, links = getOutput(theories, url)

    except AttributeError:
        # sometimes large entries will be skipped in the devel version
        # so their theories will be unavailable
        url = "https://www.isa-afp.org/browser_info/current/AFP/%s/" % entry
        try:
            theories = getTheoryLinks(url)
            names, links = getOutput(theories, url)

        except AttributeError:
            warnings.warn("%s not found" % url, Warning)
            return 0, 0

    return names, links


def getTheory(url, name):
    content = requests.get(url).content
    soup = BeautifulSoup(content, features="lxml")
    contents = soup.body
    contents.name = "div"
    contents["id"] = name

    lemmaElements = contents.find_all(class_="keyword1", string="lemma")
    lemmas = []
    for lemmaElement in lemmaElements:
        lemmaName = lemmaElement.next_sibling
        if isinstance(lemmaName, NavigableString):
            lemmaName = lemmaName.strip()
            if lemmaName:
                lemmaElement["id"] = name + "-" + lemmaName
                lemmas.append(lemmaName)

    return str(contents), lemmas


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

    parser.add_argument("-e", "--entry", help="Name of entry")

    return parser


if __name__ == "__main__":
    argParser = defineArgParser()
    clArgs = argParser.parse_args()

    getTheories(clArgs.all, clArgs.entry)
