Lots = new Meteor.Collection("lots");
	
if(Meteor.isServer) {
	// publish the lots to the clients. TODO: don't publish secret lots not owned by the user
	Meteor.publish("lots", function() {
		return Lots.find({})
	});
}
