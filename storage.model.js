#ifndef _MODEL_STORAGE
#define _MODEL_STORAGE
/**
 * Storage prototype - Interface for setting and getting permanent data
 * uso-app-framework
 */

var ModelStorage = new Class({
	Extends: Model,
	constructor: ModelStorage,
	construct: function() {
		this._dataTypes = JSON.parse( GM_getValue( 'ModelStorageGM/dataTypes', '{}' ) );
	},
	_dataTypes: {},
	get: function( name, defaultValue ) {
		switch ( this._dataTypes[ name ] ) {
			case 'object':
				var ret = JSON.parse( GM_getValue( name, 'null' ) );
				if ( null === ret )
					return defaultValue;
				return ret;
		}
		return GM_getValue( name, defaultValue );
	},
	set: function ( name, value ) {
		this._dataTypes[ name ] = this._getDataType( value );
		GM_setValue( 'ModelStorageGM/dataTypes', JSON.stringify( value ) );
		switch ( this._dataTypes[ name ] ) {
			case 'object':
				value = JSON.stringify( value );
				return GM_setValue( name, value );
		}
		return GM_setValue( name, value );
	},
	_getDataType: function( data ) {
		return typeof data;
	}
});
#endif
