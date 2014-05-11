requirejs.config( {
	  baseUrl: "/public/script"
	, paths : {
		
		  // lib
		  "requireJS"		: "lib/require"
		, "jquery"			: "lib/jquery-2.1.1"
		, "moment"			: "lib/moment-with-langs.2.6.0"
		, "text"			: "lib/text.2.0.12"
		, "async"			: "lib/async.0.1.2"

		  // database
		, "db"				: "../database"

		  // modules(s)
		, "main"			: "module/main"

		  // controller module(s)
		, "getFullMoonData"	: "module/controller/getFullMoonData"
		, "getDarkMoonData"	: "module/controller/getDarkMoonData"

		  // view module(s)
		, "listFullMoon"	: "module/view/listFullMoon"
		, "listDarkMoon"	: "module/view/listDarkMoon"
		, "getNextFullMoon"	: "module/view/getNextFullMoon"
		, "getNextDarkMoon"	: "module/view/getNextDarkMoon"

		  // util
		, "dom"				: "util/dom"


		
	  }
	, shim: {
		
	  }
	, urlArgs : "bust=" + ( new Date() ).getTime()

} );
