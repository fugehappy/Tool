'use strict';
require([], function (require){
	//判断对象是否存在
	console.log(typeof Promise);
	
	//ES6(ECMAScript 6)
	if(typeof Promise !='undefined'){
		var promise = new Promise(function (resolve, reject){
			resolve("200");
			reject("404");
		}).then(function (result) {
			console.log(result);
		}).catch(function (reason) {
			console.log(reason);
		});
	}
	
	//不同的模块对外接口
	var a = require('moduleA');
	a.logName();
	a.logVer();
	
	
	var B = require('moduleB');
	var b = new B();
	b.log();
	
	
	var S = require('moduleS');
	var s = new S();		
	s.log();		
});