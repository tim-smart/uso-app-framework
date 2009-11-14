/*
 * Loader prototype - Loads things onto prototypes
 * uso-app-framework
 */

var Loader = new Class({
	constructor: Loader,
	model: function( name ) {
		if ( 'undefined' !== typeof model[ name ] )
			return;

		if ( 'string' === typeof name )
			var modelConstructor = Function( 'return Model' + name.replace( /^./, function( $0 ) { return $0.toUpperCase() } ) + ';' )();
		else
			throw new Error('Loader: Could not load model. `name` was not a string.');

		if ( 'undefined' === typeof modelConstructor )
			throw new Error('Loader: Could not load model ' + name );

		model[ name ] = new modelConstructor();
	}
});
