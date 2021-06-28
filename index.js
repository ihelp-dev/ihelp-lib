const geoddb = require("./db/geoddb")
const tableManager = require("./db/config")
const gapi = require('./gapi/gapi')
const util = require("./util/utility")

function InitDefaultConfigGeoTable(TBL_NAME) {
	var config = tableManager(TBL_NAME)
	client = new geoddb(config)
	client.TableExists()
	.then( res => {
		if (res) {
			return Promise.resolve(res)
		} else {
			client.CreateTable(TBL_NAME)
			.then(res => {
				console.log("Table created")
				return Promise.resolve(res)
			}).catch(err => {
				console.log("Error while creating table", err)
			})
		}
	})
	.catch(err => {
		console.log("Unexpected error", err) }
	)
	return client
}

module.exports.geoddb = geoddb
module.exports.gapi = gapi
module.exports.util = util
module.exports.InitDefaultConfigGeoTable = InitDefaultConfigGeoTable