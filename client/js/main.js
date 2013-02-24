Meteor.startup(function() {
  var canvas = document.getElementById('isocanvas');
  var cv = canvas.getContext('2d');

  var mapWidth = 24;
  var mapHeight = 24;

  // map stuff
  loadedMapName = "";
  loadedMap = [];


  
	
  // resources
  var resourceDir = "/resources/";
  var resourceCache = [] // cache of resources
  // panning & zooming
  var pan  = 630;
  var tilt = 125;
	var zoom = 25;
	var zoomunit = 1;

  // debug shit
  var debugMode = false; // show console output (laggy)
  var debugOverlay = true;
  var tileLabels = false; // show debug info on tiles
  
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
    var multY = (y * tileDepth / 2 + (x * tileDepth / 2)) - (level * tileHeight / 2) + tilt;

    // debug
    var debugText = ""; // additional text to draw on the tile for debugging
    if (tileResource) {
      // do we have a resource for this tile? (i.e., a number that we can look up)
      // console.log('PAN:', pan, 'TILT:', tilt, 'L:', level, 'X:', x, 'Y:', y, 'got data ', resources[tileResource], ' for resource ' +  tileResource);
      var tileConfig = resources[tileResource].tile;
      if (tileConfig.special) {
        console.log('** SPECIAL TILE **', tileConfig);
        // check for special cases
        $.each(tileConfig.special, function(specialProperty, value) {
          switch (specialProperty) {
          case 'ifLastInRowOrColumn':
          case 'ifLastInRow':
          case 'ifLastInColumn':
            // if this tile is the last in a series of the same tile	
            if (!value) {
              break;
            }
            var isLastInRow = false;
            var isLastInColumn = false;

            // simple check - if this tile's X position is the same as the
            // length of the row, it's the last one
            if (loadedMap[level].length - 1 == x) {
              isLastInRow = true;
            }

            // if the next tile in the column is 0, this is the last one in the 
            // row
            if (loadedMap[level][x + 1]) {
              if (loadedMap[level][x + 1][y] == 0) {
                isLastInRow = true;
              }
            }

            // if this tile's Y position is the same as the length of the col,
            // it's the last one in the column
            console.log(loadedMap[level]);
            if (loadedMap[level][x].length - 1 == y) {
              isLastInColumn = true;
            }

            // if the next tile in the row is 0, this is the last one in the row
            if (loadedMap[level][x][y + 1] == 0) {
              isLastInColumn = true;
            }

            if (isLastInRow) {
              console.log("x:", x, "y:", y, "level:", level, 'is the LAST IN THE ROW');
              debugText = 'last in row';
            } else if (isLastInColumn) {
              console.log("x:", x, "y:", y, "level:", level, 'is the LAST IN THE COLUMN');
              debugText = 'last in col';
            }
            console.log(loadedMap);
            //console.log('next one up is', nextOneUp);
            // check if this tile is the last in the row
            // console.log("x:", x, "y:", y, "level:", level, "type:", resources[tileResource].name);
            break;
          }
        });

      }
      if (tileConfig.image) {
        // rendering an image for this block or tile or whatever it is..
        if (resourceCache[tileConfig.image]) {
          //console.log('Resource #' + tileResource + ' is already loaded');
					cv.drawImage(resourceCache[tileConfig.image], multX, multY, tileWidth, tileHeight); 	
        } else {
          //	console.log('Loading resource #' + tileResource + ' for the first time');
          var image = new Image();
          image.onload = function() {
            resourceCache[tileConfig.image] = image;
            setTimeout(function() {
              redraw()
            }, 100);
          }
          image.src = resourceDir + tileConfig.image + '.png';

        }
      } else if (tileConfig.fill || tileConfig.stroke) {
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

    if (tileLabels) {
      // debug - draw x/y coords and other info on tiles
      cv.fillStyle = 'white';
      var xyz = x + ',' + y + ',' + level;
      var type = resources[tileResource].name + " (#" + tileResource + ")";
      var debugText = debugText || "";

      cv.fillText(xyz, multX + (tileWidth / 2) - cv.measureText(xyz).width / 2, multY + (tileDepth / 2));
      cv.fillText(type, multX + (tileWidth / 2) - cv.measureText(type).width / 2, multY + (tileDepth / 2) - 12);
      cv.fillStyle = 'yellow';
      cv.fillText(debugText, multX + (tileWidth / 2) - cv.measureText(type).width / 2, multY + (tileDepth / 2) + 12);
    }
    
    if (debugOverlay) {
      cv.fillStyle = 'white';
      cv.font = '12px monospace';
      cv.fillText("Pan:  " + pan, 10, 15);
      cv.fillText("Tilt: " + tilt, 10, 30);
      cv.fillText("Zoom: " + zoom, 10, 45);
    }
  }



  function clearCanvas() {
    cv.fillStyle = 'rgb(150,220,250)';
    cv.fillRect(0, 0, canvas.width, canvas.height);
    cv.restore();
  }


  window.redraw = function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    tileHeight = 150 * zoom / 100;
	  tileWidth = 150 * zoom / 100;
	  tileDepth = tileHeight / 2;
	  
    clearCanvas();

    drawGrid();
    parseMap(loadedMap);
    showNotificationIfNeeded(); // notify.js
  }

  function parseMap(mapdata, mapname) {
    // parses a layered map
    var currentLevel = 0;

    // set the currently loaded map
    loadedMap = mapdata;
    loadedMapName = mapname //|| "Untitled Map";

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
          drawTile(column, index, resource, currentLevel);
        });
      });
      currentLevel++;
    });



    if (loadedMapName) {
      notify("Loaded map '" + loadedMapName + "'!");
    }
  }

  function drawGrid() {
    for (w = 0; w < mapWidth; w++) {
      for (h = 0; h < mapHeight; h++) {
        drawTile(w, h, 4, -1);
      }
    }
  }

  window.loadMap = parseMap;

  // draw the initial map
  redraw(0, 0);

	// handle dragging on the map (from http://jsfiddle.net/W7tvD/)
  var lastX;
  var lastY;
  var mousedown = false;
  $(canvas).mousedown(function(e) {
    if (e.which == 3) {
      mousedown = true;
      lastX = 0;
      lastY = 0;
    }
  }).mouseup(function(e) {
    mousedown = false;
  });

  $(canvas).mousemove(function(e) {
    if (mousedown && e.which == 3) {
      // console.log(e);
      var X, Y;
      X = e.pageX;
      Y = e.pageY;
      if (!lastX || !lastY) {
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
	
	$(canvas).mousewheel(function (e, delta) {
    e.preventDefault();
    var oldzoom = zoom;
    if (delta > 0){
	    zoom += zoomunit * Math.sqrt(zoom);
		} else if (delta < 0) {
			zoom -= zoomunit * Math.sqrt(zoom);
		}
		
		zoom = Math.round(zoom)
		if (zoom < 1) {
		  zoom = 1;
		}
		if (zoom > 100) {
		  zoom = 100;
		}
	  
	  var diff = oldzoom - zoom;
	  pan  = pan + diff * 2;
  	tilt = tilt + diff * 2;
		
		redraw();
  });

  if (!debugMode) {
    console = {
      log: function() {
        return false
      }
    }
  }

  // fuck off context menu! :L
  window.oncontextmenu = function() {
    return false
  };

  // redraw on resize
  $(window).resize(function() {
  	redraw();
  });

  // focus!
  canvas.focus();

  // check the hash and load the map if available
  if (window.location.hash) {
    var map = window.location.hash.substring(1).split(':')[2]; // such shit code
    var type = window.location.hash.substring(1).split(':')[1];

    if (type == 'local' && _.has(testMaps, map)) {
      parseMap(testMaps[map], map);
    } else if (type == 'inline') {
      parseMap(map, 'inline map');
    } else if (type == 'user' || 'world') {
    	// loading a map that belongs to a user or the world (on the server)
    	
    } else {
      alert("No such map! (Or you're trying to load an unsupported map).");
    }
  } else {
    notify("No map loaded D:");
    redraw();
  }
});
