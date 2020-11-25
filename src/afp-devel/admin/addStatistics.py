# need to add `return data` at line 212 in templates.py

import os
import sys
import json

sys.path.append("sitegen-lib")

import templates
from config import options, release_pattern
from sitegen import parse, associate_releases, read_versions
import metadata
import afpstats


def addStatistics():
    hugoDir = "hugo/"
    dataDir = hugoDir + "data/"
    options.templates_dir = "../metadata/templates"

    entries = parse(os.path.join("..", "metadata", "metadata"))
    versions = read_versions(os.path.join("..", "metadata", "release-dates"))
    associate_releases(entries, versions, os.path.join("..", "metadata", "releases"))

    deps_dict = metadata.empty_deps(entries)

    afp_dict = afpstats.afp_dict(entries, "../thys", deps_dict)
    afp_dict.build_stats()
    builder = templates.Builder(options, entries, afp_dict)

    stats = builder.generate_statistics()

    loc_articles = [article.loc for article in stats["articles_by_time"]]

    all_articles = [a.name for a in stats["articles_by_time"]]

    data = {
        "num_lemmas": stats["num_lemmas"],
        "num_loc": stats["num_loc"],
        "articles_year": stats["articles_year"],
        "loc_years": stats["loc_years"],
        "author_years": stats["author_years"],
        "author_years_cumulative": stats["author_years_cumulative"],
        "loc_articles": loc_articles,
        "all_articles": all_articles,
    }

    with open(dataDir + "statistics.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    addStatistics()
