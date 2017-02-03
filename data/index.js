(function(index) {

	var mongodb = require('mongodb');
	var mongoUrl = "mongodb://learnjavascript:A110cate@ds133418.mlab.com:33418/learnjavascript";
	var theDb = null;

	index.getDb = function(next) {
		if (theDb) {
			next(null, theDb)
		}
		else {
			console.log("Call DataBase");
			mongodb.MongoClient.connect(mongoUrl, function(err, db) {
				console.log("Call DataBase Success");
				if(err) {
					next(err, null)
					console.log("Error");
				}
				else {
					console.log("Data");
					theDb = {
						db: db,
						comments: db.collection('comments'),
					};

					console.log("req.body");
					next(null, theDb)
				}
			})
		}
	}
})(module.exports);
