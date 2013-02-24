Meteor.startup(function() {
	var canvas = document.getElementById('isocanvas');
	var cv = canvas.getContext('2d');
	
	var mapWidth = 24;
	var mapHeight = 24;
	
	// map stuff
	var loadedMapName = "";
	var loadedMap = [];
	
	var tileHeight = 150;
	var tileWidth = 150;
	var tileDepth = tileHeight / 2;
	
	// resources
	var resourceDir = "/resources/";
	var resourceCache = [] // cache of resources
	
	// panning & zooming
	var pan = 0;
	var tilt = 0;
	var zoom = 2;
	
	// debug shit
	var debugMode = true; // show console output (laggy)
	
	// use the full screen
	cv.canvas.width = window.innerWidth;
	cv.canvas.height = window.innerHeight;
	 
	function drawTile(x, y, tileResource, level) {
		// takes X, Y parameters and draws the tile isometrically
		tileWidth = tileWidth;
		tileHeight = tileHeight;
		tileDepth = tileDepth;


		// multiple levels!!!
		level == level || 0;
		
		var multX = (x * tileWidth / 2 - (tileWidth / 2 * y)) + pan;
		var multY = (y * tileDepth  / 2 + (x * tileDepth / 2)) - (level * tileHeight / 2) + tilt;

		if(tileResource) {
			// do we have a resource for this tile? (i.e., a number that we can look up)
			

			// console.log('L:', level, 'X:', x, 'Y:', y, 'got data ', resources[tileResource], ' for resource ' +  tileResource);
			
			var tileConfig = resources[tileResource].tile;
			
			if (tileConfig.image) {
				// rendering an image for this block or tile or whatever it is..
				if(resourceCache[tileResource]) {
					//console.log('Resource #' + tileResource + ' is already loaded');
					cv.drawImage(resourceCache[tileResource], multX, multY); 	
				} else {
				//	console.log('Loading resource #' + tileResource + ' for the first time');
					var image = new Image();
					image.onload = function() {
						resourceCache[tileResource] = image;
						setTimeout(function() { redraw() }, 100);	
					}
					image.src = resourceDir + tileResource + '.png';
					
				}	
			} else if(tileConfig.fill || tileConfig.stroke) {
				// we're doing a basic filled cube
				cv.fillStyle = tileConfig.fill;
				cv.strokeStyle = tileConfig.stroke || 'rgba(0,0,0, 0.2)';
				// TOP
				cv.beginPath();
				
				// line 1
				cv.moveTo(multX, multY + tileDepth / 2);
				cv.lineTo(multX + (tileWidth / 2), multY + tileDepth);
				
				// line 2
				cv.lineTo(multX + tileWidth, multY + tileDepth / 2);
				
				// line 3
				cv.lineTo(multX + tileWidth / 2, multY + 0);
				
				// line 4
				cv.lineTo(multX, multY + tileDepth / 2);
				
				cv.closePath();
				cv.stroke()
				cv.fill();

				
				
			} else {
				// who the fuck knows
				return false;
			}
		} else {
			return false;
		}
	
		
		
		// debug - draw x/y coords on tile
		cv.fillStyle = 'white';
		var subtract = cv.measureText(x + ',' + y + ',' + level).width;
		//cv.fillText(x + ',' + y + ',' + level, multX + (tileWidth / 2) - subtract / 2, multY + (tileDepth / 2));
	}
	

	
	function clearCanvas() {
		cv.fillStyle = 'rgb(150,220,250)';
		cv.fillRect(0,0, canvas.width, canvas.height);
		cv.restore();
	}

	
	window.redraw = function() {
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;
		
		clearCanvas();
		
		
		parseMap(loadedMap);
		showNotificationIfNeeded(); // notify.js
	}
	
	function parseMap(mapdata, mapname) {
		// parses a layered map
		var currentLevel = 0;
		
		// TODO: include a flag for this
		
		// create bottommost layer
		/*for(x=0;x<32;x++) {
			for(y=0;y<32;y++) {
				var tileSettings = {};
				tileSettings.x = x;
				tileSettings.y = y;
				tileSettings.resource = 4; // base tile type

				drawTile(tileSettings, -1);
			}
		}*/
		
		$.each(mapdata, function(layers, map) {
			$.each(map, function(column, tiles) {
				// console.log('COLUMN ' + column, tiles);
				$.each(tiles, function(index, resource) { 
					var tileSettings = {};
					tileSettings.x = column;
					tileSettings.y = index;
					
					// console.log('drawing tile of resource ' + resource + ' at ' + column, index);
					drawTile(column, index, resource, currentLevel);
				});
			});
			currentLevel++;
		});
		
		// set the currently loaded map
		loadedMap = mapdata;
		loadedMapName = mapname;
		
		if (loadedMapName) {
			notify("Loaded map '" + loadedMapName + "'!"); 
		}
	}
	
	window.loadMap = parseMap;
	
	// draw the initial map
	redraw(0,0);
	
	// handle dragging & zooming on the map (from http://jsfiddle.net/W7tvD/)
	var lastX;
	var lastY;
	var lastZoom;
	var mousedown = false;
	$(canvas).mousedown(function(e) {
		if(e.which == 3) {
			mousedown = true;
			lastX = 0;
			lastY = 0;		
		}
	}).mouseup(function(e) {
		mousedown = false;
	});
	
	$(canvas).mousemove(function(e) {
		if(mousedown && e.which == 3) {	
			// console.log(e);
			var X, Y;
			X = e.pageX;
			Y = e.pageY;
			if (!lastX || ! lastY) {
				lastX = X;
				lastY = Y;
			}
			
			pan = pan - (lastX - X);
			tilt = tilt - (lastY - Y);
			
			lastX = X;
			lastY = Y;
			
			// console.log('pan: ' + pan + ' tilt: ' + tilt);	
			
			//redraw with pan/tilt
			redraw();		
		}
	});
	
	if(!debugMode) {
		console = { log: function() { return false } }
	}
	
	// fuck off context menu! :L
	window.oncontextmenu = function() { return false };
	
	// focus!
	canvas.focus();
	
	// check the hash and load the map if available
	if(window.location.hash) {
		var map = window.location.hash.substring(1).split(':')[2]; // such shit code
		var type = window.location.hash.substring(1).split(':')[1];
		
		if(type == 'local' && _.has(testMaps, map)) {
			parseMap(testMaps[map], map);
		} else if(type == 'inline') {
			parseMap(map, 'inline map');
		} else {
			alert("No such map! (Or you're trying to load an unsupported map.");
		}
	} else {
		alert("No map selected. Type maps() in the console for a list.");
	}
});
