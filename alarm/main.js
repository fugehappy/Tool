'use strict';
require([], function (require){
	var date = new Date();
	console.log(date);
	console.log(typeof Goods);
	console.log(typeof Promise);
	console.log(typeof CustomEvent);
	
	//ES6(ECMAScript 6)
	if(typeof Promise !='undefined'){
		var promise = new Promise(function (resolve, reject){
			//resolve("200");
			reject("404");
		}).then(function (result) {
			console.log(result);
		}).catch(function (reason) {
			console.log(reason);
		});
	}
	
	
	var db = require('alarm_database');
	var stopwatch = require('stopwatch');
	var s = new stopwatch();

	var Alarm = require('alarm');
	var alarm = new Alarm();
	

	db.withDatabase();
	db.withStoreRequest();
	alarm.isEnabled();
	s.isEnabled();
	
	
	var btn = document.getElementById('btn');
	
	btn.onclick = function(){
		var data = document.getElementById('enter').value;
		if(trim(data)==='')return false;
		
		//stored data
		console.log(123);
	}	
});