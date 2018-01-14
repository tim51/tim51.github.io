var quizName;
var quizFormat;
var quiz;
var quizAnswers;

//PAGE ELEMENTS
var questionLabel;
var questionNumberLabel;
var quizNameLabel;
var answerAButton, 
    answerBButton, 
    answerCButton, 
    answerDButton;
var nextQuestionButton;

function getQuiz(quiz) {
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

function extractQuizData(quizData) {
    quizFormat = quizData[0].quizFormat;

    if (quizFormat.startsWith("multipleChoice")) {  //Multiple choice only takes 1to9;
        for (var choice=0; choice<quizFormat[-1]; i++) {
            for (var row = 1; row < quizData.length; row++) {

            }
        }
    }
}

window.onload = function() {
     
    questionNumberLabel = document.getElementById('quesionNumberLabel')
    quizNameLabel = document.getElementById('quizNameLabel');
    questionLabel = document.getElementById('questionLabel');
    answerAButton = document.getElementById('answerAButton');
    answerBButton = document.getElementById('answerBButton');
    answerCButton = document.getElementById('answerCButton');
    answerDButton = document.getElementById('answerDButton');
    nextQuestionButton = document.getElementById('nextQuestionButton');

    nextQuestionButton.addEventListener("click", function(event) {
        getQuiz("world_cities");
    });

    /* for compatibility
    button.addEventListener("click", {
        handleEvent: function (event) {
            getQuiz("cities");
        }
    });*/
}

function chooseAnswer(answer) {
    if (!quizAnswers) {
        quizAnswers= new Array[];
    }
    quizAnswers.push(new {
        "Question": question,
        "Answer": answer
    })
}



function getRandomQuestionFrom(questions) {
    question = Math.floor(questions.length*Math.random);
    
}
function checkAnswer(question) {
    return question.answer == userAnswer;
}


