(function(routeConroller) {

  routeConroller.count = 0;

	routeConroller.init = function(app) {

		app.get('/', function(req, res) {
      routeConroller.count++;
		  res.render('index', {'count': routeConroller.count});
		});

		app.get('/about', function(req, res) {
      routeConroller.count++;
		  res.render('about', { 'count': routeConroller.count });
		});

    app.get('/iife-immediately-invoked-function-expressions-javascript-singleton-design-pattern-closures', function(req, res) {
      routeConroller.count++;
      res.render('iife', { 'count': routeConroller.count });
    });

    app.get('/copy', function(req, res) {
      routeConroller.count++;
      res.render('copy ', { 'count': routeConroller.count });
    });

    app.get('/javascript-module-pattern-design-singleton', function(req, res) {
      routeConroller.count++;
      res.render('module', { 'count': routeConroller.count });
    });

    app.get('/singleton-design-pattern-javascript-module', function(req, res) {
      routeConroller.count++;
      res.render('singleton', { 'count': routeConroller.count });
    });

    app.get('/function-and-variable-hoisting-javascript-closures', function(req, res) {
      routeConroller.count++;
      res.render('hoisting', { 'count': routeConroller.count });
    });

    app.get('/prototype-pattern-javascript-function-prototype', function(req, res) {
      routeConroller.count++;
      res.render('prototype', { 'count': routeConroller.count });
    });

    app.get('/scopes', function(req, res) {
      routeConroller.count++;
      res.render('scopes', { 'count': routeConroller.count });
    });

    app.get('/create-javascript-object-string-literal-new-keyword-new-object', function(req, res) {
      routeConroller.count++;
      res.render('objects', { 'count': routeConroller.count });
    });

    app.get('/delete-keyword-javascript-properties-object', function(req, res) {
      routeConroller.count++;
      res.render('delete', { 'count': routeConroller.count });
    });

     app.get('/javascript-function-chaining-jquery-chaining', function(req, res) {
      routeConroller.count++;
      res.render('chaining', { 'count': routeConroller.count });
    });

	};

})(module.exports);
