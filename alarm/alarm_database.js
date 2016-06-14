'use strict';
define(function(require) {

	function AlarmDatabase(dbName, storeName, version) {
		this.dbName = dbName;
		this.storeName = storeName;
		this.version = version || 1;
		this.db = null;
		
		this.withDatabase =function(){
			console.log('data');
		}
		
	}
	
	AlarmDatabase.prototype = {
		withStoreRequest:function(){
			console.log('store');
		}

	}
	

	// For Clock, we only use one database and store, both named 'alarms'.
	// Right now, we're on version 7.
	return new AlarmDatabase('alarms', 'alarms', 7);
});