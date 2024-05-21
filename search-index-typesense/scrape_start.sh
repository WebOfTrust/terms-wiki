# Import variables from .env file
source .env


# Logger generates a log file with a timestamp and from which file the message comes from.
source ./${SEARCH_INDEX_DIR}/logger.sh


#########################
# TEST IF REQUIRED LIBRARIES ARE INSTALLED
#########################
node "$SCRIPT_DIR/isLibraryInstalled.mjs"
setLogFile "success.log"
log "Testing libraries is finished (check outcome in success.log and error.log)"



#########################
# INITIALIZING
#########################

# Get the directory where the main.sh script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"



#########################
# PREPARING
#########################

# Prepare file system.
source "$SCRIPT_DIR/prepare_file_system.sh"
setLogFile "success.log"
log "Preparing file system finished"

# Copy handmade stuff.
source "$SCRIPT_DIR/copy_manual_files.sh"
setLogFile "success.log"
log "Copying manual files finished"

# Create sitemaps.
source "$SCRIPT_DIR/config/config_sitemaps_create.sh"
setLogFile "success.log"
log "Creating sitemaps finished"

# Remove unwanted urls from the sitemaps (new sitemaps generated or not)
node "$SCRIPT_DIR/removeURLsFromSitemap.mjs"
setLogFile "success.log"
log "Extracting data finished"


# Filenames to lowercase.
node "${SCRIPT_DIR}/renameFilesToLowerCase.mjs" ${SEARCH_INDEX_DIR}/sitemaps
setLogFile "success.log"
log "Renaming files to lowercase finished"

# Fetch external content.
node fetchExternalContent/fetchSingleUrlsFromWotTermsGoogleSheet/fetchSingleUrlsFromWotTermsGoogleSheet.js
setLogFile "success.log"
log "Fetch external content finished"

#########################
# START SCRAPING
#########################

# Scrape the websites.
node "$SCRIPT_DIR/extractData.mjs"
setLogFile "success.log"
log "Extracting data finished"

# Split the content.jsonl file into multiple files so the size is optimal for Typesense.
node "$SCRIPT_DIR/splitContentJSONL.mjs"
setLogFile "success.log"
log "Splitting content finished"

# Count the total number of lines in all .jsonl files and write it to log dir.
node "$SCRIPT_DIR/countLinesInJsonlFiles.mjs"
setLogFile "success.log"
log "Counting number of lines finished"

node "$SCRIPT_DIR/collectScrapedUrls.mjs" "${SEARCH_INDEX_DIR}/${SEARCH_INDEX_ENTRIES_DIR}" "${INDEX_OVERVIEW_FILE}"
setLogFile "success.log"
log "Collecting urls and writing to index file finished"

# Sort and style the index file.
node "$SCRIPT_DIR/sortAndStyleScrapedIndex.mjs" "$INDEX_OVERVIEW_FILE"
setLogFile "success.log"
log "Sorting and styling index file finished"



#########################
# BACKING UP
#########################

# Backup output (scrape results, handmade stuff, sitemaps, logs, webpage overview, typesense export).
source "$SCRIPT_DIR/backup.sh"
setLogFile "success.log"
log "Backup finished"