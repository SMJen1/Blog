(function(routeConroller) {

	routeConroller.init = function(app) {
		app.get('/', function(req, res) {
		  res.render('layout', {});
		})

		app.get('/:name', function(req, res) {
		  res.render('layout', {});
		})

		app.get('/index/index.vash', function(req, res) {
		  res.render('index/index.vash', {});
		});

		app.get('/index/new.vash', function(req, res) {
		  res.render('index/new.vash', {});
		});
	};

})(module.exports)