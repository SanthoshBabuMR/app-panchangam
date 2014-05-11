module.exports = function( grunt ) {

	// configure task(s)
	grunt.initConfig( {

		connect: {
		// connect begin
			appServer: {
			// appServer begin
				options: {
					  protocol: "http"
					, hostname: "localhost"
					, port: 6234
					, base: "."
					, keepalive: true
					// uncomment the "middleware" property below, to enable CORS support
					// , middleware:	function (connect, options) {
					// 					return [
					// 						  function (req, res, next) {
					// 							res.setHeader('Access-Control-Allow-Origin', '*');
					// 							res.setHeader('Access-Control-Allow-Methods', '*');
					// 							next();
					// 						  }
					// 						// Serve static files.
					// 						, connect.static(options.base)
					// 						// Make empty directories browsable.
					// 						, connect.directory(options.base)
					// 					];
					// 		    	}
				}
			// appServer end
			}
		// connect end
		}	

	} );

	// load task(s)
	grunt.loadNpmTasks( "grunt-contrib-connect" );

	// register task(s)
	grunt.registerTask( "appServer", "connect:appServer" );

};
