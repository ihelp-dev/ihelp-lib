# iHelp-lib

# If you are or would like to use your personal email, please cd into directory and run:
  git config user.email "Your personal email"
  git config user.name "Your name"


# Development:
  git commit -m "commit message"
  git tag 1.0.0 #Change versions as required
  git push --tag


# Usage
  Add ihelp-lib to dependencies:
   "dependencies": {
      "ihelp-lib": "git+https://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:x-oauth-basic@github.com/ihelp-dev/ihelp-lib.git",
      ....
   }
   //Make sure package-lock.json is reflecting https instead of ssh(there might be multple entries of ihelp-lib in package-lock)

  const ilib = require("ihelp-lib")
  # Work with geoddb
  var client = ilib.InitDefaultConfigGeoTable("TABLE_NAME")
  client.ListTables()

  # Work with google api
  ilib.gapi.getDistanceBetweenLatLong(...)

  # Utilities
  ilib.util.getApi("trymeapi")


