/*
 * MainController prototype - The main controller
 * uso-app-framework
 */

var MainController = new Class({
	dispatch: function( name, args ) {
		if ( 'string' === typeof name ) {
			name = name.replace( /^./, function( $0 ) { return $0.toUpperCase(); } );
			try {
				var instance = eval('Controller' + name + ';');
				instance = new instance();
			} catch ( e ) {
				throw new Error('MainController.prototype.dispatch: prototype `Controller' + name + '` not found');
			}
		} else
			throw new Error('MainController.prototype.dispatch: parameter name was not string.');

		if ( false === args instanceof Array )
			args = [];

		try {
			instance.run.apply( instance, args );
		} catch( e ) {
			throw new Error('MainController.prototype.dispatch: run method not found for `' + name + '`');
		}
	}
});
