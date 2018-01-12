function beginQuiz(quizData) {

    var question;
    var questionNumber;
    var answer;
    var userAnswer;

    req = new XMLHttpRequest();
    req.onreadystatechange=function(){
        if (req.readyState==4 && req.status==200){
           console.log(req.responseText);
        }
    }
    req.open("GET","http://localhost:8001/getQuizData", true);
    req.send();
}
function getRandomQuestionFrom(questions) {
    question = Math.floor(questions.length*Math.random);
    
}
function checkAnswer(question) {
    return question.answer == userAnswer;
}
function changeElementProperty(element,property,value) {
    element.property = value;
}

beginQuiz();
