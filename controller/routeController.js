(function(routeConroller) {

	routeConroller.init = function(app) {
		app.get('/', function(req, res) {
		  res.render('index', {});
		})

		app.get('/about', function(req, res) {
		  res.render('about', {});
		})

    app.get('/iife', function(req, res) {
      res.render('iife', {});
    })

    app.get('/module', function(req, res) {
      res.render('module', {});
    })

    app.get('/singleton', function(req, res) {
      res.render('singleton', {});
    })

    app.get('/hoisting', function(req, res) {
      res.render('hoisting', {});
    })

    app.get('/prototype', function(req, res) {
      res.render('prototype', {});
    })

    app.get('/scopes', function(req, res) {
      res.render('scopes', {});
    })

    app.get('/objects', function(req, res) {
      res.render('objects', {});
    })

	};

})(module.exports)
