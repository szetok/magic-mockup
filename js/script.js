// access the server and get access to its response

// secret key value provided, gives exclusive namespace for records
var groupKey = 'group19_MC42MjY4NDQzMTQxNTk4MjU0';
// global variable for respVarName in which the server should store its response
var serverResponse;


window.onload = function() {
	document.getElementById('formLoad').onsubmit = function(e) {
		
		// when a specific record is going to be saved, loaded, or erased
		// dataKey denotes the url-encoded NAME of the record on which the action would be performed
		var dataKey = document.getElementById('dataKeyLoad').value;
		
		// when record is going to be saved
		// content denotes the string CONTENT that is to be stored in the record denoted by the group key and data key
		// this will not be used by a LOAD action
		var dataContent = $('#pad').html();
		
		// dynamically add script tag to document
		var script = document.createElement('script');
		
		// set script source value to request string
		script.src = 'http://198.101.235.162/load' + '?groupKey=' + encodeURIComponent(groupKey) + '&dataKey=' + encodeURIComponent(dataKey) + '&content=' + encodeURIComponent(dataContent) + '&respVarName=serverResponse';
		
		// read from the respVarName global variable for server response
		script.onload = function() {
			// if server response indicates successful request
			if (serverResponse.indexOf("success") == 2)  {
				document.getElementById('results').innerText = 'Successful request!' + '\n';	
			}
			else {
				document.getElementById('results').innerText = 'Error in request!' + '\n';
			}
			
			// if an error occurs, server will attempt to show source of error with string description and also other information
			// on success, success member of JSON string's response will be defined by a string description of the success
			console.log(serverResponse);
			console.log(JSON.parse(serverResponse));
			
			//server response in json
			var json = serverResponse;
			var obj = JSON.parse(json);	//parse the json server response
			var padContents = obj.content;	//grab what's inside content
			
			// append server response content to pad if action is LOAD
			$('#pad').html(padContents);	
		};
		document.getElementById('scriptZone').appendChild(script);
		e.returnValue = false;
		return false;
	}
	
	document.getElementById('formSave').onsubmit = function(e) {
		
		// when a specific record is going to be saved, loaded, or erased
		// dataKey denotes the url-encoded NAME of the record on which the action would be performed
		var dataKey = document.getElementById('dataKeySave').value;
		
		// when record is going to be saved
		// content denotes the string CONTENT that is to be stored in the record denoted by the group key and data key
		// this will not be used by a LOAD action
		var dataContent = $('#pad').html();
		
		// dynamically add script tag to document
		var script = document.createElement('script');
		
		// set script source value to request string
		script.src = 'http://198.101.235.162/save' + '?groupKey=' + encodeURIComponent(groupKey) + '&dataKey=' + encodeURIComponent(dataKey) + '&content=' + encodeURIComponent(dataContent) + '&respVarName=serverResponse';
		
		// read from the respVarName global variable for server response
		script.onload = function() {
			// if server response indicates successful request
			if (serverResponse.indexOf("success") == 2)  {
				document.getElementById('results').innerText = 'Server: Successful request!' + '\n';	
			}
			else {
				document.getElementById('results').innerText = 'Server: Error in request!' + '\n';
			}
			
			// if an error occurs, server will attempt to show source of error with string description and also other information
			// on success, success member of JSON string's response will be defined by a string description of the success
			console.log(serverResponse);
			console.log(JSON.parse(serverResponse));
			
			//server response in json
			var json = serverResponse;
			var obj = JSON.parse(json);	//parse the json server response
			var padContents = obj.content;	//grab what's inside content
		};
		document.getElementById('scriptZone').appendChild(script);
		e.returnValue = false;
		return false;
	}
}
		

	// global variable to keep track of current active element
	var activeEl;	

    // search suggestions
	var elements = [
	        		{
	        			value: "#sbtn",
	        			label: "Button"
	        		},
	        		{
	        			value: "#libBrowserOuterFrame",
	        			label: "Browser"
	        		},
	        		{
	        			value: "#libMobileOuterFrame",
	        			label: "Mobile"
	        		},
	        		{
	        			value: "#libTabOuterFrame",
	        			label: "Tablet"
	        		},
	        		{
	        			value: "#libImage",
	        			label: "Image"
	        		},
	        		{
	        			value: "#libDummyContainer",
	        			label: "textfield"
	        		},
	        		{
	        			value: "#libButtonBarBox",
	        			label: "Button bar"
	        		},
	        		{
	        			value: "#libSearchBox",
	        			label: "Search"
	        		},
	        		{
	        			value: "#libHeaderBox",
	        			label: "Section title"
	        		},
	        		{
	        			value: "#libCheckBox",
	        			label: "Checkbox"
	        		},
	        		{
	        			value: "#libRadioBox",
	        			label: "Radio button"
	        		},
	        		{
	        			value: "#libComboBox",
	        			label: "Combobox"
	        		},
	        		{
	        			value: "#libAccordin",
	        			label: "Accordin"
	        		},
	        		{
	        			value: "#libTabbar",
	        			label: "Tab Bar"
	        		},
	        		{
	        			value: "#libLinkbar",
	        			label: "Link Bar"
	        		},
	        		{
	        			value: "#libVerticalTab",
	        			label: "Vertical Tab"
	        		},
	        		{
	        			value: "#libTable",
	        			label: "Table"
	        		},
	        		{
	        			value: "#libFormatBar",
	        			label: "Format bar"
	        		},
	        		{
	        			value: "#libMenu",
	        			label: "Menu"
	        		},
	        		{
	        			value: "#libTextBox",
	        			label: "Text Box"
	        		},
	        		{
	        			value: "#libDatePickerBox",
	        			label: "Date Picker"
	        		},
	        		{
	        			value: "#libList",
	        			label: "List"
	        		},
	        		{
	        			value: "#libNumStepper",
	        			label: "Date Stepper"
	        		}
	        	];
	
	// read from data-default-width and data-default-height to initialize dimensions
	function applyDefaultDimensions(it) {
		var initWidth = it.attr("data-default-width");
		var initHeight = it.attr("data-default-height");
		it.css("width", initWidth);
		it.css("height", initHeight);
	}
	
	// initialize location to top left of pad, absolute position
	function applyDefaultLocation(it) {
		it.css("position", "absolute");
		it.css("left", 30);
		it.css("top", 30);
	}
	
	// remove title from resizeable div after dropping it on pad
	function removeTitle(it) {
		var $el = it.children().last();
		var $tit = $el.children().last();
		$tit.remove();
	}
	
	// remember which element was just clicked (is active)
	function setActiveElement(it) {
		// if there is an element selected
		if (activeEl != undefined) {
			// if selected element is current click, deselect
			if (it.css("border") == "2px dotted rgb(255, 0, 0)") {
				it.css("border", "none");
				activeEl = undefined;
				// on deselect, clear values from attributes window
    			$("input#widthNum").val("");
    			$("input#heightNum").val("");
    			$("input#xNum").val("");
    			$("input#yNum").val("");
    			
    			$("input#textEdit").val("");
			}
			// else selected element is not current click
			else {
				activeEl.css("border", "none");
				it.css("border", "2px dotted red");
				activeEl = it;
			}
		}
		// else there is no element selected yet
		else {
			it.css("border", "2px dotted red");
			activeEl = it;
		}
	}
	
	// on click event to get size
	function getSize(it) {
		//var $el = it.children().last();
		//var width = $($el).attr("data-default-width");
    	//var height = $($el).attr("data-default-height");
		var width = it.css("width").replace(/[^-\d\.]/g, '');
		var height = it.css("height").replace(/[^-\d\.]/g, '');
    	$("input#widthNum").attr("value", width);
    	$("input#heightNum").attr("value", height);
	}
	
	// on click event to get location
	function getLocation(it) {
    	var pos = it.position();
		var x = pos.left;
		var y = pos.top;
    	$("input#xNum").attr("value", x);
    	$("input#yNum").attr("value", y);
	}
	
	// on click event to get editable text
//	function getText(it) {
//		var text = it.text();
//		$("textarea#textEdit").html(text.trim());
//	}
	

	
	//adds cloned objects to the recently used tab
	function update_recently(cloned) {
		
		//$(cloned).children(0).attr("data-category",'recently');		//changes the data category attr from "all x" -> recently
		$(cloned).children(0).attr("data-category",'recently');
		$(cloned).draggable({ revert:true, helper:'clone',appendTo:'body' });	//make the cloned objects draggable
		//check to for duplicates
		var on_pad = [];
		var num_pad = $("#pad").children().length;
		//gets the id of the object being placed on the pad and into array with index num of children
		//on_pad[num_pad] = $(cloned).children(0).children(0).attr("id");	//use for reload/revert
		on_pad[num_pad] = $(cloned).children(0).attr("id");
		
		$(cloned).prependTo("#elementContainer").hide();
		
		//alert( $(cloned).attr("class"));
		
	}
	
	
	// on click event to remove currently selected element from pad
	function removeElement() {
		activeEl.remove();
	}
	
	// on click event to apply bold text to selected element
	function styleBold() {
		if (activeEl != undefined) {
			// if selected element actually has text to add style to
			if (activeEl.innerText != '') {
				if (activeEl.css("font-weight") == "bold") {
					activeEl.css("font-weight", "normal");
				}
				else {
					activeEl.css("font-weight", "bold");
				}
			}
		}
	}
	// on click event to apply italic text to selected element
	function styleItalic() {
		if (activeEl != undefined) {
			// if selected element actually has text to add style to
			if (activeEl.innerText != '') {
				if (activeEl.css("font-style") == "italic") {
					activeEl.css("font-style", "normal");
				}
				else {
					activeEl.css("font-style", "italic");
				}	
			}
		}
	}
	// on click event to apply underline text to selected element
	function styleUnderline() {
		if (activeEl != undefined) {
			// if selected element actually has text to add style to
			if (activeEl.innerText != '') {
				if (activeEl.css("text-decoration") == "underline") {
					activeEl.css("text-decoration", "none");
				}
				else {
					activeEl.css("text-decoration", "underline");	
				}
			}
		}
	}
	// on click event to apply strikethrough text to selected element
	function styleStrikethrough() {
		if (activeEl != undefined) {
			// if selected element actually has text to add style to
			if (activeEl.innerText != '') {
				if (activeEl.css("text-decoration") == "line-through") {
					activeEl.css("text-decoration", "none");
				}
				else {
					activeEl.css("text-decoration", "line-through");
				}
			}
		}
	}
	
	
	// variable to keep track of last removed element, for undo/redo buttons
	var lastRemovedEl;
	
	// on click event to remove last appended element
	function undoElement() {
		lastRemovedEl = $('#pad').children().last();
		$('#pad').children().last().remove();
	}
	
	// on click event to recover last removed element
	function redoElement() {
		if (lastRemovedEl != undefined) {
			lastRemovedEl.appendTo($('#pad'));
		}
	}
	
	
	// hide palette window when click on X icon
	function hidePalette() {
		$("#palette").css("display", "none");		
	}
	
	// toggle palette window show/hide
	function togglePalette() {
		if ($("#palette").css("display") == "none") {
			$("#palette").css("display", "inline");
		}
		else {
			$("#palette").css("display", "none");
		}
	}
	
	// toggle grid show/hide
	function toggleGrid() {
		$("#pad").css("background", "#fff");
	}
	
	
	// variable to keep track of copied/cut element
	var elCopy;
	
	function copyElement() {
		elCopy = activeEl.clone();
		elCopy.css("border", "none");
	}
	
	function cutElement() {
		elCopy = activeEl;
		activeEl.remove();
	}
	
	function pasteElement() {
		if (elCopy != undefined) {
			elCopy.draggable();
			elCopy.appendTo($('#pad'));
			$('#pad').children().last().draggable({		//last dragged object 
            	containment:"parent",					//can't drag out of the pad canvas
            	stack : ".ui-draggable"					//selected is the top layer
            }).removeClass("draggable")					//remove draggable to prevent cloning		
            .css("cursor", "pointer")					//cursor change from move to pointer
            .bind("click", function() {
            	getSize($(this));						// click element to load its size
            	getLocation($(this));					// click element to load its location
            	setActiveElement($(this));});
		}
	}
	
	function clearCanvas() {
		if ($('#pad').children() != undefined) {
			$('#pad').children().remove();	
		}
	}
	
	
$(document).ready(function(){

	
			//library tabs register
			$("#tabs nav ul li").each(function(){
				//register event for each tab
				var placeholder = $(this);
				var cat = placeholder.attr("data-category");
				
				//set it all hidden
				
				placeholder.bind("click",function(){
					
					$("#tabs nav ul li").removeClass("selected");
					$(this).addClass("selected");
					
					$("#elementContainer .draggable .resizeable").parent().hide();
				
					$("#elementContainer .draggable .resizeable").each(function(){
						var target = $(this);
						var target_cat = target.attr("data-category").split(' ');
						for(var j=0; j < target_cat.length; j++){
							if(cat == target_cat[j]){
								target.parent().show();
								break;
							}
						}
					});
				});
				
			});	
			
			//palette tabs register
			$("#palette fieldset").hide();
			$("#palette fieldset[data-category=coord]").show();
			$("#palette footer ul li").each(function(){
				//register event for each tab
				var placeholder = $(this);
				var cat = placeholder.attr("data-category");
				
				//set it all hidden
				
				placeholder.bind("click",function(){
					
					$("#palette footer ul li").removeClass("selected");
					$(this).addClass("selected");
					
					$("fieldset").hide();
				
					$("#palette fieldset").each(function(){
						var target = $(this);
						var target_cat = target.attr("data-category");
							if(cat == target_cat){
								target.show();
							}
					});
				});
				
			});	
			
			
			//tool tips!
			$("label#width").qtip({
				content: 'Width of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			$("label#height").qtip({
				content: 'Height of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			$("label#x").qtip({
				content: 'X coordinate of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			$("label#y").qtip({
				content: 'Y coordinate of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			//Tooltips for quickadd
			$("i.icon-plus-sign").qtip({
				content: 'Quickly add any element to your website just by typing the name', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			//Tooltips for search
			$("div#searchBox").qtip({
				content: 'Search for any element', 
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			//Tooltips for library elements
			$("span.sbtntext").qtip({
				content: 'Button - try dragging to the canvas!', //button text
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libBrowserOuterFrame").qtip({ //mock browser
				content: 'Web browser - try dragging to the canvas!', 
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libImage").qtip({
				content: 'Image - try dragging to the canvas!', //image
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libDummyContainer").qtip({
				content: 'Text box - try dragging to the canvas!', //text box
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libButtonBarBox").qtip({
				content: 'Button bar box - try dragging to the canvas!', //button bar
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libSearchBox").qtip({
				content: 'Search box - try dragging to the canvas!', //search box
				position: {
					my: 'bottom left',
					at: 'top left' 
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("h1.libHeader").qtip({
				content: 'Header - try dragging to the canvas!', //header box
				position: {
					my: 'bottom left',
					at: 'top left' 
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			

			

			
			
			// draggable
			$(".draggable").draggable({
				revert:true,
				helper:'clone',
				appendTo:'body'
			});

				// droppable
                $("#pad").droppable({
                        accept: ".draggable",	//accept draggable objects only to drop
                        drop: function(event,ui){
                        	var obj = $(ui.draggable).children().last().clone();
                        	applyDefaultDimensions(obj);							//apply default dimensions to element
                        	applyDefaultLocation(obj);
                        	$(this).append(obj);
	                        //$(this).append($(ui.draggable).clone());	//clone in pad the draggable object 
	                        $(this).children().last().draggable({		//last dragged object 
	                        	containment:"parent",					//can't drag out of the pad canvas
	                        	stack : ".ui-draggable"					//selected is the top layer
	                        }).removeClass("draggable")					//remove draggable to prevent cloning		
	                        .css("cursor", "pointer")					//cursor change from move to pointer
	                        .bind("click", function() {
	                        	getSize($(this));						// click element to load its size
	                        	getLocation($(this));					// click element to load its location
	                        	//getText($(this));						// click element to load its text
	                        	setActiveElement($(this));});			// click element to set it as active
	                        update_recently($(ui.draggable).last().clone());
	                        removeTitle($(this));		//remove title from element after dropping it on pad
	                        var device_used = $(this).children(0).children(0).attr("id");
	                        if (device_used == "libBrowserOuterFrame")
	                        	$(this).children().last().draggable({stack: "body"});
	                    }
                });
          		  
  			  
                
                var elCopyClick;
                var clicked;
                
            	function pasteElementClick() {
            		if (elCopyClick != undefined) {
                    	applyDefaultDimensions(elCopyClick);							//apply default dimensions to element
                    	applyDefaultLocation(elCopyClick);
            			elCopyClick.appendTo($('#pad'));
            			$('#pad').children().last().draggable({		//last dragged object 
                        	containment:"parent",					//can't drag out of the pad canvas
                        	stack : ".ui-draggable"					//selected is the top layer
                        }).removeClass("draggable")					//remove draggable to prevent cloning		
                        .css("cursor", "pointer")					//cursor change from move to pointer
                        .bind("click", function() {
                        	getSize($(this));						// click element to load its size
                        	getLocation($(this));					// click element to load its location
                        	setActiveElement($(this));});
            			
            			update_recently($(clicked.clone()));
            			removeTitle($('#pad'));
            			clicked.css("border", "none");
            		}
            	}
            	
            	var pasteMode = false;
            	
    			// click element in toolbar to copy, then click onto pad to paste
    			$(".draggable").bind("click", function() {
    				elCopyClick = $(this).children().last().clone();
    				clicked = $(this);
    				clicked.css("border", "2px dotted red");
    				pasteMode = true;
    			});

    			$('#pad').bind("click", function() {
    				if (pasteMode == true) {
    					pasteElementClick();
    					pasteMode = false;
    				}
    			});
               
    			
    			$("input#widthNum").bind('input', function() {
    				//var resizeFrame = activeEl.children().last();
    				//resizeFrame.css("width", $(this).val());
    				activeEl.css("width", $(this).val());
    			});
    			$("input#heightNum").bind('input', function() {
    				//var resizeFrame = activeEl.children().last();
    				//resizeFrame.css("width", $(this).val());
    				activeEl.css("height", $(this).val());
    			});
    			
    			$("input#xNum").bind('input', function() {
    				activeEl.css("left", $(this).val()+"px");
    			});
    			$("input#yNum").bind('input', function() {
    				activeEl.css("top", $(this).val()+"px");
    			});
    			
//    			$("textarea#textEdit").bind('keypress keydown', function() {
//    				activeEl.children(0).children(0).children(0).attr('contenteditable','true');
//    				activeEl.children(0).children(0).children(0).innerText = "helloprofessor!";
//    			});
    			
    			// clear active selection when clicking on library
    			$('#library').bind('click', function() {
    				if (activeEl != undefined) {
    					activeEl.css("border", "none");
    					activeEl = undefined;
    					// on deselect, clear values from attributes window
    	    			$("input#widthNum").val("");
    	    			$("input#heightNum").val("");
    	    			$("input#xNum").val("");
    	    			$("input#yNum").val("");	
    				}
    			});
    			
    			
    			
		});
		

// Search auto complete stuff.  Using Jquery UI auto complete
// hidden value currently not being used to find div but leaving it there for now
$(function() {

	$("input#searchfield").autocomplete({
		minLength: 0,
		source: elements,
		focus: function( event, ui ) {
			$("input#searchfield").val( ui.item.label );
			return false;
		},
		select: function( event, ui ) {
			$("input#searchfield").val( ui.item.label );
			$("#element-id").val( ui.item.value );
			return false;
		}
	})
	.data( "autocomplete" )._renderItem = function( ul, item ) {
		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append( "<a>" + item.label + "</a>" ).addClass("suggestions")
			.appendTo( ul );
	};
});



        // function to get current cursor coordinates
        var x;
        var y;
        function mouser(event) {
        	x=event.clientX;
        	y=event.clientY;
        	document.getElementById('X-coord').innerHTML = x + 'px';
        	document.getElementById('Y-coord').innerHTML = y + 'px';
        }
        
        
        // search box event for ENTER key press, perform append
        function searchAction (e) {
        	var searchID = "";        	
        	// first check whether the hidden value is defined
        	if ($("#element-id").val() == "") {
        		var searchTerm = $('#searchfield').val();
        		// loop through elements array
        		for (var i = 0; i < elements.length; i++) {
        			// if search term matches the label, get associated search value
        			if (elements[i].label.toLowerCase() == searchTerm.toLowerCase()) {
        				searchID = elements[i].value;
        			}
        		}
        	}
        	var keycode;
        	if (window.event) keycode = window.event.keyCode;
        	else if (e) keycode = e.which;
        	else return true;
        	// if key pressed is ENTER key, append a clone to pad
        	if (keycode == 13) {
        		//var searchTerm = e.value;
        		if (searchID == "") {
        			searchID = $("#element-id").val();
        		}
        		//var resultDiv = $("div>div:contains('" + searchTerm + "')").children(1);
        		var resultDiv = $(searchID).parent().clone();
        		// update recently used before appending to pad, so avoid multiple ID confusion
        		update_recently($(searchID).parent().parent().clone());
        		applyDefaultDimensions(resultDiv);
        		applyDefaultLocation(resultDiv);
        		$('#pad').append(resultDiv);
        		$('#pad').children().last().draggable({		//last dragged object 
                	containment:"parent",					//can't drag out of the pad canvas
                	stack : ".ui-draggable"					//selected is the top layer
                }).removeClass("draggable")					//remove draggable to prevent cloning		
                .css("cursor", "pointer")					//cursor change from move to pointer
                .bind("click", function() {
                	getSize($(this));						// click element to load its size
                	getLocation($(this));					// click element to load its location
                	setActiveElement($(this));});			// click element to set it as active
        		
                removeTitle($('#pad'));		//remove title from element after dropping it on pad
        	}
    	}
        	

        
