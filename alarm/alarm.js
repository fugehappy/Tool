'use strict';
define(function(require, exports, module) {
  

	/**
	* Alarm represents one alarm instance. It tracks any mozAlarms it
	* has registered, its IndexedDB ID, and any other properties
	* relating to the alarm's schedule and firing options.
	*/
   

	function Alarm(opts) {
		opts = opts || {};
		var now = new Date();
		var defaults = {
			id: null,
			registeredAlarms: {}, // keys: ('normal' or 'snooze') => mozAlarmID
			// Map of weekdays { "0": true, "1": false, ... }
			// "0" is for Sunday in Gregorian calendar
			repeat: {},
			hour: now.getHours(),
			minute: now.getMinutes(),
			label: '',
			sound: 'ac_awake.opus',
			vibrate: true,
			snooze: 10 // Number of minutes to snooze
		};

		for (var key in defaults) {
			this[key] = (key in opts ? opts[key] : defaults[key]);
		}
	}

	Alarm.prototype = {
		toJSON: function() {
			return {
				id: this.id,
				registeredAlarms: this.registeredAlarms,
				repeat: this.repeat,
				hour: this.hour,
				minute: this.minute,
				label: this.label,
				sound: this.sound,
				vibrate: this.vibrate,
				snooze: this.snooze
			};
		},

		/**
		* An alarm is enabled if and only if it has a registeredAlarm set
		* with a type of 'normal'. To disable an alarm, any
		* registeredAlarms are unregistered with mozAlarms and removed
		* from this.registeredAlarms.
		*/
		isEnabled: function() {
			for (var i in this.registeredAlarms) {
				// Both 'normal' and 'snooze' registered alarms should be
				// treated as enabled, because the alarm will imminently fire.
				if (i === 'normal' || i === 'snooze') {
					return true;
				}
			}
			return false;
		},

		isRepeating: function() {
			for (var key in this.repeat) {
				if (this.repeat[key]) {
					return true;
				}
			}
			return false;
		},

		getNextAlarmFireTime: function(relativeTo) {
			var now = relativeTo || new Date();
			var nextFire = new Date(now.getTime());
			nextFire.setHours(this.hour, this.minute, 0, 0);

			return nextFire;
		},

		getNextSnoozeFireTime: function(relativeTo) {
			var now = relativeTo || new Date();
			return new Date(now.getTime() + this.snooze * 60 * 1000);
		},

		/**
		* Schedule an alarm to ring in the future.
		*
		* @return {Promise}
		* @param {'normal'|'snooze'} type
		*/
		schedule: function() {
			console.log(12333)
		},

		/**
		* Cancel an alarm. If `type` is provided, cancel only that type
		* ('normal' or 'snooze'). Returns a Promise.
		*/
		cancel: function(/* optional */ type) {
		  
		},

		_notifyChanged: function(removed) {
		  
		},

		/**
		* Delete an alarm completely from the database, canceling any
		* pending scheduled mozAlarms.
		*/
		delete: function() {
		  
		},

		/**
		* Returns the next scheduled alarm within the next 24 hours
		* @param {Array} type 'Date'
		* @returns {Object} This is either an empty obj or hour and minute
		*/
		getNextAlarm: function(storeAlarms) {
			var alarmIndex = [],
				nextAlarm = {};

			// remove alarms that have more than 24 hrs
			storeAlarms.forEach( function(val,index) {
				if((val.getTime() - new Date().getTime()) / 36e5 > 24 ) {
					alarmIndex.push(index);
				}
			});

			// remove last index first
			alarmIndex.sort(function(a,b) {
				return b - a;
			});
			alarmIndex.forEach( function(val) {
				storeAlarms.splice(val, 1);
			});

			// sort alarms
			storeAlarms.sort(function(a,b){
				return new Date(a.getTime()) - new Date(b.getTime());
			});

			if(storeAlarms.length > 0) {
				var mins = storeAlarms[0].getMinutes();
				nextAlarm = {
					hour : '' + storeAlarms[0].getHours(),
					minute : mins < 10 ? '0' + mins : '' + mins
				};
			}
			return nextAlarm;
		}

	};

	return new Alarm();

});