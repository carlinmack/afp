import configparser
import os
import re

from writeFile import writeFile


def iniToJson():
    hugoDir = "hugo/"
    entriesDir = hugoDir + "content/entries/"
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
                data["topics"] = list(
                    map(lambda x: x.strip(), val.split(","))
                )
            elif key == "notify":
                data[key] = list(
                    map(lambda x: x.strip(), val.split(","))
                )
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

    writeFile(dataDir + "authors.json", authorsDictionary)


def processName(val, authorsDictionary):
    authors = val.split(",")
    jsonAuthors = []
    for author in authors:
        metadata = re.findall("<(.*?)>", author)
        authorName = re.sub("<(.*?)>", "", author).strip()

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


if __name__ == "__main__":
    iniToJson()
