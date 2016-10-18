'use strict';

// To see the logs, run this at a bash prompt:
// heroku logs -ta ft-next-beacon-dashboard | grep S3O

const authS3O = require('s3o-middleware');

const auth = function (req, res, next) {
	res.unVaryAll();
	authS3O(req, res, next);
};

module.exports = auth;
