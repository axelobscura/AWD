var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

// Authentication and Authorization Middleware
function ensureAuthenticated(req, res, next){
	if(req.session && req.session.user === "amy" && req.session.admin){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
