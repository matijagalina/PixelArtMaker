
// jQuery constants for table and form selectors
const table = $('#pixel_canvas');
const form = $('#sizePicker');

$(document).ready(function () {

	//Builds the grid and enables cell coloring 
	function makeGrid(event) {

		// Stops the default action of form submit
		event.preventDefault();

		// Disabling right click
		$(document).bind("contextmenu",function(e){
	   return false;
	 	});

		// Clear former table canvas before setting up a new
		table.empty();

		// Select size input
		let row = $('#input_height').val();
		let col = $('#input_width').val();

		// Build a canvas
		for(let i = 1; i <= row; i++) {
			table.append('<tr></tr>');		// Appends the rows in table
			for (let j = 1; j <= col; j++) {
				table.children().last().append('<td></td>');	// Appends cells in a row
			}
		}

		// Change color of the cells dynamically
		$('td').click(function() {

			// Select color input
			let color = $('#colorPicker').val();

			// If cell has a style atribute - remove it, else assign color
			if ($(this).attr('style')) 
				$(this).removeAttr('style');
			else
				$(this).css('background-color', color);
		});

		// Adds a shadow around table for more 3D look
		// Could be achieved in .css file but that way it leaves a blured dot in place of canvas before it's creation
		table.css('box-shadow', '0 0 5px 2px black');
	}

	// When size is submitted by the user, call makeGrid()
	form.submit(makeGrid);

});