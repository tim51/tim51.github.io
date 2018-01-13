var http = require('http'),
      fs = require('fs'),
     url = require('url');

http.createServer(function(request, response){
    try {
      var path = url.parse(request.url).pathname;

      if(path.startsWith("/getQuiz/")) {
        generateQuiz(path.slice(path.indexOf("/",1)+1)).then(function (succeedMessage) {
            console.log("data sent:" + succeedMessage);
            response.writeHead(200, { 'Content-Type': 'application/json'});
            response.end(JSON.stringify(succeedMessage), "utf-8");
        })
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
function generateQuiz(quiz) {
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
      con.query(getQuery(quiz), function (err, result, fields) {
        succeed(result);
      });
      con.end();
    }
    catch (error) {
      fail(error);
      return null;
    }
  })
}

function getQuery(quiz) {
  if (quiz == "world_cities") {
    return "SELECT city , country FROM quiz.world_cities"
      + " ORDER BY RAND()" 
      + " LIMIT 10";
  }
}