define([
	'zepto',
	'views/View'
], function ($, View) {

	'use strict';

	return View.create('Widget', {

		disable: function () {
			this.$el.off('.' + this.id);
            console.log( 'Widget Disable');
		}

	});

});