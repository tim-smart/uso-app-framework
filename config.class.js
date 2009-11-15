#include "storage.model.js"
var Config = new Class({
	construct: function() {
		load.model('storage');
	},
	_settings: {},
	defaultSection: 'default',
	get: function( name, defaultValue, section ) {
		if ( 'string' !== typeof section )
			section = this.defaultSection;

		return model.storage.get( 'config/' + section + '.' + name, defaultValue );
	},
	set: function( name, value, section ) {
		if ( 'string' !== typeof section )
			section = this.defaultSection;

		return model.storage.set( 'config/' + section + '.' + name, value );
	},
	getSettings: function() {
		return this._settings;
	},
	addSetting: function( setting, section ) {
		if ( 'string' !== typeof section )
			section = this.defaultSection;

		this._settings[ section ][ setting.name ] = {
			dataType: 'string' === typeof setting.dataType ? setting.dataType : 'string',
			title: setting.title || setting.name,
			help: setting.help || false
		};
	},
	addSettings: function( settings, section ) {
		for ( var i = 0, il = settings.length; i < il; i++ )
			this.addSetting( settings[ i ], section );
	}
});
