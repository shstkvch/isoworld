class Camera
   constructor: (@name) ->
      @pan = 630
      @tilt = 125
      @zoom = 25
      @zoomUnit = 1
      @maxZoom = 50
	
   panBy: (pixels) ->
      @pan = @pan + pixels
	   
   setPanTilt: (pan, tilt) ->
      @pan = pan
      @tilt = tilt
	
   tiltBy: (pixels) ->
      @tilt = @tilt + pixels

   zoom: (percentage) ->
      @zoom = Math.min(@zoom, @maxZoom) # limit the zoom
      @zoom = percentage
