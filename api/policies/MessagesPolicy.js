module.exports = function (req, res, next) {
	if (req.session.user) {
		if(req.target.action=="create"){
			req.body.uid = req.session.user.id;
			req.body.uname = req.session.user.uname;
		}
		next();
	} else {
		res.send("You Must Be Logged In", 403);
	}
};
