import json
import os

def writeFile(file, data, overwrite=True):
    fileExists = os.path.isfile(file)

    if fileExists:
        with open(file) as r:
            originalData = json.load(r)

        data = {**originalData, **data}

    # Only write file: if overwrite or if file doesn't exist
    # Or, only don't write if overwrite is false and file exists
    if not fileExists or overwrite:
        with open(file, "w", encoding="utf-8") as w:
            json.dump(data, w, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    writeFile()

