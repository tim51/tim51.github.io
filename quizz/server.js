var http = require('http'),
      fs = require('fs'),
     url = require('url');

http.createServer(function(request, response){
    try {
      var path = url.parse(request.url).pathname;

      if(path.startsWith("/quiz/")) {
        generateQuiz(path.slice(path.indexOf("/",1)+1)).then(function (succeedMessage) {
            console.log("data sent:" + succeedMessage);
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

function generateWrongAnswers(correctAnswer) {
  return new Promise(function(succeed, fail) {
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
        con.query("SELECT DISTINCT correct_answer FROM quiz.questions WHERE correct_answer NOT LIKE '%"+correctAnswer+"%' ORDER BY RAND() LIMIT 3", function(err,result,fields) {
          succeed(result);
        })
    }
    catch (error){
      console.log(error);
    }
  })
}
function getQuery(quiz) {
  return "SELECT question, correct_answer AS answerA FROM quiz.questions"
      + " ORDER BY RAND()" 
      + " LIMIT 10";
}
generateWrongAnswers("JAPAN");

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
        console.log("Correct answers: "+result);
        console.log("Score: "+result.length);
        resolve(result);
      })
    }
    catch (error){
      console.log(error);
    }
  })
}

//INPUTING QUESTIONS AND ANSWERS INTO DATABASE==============================================================================
/*
new Promise(function (resolve, response) {
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "tim",
    password: "myequal13A",
    database: "quiz"
  });
  con.connect();
  con.query("SELECT city, country FROM quiz.world_cities", function(err,result,fields) {
    var questions = [];
    var results = 0;
    for (row = 0; row< result.length; row++) {
      questions.push( {
        "question" : "Where is "+result[row].city +" located?",
        "answer" : result[row].country
      })
      results++;
      if (results = result.length) {
        resolve(questions);
      }
    }
  })
}).then(function (succeed) {
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "tim",
    password: "myequal13A",
    database: "quiz"
  });
  con.connect();
  for (var row=0; row<succeed.length; row++) {
     //           "INSERT INTO `quiz`.`Questions` (`question`, `correct_answer`) VALUES ('what', 'answers');"
    var query = "INSERT INTO quiz.Questions (question, correct_answer) VALUES ('"+succeed[row].question+"', '"+succeed[row].answer+"');";
    console.log(query);
    con.query(query, function(err,result,fields) {
      console.log(err,result);
    })
  }

})
*/
//==============================================================================================================


