requirejs( [ "jquery", "moment", "getDarkMoonData", "dom" ], function( $, moment, data, dom ) {

	var eleTitle = ".desc-container .desc"
		, eleList = ".date-container .date"
		, today = moment();

	var viewJSON = {
		title: "Next Dark Moon"
		, date: data.date 
		, format: data.format
		, nextDate : ""
	}
	// input: 12 01 2014
	// output: 12 January 2014
	for( var i=0, d; i < viewJSON.date.length ; i++ ) {
		d = moment( viewJSON.date[i], viewJSON.format );
		if( moment().isSame(d, "day") ) {
			viewJSON.title = "Dark Moon Today"
			viewJSON.nextDate = d.format("DD MMMM YYYY");
			break;
		}
		else if( today.isBefore(d) ) {
			viewJSON.nextDate = d.format("DD MMMM YYYY");
			break;
		}
	}
	dom.complete();
	$(eleTitle).append(viewJSON.title)
	$(eleList).append(viewJSON.nextDate);

} );
