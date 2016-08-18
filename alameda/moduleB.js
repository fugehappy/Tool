define(function(require, exports, module) {
	'use strict';

	function B(opts) {
		this.opts = opts || {};
	}

	B.prototype = {
		log: function() {
			console.log('test Object...');
			return false;
		}
	};

	return B;
});
