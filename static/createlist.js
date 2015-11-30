$(document).ready(function(){
	$('.ui.accordion').accordion();
$('.ui.dropdown').dropdown();
	function resetsize(){
		$("#customlistmenu").css("width",$("#monitor").width()+24);
		$("#customlistdesription").css("width",$(".six.wide.column").width());
	}
	resetsize();
	$("#customlistnextbutton").click(function(){
			$("#shiftcontroller").css("margin-left",($(".six.wide.column").width()+20)*(-1)+"px");
			$("#listdescriptionwrapper").css("left",($(".ten.wide.column").width()/10-20)*(-1)+"px");
			$(this).removeClass("work");
			$("#createlistbutton").removeClass("btn-primary").addClass("btn-success").removeClass("disabled");
			$("#createlistbutton").click(function(){
				$("#createlistbutton").removeClass("btn-success").addClass("btn-primary").addClass("disabled");
				$("#addlistdescriptionbutton").removeClass("btn-primary").addClass("btn-default");
				$("#shiftcontroller").css("margin-left",0+"px");
				$("#listdescriptionwrapper").css("left",0+"px");
				$("#customlistnextbutton").addClass("work");
			});
			$("#addlistdescriptionbutton").removeClass("btn-default").addClass("btn-primary");
	});
	$("#customlistsubmitbutton").click(function(){
		if($("#customlist").children(".filteritem").length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("清單內容不可以為空");
		}
	});
	var formhtml = '<form class="form-horizontal" role="form">'+
						  '<div class="form-group">'+
						    '<label class="col-sm-2 control-label">推薦菜色</label>'+
						    '<div class="col-sm-10">'+
						      '<input type="text" class="form-control" id="inputEmail3" placeholder="這家店哪些菜色吸引你？" name="recommendmeal">'+
						    '</div>'+
						  '</div>'+
						  '<div class="form-group">'+
						    '<label class="col-sm-2 control-label">備註</label>'+
						    '<div class="col-sm-10">'+
						      '<textarea class="form-control" rows="3" placeholder="對於這家店有甚麼想說的......" name="storedescription"></textarea>'+
						    '</div>'+
						  '</div>'+
						'</form>';
	$( ".filteritem" ).draggable({
		revert:true	
	});
    $( "#stores" ).droppable({
      accept: ".filteritem",
      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active",
      drop: function( event, ui ) {
      	if($(ui.draggable).data("pos") == "customlist"){
	      	$(ui.draggable).data("pos","stores");
	      	var content = $(ui.draggable).data("storecontent");
	      	$(ui.draggable).data("recommendmeal",$(ui.draggable).children(".content").children("form")[0].recommendmeal.value);
	      	$(ui.draggable).data("storedescription",$(ui.draggable).children(".content").children("form")[0].storedescription.value);
	      	$(ui.draggable).children(".content").html(content);
	    }
	        var target = $(ui.draggable);
	      	var droptop = target.position().top;
	    	var dropleft = target.offset().left;
	    	var dropwidth = target.width();
	    	$(this).append($(ui.draggable));
	 		$(ui.draggable).css("left","0");
	 		$(ui.draggable).css("top","0");
	 		console.log(droptop+" "+dropleft);
	 		console.log(target.position().top + " " +target.offset().left)
	 		$(ui.draggable).css("left",dropleft - target.offset().left + 12 + dropwidth/2 - target.width()/2);
	 		$(ui.draggable).css("top",droptop - target.position().top);
 		
      }
    }).sortable();;

    $( "#customlist" ).droppable({
      accept: ".filteritem",
      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active",
      drop: function( event, ui ) {
      	if($(ui.draggable).data("pos") == "stores"){
      		var content = $(ui.draggable).data("anothercontent");
	      	$(ui.draggable).data("storecontent",$(ui.draggable).children(".content").html());
	      	$(ui.draggable).children(".content").html(formhtml);
	      	console.log($(ui.draggable).children(".content").children("form")[0].recommendmeal.value);
	      	if($(ui.draggable).data("recommendmeal") != null)
	      		$(ui.draggable).children(".content").children("form")[0].recommendmeal.value = $(ui.draggable).data("recommendmeal");
	      	if($(ui.draggable).data("storedescription") != null)
	      		$(ui.draggable).children(".content").children("form")[0].storedescription.value = $(ui.draggable).data("storedescription");
      		$(ui.draggable).data("pos","customlist");
	      	var target = $(ui.draggable);
	      	var droptop = target.position().top;
	    	var dropleft = target.position().left;
	    	var dropwidth = target.width();
	    	$(this).append($(ui.draggable));
	 		$(ui.draggable).css("left","0");
	 		$(ui.draggable).css("top","0");
	 		$(ui.draggable).css("left",dropleft - target.offset().left + 12 + $("#statusbuttonwrapper").width() + dropwidth/2 - target.width()/2);
	 		$(ui.draggable).css("top",droptop - target.position().top);
      	}else{
      		var target = $(ui.draggable);
	      	var droptop = target.position().top;
	    	var dropleft = target.position().left;
	    	var dropwidth = target.width();
	    	$(this).append($(ui.draggable));
	 		$(ui.draggable).css("left","0");
	 		$(ui.draggable).css("top","0");
	 		$(ui.draggable).css("left",dropleft - target.position().left + dropwidth/2 - target.width()/2);
	 		$(ui.draggable).css("top",droptop - target.position().top);
      	}
      }
    }).sortable();
});
