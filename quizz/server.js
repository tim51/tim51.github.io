var http = require('http'),
      fs = require('fs'),
     url = require('url');

http.createServer(function(request, response){
    var path = url.parse(request.url).pathname;
    if(path=="/getQuizData") {
      var quizData = generateQuiz("world_cities");
      console.log(quizData);
      response.writeHead(200, { 'Content-Type': 'application/json'});
      response.write((quizData), "utf-8");
    }
    if(path=="/css/style.css"){
      fs.readFile("./public/css/style.css", function(err, file) {
        if (err) {
          console.log(err);
          return;
        }
        response.writeHead(200, { 'Content-Type': 'text/css'});
        response.end(file, "utf-8");
      })
    }
    else if(path=="/js/script.js") {
      fs.readFile("./public/js/script.js", function(err, file) {
        if (err) {
          console.log(err);
          return;
        }
        response.writeHead(200, { 'Content-Type': 'application/javascript'});
        response.end(file, "utf-8");
      })
    }
    else{
      fs.readFile("./public/index.html", function(err, file) {  
          if(err) {  
              console.log("error");
              console.log(err);
              return;  
          }  
          response.writeHead(200, { 'Content-Type': 'text/html' });  
          response.end(file, "utf-8");  
      });
    }
}).listen(8001);
console.log("server initialized");



var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "tim",
  password: "myequal13A",
  database: "quiz"
});

function generateQuiz(quizType) {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var quizData;
    var query;

    if(true) {
      query =   "SELECT city , country FROM quiz.world_cities"
                  + " ORDER BY RAND()" 
                  + "LIMIT 10"
    }

    con.query(query, function (err, result, fields) {
      if (err) throw err;
      quizData = result;
    });
    con.end();
    console.log("disconnected");
    return quizData;
  });


}
