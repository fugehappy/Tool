'use strict';
define(function(require) {

	function AlarmDatabase(dbName, storeName, version) {
		this.dbName = dbName;
		this.storeName = storeName;
		this.version = version;
		
		
		this.withDatabase = function(){
			var _this = this;
			try{
				var request = indexedDB.open(this.dbName, this.version);
				
				request.onupgradeneeded =function(event){
					var db = event.target.result;
					// Ensure the object store exists.
					if (!db.objectStoreNames.contains(this.storeName)) {
						db.createObjectStore(this.storeName, {
							keyPath: 'id',
							autoIncrement: true
						});
					}
				}
				
				request.onerror = function(e) {
					// handle error
					console.log("Database error: " + e.target.errorCode);
				};
				
				request.onsuccess = function(event){
					var db = event.target.result;
					console.log(db);
				};
			}catch (e){}
		};
		
		this.trans = function(db){
			try{
				var transaction = db.transaction(this.storeName, 'readwrite');
				var store = transaction.objectStore(this.storeName);
				var cursor = store.openCursor();
				
				cursor.onsuccess = function(event){
					var cursor = event.target.result;
					if (cursor) {
						store.put(this.normalizeAlarmRecord(cursor.value));
						cursor.continue();
					}
				};

				transaction.oncomplete = function(db){
					
				};
				transaction.onerror = function(event){
					console.log(event.target.errorCode);
				};
			}catch (e){}
		};
		
		this.deleteDatabase = function(dbName) {
			try{
				var deleteDbRequest = indexedDB.deleteDatabase(dbName);
				deleteDbRequest.onsuccess = function (event) {
					// database deleted successfully
				};
				deleteDbRequest.onerror = function (event) {
					console.log("Database error: " + event.target.errorCode);
				};
			}catch (e){}
		};
	}

	// For Clock, we only use one database and store, both named 'alarms'.
	// Right now, we're on version 7.
	return new AlarmDatabase('alarms', 'alarms', 7);
});