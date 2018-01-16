var quizName;
var quizFormat;
var quiz;

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
    return new Promise(function (resolve,response) {
        req = new XMLHttpRequest();
        req.onreadystatechange=function(){
            if (req.readyState==4 && req.status==200){
                resolve(JSON.parse(req.responseText));
            }
        }
        req.open("GET","http://localhost:8080/getQuiz/"+quiz, true);
        req.send();
    }).catch(function(err) {
        console.log(err);
    })
}

function startQuiz(quiz) {
    var questionNumber = 1;
    questionLabel.innerHTML = quiz[questionNumber-1].question;
    answerAButton.innerHTML = quiz[questionNumber-1].correct_answer;
}
//Dont need anymore
/*
function extractQuizData(quizData) {
    quizFormat = quizData[0].quizFormat;

    if (quizFormat.startsWith("multipleChoice")) {  //Multiple choice only takes 1to9;
        for (var choice=0; choice<quizFormat[-1]; i++) {
            for (var row = 1; row < quizData.length; row++) {

            }
        }
    }
}
*/

window.onload = function() {
     
    questionNumberLabel = document.getElementById('quesionNumberLabel');
    quizNameLabel = document.getElementById('quizNameLabel');
    questionLabel = document.getElementById('questionLabel');
    answerAButton = document.getElementById('answerAButton');
    answerBButton = document.getElementById('answerBButton');
    answerCButton = document.getElementById('answerCButton');
    answerDButton = document.getElementById('answerDButton');
    nextQuestionButton = document.getElementById('nextQuestionButton');

    nextQuestionButton.addEventListener("click", function(event) {
        getQuiz("ffff").then(function(resolved) {
            console.log(resolved);
            startQuiz(resolved);
        })
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
        quizAnswers= [];
    }
    quizAnswers.push(new {
        "Question": question,
        "Answer": answer
    })
}


