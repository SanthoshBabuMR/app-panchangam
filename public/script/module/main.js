requirejs( [ "jquery", "moment", "getFullMoonData", "getDarkMoonData", "dom" ], function( $, moment, FMData, DMData, dom ) {
	
	var eleTitle = ".desc-container .desc"
		, eleList = ".date-container .date"
		, eleEvent = ".today-event"
		, today = moment()
		, viewJSON = {
			  title: "Today"
			, fullMoonDate : FMData.date
			, darkMoonDate : DMData.date
			, today: moment().format("DD MMMM YYYY")
			, todayEvent: ""
			, format: "DD MM YYYY"
		  };

	// input: 12 01 2014
	// output: 12 January 2014
	for( var i=0, d; i < viewJSON.fullMoonDate.length ; i++ ) {		
		d = moment( viewJSON.fullMoonDate[i], viewJSON.format ).zone("-05:30");;
		if( moment().isSame(d, "day") ) {
			viewJSON.todayEvent = "Events - Full Moon"
			break;
		}
	}
	for( var i=0, d; i < viewJSON.darkMoonDate.length ; i++ ) {
		d = moment( viewJSON.darkMoonDate[i], viewJSON.format );
		if( moment().isSame(d, "day") ) {
			viewJSON.todayEvent = "Events - Dark Moon"
			break;
		}
	}
	
	dom.complete();
	$(eleTitle).append(viewJSON.title)
	$(eleList).append(viewJSON.today);
	$(eleEvent).append(viewJSON.todayEvent);

} );
