import configparser
import os
import re

from writeFile import writeFile


def iniToJson():
    hugoDir = "hugo/"
    entriesDir = hugoDir + "content/entries/"
    theoriesDir = hugoDir + "content/theories/"
    dataDir = hugoDir + "data/"

    if not os.path.exists(entriesDir):
        os.mkdir(entriesDir)

    if not os.path.exists(dataDir):
        os.mkdir(dataDir)

    conf = configparser.ConfigParser()
    conf.read("../metadata/metadata")

    authorsDictionary = {}
    noIndex = False
    for section in conf.sections():
        data = {}
        for (key, val) in conf.items(section):
            if key == "author":
                jsonAuthors = processName(val, authorsDictionary)

                data["authors"] = jsonAuthors
            elif key == "contributors":
                jsonContributors = processName(val, authorsDictionary)

                data[key] = jsonContributors
            elif key == "topic":
                data["topics"] = list(map(lambda x: x.strip(), val.split(",")))
            elif key == "notify":
                data[key] = list(map(lambda x: x.strip(), val.split(",")))
            elif re.match("extra-", key):
                sepValue = val.split(":")
                extraKey = sepValue[0].strip()
                extraVal = "".join(sepValue[1:]).strip()

                if extraKey == "no-index" and extraVal == "true":
                    noIndex = True
                    continue

                if "extra" in data:
                    data["extra"][extraKey] = extraVal
                else:
                    data["extra"] = {extraKey: extraVal}
            else:
                data[key] = val

        if "license" not in data:
            data["licence"] = "BSD"

        if not noIndex:
            writeFile(entriesDir + section + ".md", data)
        else:
            noIndex = False

    writeFile(dataDir + "authors.json", authorsDictionary, overwrite=True)


def processName(val, authorsDictionary):
    authors = val.split(",")
    jsonAuthors = []
    for author in authors:
        metadata = re.findall("<(.*?)>", author)
        authorName = re.sub("<(.*?)>", "", author).strip()
        authorName = standardiseInitials(authorName)
        authorName = deduplicate(authorName)

        for datum in metadata:
            if re.match("mailto:", datum):
                value = re.findall("mailto:(.*)", datum)[0]
                if authorName in authorsDictionary:
                    authorsDictionary[authorName]["mailto"] = value
                else:
                    authorsDictionary[authorName] = {"mailto": value}
            elif re.match("https?://", datum):
                if authorName in authorsDictionary:
                    authorsDictionary[authorName]["website"] = datum
                else:
                    authorsDictionary[authorName] = {"website": datum}

        jsonAuthors.append(authorName)
    return jsonAuthors


def standardiseInitials(name):
    if re.match(".* [A-Z] .*", name):
        name = re.sub(r"( [A-Z]) ", r"\1. ", name)

    if re.match(".*( [A-Z].)([A-Z]. ).*", name):
        name = re.sub(r"( [A-Z].)([A-Z]. )", r"\1 \2", name)

    return name


def deduplicate(name):
    if name == "Florian Kammueller":
        return "Florian Kammüller"
    if name == "Jasmin Blanchette":
        return "Jasmin Christian Blanchette"
    if name == "Jose Manuel Rodriguez Caballero":
        return "José Manuel Rodríguez Caballero"
    if name == "Maximilian Haslbeck":
        return "Maximilian P. L. Haslbeck"
    if name == "Ognjen Maric":
        return "Ognjen Marić"
    if name == "Sebastiaan Joosten":
        return "Sebastiaan J. C. Joosten"
    return name


if __name__ == "__main__":
    iniToJson()
