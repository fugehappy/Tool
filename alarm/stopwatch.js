define(function(require, exports, module) {
	'use strict';

	function Stopwatch(opts) {
		opts = opts || {};
		var defaults = {

		};
	}

	Stopwatch.prototype = {
		toJSON: function() {
			
		},

		isEnabled: function() {
			console.log('test module');
			return false;
		}
	};

	module.exports = Stopwatch;
});
