/**

*@author Matt Bocek

*@date 7/25/12
*@title LooseSlide

*@version 1.7

*@description A JQuery slideshow using loosely coupled functions (allows for much or little html control)

*/

	


/*

	
To initialize:
	
1. Create a div with id="slideshow" and put any number of images inside it.
	
2. Call the slideShow() function. To run on start, use:
		
	$(document).ready(function(){
			
		slideShow();
		
	});
	

*/
	
	


/*

	
Customizing your controls:
		
By default the controls appear as four html buttons. You can make you own controls by

creating a div with id="slideshow-controls". You can put whatever elements you want in
		
here (buttons,images,links,etc.) as long as you include the hidden counter field and give
		
other elements the correct ids of "first", "prev", "next", "last". Some other ids are
		
acceptable, see line 38 for a complete listing. To add more names, simply add to the array 
		
(be careful of commas). Note that while you could use other right-hand values such a 2 or
		
-2, these will not function correctly to "wrap around" the ends of the array. None of the
		
4 buttons are required, but the "counter" element is.
		
	

Styling your slideshow:
		
Use id selectors: #slideshow{} for the main window and #slideshow-controls{} for the control
		
panel.
	

*/