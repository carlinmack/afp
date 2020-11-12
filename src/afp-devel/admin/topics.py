from rake.rake import Rake
import json
import re
import unidecode
import os
from itertools import groupby

entriesDir = "hugo/content/entries/"

stoppath = 'rake/data/stoplists/SmartStoplist.txt'

rake_object = Rake(stoppath, min_char_length=3, max_words_length=2)

# text = sample_file.read()

replacements = [
    ('\s+', ' '),
    ('<.*?>', ''),
    ('[^\w\s/.()\',-]', ' '),
    ('\s+', ' '),
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
    textKeywords = [x[0] for x in textKeywords[:10]]
    if "org/10" in textKeywords:
        print(entry)
    keywords += textKeywords
    
keywords = [i for i,c in groupby(sorted(keywords)) if len(list(c)) > 1]

jsonObject = [{"id": i, "keyword": x} for i, x in enumerate(keywords)]

with open("hugo/themes/afp/static/data/keywords.json", "w") as f:
    json.dump(jsonObject, f, ensure_ascii=False, separators=(',', ':'))