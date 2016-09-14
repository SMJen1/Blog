(function(controller) {

	var routeController = require("./routeController");
	var commentController = require('./commentController');

	controller.init = function(app) {
		routeController.init(app);
		commentController.init(app);
	};

})(module.exports)
