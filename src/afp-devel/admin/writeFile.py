import json
import os

def writeFile(file, data, write=True, overwrite=False):
    fileExists = os.path.isfile(file)

    if fileExists and not overwrite:
        with open(file) as r:
            originalData = json.load(r)

        data = {**originalData, **data}

    # Only write file if write or if file doesn't exist
    # Or, only don't write if write is false and file exists
    if not fileExists or write:
        with open(file, "w", encoding="utf-8") as w:
            json.dump(data, w, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    writeFile()

