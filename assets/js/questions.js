// Here are the quiz-questions of quiz
var quizquestions = [{
    question: 'Hyper Text Markup Language Stand For?',
    imgSrc: 'assets/images/html.jpg',
    choiceA: 'JavaScript',
    choiceB: 'XHTML',
    choiceC: 'HTML',
    correct: 'C'
  }, {
    question: "Which is used for Connect To Database?",
    imgSrc: 'assets/images/database.jpg',
    choiceA: 'HTML',
    choiceB: 'PHP',
    choiceC: 'JS',
    correct: 'B'
  }, {
    question: 'Which language is used for styling web pages?',
    imgSrc: 'assets/images/css3.jpg',
    choiceA: 'HTML',
    choiceB: 'JQuery',
    choiceC: 'CSS',
    correct: 'C'
  }, {
    question: 'Which is not a JavaScript Framework?',
    imgSrc: 'assets/images/Javascript.jpg',
    choiceA: 'JQuery',
    choiceB: 'Django',
    choiceC: 'NodeJS',
    correct: 'B'
  }, {
    question: 'Who is the CEO of Tesla',
    imgSrc: 'assets/images/tesla.jpg',
    choiceA: 'Tim Cook',
    choiceB: 'Bill Gates',
    choiceC: 'Elon Musk',
    correct: 'C'
  }];
  // quiz-questions ended here

  // Main Timer Dive Target by Id
  document.getElementById("quiz-time-left") .innerHTML ='<p>Time Left: 1 minutes 0 seconds</p>';
  
  // Quiz main timer start here
    var interval = null;
    var total_seconds = 60;
    function CheckTime(){
    if (!interval){
      interval = setInterval(CheckTime, 1000);
    } 
    if(total_seconds <=0){
      clearInterval(interval);
      setTimeout('document.quiz.submit()' , 1);
    } else{
      total_seconds = total_seconds - 1;
      document.getElementById("quiz-time-left") .innerHTML ='<p> Time Left: ' + total_seconds + ' seconds </p>';
    }
  }