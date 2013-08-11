$(document).ready(init);

function init() {
	$("input.answer").focus();
	$("input.answer").keyup(evaluate);
	hideCongrats();

	counter = -1;
	next();
}

function evaluate(e) {
	if (e.keyCode === 13 && correctAnswer()) {
		next();
		hideCongrats();
		return;
	} else if(correctAnswer()) {
		showCongrats();
	}

	var word = list[counter];
	var answer = $("input.answer").val();
	var minLength = _.min([word.length, answer.length]);

	$(".hint").text("");	

	for(i = 0; i < minLength; i++) {
		var correctLetter = word.charAt(i);
		var typedLetter = answer.charAt(i);

		if(correctLetter === typedLetter) {
			add_hint_letter(correctLetter);
		} else {
			add_hint_letter("_");
		}
	}
}

function add_hint_letter(letter) {
	$(".hint").text($(".hint").text() + letter);	
}

function correctAnswer() {
	return $(".answer").val() === list[counter];
}

function next() {
	increment_counter();
	$(".hint").text("");
	$(".answer").val("");
	$(".dotsies").text(list[counter]);
}

function increment_counter() {
	counter = Math.floor(Math.random() * list.length);
}

function showCongrats() {
	$(".alert").removeClass("hidden");
	console.log("rm hid")
}

function hideCongrats() {
	$(".alert").addClass("hidden");
	console.log("add hid")
}
