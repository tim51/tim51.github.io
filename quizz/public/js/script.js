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
        http.open("GET","http://localhost:8080/quiz/"+quiz, true);
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
        endQuiz().then(function(succeed) {
            console.log(succeed);
        })
    }
    else {
        questionLabel.innerHTML = quiz[questionNumber-1].question;
        answerAButton.innerHTML = quiz[questionNumber-1].answerA;
        answerBButton.innerHTML = quiz[questionNumber-1].answerA;
        answerCButton.innerHTML = quiz[questionNumber-1].answerA;
        answerDButton.innerHTML = quiz[questionNumber-1].answerA;
    }
}

function chooseAnswer(answer) {
    userAnswers.push({
        "question": quiz[questionNumber-1].question,
        "answer": answer
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
        http.open("POST","http://localhost:8080/submitAnswers/", true);
        http.setRequestHeader("Content-type", "application/JSON");
        http.send(JSON.stringify(userAnswers));
    }).catch(function(err) {
        console.log(err);
    })
}

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




