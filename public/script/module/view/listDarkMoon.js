requirejs( [ "jquery", "moment", "getDarkMoonData", "dom" ], function( $, moment, data, dom ) {

	var eleTitle = ".desc-container .desc"
		, eleList = ".list-container .list"
		, temp = ""
		, today = moment();

	var viewJSON = {
		title: data.title
		, date: data.date 
		, format: data.format
	}
	// input: 12 01 2014
	// output: 12 January 2014
	temp = "";
	for( var i=0, d; i < viewJSON.date.length ; i++ ) {
		d = moment( viewJSON.date[i], viewJSON.format );
		temp += "<li";
		temp +=  d.isBefore(today, "day") ?  " class=\"past\">" : d.isSame( today, "day" ) ? " class=\"present\">" : ">"
		temp +=  d.format("DD MMMM YYYY");
		temp += "</li>";
	}
	dom.complete();
	$(eleTitle).append(viewJSON.title)
	$(eleList).append(temp);

} );
