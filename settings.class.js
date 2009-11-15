/*
 * Settings prototype: For managing script settings
 */

var Settings = new Class({
	construct: function() {
		this.load();
	},
	_settings: {},
	_data: {},
	defaultSection: 'default',
	get: function( name, section ) {
		if ( 'string' !== typeof section )
			section = this.defaultSection;

		var ret = this._data[ section ][ name ];
		return 'undefined' !== typeof ret ? ret : this._settings[ section ][ name ].defaultValue;
	},
	set: function( name, value, section ) {
		if ( 'string' !== typeof section )
			section = this.defaultSection;

		return this._data[ section ][ name ] = value;
	},
	load: function() {
		return this._data = storage.get( 'settings', ({}) );
	},
	save: function() {
		return storage.set( 'settings', this._data );
	},
	get settings() {
		return this._settings;
	},
	addSetting: function( setting, section ) {
		if ( 'string' !== typeof section )
			section = this.defaultSection;

		this._settings[ section ][ setting.name ] = {
			type: 'string' === typeof setting.dataType ? setting.dataType : 'text',
			title: setting.title || setting.name,
			help: setting.help || false,
			defaultValue: 'undefined' !== typeof settings.defaultValue ? setting.defaultValue : null
		};
	},
	addSettings: function( settings, section ) {
		for ( key in settings ) {
			settings[ key ]['name'] = key;
			this.addSetting( settings[ key ], section );
		}
	}
});
