function getQuizData(quiz) {
    console.log("click");
    req = new XMLHttpRequest();
    req.onreadystatechange=function(){
        if (req.readyState==4 && req.status==200){
           console.log(req.responseText);
        }
    }
    req.open("GET","http://localhost:8001/getQuiz/"+quiz, true);
    req.send();
}

window.onload = function() {
    var button = document.getElementById('nextQuestionButton')
    button.addEventListener("click", function(event) {
        getQuizData("cities");
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


