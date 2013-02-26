isoWorld =
	version: '0.1.0'

isoWorld.world = new Meteor.Collection "world"

Meteor.startup ->	
	if Meteor.isClient
		Meteor.autorun ->
			# TODO: subscribe to the world on load
			Meteor.subscribe "world"
		isoWorld.renderer = new isoRenderer 'isocanvas', isoWorld.camera
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
					
# BlockManager					
isoWorld.blockManager = 
  spawn: (options) ->
    if !_?.keys(options) == ['x', 'y', 'blockType', 'owner']
       return false
    else
       # spawn the block by sticking it into the collection
       if !options.z 
          options.z = 0 
       
       if !@isBlockAtCoords options.x, options.y, options.z
       
          isoWorld.world.insert
             'x': options.x,
             'y': options.y,
             'z': options.z,
             'blockType': options.blockType,
             'owner': options.owner,
             '_id': options.x + '-' + options.y + '-' + options.z
             , (result) ->
                console.log 'attempted to insert block at x ', options.x, ' y ', options.y
                 , 'and it seemingly worked...'
                if result
                   return true
                else
                   return false
       else
          return false
                
  isBlockAtCoords: (x, y, z) ->
    if isoWorld.world.findOne(_id: x + '-' + y + '-' + z)
       return yes
    else
       return no
			
