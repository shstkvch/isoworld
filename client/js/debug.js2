Meteor.startup(function() {
	// add debug functions to window
	window.map = function(map) {
		if(arguments.length == 0) {
			console.log("USAGE: map('mapname') to load a map. For available maps, use maps();");
			return false;
		}
		loadMap(testMaps[map], map);
		redraw();
	}
	window.maps = function() {
		console.log("The following test maps are available: ");
		$.each(testMaps, function(name, map) {
			console.log(" * " + name);
		});
	}
});