(function(routeConroller) {

  routeConroller.count = 0;

	routeConroller.init = function(app) {
		app.get('/', function(req, res) {
      routeConroller.count++;
		  res.render('index', {'count': routeConroller.count});
		})

		app.get('/about', function(req, res) {
      routeConroller.count++;
		  res.render('about', { 'count': routeConroller.count });
		})

    app.get('/javascript-what-is-immediately-invokable-function-expressions-iife-singleton-design-pattern', function(req, res) {
      routeConroller.count++;
      res.render('iife', { 'count': routeConroller.count });
    })

    app.get('/copy', function(req, res) {
      routeConroller.count++;
      res.render('copy ', { 'count': routeConroller.count });
    })

    app.get('/javascript-module-pattern-design-singleton', function(req, res) {
      routeConroller.count++;
      res.render('module', { 'count': routeConroller.count });
    })

    app.get('/singleton-design-pattern-javascript-design-pattern-module-pattern', function(req, res) {
      routeConroller.count++;
      res.render('singleton', { 'count': routeConroller.count });
    })

    app.get('/hoisting', function(req, res) {
      routeConroller.count++;
      res.render('hoisting', { 'count': routeConroller.count });
    })

    app.get('/prototype', function(req, res) {
      routeConroller.count++;
      res.render('prototype', { 'count': routeConroller.count });
    })

    app.get('/scopes', function(req, res) {
      routeConroller.count++;
      res.render('scopes', { 'count': routeConroller.count });
    })

    app.get('/objects', function(req, res) {
      routeConroller.count++;
      res.render('objects', { 'count': routeConroller.count });
    })

	};

})(module.exports)
