/**
*@author Matt Bocek
*@date 7/25/12
*@title LooseSlide
*@version 1.7
*@description A JQuery slideshow using loosely coupled functions (all buttons make the same function call)
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
		
		function slideShow(){
			if ($("#slideshow-controls").html() == null){ //add controls if they don't exist
				$("#slideshow").after('<div id="slideshow-controls"><input type="hidden" id="counter" value=0 /><input type="button" id="first" value="first" /><input type="button" id="prev" value="prev" /><input type="button" id="next" value="next" /><input type="button" id="last" value="last" /></div>');	
			}
			
			var slideShow = new Array;
			$("#slideshow img").each(function(){
				slideShow[slideShow.length] = $(this).attr("src"); //determine the number of pictures in the slideshow
				$(this).css("display","none"); //hides each image
			});

			var controls = {
				//recommended names:
				"next" : 1,
				"prev" : -1,
				"last" : (-1 * slideShow.length), //relies on checkMinAndMax()
				"first" : slideShow.length, //relies on checkMinAndMax()
				
				//other possible names:
				"previous" : -1,
				"older" : -1,
				"down" : -1,
				"lower" : -1,
				"back" : -1,
				
				"newer" : 1,
				"up" : 1,
				"higher" : 1,
				"forward" : 1,
				
				"oldest" : (-1 * slideShow.length),
				"bottom" : (-1 * slideShow.length),
				"begin" : (-1 * slideShow.length),
				"beginning" : (-1 * slideShow.length),
				"start" : (-1 * slideShow.length),
				
				"newest" : slideShow.length,
				"top" : slideShow.length,
				"end" : slideShow.length,
				"ending" : slideShow.length,
				"final" : slideShow.length
			}; //end controls array
			
			$("#slideshow-controls *").click(disappear); //set click handlers
			reappear(0); //make the first picture visible
			
			function changePic(currentPic,btnVal){
				//takes the button id, compare it to the controls[] array, parses and adds to the current pic.
				//currentPic = parseInt( $("#slideshow-controls #counter").val() );
				currentPic = checkMinAndMax(currentPic + btnVal);
				$("#slideshow-controls #counter").val(currentPic); //save value to hiden element
				reappear(currentPic);			
			}
			
			function checkMinAndMax(num){
				//if a number is 0 it goes to the last available pic
				//if a number is greater than the number of pics it loops back to 0
				if (num < 0)
					num = slideShow.length - 1;
				if (num >= slideShow.length)
					num = 0;
				return num;
			}
			
			function disappear(){
				//find current image, save button click, fades one image, then call callback function
				var btnVal = parseInt( controls[$(this).attr("id")] );			
				var imageIndex = parseInt( $("#slideshow-controls #counter").val() );
				$("#slideshow img:eq(" + imageIndex + ")").fadeOut(450,function(){
					changePic(imageIndex,btnVal);
				});
			}
			
			function reappear(imageIndex){
				//fades in selected image
				$("#slideshow img:eq(" + imageIndex + ")").fadeIn(300);
			}
		}