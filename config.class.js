var Config = new Class({
	_data: {},
	get: function( name, defaultValue ) {
		return storage.get( 'config/' + name, defaultValue );
	},
	set: function( name, value ) {
		return storage.set( 'config/' + name, value );
	}
});
