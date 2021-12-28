"""
This script downloads and transforms the HTML documents for theory browsing.



By default this script only gets theories which do not have a theory file 
i.e., new theories. The `--all` flag can be passed to get all theories, 
but this should be run sparingly as it is intensive on the upstream server. 
A full run takes around 80 minutes.
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


def getTheories(all: bool = False, entry: str = ""):
    """Entry point, either downloads one entry or all of them 
    based on the passed flags"""
    hugoDir = "hugo/"
    theoriesHtmlDir = hugoDir + "assets/theories/"
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
        brokenEntries = ["Example-Submission", "MonoidalCategory", "Bicategory", "CoSMed", "CoCon"]
        if entry not in brokenEntries and os.path.isdir(entryPath):
            if all or not os.path.isfile(theoriesHtmlDir + entry + ".html"):
                processURL(entry, theoriesHtmlDir, theoriesJsonDir, entriesJsonDir)


def processURL(entry, theoriesHtmlDir, theoriesJsonDir, entriesJsonDir):
    """Gets the theories for an entry and writes it to the requisite files"""
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


def theoryLinks(entry: str):
    """Download the  “Browse theories” page for an entry to get a 
    list of theories. """

    def getTheoryLinks(url: str) -> list:
        content = requests.get(url).content
        soup = BeautifulSoup(content, features="lxml")
        theories = soup.find("div", {"class": "contents"}).findAll("a")

        return theories

    def getOutput(theories: list, url: str):
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
    """
    The theories are then downloaded, 
    transformed, and concatenated together. The first transformation 
    is to keep the <body> and change it to be a <div>, as there can 
    only be one body tag in a document. The next transformation is 
    to select all lemmas in the document and add unique IDs to them. 
    The resulting HTML and lemma names are returned to be added to 
    the theory’s front matter.
    """
    content = requests.get(url).content
    soup = BeautifulSoup(content, features="lxml")
    contents = soup.body
    contents.name = "div"
    contents["id"] = name

    # make lemmas navigable
    lemmaElements = contents.find_all(class_="keyword1", string="lemma")
    lemmas = []
    for lemmaElement in lemmaElements:
        lemmaName = lemmaElement.next_sibling
        if isinstance(lemmaName, NavigableString):
            lemmaName = lemmaName.strip()
            if lemmaName:
                lemmaElement["id"] = name + "-" + lemmaName
                lemmas.append(lemmaName)

    # fix dependency links
    imports = contents.find(class_="keyword2", string="imports")
    if imports:
        for sibling in imports.next_siblings:
            if sibling.string == "begin":
                break

            if sibling.name == "a":
                sibling["href"] = dependancyLink(sibling["href"])
            elif sibling.name == "span":
                linkElem = sibling.find("a")
                if linkElem:
                    linkElem["href"] = dependancyLink(linkElem["href"])

    return str(contents), lemmas


def dependancyLink(link):
    """Fixes dependency links to be internal"""
    if re.match(r"\.\./\.\./", str(link)):
        link = re.sub(
            r"\.\./\.\./",
            "https://www.cl.cam.ac.uk/research/hvg/Isabelle/dist/library/",
            link,
        )
    elif re.match(r"\.\./", str(link)):
        matches = re.search(r"\.\.\/(\w+)\/(\w+).html", link)
        if matches:
            link = "../../%s/theories/#%s" % (
                matches.group(1).lower(),
                matches.group(2),
            )
    elif re.match(r"\w+\.html", str(link)):
        link = "#%s" % link[:-5]

    return link


def updateProgressBar(desc: str, t):
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
