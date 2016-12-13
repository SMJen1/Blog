(function(index) {

	var mongodb = require('mongodb');
	var mongoUrl = "mongodb://learnjavascript:A110c@te@ds133418.mlab.com:33418/learnjavascript";
	var theDb = null;

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
						comments: db.collection('comments'),
					};
					next(null, theDb)
				}
			})
		}
	}
})(module.exports);
