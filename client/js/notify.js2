Meteor.startup(function() {
	var showingNotification = false;
	var currentNotification = "";
	
	
	function renderNotification() {
		if (showingNotification) {
			// draws a nice big notification on the screen
			var canvas = document.getElementById('isocanvas');
			var cv = canvas.getContext('2d');
			
			// headline
			
			cv.font = "48px Arial";
			cv.fillStyle = "rgba(0,0,0,0.5)";
			cv.fillText(currentNotification, window.innerWidth / 2 - cv.measureText(currentNotification).width /2 - 2, 252);
			
			cv.font = "48px Arial 400";
			cv.fillStyle = "rgb(255,255,255)";
			cv.fillText(currentNotification, window.innerWidth / 2 - cv.measureText(currentNotification).width /2, 250);
			//console.log('NOTIFICATION: ' + currentNotification);
		}
	}
	window.notify = function(text) {
		currentNotification = text;
		showingNotification = true;
		redraw();
		renderNotification();
		setTimeout(function() {
			showingNotification = false;
			redraw();
		},2000);
	}
	window.showNotificationIfNeeded = renderNotification;
});