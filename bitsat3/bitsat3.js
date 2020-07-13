var correct=0,wrong=0,unattempted=0;//score=0;
var key=['c','b','c','b','c','a','b','a','a','c',
		 'd','a','a','a','b','a','b','b','b','c',
		 'd','d','c','d','b','a','a','c','d','c',
		 'd','a','b','b','b','a','b','a','d','a',
		 'c','b','d','c','c','a','d','a','d','b',
		 'a','b','c','d','b','d','a','a','a','c',
		 'd','b','a','a','d','b','c','a','a','a',
		 'a','c','c','b','c','c','c','c','a','a','a','a','a','c','a',//85
		 'b','c','a','a','a','c','b','d','c','a',
		 'a','c','a','c','b','b','a','a','d','a',//105
		 'b','d','c','a','a','a','c','b','a','a',
		 'c','a','a','a','a','d','a','d','d','b',//125
		 'a','b','a','c','d','a','b','d','d','a',
		 'a','c','b','a','b','c','c','b','b','b',
		 'a','a','b','d','d'];
var wa=[];		 


//$(document).ready(function(){
	$('.question').hide();
	$('#timer').hide();
	$('#buttongroup').hide();
	$('#instructions').show();
	$('#start').click(function(){
		$('.question').hide();
		$('#q1').show();
		$('#instructions').hide();
		$('#buttongroup').show();
		$('#timer').show();
		$('#time').html(180);


	});
var time=180;
	setInterval("updatetime()",60000);
	function updatetime(){
		time--;
		$('#time').html(time);
		if(time<=0){
			evaluate();
		}
	}

	$('.question #next').click(function(){
	 current=$(this).parents('form:first').data('question');
	// alert(current);
	 next=parseInt(current)+1;
	 //alert(next);
	$('.question').hide();
	$('instructions').hide();
	if(next<=150)
	$('#q'+next+'').show(300);
	else{
		evaluate();
	}
	return false;
});




function evaluate(){
	for(i=0;i<150;i++)
	{n=i+1;
		var submitted = $('input[name=q'+n+']:checked').val();
		if(submitted == key[i])
			correct++;
		else if(submitted==undefined)
			unattempted++;
		else{
			wrong++;
				wa.push(n);
				//alert(n);
		}
		
		}

		var score=(correct*3)-wrong*1;
	
	
	//alert(correct);
	var score=(correct*3)-wrong*1;
	$('#result').html('<h2>Your score is '+score+'</h2><br><br><h3 class="text-danger">Negative Markers</h3>');
	$('.question').hide();
	$('#buttongroup').hide();
	$('#timer').hide();
	var l= wa.length;
	for(j=0;j<l;j++)
	{	var k= wa[j];
		//alert('k'+k);
		var q='#q'+k;
		var qa=$('input[name=q'+k+']:checked').val();
		$(q).append('<h2>Your answer was '+qa+' while the correct answer is '+key[j]+'</h2><br><hr><br>');
		$(q).show();
		var hidenext = q+' #next';
		$(hidenext).hide();
		var clearhide = q+' input[type=reset]';
		$(clearhide).hide();
	}

}


$('#buttongroup .col-3').click(function(){
	var a = $(this).text();
	var b= '#q'+a;
	//alert(b);
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





