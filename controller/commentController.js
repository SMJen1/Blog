(function(commentController) {

	var database = require('../data')

	commentController.init = function(app) {

		app.get('/api/:comments', function(req, res) {
			database.getDb(function(err, theDb) {		
				theDb.comments.find().toArray(function(err, results) {
					res.send(results);
				})
			});
		});

		app.post('/api/comment', function(req, res) {
			database.getDb(function(err, theDb) {		
				console.log("Value of " + err)	
				theDb.comments.insert(req.body, function() {
					res.send(req.body);
				});
			});
		});

	}

})(module.exports);