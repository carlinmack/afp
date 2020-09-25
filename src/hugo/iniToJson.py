import os
import configparser
import json
import time
import re


def iniToJson():
    entriesDir = "../entries/"
    dataDir = "../data/"

    if not os.path.exists(entriesDir):
        os.mkdir(entriesDir)

    if not os.path.exists(dataDir):
        os.mkdir(dataDir)

    conf = configparser.ConfigParser()
    conf.read("metadata")
    
    authorsDictionary = {}
    for section in conf.sections():
        data = {}
        for (key, val) in conf.items(section):
            if key == "author":
                authors = val.split(",")
                jsonAuthors = []
                for author in authors:
                    metadata = re.findall(" <(.*?)>", author)
                    authorName = re.sub(" <(.*?)>", " ", author).strip()

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

                data["authors"] = jsonAuthors
            else:
                data[key] = val

        with open(entriesDir + section + ".md", "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

    with open(dataDir + "authors.json", "w", encoding="utf-8") as f:
        json.dump(authorsDictionary, f, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    tick = time.time()
    iniToJson()
    print("--- %s seconds ---" % (time.time() - tick))

