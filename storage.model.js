#ifndef _MODEL_STORAGE
#define _MODEL_STORAGE
/**
 * Storage prototype - Interface for setting and getting permanent data
 * uso-app-framework
 */

var ModelStorage = new Class({
	Extends: Model,
	constructor: ModelStorage,
	get: function( name, defaultValue ) {
		try {
			var ret = JSON.parse( GM_getValue( name, 'null' ) );
		} catch ( error ) {
			throw new Error( 'ModelStorage.prototype.get: Could not parse value. ' + error.toString() );
		}

		if ( null === ret )
			ret = defaultValue;
		return ret;
	},
	set: function ( name, value ) {
		try {
			return GM_setValue( name, JSON.stringify( value ) );
		} catch ( error ) {
			throw new Error( 'ModelStorage.prototype.set: Could not set value. ' + error.toString() );
		}
	}
});
#endif
