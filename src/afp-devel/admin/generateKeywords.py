"""Generates a list of keywords for the search autocomplete. Each entry’s 
abstract is sanitised and then the keywords are extracted with the RAKE 
algorithm.
"""
import json
import os
import re
import sys
from itertools import groupby

import unidecode

sys.path.append("rake")
from rake import Rake


def generateKeywords():
    """RAKE is used to extract the keywords from every abstract. 
    
    The top 8 keywords are added to a list of all keywords and the keywords 
    that appear in more than two abstracts are preserved. Finally, plurals 
    are removed."""
    entriesDir = "hugo/content/entries/"

    stoppath = "rake/data/stoplists/SmartStoplist.txt"

    rake_object = Rake(stoppath, min_char_length=3, max_words_length=2)

    replacements = [
        ("\s+", " "),
        ("<.*?>", ""),
        ("[^\w\s/.()',-]", " "),
        ("\s+", " "),
    ]

    keywords = []

    for entry in os.listdir(entriesDir):
        with open(os.path.join(entriesDir, entry)) as json_file:
            data = json.load(json_file)
            text = data["abstract"]

        for old, new in replacements:
            text = re.sub(old, new, text)

        text = unidecode.unidecode(text)

        textKeywords = rake_object.run(text)
        textKeywords = [x[0] for x in textKeywords[:8]]
        keywords += textKeywords

    # keep keywords that appear in 2 or more abstracts
    keywords = [i for i, c in groupby(sorted(keywords)) if len(list(c)) > 1]

    # remove plurals if we have the singular
    for keyword in keywords:
        if keyword + "s" in keywords:
            keywords.remove(keyword + "s")

    # create output format
    jsonObject = [{"id": i, "keyword": x} for i, x in enumerate(keywords)]

    with open("hugo/themes/afp/static/data/keywords.json", "w") as f:
        json.dump(jsonObject, f, ensure_ascii=False, separators=(",", ":"))


if __name__ == "__main__":
    generateKeywords()
