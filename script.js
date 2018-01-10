function beginQuiz() {

    var question;
    var questionNumber;
    var answer;
    var userAnswer;

    for (var question = 0; question < question.length; question++) {
        questionNumber = question + 1;

        document.getElementById(questionNumber);
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