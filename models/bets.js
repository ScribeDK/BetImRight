var orm = require('../config/orm.js');

var bets = {
	selectAll: function(callback) {
		orm.selectAll('users', function(res){
			callback(res);
		});
	},
	insertOne:  function(cols, vals, callback) {
		orm.insertOne('users', cols, vals, function(res){
			callback(res);
		});
	},
	update: function(objColVals, condition, callback) {
		orm.updateOne('users', objColVals, condition, function(res){
			callback(res);
		});
	},
	userAuth: function(table, callback) {
		orm.userAuth(table, function(res){
			callback(res);
		});
	}
};

module.exports = bets;