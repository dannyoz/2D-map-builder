var fs = require('fs');
var routes = {};

routes['/api/publish'] = function(req, res){

	var path = req.body.path,
		fileName = req.body.fileName,
		map = JSON.stringify(req.body.map);

	fs.writeFile(path + '/' + fileName + '.json', map, function(err) {
		if(err) {
			res.status(404).send(err);
		}
		res.status(200).send("map published");
	}); 
};

module.exports = routes;
