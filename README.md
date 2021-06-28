# iHelp-lib

# If you are or would like to use your personal email, please cd into directory and run:
  git config user.email "Your personal email"
  git config user.name "Your name"


# Development:
  git commit -m "commit message"
  git tag 1.0.0 #Change versions as required
  git push --tag


# Usage 
  npm install -S ihelp-dev/ihelp-lib #Should create entry "ihelp-lib": "github:ihelp-dev/ihelp-lib"
  var ilib = require("ihelp-lib")

# Api
  # Work with geoddb
  ilib.InitDefaultConfigGeoTable("TABLE_NAME")
  .then()


