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
		//Add a Lightbox Overlay displaying data inserted by User
			//Confirm
				//Thank you Message appears
			//Cancel
				//User is directed back to the form and overlay is removed
		