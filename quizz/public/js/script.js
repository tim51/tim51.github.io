function server()
{
   xmlhttp = new XMLHttpRequest();
   xmlhttp.open("GET","http://localhost:8001/getQuizData", true);
   xmlhttp.onreadystatechange=function(){
         if (xmlhttp.readyState==4 && xmlhttp.status==200){
           document.getElementById("questionNumber").innerHTML = JSON.parse(xmlhttp.responseText);
         }
   }
   xmlhttp.send();
}

function beginQuiz(quizData) {

    var question;
    var questionNumber;
    var answer;
    var userAnswer;

    for (var question = 0; question < 2; question++) {
        questionNumber = question + 1;

        document.addEventListener("click", function(){
            document.getElementById("questionNumber").innerHTML = questionNumber;
            server();

        });
    }
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

document.getElementById("nextQuestionButton")

beginQuiz();
