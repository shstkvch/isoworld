isoWorld =
	version: '0.1.0'
	
Meteor.startup ->
	isoWorld.world = new Meteor.Collection "world"
	isoWorld.blockManager = new BlockManager isoWorld.world
	
	if Meteor.isClient
		Meteor.autorun ->
			# TODO: subscribe to the world on load
			Meteor.subscribe "world"
		isoWorld.renderer = new IsoRenderer 'isocanvas', isoWorld.camera
		isoWorld.camera = new Camera "Main Camera"
		isoWorld.renderer.redraw()
		isoWorld.input = new InputManager isoWorld.camera
				
		# Load the necessary JSON data
		$.getJSON '/resources/res.json', (data) ->
			isoWorld.resourceMap = data
			console.log @resourceMap
		
	else if Meteor.isServer
		Meteor.publish "world", ->
			return isoWorld.world.find
				x:
					$gte: @pan or 0
					$lte: @width or 16
				y:
					$gte: @tilt or 0
					$lte: @height or 16
			, limit: 32
			
		# if the world is empty, add a block
		if !isoWorld.world.findOne {}
			isoWorld.blockManager.spawn
				x: 2,
				y: 2,
				blockType: 0,
				owner: 0
			, (result) ->
				if result == 'ok'
					console.log 'created first block OK'
			