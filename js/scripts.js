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
			// var confirmIMG = '<img src="img/resortconfirm.jpg" alt="Pool Bar" class="img-responsive hidden-xs hidden-sm">'
			$('#confirm').show(); // Show Confirm Section

			$('#confirm').html( 
				//Add following html markup and displays data stored in variables
				'<div class="row">' +
						'<div class="col-sm-6" id="confirmIMG">' +
						'</div>'+
						'<div class="col-sm-6" id="confirmMSG">' +
						'<h2>Your Next Adventure Awaits!</h2>' +
						'<h3>Please Confirm your Package</h3>' +
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
						'<div id="confirmationButtons">' +
						'<button type="button" id="confirmButton" class="btn jumbo-btn btn-lg">Confirm</button>' +
						'<button type="button" id="cancelButton" class="btn jumbo-default-btn btn-lg">Cancel</button></div>' + // Confirmation Buttons
						'</div>'+
				'</div>'		
				);

					$('#confirmButton').click(function () {
						$('#confirmationButtons button').hide(); // Confirmation Buttons are removed
						$('#confirmMSG').append(
								'<p class="successMSG">Thank You For booking your Adventure to<br><strong>' +
								destination + '!</strong></p>'); // Thank You Message Appears
					});
					$('#cancelButton').click(function () {
						$('#confirm').hide(); // Hide Confirm Section
					});
		});