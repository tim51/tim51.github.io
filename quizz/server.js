var http = require('http'),
      fs = require('fs'),
     url = require('url');

http.createServer(function(request, response){
    var path = url.parse(request.url).pathname;

    if(path=="/getQuizData") {
      generateQuiz().then(function (succeedMessage) {
          console.log("data sent:");
          console.log(succeedMessage);
          response.writeHead(200, { 'Content-Type': 'application/json'});
          response.end(JSON.stringify(succeedMessage), "utf-8");
          console.log("done");
      })
    }

    else if(path=="/css/style.css"){
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
              console.log(err);
              return;  
          }  
          response.writeHead(200, { 'Content-Type': 'text/html' });  
          response.end(file, "utf-8");  
      });
    }
}).listen(8001);
console.log("server initialized");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function generateQuiz() {
  return new Promise(function(succeed,fail) {

    try {
      var mysql = require('mysql');
      var con = mysql.createConnection({
        host: "localhost",
        user: "tim",
        password: "myequal13A",
        database: "quiz"
      });
      con.connect();
      con.query(getQuery(true), function (err, result, fields) {
        succeed(result);
      });
      con.end();
    }
    catch (error) {
      fail(error);
      throw error;
    }
  })
}

function getQuery(quiz) {
  return "SELECT city , country FROM quiz.world_cities"
      + " ORDER BY RAND()" 
      + " LIMIT 10";
}