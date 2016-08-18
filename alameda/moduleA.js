'use strict';
define(function(require) {

	function A(name, ver) {
		this.name = name;
		this.ver = ver || 1;

		this.logName =function(){
			console.log('name:' +this.name);
		}
		
	}
	
	A.prototype = {
		logVer:function(){
			console.log('version:' +this.ver);
		}

	}
	
	return new A('alarms', 7);
});