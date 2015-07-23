//JQuery UI: Datepicker
$(".datepicker").datepicker();

//Booking Form
	//Departure City: Retrieve User Input
	//Arrival City: User Selects from List
		//Cost of Trip is based on User's selection of the Arrival City
	//Departure Date: User Selects the day they wish to travel
		//Trips are a minimum of 4 days
	//Adults: User selects the amount of adults. 1 is the default
	//Seniors: Optional. User selects the amount of seniors.
		//Seniors get 10% discount off the Cost of Trip
	//Submit
	$('#bookForm').submit( function ( submit ) {
		submit.preventDefault();
		console.log($('#departCity').attr('value'));
		console.log($('#arriveCity').attr('value'));
		console.log($('#departDate').attr('value'));
		console.log($('#returnDate').attr('value'));
		console.log($('#adults').attr('value'));
		console.log($('#seniors').attr('value'));
	});
		//Add a Lightbox Overlay displaying data inserted by User
			//Confirm
				//Thank you Message appears
			//Cancel
				//User is directed back to the form and overlay is removed
		
//Mobile Navigation
	//Mobile Nav Menu hidden on load
	$('#navlist').hide();
	//When User Clicks or Taps on the Menu Bars, the Nav Menu Appears and can toggle on and off
	$('#switch').click( function () {
		$('#navlist').toggle('blind');
	});