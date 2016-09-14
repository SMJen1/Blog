(function(commentController) {

	var database = require('../data')

	console.log('Name ' + database.Name)

	commentController.init = function(app) {

		app.get('/api/iife', function(req, res) {
			database.getDb(function(err, theDb) {		
				theDb.iife.find().toArray(function(err, results) {
					results.forEach(function(result) {
						result.date = new Date( parseInt( result._id.toString().substring(0,8), 16 ) * 1000 )
					})
					res.send(results);
				})
	  	});
		});

		app.post('/api/comment', function(req, res) {
			database.getDb(function(err, theDb) {
				theDb.iife.insert(req.body, function() {
					res.send(req.body);
				});
			});
		});

	}

})(module.exports);