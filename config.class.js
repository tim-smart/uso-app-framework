#include "storage.model.js"
var Config = new Class({
	construct: function() {
		load.model('storage');
	},
	_data: {},
	get: function( name, defaultValue ) {
		return model.storage.get( 'config/' + name, defaultValue );
	},
	set: function( name, value ) {
		return model.storage.set( 'config/' + name, value );
	}
});
