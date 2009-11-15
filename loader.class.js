/*
 * Loader prototype - Loads things onto prototypes
 * uso-app-framework
 */

var Loader = new Class({
	constructor: Loader,
	model: function( name ) {
		if ( 'undefined' !== typeof model[ name ] )
			return;

		if ( 'string' === typeof name ) {
			try {
				var instance = eval( 'Model' + name.replace( /^./, function( $0 ) { return $0.toUpperCase() } ) + ';' );
				instance = new instance();
			} catch ( error ) {
				throw new Error( 'Loader: Could not load model ' + name );
			}
		} else
			throw new Error('Loader: Could not load model. `name` was not a string.');

		model[ name ] = instance;
		instance = null;
	}
});
