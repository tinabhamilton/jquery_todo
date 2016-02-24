$(document).ready(function(){
	// console.log('ready!');

	//same as var input = document.querySelector('input');
	var $input = $('input');
	var $button = $('button');
	var $list = $('.list ul');
	var $warning = $('#warning');


//same as button.addEventListener...
	// $button.click(function({})) another option for the below event
	$button.on('click', function(event) {  //click event because you set event 'click'
		event.preventDefault();

		
		if( $input.val() !== '' ) {
			$warning.text('');
		// same as var newTodo = createElement('li')
			var newTodo = $('<li></li>').html($input.val() + "<span class='delete'> x </span>");
			$list.append(newTodo); //prepend in place of append puts stuff at the top of the list.
			$input.val('');
	} else {

		$warning.text("Item can't be a blank!");
	}

	});//end of button click 
//event deligation in this instance '.delete' (makes the click work only on the x, elements with the class of delete(whatever is triggering the event))
	$list.on('click', '.delete', function(event){
		$(this).hide();
		$(this).parent()
			.addClass('strike')//this line makes it pick a specific item or element
			.delay(1000)
			.hide(700);
			// $list.on('click', function(event) this code you can click anywhere on the line of text
		console.log('clicked x');

	});//end list click

});//end of document.ready