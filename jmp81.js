var correct=0,wrong=0,unattempted=0,score=0;
var key=['d','c','c','a','a','b','b','b','d','b',
		 'a','d','c','d','c','c','a','d','a','b',
		 11,10,175,60,600,'a','a','a','c','a',
		 'a','c','a','c','c','d','a','c','c','b',
		 'b','a','d','b','d',-2.7,23.03,2,10.5,1.67,
		 'a','b','b','b','a','a','b','c','b','d',
		 'b','c','c','c','b','c','c','d','b','b',
		 3,18,5,36,30];


//$(document).ready(function(){
	$('.question').hide();
	$('#buttongroup').hide();
	$('#instructions').show();
	$('#start').click(function(){
		$('.question').hide();
		$('#q1').show();
		$('#instructions').hide();
		$('#buttongroup').show();
	});

	$('.question #next').click(function(){
	 current=$(this).parents('form:first').data('question');
	// alert(current);
	 next=parseInt(current)+1;
	 //alert(next);
	$('.question').hide();
	$('instructions').hide();
	if(next<75)
	$('#q'+next+'').show(300);
	else{
		evaluate();
	}
	return false;
});




function evaluate(){
	for(i=0;i<75;i++)
	{n=i+1;
		var submitted= $('input[name'+n+']:checked').val();
		if(submitted=key[i])
			correct++;
		else if(submitted=undefined)
			unattempted++;
		else
			wrong++;
	}
	score=correct*4-wrong*1;
	$('#result').html('<h2>Your score is'+score+'</h2>');
	$('#question').hide();
	$('#buttongroup').hide();

}

$('#buttongroup .col-3').click(function(){
	var a = $(this).text();
	var b= '#q'+a;
	alert(b);
	$('.question').hide();
	$(b).show();
});






//});		 

//$('.question #next').click(function(){
//	var current=$(this).parents('form:first').data('question');
//	var next=parseInt(current)+1;
//	$('.question').hide();
//	$('#q'+next+'').fadeIn(300);
//	return false;
//});


/*$(document).ready(function(){
	//Hide all questions
	$('.question').hide();
	
	//Show first question
	$('#q1').show();
	
	$('.question #next').click(function(){
		//Get data attributes
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question')+1;
		//Hide all questions
		$('.question').hide();
		//Show next question
		id='#q1'+next;
		alert(id);
		$(id).show(300);
		//process(''+current+'');
		return false;
	});
});*/





