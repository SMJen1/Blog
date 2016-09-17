(function(index) {

	var mongodb = require('mongodb');
	var mongoUrl = "mongodb://mayankguptablog:a110cate@ds033116.mlab.com:33116/mayankguptablog";
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
