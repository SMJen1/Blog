(function(index) {

	var mongodb = require('mongodb');
	var mongoUrl = "mongodb://localhost:27017/Comments";
	var theDb = null;

	index.Name = "Mayank";

	index.getDb = function(next) {
		if (theDb) {
			next(null, theDb)
		}
		else {
			mongodb.MongoClient.connect(mongoUrl, function(err, db) {
				if(err) {
					next(err, null)
				}
				else {
					theDb = {
						db: db,
						users: db.collection('users'),
						iife: db.collection('iife')
					};
					next(null, theDb)
				}
			})
		}
	}
})(module.exports);
