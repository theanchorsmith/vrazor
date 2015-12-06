 define([
	'zepto',
	'chic'
], function ($, chic) {

	'use strict';

	var views = {},
		View,
		ChicClass,
		events = {};

	// create unique IDs for elements without id
	var UID = Date.now();
	var uniqueId = function () {
		return (UID++).toString(36);
	};

	ChicClass = chic.Class;

	$.fn.initViews = function () {

		var elements,
			i;

		elements = this.find('[data-view]');

		for(i = 0; i < elements.length; i++){

			var	dataView = elements[i].getAttribute('data-view'),
				options = JSON.parse(elements[i].getAttribute('data-options')),
				ids = dataView.split(' '),
				ii;

			for(ii = 0; ii < ids.length; ii++){

				var id = ids[ii];

				if (!views[id]) {
					console.error('invalid view: ', id);
					return;
				}

				new views[id](elements[i], options);

			}
		}
	}


	View = ChicClass.extend({

		className: '',
		fullClassName: '',

		events: {},

		state:{},

		options: {
			id: ''
		},

		init: function (el, options) {

			// store a reference to the view element
			this.$el = $(el);

			this.options =  $.extend({}, this.options, options);

			// create a unique ID
			this.id = this.options.id || this.$el[0].getAttribute('id') || uniqueId();

		}
	});

	return {

		// view factory
		create: function () {

			var Super,
				id,
				Class,
				SuperClass,
				implementation;

			// detect number of parameters
			if (arguments.length < 3) {
				Super = View; // by default use View class is used as base Class
				id = arguments[0];
				implementation = arguments[1];
			} else {
				Super = arguments[0];
				id = arguments[1];
				implementation = arguments[2];
			}

			// get super class
			SuperClass = typeof Super == 'string' ? views[Super] : Super;

			// create view class by extending super class & add
			Class = SuperClass.extend(implementation);

			if (!SuperClass) {
				console.error('super class not found', Super);
				return;
			}

			// make id acccesible for instances
			Class.prototype.className = id;
			Class.prototype.fullClassName = (SuperClass.prototype.fullClassName && SuperClass.prototype.fullClassName + '.') + id;

			// merge options with super options
			Class.prototype.options = $.extend({}, SuperClass.prototype.options, implementation.options);

			views[Class.prototype.fullClassName] = Class;

			return Class;

		}

	}

});