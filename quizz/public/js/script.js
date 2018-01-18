var quiz;
var questionNumber;
var userAnswers = [];

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
        http = new XMLHttpRequest();
        http.onreadystatechange=function(){
            if (http.readyState==4 && http.status==200){
                resolve(JSON.parse(http.responseText));
            }
        }
        http.open("GET","http://localhost:8080/getQuiz/"+quiz, true);
        http.send();
    }).catch(function(err) {
        console.log(err);
    })
}

function startQuiz(quiz) {
    this.quiz = quiz;
    this.questionNumber = 0;
    this.userAnswers = [];

    getNextQuestion();
}

function getNextQuestion() {
    questionNumber += 1;
    if (questionNumber > quiz.length) {
        console.log(userAnswers);
        endquiz();
    }
    else {
        questionLabel.innerHTML = quiz[questionNumber-1].question;
        answerAButton.innerHTML = quiz[questionNumber-1].correct_answer;
        answerBButton.innerHTML = quiz[questionNumber-1].correct_answer;
        answerCButton.innerHTML = quiz[questionNumber-1].correct_answer;
        answerDButton.innerHTML = quiz[questionNumber-1].correct_answer;
    }
}

function chooseAnswer(answer) {
    userAnswers.push({
        "Question": quiz[questionNumber-1].question,
        "Answer": answer
    })
}

function endQuiz() {
    return new Promise(function (resolve,response) {
        http = new XMLHttpRequest();

        http.onreadystatechange=function(){
            if (http.readyState==4 && http.status==200){
                resolve(JSON.parse(http.responseText));
            }
        }
        http.open("POST","http://localhost:8080/evaluateAnswers/", true);
        http.setRequestHeader("Content-type", "application/JSON");
        http.send(JSON.stringify(userAnswers));
    }).catch(function(err) {
        console.log(err);
    })
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
        var quizName = "cities";
        getQuiz(quizName).then(function(resolved) {
            console.log(resolved);
            quizNameLabel.innerHTML = quizName;
            startQuiz(resolved);
        })
    });

    answerAButton.addEventListener("click", function(event) {
        chooseAnswer(answerBButton.innerHTML);
        getNextQuestion();
    })
    answerBButton.addEventListener("click", function(event) {
        chooseAnswer(answerBButton.innerHTML);
        getNextQuestion();
    })
    answerCButton.addEventListener("click", function(event) {
        chooseAnswer(answerCButton.innerHTML);
        getNextQuestion();
    })
    answerDButton.addEventListener("click", function(event) {
        chooseAnswer(answerDButton.innerHTML);
        getNextQuestion();
    })

    /* for compatibility
    button.addEventListener("click", {
        handleEvent: function (event) {
            getQuiz("cities");
        }
    });*/
}




