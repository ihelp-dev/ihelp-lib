var geoddb = require("./db/geoddb")
var tableManager = require("./db/config")


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


module.exports = {
	geoddb: require('./db/geoddb'),
	gapi: require('./gapi/gapi')
}
module.exports.geoddb = this.geoddb
module.exports.gapi = this.gapi
module.exports.InitDefaultConfigGeoTable = InitDefaultConfigGeoTable