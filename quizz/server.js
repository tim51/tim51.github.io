var http = require('http');
var fs = require('fs');
var url = require('url');
var quizManager = require("./quizManager.js");

http.createServer(function(request, response){
    try {
      var path = url.parse(request.url).pathname;

      if(path.startsWith("/quiz/")) {
        generateQuiz(path.slice(path.indexOf("/",1)+1)).then(function (succeedMessage) {
            response.writeHead(200, { 'Content-Type': 'application/json'});
            response.end(JSON.stringify(succeedMessage), "utf-8");
        })
      }
      else if(path.startsWith("/submitAnswers/")) {
          var jsonString = '';
          request.on('data', function (data) {
            jsonString = getScore(JSON.parse(data)).then(function(resolved) {
              jsonString = JSON.stringify(resolved);
              response.writeHead(200, { 'Content-Type': 'application/json'});
              response.end(JSON.stringify(resolved), "utf-8");
            })
          });
          request.on('end', function () {
          });
      }
      else if(path=="/css/style.css"){
        fs.readFile("./public/css/style.css", function(err,file) {
          response.writeHead(200, { 'Content-Type': 'text/css'});
          response.end(file, "utf-8");
        })
      }
      else if(path=="/js/script.js") {
        fs.readFile("./public/js/script.js", function(err, file) {
          response.writeHead(200, { 'Content-Type': 'application/javascript'});
          response.end(file, "utf-8");
        })
      }
      else{
        fs.readFile("./public/index.html", function(err, file) {  
            response.writeHead(200, { 'Content-Type': 'text/html' });  
            response.end(file, "utf-8");  
        });
      }
    }
    catch (error) {
      console.log(error);
    }
}).listen(8080);
console.log("server initialized");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function getScore(answers) {
  return new Promise(function(resolve,response) {
    //GENERATE QUERY
    var query = "SELECT question, correct_answer FROM quiz.questions WHERE"
    for (var i = 0; i < answers.length; i++) {
      query += " (question LIKE '%"+answers[i].question+"%' AND correct_answer LIKE '%"+answers[i].answer+"%')";
      if (i < answers.length-1) {
        query += " OR"
      }
    }
    //GET FROM DATABASE
    try {
      var mysql = require('mysql');
      var question;
      var answer;
      var con = mysql.createConnection({
        host: "localhost",
        user: "tim",
        password: "myequal13A",
        database: "quiz"
      });
      con.connect();
      con.query(query, function(err,result,fields) {
        resolve(result);
      })
    }
    catch (error){
      console.log(error);
    }
  })
}


/*
quizManager.addQuiz({
  "title": "basic math",
  "author": "Tim",
  "questions": [
      {
          "question":"What is 5*7?",
          "answers": [{
              "answer": 34,
              "correct": 0
          }, {
              "answer": 35,
              "correct": 1 
          }]
      },{
          "question":"What is 4*3?",
          "answers": [{
              "answer": 12,
              "correct": 1
          }, {
              "answer": 10,
              "correct": 0 
          }]
      }]
})
*/

