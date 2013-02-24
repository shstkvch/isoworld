Lots = new Meteor.Collection("lots");

if(Meteor.isServer) {
	// publish the lots to the clients. TODO: don't publish secret lots not owned by the user
	if(Lots.findOne({}) == undefined) {
		// empty!

		Lots.insert({
			name: "Demo Lot",
			owner: 0,
			map:
				[
					[
						1, 1
					],
					[
						1, 1
					]
				]
		}, function(error, id) {
			console.log('Created test lot with id ', id);
		});
	}
	
	Meteor.publish("lots", function() {
		return Lots.find({})
	});
} else if (Meteor.isClient) {
	Meteor.autorun(function() {
		Meteor.subscribe("lots"); // rofl
	});	
}

