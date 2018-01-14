var quizName;
var question;
var correctAnswer;
var answerA, answerB, answerC, answerD;
var nextQuestionButton;

function getQuizData(quiz) {
    req = new XMLHttpRequest();
    req.onreadystatechange=function(){
        if (req.readyState==4 && req.status==200){
           console.log(req.responseText);
           return req.responseText;
        }
    }
    req.open("GET","http://localhost:8080/getQuiz/"+quiz, true);
    req.send();
}

window.onload = function() {
    nextQuestionButton = document.getElementById('nextQuestionButton')
    nextQuestionButton.addEventListener("click", function(event) {
        getQuizData("world_cities");
    });
    /* for compatibility
    button.addEventListener("click", {
        handleEvent: function (event) {
            getQuizData("cities");
        }
    });*/
}



function getRandomQuestionFrom(questions) {
    question = Math.floor(questions.length*Math.random);
    
}
function checkAnswer(question) {
    return question.answer == userAnswer;
}


