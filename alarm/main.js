require([], function (require){
	var db = require('alarm_database');
	var alarm = require('alarm');
	db.withDatabase();
	alarm.schedule();
});