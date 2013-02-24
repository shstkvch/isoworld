var resources = {
	0: {
		"name": "Nothing",
		"description": "Here for clarity... hahaha."
	},
	1: {
		"id": 1,
		"name": "Grass",
		"description": "Just some boring grass.",
		"tile": {
			"fill": "rgb(0,200,0)",
			"image": 1,
			"special": {
				"ifNotTopTile": {
					"image": "1a"
				}
			}
		}
	},
	2: {
		"name": "Sand",
		"description": "Wear shorts or it will get right up there.",
		"tile": {
			"fill": "rgb(190, 170, 30)",
			"image": 2
		}
	},
	3: {
		"name": "Water",
		"description": "Delicious, clean and free. And wet.",
		"tile": {
			"fill": "rgba(40, 150, 255, 0.5)",
			"stroke": "rgba(20,20,20,0.1)",
			"special": {
				"ifLastInRowOrColumn": {
					"fill": "red"
				}
			}
		}
	},
	4: {
		"name": "Grid",
		"description": "Build something on me!",
		"tile": {
			"stroke": "rgba(40,40,40,0.1)",
			"fill": "rgba(40,40,40,0.1)"
		}
	},
	5: {
		"name": "Black Square",
		"description": "Half of a chess board!",
		"tile": {
			"fill": "rgb(30,30,30)"
		}
	},
	6: {
		"name": "White Square",
		"description": "Half of a chess board!",
		"tile": {
			"fill": "rgb(230,230,230)"
		}
	}
}
