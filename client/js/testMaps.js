// MAPS
//
// 1 - grass
// 2 - sand
// 3 - water
// 4 - grid (utility)
// 5 - black square
// 6 - white square
// (See resources.js for detailed block id info)
var testMaps = {
shittybeach: [
	[
		[
			1, 1, 1, 2, 3, 3, 3, 3, 3
		],
		[
			1, 1, 1, 2, 2, 2, 3, 3, 3
		],
		[
			1, 1, 1, 1, 2, 2, 2, 3, 3
		],
		[
			1, 1, 1, 1, 1, 2, 3, 3, 3
		],
		[
			1, 1, 1, 1, 2, 2, 2, 3, 3
		],
		[
			1, 1, 1, 1, 2, 2, 2, 3, 3
		],
		[
			1, 1, 1, 1, 2, 2, 3, 3, 3
		],
		[
			1, 1, 1, 2, 2, 2, 2, 3, 3
		],
		[
			1, 1, 1, 1, 2, 2, 2, 3, 3
		]
	]
],
grass4: [
	[
		[1,1],
		[1,1]
	]
],
grasslevels: [
	[
		[1,1],
		[1,1]
	]
],
levels: [
	[
		[1,1,1],
		[1,1,1],
		[1,1,1,1],
		[1,1,1,1,1,1,1],
		[1,1,1,1,1,3,1],
		[1,1,1,1,1,3,1],
		[1,1,1,1,1,3,1],
		[1,1,1,1,1,3,1],
		[1,1,1,3,3,3,1],
		[1,1,1,3,3,3,1],
		[1,1,1,1,3,3,1],
		[1,1,1,1,1,1,1]
	],
	[
		[1,1,1],
		[1,1,1],
		[1,1,1,1],
		[1,1,1,1],
		[1,1,3,1],
		[1,1,3,1],
		[1,1,3,1],
		[1,1,3,1],
		[1,1,3,3],
		[1,1,3,3],
		[1,1,1,1]
	],
	[
		[1,1,1],
		[1,1,1],
		[1,1,1,1],
		[3,3,3,1],
		[1,1,3,1]
	],
	[
		[1,1],
		[1,1]
	],
	[
		[1]
	],
],
waterTest: [
	[
		[1,1,1],
		[1,1,1],
		[1,1,1]
	],
	[
		[1,1,1],
		[1,1,1],
		[1,3,1]
	],
	[
		[1,3,1],
		[1,3,3],
		[1,0,1]
	]
],
waterTest2: [
	[
		[1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,3,1,3,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,3,1,3,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7]
	],
	[
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,3,3,3],
		[1,1,1,1,1,1,1,1,1,3,3,1],
		[1,1,1,1,1,1,1,1,1,3,3,1],
		[1,1,1,1,1,1,1,1,1,3,3,3],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	[
		[1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,3,3],
		[1,1,3,1,1,1,1,3,3],
		[1,3,3,3,3,3,3,3,3],
		[3,3,3,3,3,1,1,3,3],
		[1,1,1,1,1,1,1,1,1]
	],
	[
		[1,3,1,1,1,1,1],
		[1,3,3,3,3,3,1],
		[1,3,1,1,3,1,1],
	]
],
tall: [
	[
		[0,1,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[1,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[1,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[1,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[1,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,1,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,1,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,1]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,1],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,1],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,1],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,1,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,1,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[1,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[1,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[1,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[1,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,1,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,1,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,1]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,1],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,1],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,1],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,1,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,1,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[1,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[1,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[1,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[1,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,1,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,1,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,1]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,1],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,1],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,1],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,1,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,1,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[1,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[1,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[1,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[1,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,1,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,1,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,1]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,1],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,1],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,1],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,1,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,1,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[1,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[1,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[1,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[1,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,1,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,1,0]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,1]
	],
	[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,1],
		[0,0,0,0]
	],
	[
		[0,0,0,0],
		[0,1,1,1],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,0,1],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	[
		[0,0,1,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	]
],
topTileBug: [
      [
              [2,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1]
      ],
      [
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1]
      ],
      [
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1]
      ],
      [
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1]
      ],
      [
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,0,0,0,1]
      ],
      [
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,0,0,0,1]
      ],
      [
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,0,0,0,1]
      ],
      [
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1]
      ],
      [
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1]
      ],
      [
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1],
              [1,1,1,1,1]
      ],
],
lake: [
	[
		[1,1,1,1,1,1,1,1,1,1],
		[1,3,3,1,1,1,3,3,1],
		[1,3,3,3,3,3,3,3,1],
		[1,3,3,3,1,1,1,1,1],
		[1,3,3,1,1],
		[1,3,3,1],
		[1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1]
	]
],
checkers: [
	[
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1],
		[1,1,3,3,3,3,3,3,1,1],
		[1,1,1,3,3,3,3,1,1,1],
		[1,1,1,1,1,1,1,1,1,1]
	],
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,1,1,1,1,1,1,1,1,0],
		[0,1,5,6,5,6,5,6,1,0],
		[0,1,6,5,6,5,6,5,1,0],
		[0,1,5,6,5,6,5,6,1,0],
		[0,1,6,5,6,5,6,5,1,0],
		[0,1,5,6,5,6,5,6,1,0],
		[0,1,6,5,6,5,6,5,1,0],
		[0,1,5,6,5,6,5,6,1,0],
		[0,1,6,5,6,5,6,5,1,0],
		[0,1,1,1,1,1,1,1,1,0]
	]
], 
topTileBug: [
	[
		[2,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1]
	],
	[
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1]
	],
	[
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1]
	],
	[
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1]
	],
	[
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,0,0,0,1]
	],
	[
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,0,0,0,1]
	],
	[
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,0,0,0,1]
	],
	[
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1]
	],
	[
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1]
	],
	[
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[1,1,1,1,1]
	],
]
}
