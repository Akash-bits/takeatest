var score=0;
var correct=0;
var wrong=0;
var unattemted=0;


var a = ['a','b','c','d'];


//window.onload = function() {
//		if(window.jQuery)
//	}
//	else {
//		alert('no');
//	}
//} 



$(document).ready(function() {



	$('.question').hide();
	$('#q1').show();

	$('#q1 #next').click(function(){
		$('.question').hide();
		$('#q2').fadeIn(300);return false;
	});

		$('#q2 #next').click(function(){
		$('.question').hide();
		$('#q3').fadeIn(300);return false;
	});

	$('#q3 #next').click(function(){
		$('.question').hide();
		$('#q4').fadeIn(300);return false;});

	
	//$('#q4 #submit').click(function(){
	//	$('.question').hide();
	//	$('#q5').fadeIn(300);
	//})

	$('#q4 #next').click(function(){
		$('.question').hide();
		
		process();
		$('#result').html('<p>Your score is'+correct+'</p>');
		$('#result').fadeIn(300);
		return false;
	});	

});


function process(){
	var a1=$('input[name=q1]:checked').val();
	if(a[0]==a1){
		correct++;
	}


	var a2=$('input[name=q2]:checked').val();
	if(a[1]==a2){
		correct++;
	}
	var a3=$('input[name=q3]:checked').val();
	if(a[2]==a3){
		correct++;
	}
	var a4=$('input[name=q4]:checked').val();
	if(a[3]==a4){
		correct++;
	}


}