/**
 * Messages
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    uid: {
      type: 'integer',
      required: true
    },
    uname:{
    	type: 'string',
		required: true
    },
    message: {
      type: 'string',
      required: true,
      defaultsTo:""
    }
  }

};
