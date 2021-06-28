var geoddb = require("./db/geoddb")
var tableManager = require("./db/config")


async function InitDefaultConfigGeoTable(TBL_NAME) {
	var config = tableManager(TBL_NAME)
	client = new geoddb(config)
	if (!(await client.TableExists())) {
		console.log('Table doesnt exist creating new table')
		await client.CreateTable()
	} else {
		console.log('Table already exist')
	}
	return client
}

InitDefaultConfigGeoTable("TST1")
module.exports = {
	geoddb: require('./db/geoddb'),
	gapi: require('./gapi/gapi')
}
module.exports.geoddb = this.geoddb
module.exports.gapi = this.gapi
console.log(module)