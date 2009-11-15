#ifndef _CLASS_DOMHELPER
#define _CLASS_DOMHELPER
/*
 * DomHelper prototype: Helps to build UI
 */

var DomHelper = new Class({
	constructor: DomHelper,
	domFromObject: function( data, base ) {
		var base = base || document.createDocumentFragment();

		for ( var i = 0, focus, element, key, _key; focus = data[ i++ ]; ) {
			if ( 'string' === typeof focus ) {
				element = document.createElement( focus );
				base.appendChild( element );
			} else {
				element = document.createElement( focus.tagName );

				if ( 'object' === typeof focus.attributes )
					for ( key in focus.attributes )
						element.setAttribute( key , focus.attributes[ key ] );

				if ( 'object' === typeof focus.properties )
					for ( key in focus.properties ) {
						// We will only go 1 deep for now
						if ( 'object' === typeof focus.properties[ key ] ) {
							if ( 'undefined' === typeof element[ key ] )
								element[ key ] = {};

							for ( _key in focus.properties[ key ] )
								element[ key ][ _key ] = focus.properties[ key ][ _key ];
						} else
							element[ key ] = focus.properties[ key ];
					}

				if ( focus.eventListeners instanceof Array )
					for ( var j = 0; key = focus.eventListeners[ j++ ]; )
						element.addEventListener.apply( element, key );

				if ( 'object' === typeof focus.children )
					this.domFromObject( focus.children, element );

				base.appendChild( element );
			}
		}

		return base;
	}
});
#endif
