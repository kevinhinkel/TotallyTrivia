$('#start').on('click',function(){
	game.start();
})

$(document).on('click','#end',function(){
	game.done();
})

var questions =[{
	question:"Which sport is the official winter sport of Canada?",
	answers:["Curling", "Broomball", "Skiing", "Ice Hockey"],
	correctAnswer: "Ice Hockey"
},	{
	question:"How many oceans border Canada?",
	answers:["One", "Two", "Three", "Four"],
	correctAnswer: "Three"
},	{
	question:"In which Canadian city was poutine invented?",
	answers:["Quebec", "New Brunswick", "Ontario", "Nova Scotia"],
	correctAnswer: "Quebec"
},	{
	question:"Which of the following indie rock bands is from Canada?",
	answers:["The Shins", "The Kooks", "Bloc Party", "Wolf Parade"],
	correctAnswer: "Wolf Parade"
},	{
	question:"Which of these artists was not actually part of the Group of Seven?",
	answers:["Franklin Carmichael", "J.E.H. MacDonald", "A.Y. Jackson", "Tom Thomson"],
	correctAnswer: "Tom Thomson"
},	{
	question:"What animal is on the Canadian quarter?",
	answers:["Beaver", "Loon", "Caribou", "Wolf"],
	correctAnswer: "Caribou"
},	{
	question:"What is the capital city of Canada?",
	answers:["Montreal", "Vancouver", "Ottawa", "Winnipeg"],
	correctAnswer: "Ottawa"
},	{
	question:"What is the most popular Canadian food/beverage franchise?",
	answers:["Second Cup", "Pizza Pizza", "Tim Hortons", "Booster Juice"],
	correctAnswer: "Tim Hortons"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 45,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("Time is up!");
			game.done();
		}
	},
	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">45</span> Seconds</h2>');
		$('#start').remove();
		for(var i=0;i<questions.length;i++){
			$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
			for(var j=0; j<questions[i].answers.length;j++){
				$("#subwrapper").append("<input type='radio' name='question-"+i+"' value ='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
			}
		}
		$('#subwrapper').append('<br><button id="end">DONE</button>');
	},
	done: function(){
		$.each($('input[name="question-0"]:checked'),function(){
			if($(this).val()==questions[0].correctAnswer){
			game.correct++;
			} else {
			game.incorrect++;
			}
		});
		$.each($('input[name="question-1"]:checked'),function(){
			if($(this).val()==questions[1].correctAnswer){
			game.correct++;
			} else {
			game.incorrect++;
			}
		});
		$.each($('input[name="question-2"]:checked'),function(){
			if($(this).val()==questions[2].correctAnswer){
			game.correct++;
			} else {
			game.incorrect++;
			}
		});
		$.each($('input[name="question-3"]:checked'),function(){
			if($(this).val()==questions[3].correctAnswer){
			game.correct++;
			} else {
			game.incorrect++;
			}
		});
		$.each($('input[name="question-4"]:checked'),function(){
			if($(this).val()==questions[4].correctAnswer){
			game.correct++;
			} else {
			game.incorrect++;
			}
		});
		$.each($('input[name="question-5"]:checked'),function(){
			if($(this).val()==questions[5].correctAnswer){
			game.correct++;
			} else {
			game.incorrect++;
			}
		});
		$.each($('input[name="question-6"]:checked'),function(){
			if($(this).val()==questions[6].correctAnswer){
			game.correct++;
			} else {
			game.incorrect++;
			}
		});
		$.each($('input[name="question-7"]:checked'),function(){
			if($(this).val()==questions[7].correctAnswer){
			game.correct++;
			} else {
			game.incorrect++;
			}
		});

		this.result();
		},

		result: function(){
			clearInterval(timer);
			$('#subwrapper h2').remove();
			$('#subwrapper').html("<h2>All done!</h2>");
			$('#subwrapper').append("<h3>Correct Answers:" +this.correct+"</h3>");
			$('#subwrapper').append("<h3>Incorrect Answers:" +this.incorrect+"</h3>");
			$('#subwrapper').append("<h3>Unanswered:" +(questions.length-(this.incorrect+this.correct))+"</h3>");
		}
}





