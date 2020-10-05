module.exports = {
	"development": {
		"username": null,
		"password": null,
		"database": "weblog",
		"host": "localhost",
		"dialect": "sqlite",
		"storage": "./weblog-db.sqlite"
	},
	"test": {
		"username": "root",
		"password": null,
		"database": "database_test",
		"host": "127.0.0.1",
		"dialect": "mysql"
	},
	"production": {
		"username": "root",
		"password": null,
		"database": "database_production",
		"host": "127.0.0.1",
		"dialect": "mysql"
	}
}
