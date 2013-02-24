Meteor.startup(function() {
	// temporary interface
	$("#ui-save").click(function() {
		alert(JSON.stringify(loadedMap));
	});
	$("#ui-load").click(function() {
		alert("Doesn't work yet. Sorry.");
	});
});