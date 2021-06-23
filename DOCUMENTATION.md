## Contents
* [exportMetadata.py](#module-exportMetadata) 
* [iniToJson.py](#module-iniToJson) 
* [addOlderReleases.py](#module-addOlderReleases) 
* [addDependencies.py](#module-addDependencies) 
* [generateKeywords.py](#module-generateKeywords) 
* [addRelatedEntries.py](#module-addRelatedEntries) 
* [exportJsonMetadata.py](#module-exportJsonMetadata) 
* [addStatistics.py](#module-addStatistics) 
* [getTheories.py](#module-getTheories) 

----
Module [exportMetadata](src/afp-devel/admin/exportMetadata.py)
=====================
Runs the rest of the scripts in the correct order and provides feedback in the 
form of a progress bar.

Please run pip install -r requirements.txt before running this script.

Functions
---------

    
`exportMetadata()`
:   Main method which calls each submodule in turn. No options can be passed.

    
`updateProgressBar(desc, t)`
:   

-----


Module [iniToJson](src/afp-devel/admin/iniToJson.py)
================
Converts the metadata stored in an INI file into individual JSON files. The 
shortname, title, date and abstract are preserved as is, but the other 
attributes are transformed into more appropriate formats like arrays and 
objects. 

Author emails are extracted from the entry data and are collated into an 
authors.json file.

Functions
---------

    
`deduplicate(name)`
:   Many authors have spelt there name in many ways. This is a manual 
    de-duplication of these.

    
`iniToJson()`
:   Iterates over each entry in the metadata/metadata file and extracts
    the information before outputting the data as a JSON file.

    
`processName(val, authorsDictionary)`
:   Extracts a string of authors into a python list. The website/email
    address is extracted here.
    
    Note: Only one website/email address is kept per author, if there
    are multiple values they are overwritten.

    
`standardiseInitials(name)`
:   Standardises the format of a name with initials.
    
    Format is:
        * Initial always followed by a period
        * Initials are always seperated by a space

-----


Module [addOlderReleases](src/afp-devel/admin/addOlderReleases.py)
=======================
This script traverses the `metadata/release-dates` and `metadata/releases`
files and adds all the releases (except the most recent) of each entry
to its JSON file.

Functions
---------

    
`addOlderReleases()`
:   First build a list of release dates, second traverse each release and 
    add all but the most recent to its entry file.

-----


Module [addDependencies](src/afp-devel/admin/addDependencies.py)
======================
The dependencies of an AFP entry are listed in the ROOT file, and as it 
is regular, this script uses a regular expression to extract the dependencies
and adds them to the JSON file of the entry.

Functions
---------

    
`addDependencies()`
:   For each entry in the thys/ directory, extract the dependencies and add
    them to the JSON file.

-----


Module [generateKeywords](src/afp-devel/admin/generateKeywords.py)
=======================
Generates a list of keywords for the search autocomplete. Each entry’s 
abstract is sanitised and then the keywords are extracted with the RAKE 
algorithm.

Functions
---------

    
`generateKeywords()`
:   RAKE is used to extract the keywords from every abstract. 
    
    The top 8 keywords are added to a list of all keywords and the keywords 
    that appear in more than two abstracts are preserved. Finally, plurals 
    are removed.

-----


Module [addRelatedEntries](src/afp-devel/admin/addRelatedEntries.py)
========================
This script generates related entries, using three metrics:
    * Sharing dependencies
    * Sharing keywords
    * Sharing keywords

These are weighted and used to find entries which are likely similar.

These are then added to the entries to improve site navigation.

Functions
---------

    
`addRelatedEntries()`
:   First three dictionaries are created as follows: 
    
    dependencies = {"dependency": [list-of-entries, ...], ...}
    keywords = {"keyword": [list-of-entries, ...], ...}
    topics = {"topic": [list-of-entries, ...], ...}
    
    Keywords that feature in more than 10 entries are dropped. Then
    a dictionary is created with the relatedness scores between each 
    entry. Finally, the top three related entries are chosen for each 
    entry.

    
`populateRelated(dataSet, relatedEntries, modifier=1)`
:   This is a heavliy nested loop to create the relatedEntries dictionary.
    
    For each of the categories, the list of entries associated with 
    each key is iterated over twice and, if the entries are not the 
    same, the modifier of that category is added to the relatedness 
    score between the two entries in the dictionary. As the loop 
    iterates twice over the value set, the resulting dictionary is 
    bijective — i.e., the value for A->B will be equal to B->A.

    
`topThree(dictionary)`
:   Returns the highest three dictionary keys by value

-----


Module [exportJsonMetadata](src/afp-devel/admin/exportJsonMetadata.py)
=========================
This script creates a JSON release of the AFP's metadata

Functions
---------

    
`exportJsonMetadata()`
:   Iterates over each entry and builds the output list

    
`processEntry(entryPath, entry)`
:   Removes the emails and related entries and returns the dictionary

-----


Module [addStatistics](src/afp-devel/admin/addStatistics.py)
====================
Most the statistics for the site, are generated by Hugo. This script, 
generates other statistics like number of lines in the AFP using the 
scripts from the current AFP. 

For this script to work, `return data` needs to be added at 
line 212 in templates.py

Functions
---------

    
`addStatistics()`
:   Creates the necessary objects to generates the statistics, 
    then outputs them to the data directory

-----


Module [getTheories](src/afp-devel/admin/getTheories.py)
==================
This script downloads and transforms the HTML documents for theory browsing.

By default this script only gets theories which do not have a theory file 
i.e., new theories. The `--all` flag can be passed to get all theories, 
but this should be run sparingly as it is intensive on the upstream server. 
A full run takes around 80 minutes.

Functions
---------

    
`defineArgParser()`
:   Creates parser for command line arguments

    
`dependancyLink(link)`
:   Fixes dependency links to be internal

    
`getTheories(all=False, entry='')`
:   Entry point, either downloads one entry or all of them 
    based on the passed flags

    
`getTheory(url, name)`
:   The theories are then downloaded, 
    transformed, and concatenated together. The first transformation 
    is to keep the <body> and change it to be a <div>, as there can 
    only be one body tag in a document. The next transformation is 
    to select all lemmas in the document and add unique IDs to them. 
    The resulting HTML and lemma names are returned to be added to 
    the theory’s front matter.

    
`processURL(entry, theoriesHtmlDir, theoriesJsonDir, entriesJsonDir)`
:   Gets the theories for an entry and writes it to the requisite files

    
`theoryLinks(entry)`
:   Download the  “Browse theories” page for an entry to get a 
    list of theories.

    
`updateProgressBar(desc, t)`
:   

-----
