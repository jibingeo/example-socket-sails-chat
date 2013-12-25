/**
 * UsersController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UsersController)
   */
  	_config: {},
  	login:function(req, res) {
	  	var uname = req.param("uname");
		var passwd = req.param("passwd");
		if(uname&&passwd)
			Users.findOneByUname(uname).done(function(err, usr) {
				if (err) {
					res.send(500, { error: "DB Error" });
				} else if(usr) {
					if(passwd==usr.passwd) {
						req.session.user = usr;
						res.send(usr);
					}
					else
						res.send(404, { error: "Password doesn't match" });
				}
				else
					res.send(404, { error: "User not found" });
			});
		else
			res.send(400, { error: "field missing" });
  	},
  	signup:function(req, res) {
	  	var uname = req.param("uname");
		var passwd = req.param("passwd");
		if(uname)
			Users.findOneByUname(uname).done(function(err, usr) {
				if (err) {
					res.send(500, { error: "DB Error" });
				} else if (usr) {
					res.send(400, {error: "Username already Taken"});
				} else {
					Users.create({uname: uname, passwd: passwd}).done(function(error, user) {
					if (error) {
						res.send(500, {error: "DB Error"});
					} else {
						req.session.user = user;
						res.send(user);
					}
				});
				}
			});
		else
			res.send(404, { error: "User not found" });
  	},
  	logout:function(req,res) {
  		delete req.session.user;
  		res.send();
  	}
};
