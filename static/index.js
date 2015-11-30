$(document).ready(function(){
	$('.ui.dropdown').dropdown();
	$('.item').popup();
	$('.ui.label.transition.visible').popup();
	var logined;
	function outputaboutus(){
		$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "aboutus",
	        	type : "POST",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
	}
	function setnormalbutton(){
		$("#homebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "main",
	        	type : "POST",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
		});
		$("#smallhomebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "main",
	        	type : "POST",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
		});
		$("#aboutusbutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "aboutus",
	        	type : "POST",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
		});
		$("#searchpagebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
		        url : "search",
		        type : "POST",
		        data : {},
		        success : function(data) {
		    		$("#mainscreen").html(data);
		    		$.ajax({
				        url : "tagsearchstore",
				        type : "POST",
				        data : {taglist:$("#searchdropdown").dropdown('get value')},
				        datatype:'json',
				        success : function(data) {
				        	$.each(JSON.parse(data), function(key,value) {
			  					$("#storelist").append(
			  						'<div class="title" style="padding:0;height:42px">'+
									  	'<div style="width:10%;text-align:center;line-height:42px;float:left">'+
									    	(key+1)+
									    '</div>'+
									    '<div style="width:50%;text-align:center;line-height:42px;float:left">'+
									    	value.name+
									    '</div>'+
									    '<div class="bad" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.bad+
									   	'</div>'+
									   	'<div class="good" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.good+
									   	'</div>'+
									'</div>'+
									'<div class="content">'+
									    '<p>'+value.description+'</p>'+
									    '<p style="text-align:right">.....<a href="#">店家完整資訊</a></p>'+
									'</div>'
			  					);
							});
						},
						error : function(xhr,errmsg,err) {
								console.log(xhr.status + ": " + xhr.responseText);
							} 
						});
					},
				error : function(xhr,errmsg,err) {
					console.log(xhr.status + ": " + xhr.responseText);
				} 
			});
		});
		$("#storetemplatebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "search2",
	        	type : "GET",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
		});
		$("#listtemplatebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "searchlist",
	        	type : "GET",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
		});
		$("#createlisttemplatebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "createlist",
	        	type : "GET",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
		});
		$("#smallaboutusbutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "aboutus",
	        	type : "POST",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
		});
	}
	function checklogined(){
		var user = Cookies.get('account');
		if(user){
		logined = true;
			$("#loginmenu").html(
				'<button type="button" class="ui primary button" style="font-size:15px;margin:auto">'+
		    		user+
		        '</button>');
			$("#downmenu").html(
				'<div id="homebutton" class="center aligned column">'+
					'<img src="static/homebutton.png"></img>'+
					'<div style="margin-top:5px">首頁</div>'+
				'</div>'+
			    '<div id="searchpagebutton" data-content="可以進入由標籤搜索店家與清單的頁面" class="center aligned column">'+
			        '<img src="static/searchpage.png"></img>'+
			        '<div style="margin-top:5px">搜尋頁面</div>'+
			    '</div>'+
			    '<div id="givestorebutton" data-content="新增店家的資訊到我們的資料庫，這將會讓其他使用者可以搜尋到你提供的店家" class="center aligned column">'+
			        '<img src="static/givestore.png"></img>'+
			        '<div style="margin-top:5px">提供店家</div>'+
			    '</div>'+
				'<div id="aboutusbutton" class="center aligned column">'+
					'<img src="static/aboutusbutton.png"></img>'+
					'<div style="margin-top:5px">關於我們</div>'+
				'</div>'+
			    '<div id="listpagebutton" data-content="管理你的店家清單，清單內容可以是最常吃的幾個店家、覺得好吃的幾個店家或者是想要推薦別人來吃的店家、都可以附上自己對店家的描述" class="center aligned column">'+
			        '<img src="static/list.png"></img>'+
			        '<div style="margin-top:5px">管理清單</div>'+
			    '</div>'+
				'<div id="logoutbutton" class="center aligned column">'+
		        	'<img src="static/logout.png"></img>'+
		        	'<div style="margin-top:5px">登出</div>'+
		      	'</div>');
				$("#logoutbutton").click(function(){
					Cookies.remove('account');
					checklogined();
				});
				$("#listpagebutton").popup({
					exclusive:true,
			    	hoverable: true, 
			    	position: 'bottom center'
				});
				$("#searchpagebutton").popup({
					exclusive:true,
			    	hoverable: true, 
			    	position: 'bottom center'
				});
		        $("#givestorebutton").popup({
					exclusive:true,
			    	hoverable: true, 
			    	position: 'bottom center'
				});
				$("#smallscalemenu").html(
				'<div class="itemfont item" style="color:white;background-color:#84A8BD;font-size:18px!important;line-height:38px"><img src="static/user.png" style="width:15px"></img>'+user+'</div>'+
				'<div class="ui divider" style="margin-top:0px"></div>'+
	        	'<div class="itemfont item" id="smallhomebutton">吃~吃~吃~~~</div>'+
	            '<div class="itemfont item">搜索美食</div>'+
	            '<div class="itemfont item">提供店家</div>'+
	            '<div class="itemfont item" id="smallaboutusbutton">關於我們</div>'+
	            '<div class="ui divider"></div>'+
	            '<div class="itemfont item">管理美食清單</div>'+
	            '<div class="itemfont item" id="smalllogoutbutton">登出</div>');
					setnormalbutton();
				$("#smalllogoutbutton").click(function(){
					Cookies.remove('account');
					checklogined();
				});
				$('.ui.dropdown').dropdown();
		}else{
			logined = false;
			$("#loginmenu").html(
	    	'<span id="loginbutton" data-toggle="modal" data-target="#myloginmodal">登入</span>'+
	        '<span >|</span>'+
	        '<span id="registerbutton" data-toggle="modal" data-target="#myregistrationmodel">註冊</span>');
	        $("#downmenu").html(
	        	'<div id="homebutton" class="center aligned column">'+
					'<img src="static/homebutton.png"></img>'+
					'<div style="margin-top:5px">首頁</div>'+
				'</div>'+
			    '<div id="searchpagebutton" data-content="可以進入由標籤搜索店家與清單的頁面" class="center aligned column">'+
			        '<img src="static/searchpage.png"></img>'+
			        '<div style="margin-top:5px">搜尋頁面</div>'+
			    '</div>'+
			    '<div id="givestorebutton" data-content="新增店家的資訊到我們的資料庫，這將會讓其他使用者可以搜尋到你提供的店家" class="center aligned column">'+
			        '<img src="static/givestore.png"></img>'+
			        '<div style="margin-top:5px">提供店家</div>'+
			    '</div>'+
				'<div id="aboutusbutton" class="center aligned column">'+
					'<img src="static/aboutusbutton.png"></img>'+
					'<div style="margin-top:5px">關於我們</div>'+
				'</div>'+
				'<div id="storetemplatebutton" class="center aligned column">'+
					'<img src="static/template.png"></img>'+
					'<div style="margin-top:5px">店家前端</div>'+
				'</div>'+
				'<div id="listtemplatebutton" class="center aligned column">'+
					'<img src="static/template.png"></img>'+
					'<div style="margin-top:5px">清單前端</div>'+
				'</div>'+
				'<div id="createlisttemplatebutton" class="center aligned column">'+
					'<img src="static/template.png"></img>'+
					'<div style="margin-top:5px">建立清單</div>'+
				'</div>');
	        $("#searchpagebutton").popup({
				exclusive:true,
		    	hoverable: true, 
		    	position: 'bottom center'
			});
	        $("#givestorebutton").popup({
				exclusive:true,
		    	hoverable: true, 
		    	position: 'bottom center'
			});
	        $("#smallscalemenu").html(
	        	'<div class="itemfont item" id="smallhomebutton">吃~吃~吃~~~</div>'+
	            '<div class="itemfont item">搜索美食</div>'+
	            '<div class="itemfont item">提供店家</div>'+
	            '<div class="itemfont item" id="smallaboutusbutton">關於我們</div>'+
	            '<div class="ui divider"></div>'+
	            '<div class="itemfont item" data-toggle="modal" data-target="#myloginmodal">登入</div>'+
	            '<div class="itemfont item" data-toggle="modal" data-target="#myregistrationmodel">註冊</div>');
	        setnormalbutton();
	        $('.ui.dropdown').dropdown();
		}
	}
	checklogined();
	function loading(){
		$("#loading5").css("background-color","#C0DFF2");
		$("#loading1").css("background-color","#84A8BD");
		setTimeout(function(){
			$("#loading5").css("background-color","#84A8BD");
			$("#loading4").css("background-color","#C0DFF2");
		},100);
		setTimeout(function(){
			$("#loading4").css("background-color","#84A8BD");
			$("#loading3").css("background-color","#C0DFF2");
		},200);
		setTimeout(function(){
			$("#loading3").css("background-color","#84A8BD");
			$("#loading2").css("background-color","#C0DFF2");
		},300);
		setTimeout(function(){
			$("#loading2").css("background-color","#84A8BD");
			$("#loading1").css("background-color","#C0DFF2");
			setTimeout(function(){
				if($("#loading1").length)
					loading();
			},100);
		},400);
	}
	$("#errormessagemodal").css("width",300);
	$("#messagemodal").css("width",300);
	$("#loginmodal").css("margin-top",$(window).height()/2-240);
	$("#registrationmodal").css("margin-top",$(window).height()/2-250);
	$("#errormessagemodal").css("margin-top",$(window).height()/2-170);
	$("#messagemodal").css("margin-top",$(window).height()/2-170);
	function checkwindow(){
		if($(window).width() <= 860){
			$("#menu").unbind();
		}else if($(window).width() > 860){
			if($._data(document.getElementById('menu'), "events")){
			}else{
				$("#menu").mouseenter(function(e){
						$("#downmenu").css("visibility","visible");
						if($("#menu").is(':animated')){
							$("#menu").stop();
						}
						$("#menu").animate({
							height: 165
						},150);
				}).mouseleave(function(){
						$("#downmenu").css("visibility","hidden");
						if($(this).is(':animated')){
							$(this).stop();
						}
						$("#menu").animate({
								height: 74
							},150);
				});
			}
		}
	}

	$("#searchbar").resize(function(){
		menubeginheight = 74 + 60 - $("#searchbar").height();
		menuafterheight = 165  + 60 - $("#searchbar").height();
		console.log("1");
	});
	$(window).resize(function() {
		checkwindow();
	});
	var csrftoken = Cookies.get('csrftoken');
	function csrfSafeMethod(method) {
    	// these HTTP methods do not require CSRF protection
    	return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}
	$.ajaxSetup({
    	beforeSend: function(xhr, settings) {
        	if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            	xhr.setRequestHeader("X-CSRFToken", csrftoken);
        	}
    	}
	});
	$("#loginsubmitbutton").click(function(){
		if($("#loginusrname").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("帳號不可以為空");
		}else if($("#loginpsw").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("密碼不可以為空");
		}else{
			$("#loginmenu").html('<div id="loading1"></div><div id="loading2"></div><div id="loading3"></div><div id="loading4"></div><div id="loading5"></div>');
			loading();
    		$.ajax({
        		url : "login/",
        		type : "POST",
        		data : { accountnumber : $('#loginusrname').val() , password : $("#loginpsw").val()},
        		success : function(json) {
    				if(json.exist){
    					checklogined();
    					$('#myloginmodal').modal('toggle');
    					$('#mymessagemodal').modal('toggle');
						$("#messagecontent").html("登入成功");
    				}else{
    					$("#loginmenu").html(
    					'<span id="loginbutton" data-toggle="modal" data-target="#myloginmodal">登入</span>'+
	        			'<span >|</span>'+
	        			'<span id="registerbutton" data-toggle="modal" data-target="#myregistrationmodel">註冊</span>');
         				$('#myerrormessagemodal').modal('toggle');
						$("#errormessagecontent").html('帳號或密碼輸入錯誤');
    				}
       			},
        		error : function(xhr,errmsg,err) {
            		console.log(xhr.status + ": " + xhr.responseText);
        		}
        	
    		});
    	}
	});
	$("#registersubmitbutton").click(function(){
		if($("#registerusrname").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("帳號不可以為空");
		}else if($("#registerpsw").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("密碼不可以為空");
		}else if($("#registeremail").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("電子郵件不可以為空");
		}else{
			$("#loginmenu").html('<div id="loading1"></div><div id="loading2"></div><div id="loading3"></div><div id="loading4"></div><div id="loading5"></div>');
			loading();
    		$.ajax({
        		url : "register/",
        		type : "POST",
        		data : { accountnumber : $('#registerusrname').val() , password : $("#registerpsw").val() , email : $("#registeremail").val()},
        		success : function(json) {
    				if(json.exist){
    					$("#loginmenu").html(
		    				'<span id="loginbutton" data-toggle="modal" data-target="#myloginmodal">登入</span>'+
					        '<span >|</span>'+
					        '<span id="registerbutton" data-toggle="modal" data-target="#myregistrationmodel">註冊</span>');
    					$('#myerrormessagemodal').modal('toggle');
						$("#errormessagecontent").html("該帳號已經被註冊！");
    				}else{
    					$('#myregistrationmodel').modal('toggle');
    					$('#mymessagemodal').modal('toggle');
						$("#messagecontent").html("註冊成功");
						checklogined();
    				}
       			},
        		error : function(xhr,errmsg,err) {
            		console.log(xhr.status + ": " + xhr.responseText);
        		}
    		});
		}
	});
    $.ajax({
        url : "alltag",
        type : "POST",
        data : {},
        success : function(data) {
    		$("#searchdropdownmenu").html("");
    		$.each(JSON.parse(data), function(key,value) {
			  	$("#searchdropdownmenu").append('<div class="item" data-value="'+value.id+'" data-title="'+value.name+'" data-content="'+value.description+'">'+value.name+'</div>');
			});
			$('.item').popup({
				exclusive:true,
		    	hoverable: true, 
		    	position: 'bottom center'
			});
       	},
        error : function(xhr,errmsg,err) {
           	console.log(xhr.status + ": " + xhr.responseText);
        } 
    });
	$('#searchdropdown').popup({
		exclusive:true,
    	hoverable: true, 
    	position: 'bottom center'
	});
	$.ajax({
	        	url : "searchlist",
	        	type : "GET",
	        	data : {store:1},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
	checkwindow();
	$("#searchbutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
		        url : "search",
		        type : "POST",
		        data : {},
		        success : function(data) {
		    		$("#mainscreen").html(data);
		    		var taglist;
					if($("#searchdropdown").dropdown('get value') == ""){
						taglist = [];
					}else{
						taglist = $("#searchdropdown").dropdown('get value').split(',');
					}
		    		$.ajax({
				        url : "tagsearchstore",
				        type : "POST",
				        data : {taglist:$("#searchdropdown").dropdown('get value')},
				        success : function(data) {
				        	$.each(JSON.parse(data), function(key,value) {
			  					$("#storelist").append(
			  						'<div class="title" style="padding:0;height:42px">'+
									  	'<div style="width:10%;text-align:center;line-height:42px;float:left">'+
									    	(key+1)+
									    '</div>'+
									    '<div style="width:50%;text-align:center;line-height:42px;float:left">'+
									    	value.name+
									    '</div>'+
									    '<div class="bad" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.bad+
									   	'</div>'+
									   	'<div class="good" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.good+
									   	'</div>'+
									'</div>'+
									'<div class="content">'+
									    '<p>'+value.description+'</p>'+
									    '<p style="text-align:right">.....<a href="#">店家完整資訊</a></p>'+
									'</div>'
			  					);
							});
						},
						error : function(xhr,errmsg,err) {
								console.log(xhr.status + ": " + xhr.responseText);
							} 
						});
					$.ajax({
				        url : "tagsearchlist",
				        type : "POST",
				        data : {taglist:$("#searchdropdown").dropdown('get value')},
				        success : function(data) {
				        	$.each(JSON.parse(data), function(key,value) {
			  					$("#listlist").append(
			  						'<div class="title" style="padding:0;height:42px">'+
									  	'<div style="width:10%;text-align:center;line-height:42px;float:left">'+
									    	(key+1)+
									    '</div>'+
									    '<div style="width:50%;text-align:center;line-height:42px;float:left">'+
									    	value.name+
									    '</div>'+
									    '<div class="bad" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.bad+
									   	'</div>'+
									   	'<div class="good" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.good+
									   	'</div>'+
									'</div>'+
									'<div class="content">'+
									    '<p>'+value.description+'</p>'+
									    '<p style="text-align:right">.....<a href="#">清單完整資訊</a></p>'+
									'</div>'
			  					);
							});
						},
						error : function(xhr,errmsg,err) {
								console.log(xhr.status + ": " + xhr.responseText);
							} 
						});
				},
				error : function(xhr,errmsg,err) {
					console.log(xhr.status + ": " + xhr.responseText);
				} 
			});
		});
});
