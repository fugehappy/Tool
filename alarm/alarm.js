define(function(require, exports, module) {
	'use strict';

	function Alarm(opts) {
		opts = opts || {};
		var defaults = {

		};
	}

	Alarm.prototype = {
		toJSON: function() {
			
		},

		isEnabled: function() {
			console.log('test Object...');
			return false;
		}
	};

	return Alarm;
});
