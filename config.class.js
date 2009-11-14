#include "storage.model.js"
var Config = new Class({
	construct: function() {
		load.model('storage');
	},
	_settings: {},
	get: function( name, defaultValue ) {
		return model.storage.get( 'config/' + name, defaultValue );
	},
	set: function( name, value ) {
		return model.storage.set( 'config/' + name, value );
	},
	getSettings: function() {
		return this._settings;
	},
	addSetting: function() {}
});
