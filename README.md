# iHelp-lib

# If you are or would like to use your personal email, please cd into directory and run:
  git config user.email "Your personal email"
  git config user.name "Your name"


# Development:
  git commit -m "commit message"
  git tag 1.0.0 #Change versions as required
  git push --tag


# Usage 
  npm install github:ihelp-dev/ihelp-lib #Should create entry "ihelp-lib": "github:ihelp-dev/ihelp-lib"
  
  const ilib = require("ihelp-lib")
  # Work with geoddb
  var client = ilib.InitDefaultConfigGeoTable("TABLE_NAME")
  client.ListTables()

  # Work with google api
  ilib.gapi.getDistanceBetweenLatLong(...)

  # Utilities
  ilib.util.getApi("trymeapi")


