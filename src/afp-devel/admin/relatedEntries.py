import os
import json 

from writeFile import writeFile


def addRelatedEntries():
    hugoDir = "hugo/"
    entriesDir = hugoDir + "content/entries/"
    keywordsFile = hugoDir + "themes/afp/static/data/keywords.json"

    keywords = {}

    with open(keywordsFile) as file:
        data = json.load(file)

        for obj in data:
            keywords[obj["keyword"]] = []

    dependencies = {}
    topics = {}
    for entry in os.listdir(entriesDir):
        shortname = entry[:-3]

        with open(os.path.join(entriesDir, entry)) as file:
            data = json.load(file)
            if "dependencies" in data:
                for dep in data["dependencies"]:
                    if dep in dependencies:
                        dependencies[dep].append(shortname)
                    else:
                        dependencies[dep] = [shortname]
            if "topics" in data:
                for topic in data["topics"]:
                    if topic in topics:
                        topics[topic].append(shortname)
                    else:
                        topics[topic] = [shortname]

            for keyword in keywords.keys():
                if keyword in data["abstract"].lower():
                    keywords[keyword].append(shortname)

    for keyword, values in list(keywords.items()):
        if len(values) > 10:
            keywords.pop(keyword)

    # writeFile("rake.json", keywords)

    relatedEntries = {}

    for dataSet in [(keywords, 1), (dependencies, 1.5), (topics, 0.5)]:
        populateRelated(dataSet[0], relatedEntries, dataSet[1])

    for entry in relatedEntries:
        for keyword, value in list(relatedEntries[entry].items()):
            if value <= 2.5:
                relatedEntries[entry].pop(keyword)

    finalRelatedEntries = {}

    for keyword, values in relatedEntries.items():
        finalRelatedEntries[keyword] = topThree(values)

    # relatedEntriesData = {"nodes": [], "edges": []}

    # source = set()
    # target = set()

    for entry, related in finalRelatedEntries.items():
        if related:
            data = {"relatedEntries": related}
            writeFile(entriesDir + entry + ".md", data)

            # source.add(entry)
            # for r in related:
            #     target.add(r)

            # dataAppend(relatedEntriesData, entry, related)

    # writeFile("relatedEntries.json", relatedEntriesData)


def populateRelated(dataSet, relatedEntries, modifier=1):
    for _, entries in dataSet.items():
        for keyEntry in entries:
            for valueEntry in entries:
                if valueEntry != keyEntry:
                    if keyEntry in relatedEntries:
                        if valueEntry in relatedEntries[keyEntry]:
                            relatedEntries[keyEntry][valueEntry] += modifier
                        else:
                            relatedEntries[keyEntry][valueEntry] = modifier
                    else:
                        relatedEntries[keyEntry] = {valueEntry: modifier}


def topThree(dictionary):
    return sorted(dictionary, key=dictionary.get, reverse=True)[:3]


# def dataAppend(data, entry, relatedEntries):
#     data["nodes"].append({"data": {"id": "id" + entry, "name": entry}})

#     for related in relatedEntries:
#         data["edges"].append(
#             {"data": {"source": "id" + entry, "target": "id" + related}}
#         )


if __name__ == "__main__":
    addRelatedEntries()
