define(function(require, exports, module) {
	'use strict';

	function S(opts) {
		this.opts = opts || {};
	}

	S.prototype = {
		log: function() {
			console.log('test module');
			return false;
		}
	};

	module.exports = S;
});
