#!/bin/bash

cd afp-devel/admin;

outputFile="../../../DOCUMENTATION.md"

echo -e "## Contents\n* [exportMetadata.py](#module-exportMetadata) \n* [iniToJson.py](#module-iniToJson) \n* [addOlderReleases.py](#module-addOlderReleases) \n* [addDependencies.py](#module-addDependencies) \n* [generateKeywords.py](#module-generateKeywords) \n* [addRelatedEntries.py](#module-addRelatedEntries) \n* [exportJsonMetadata.py](#module-exportJsonMetadata) \n* [addStatistics.py](#module-addStatistics) \n* [getTheories.py](#module-getTheories) \n\n----" > $outputFile

pdoc --template-dir ../../pdoc exportMetadata iniToJson addOlderReleases addDependencies generateKeywords addRelatedEntries exportJsonMetadata addStatistics getTheories >> $outputFile

