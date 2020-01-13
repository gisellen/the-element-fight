require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}

	var $ = require("jquery")(window);
});
import $ from "jquery";
$(function(){
    $("button1").removeAttr("style").hide(),fadeIn();
})