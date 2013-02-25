class BlockManager
   constructor: (@world) ->
   
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