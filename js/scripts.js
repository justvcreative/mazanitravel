//JQuery UI: Datepicker
	$(".datepicker").datepicker();

//Booking Form
	$('#confirm').hide(); // Hide Confirm Section
	$('#bookForm').submit( function ( submit ) {
			submit.preventDefault(); // Prevents Default refreshing of the page
			// store user input values in variables
			var departcity = $('#departCity').prop('value'); // store Depart City in
			var destination = $('#arriveCity').prop('value'); // store Destination/Arrive City
			var departdate = $('#departDate').prop('value'); // store Depart Date
			var returndate = $('#returnDate').prop('value'); // store Return Date
			var adults = $('#adults').prop('value'); // store Amount of Adults
			var seniors = $('#seniors').prop('value'); // store Amount of Seniors
			$('#confirm').show(); // Show Confirm Section

			$('#confirm').html( 
				//Add following html markup and displays data stored in variables
				'<hr>' +
				'<h2>Your Next Adventure Awaits!</h2>' +
				'<h3>Please Confirm your Package</h3>' +
				'<div>' +
						'<h4>Departure City</h4>'+
						'<p>' + departcity +' </p>' + // display Return Date
						'<h4>Destination</h4>' +
						'<p>' + destination + ' </p>' + // display Destination/Arrival City
						'<h4>Departure date</h4>' +
						'<p>' + departdate + '</p>' + // display Depart Date
						'<h4>Return Date</h4>' +
						'<p>' + returndate + '</p>'+ // display Return Date
						'<h4>Travelers</h4>' +
						'<p>Adults: ' + adults + ' | Seniors: ' + seniors + '</p>' +
				'</div>' +			
				'<div id="confirmationButtons"><button type="button" id="confirmButton" class="btn btn-primary btn-lg">Confirm</button>' +
				'<button type="button" id="cancelButton" class="btn btn-default btn-lg">Cancel</button></div><hr>' // Confirmation Buttons
				);

					$('#confirmButton').click(function () {
						$('#confirmationButtons button').hide(); // Confirmation Buttons are removed
						$('#confirm').append(
								'<h2 style="color: #8DC63F">Thank You For booking your Adventure to<br>' +
								destination + '!</h2>'); // Thank You Message Appears
					});
					$('#cancelButton').click(function () {
						$('#confirm').hide(); // Hide Confirm Section
					});
		});

//Mobile Navigation
	//Mobile Nav Menu hidden on load
	$('#navlist').hide();
	//When User Clicks or Taps on the Menu Bars, the Nav Menu Appears and can toggle on and off
	$('#switch').click( function () {
		$('#navlist').toggle('blind');
	});