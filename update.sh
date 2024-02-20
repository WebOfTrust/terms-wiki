#!/bin/bash

# Runs several scripts to update the content of the website


source ".env"

##############################
echo "Update Google sheet: WOT-terms, tab: Terms-WOT-manage"
##############################

# Fetches data from WOT-terms (Google sheet) and generates an overview file that takes all the terms and their definitions and puts them into a single file. 
# Import Google Sheet “WOT-terms”, tab “Terms-WOT-manage” data into markdown file
node fetchExternalContent/fetchTermsWOTmanage/fetchTermsWOTmanage.mjs
##############################



##############################
echo "Update Google sheet: WOT-terms, tab: LabelContent (Carbon copies)"
##############################

# Fetches and copies external websites based on the URLs in the Google sheet "WOT-terms", tab "LabelContent"  
# Steps:
# 1: Fetch information in JSON format that serves as source for import Google Sheet “WOT-terms”, tab “LabelContent” data into markdown files, meta data
# 2: Import Google Sheet “WOT-terms”, tab “LabelContent” data into markdown files
# 3: Add HTML structure to external content, like Accordeon code

sh  fetchExternalContent/fetchCarbonCopies/main.sh
##############################



##############################
echo "Update Google sheet: WOT-terms, tab: GenericScraper"
##############################

node  fetchExternalContent/fetchSingleUrlsFromWotTermsGoogleSheet/fetchSingleUrlsFromWotTermsGoogleSheet.js
##############################



##############################
echo "Clone the wiki"
##############################

# Step 1: Checkout wiki
git clone https://github.com/WebOfTrust/WOT-terms.wiki.git temp-wiki

# remove the .git folder
rm -rf temp-wiki/.git
rm -rf temp-wiki/.gitignore

# Create a file in temp-wiki/ called ”_category_.json”
echo "{
  \"label\": \"${GLOSSARY_OVERVIEW_JSON_LABEL}\",
  \"link\": {
  \"type\": \"generated-index\",
  \"description\": \"${GLOSSARY_OVERVIEW_JSON_DESCRIPTION}.\"
  }
}" > temp-wiki/_category_.json

# Step 2: Copy Wiki To Docusaurus Glossary directory
# Create the directory if it doesn't exist
mkdir -p docs/${GLOSSARY_DIR}

# Copy all new and updated files from temp-wiki/ to docs/04_glossary/
# Delete any files in docs/04_glossary/ that do not exist in temp-wiki/
rsync -a --delete --exclude='.gitignore' temp-wiki/ docs/${GLOSSARY_DIR}


# Step 3: Cleanup
# The /temp-wiki directory is not needed anymore
rm -rf temp-wiki/
##############################




##############################
echo "Fetch external glossary content"
##############################
sh  fetchExternalContent/fetchMentalModels/main.sh
##############################



##############################
echo "Fix dashes in filenames coming from Wiki"
##############################
node maintenance/fixDashInWikiCopyFilenames.js
##############################



##############################
# Fix svg's created by OmniGraffle
##############################
echo "Fix svg's created by OmniGraffle"
node maintenance/fixOmnigraffleSvgOutput.js
##############################


# # CURRENTLY MANUALLY RUN 
# ##############################
# echo "Find broken links and create a Github issue"
# ##############################
# - name: Find broken links and create a Github issue
#   run: node maintenance/findBrokenLinks.js
# ##############################



