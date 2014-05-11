define( [ "jquery" ], function( $ ) {

	var classProgress = "progress";
	var classLoadIcon = "load-icon";
	var domAttach = "doc-wrap";

	var progress = function() {
		var p = $( "<div/>" )
			, i = $( "<span/>" );

		p.addClass( classProgress );
		i.addClass( classLoadIcon );
		i.append( "..." );
		p.append( i );
		$ ( "." + domAttach ).append( p );
	};

	var complete = function() {
		$("." + classProgress).remove();
	};

	return {
		  progress: progress
		, complete: complete 
	}
	
} );