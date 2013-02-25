class isoRenderer
	constructor: (@canvasId, @camera) ->
		# set up the canvas
		@canvas = document.getElementById(@canvasId).getContext('2d')
		
		# CANVAS OPTIONS
		@canvasWidth = window.innerWidth
		@canvasHeight = window.innerHeight
		@canvasFill = 'rgb(150,220,250)'
		
		# BLOCK OPTIONS
		@blockHeight = 150 * @zoom / 100
		@blockWidth = 150 * @zoom / 100
		@blockDepth = @blockHeight / 2
		
	redraw: ->
		# Clear the canvas and re-draw the map at the current co-ordinates
		
		@_clearCanvas()
		entities = isoWorld.world.find
			sort: ['_id', 'asc']
		.fetch()
	
	_clearCanvas: (fillStyle) ->
		@canvas.fillStyle = fillStyle || @canvasFill
		@canvas.fillRect(0, 0, @canvasWidth, @canvasHeight)
		
	_drawResource: (resourceId, x , y, z) ->
		# INTERNAL - takes a resourceId and draws a resource at the specified place