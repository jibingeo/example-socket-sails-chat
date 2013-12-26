/**
 * Users
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
    uname: {
      type: 'string',
      required: true
    },
    
	passwd: {
      type: 'string',
      required: true
    }
  }

};
