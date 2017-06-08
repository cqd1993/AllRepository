/*
 * Created by CAT on 2/20/2017.
 */
 // truyền giá trị
 function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}
// cái khác// so sánh gía trị chọn với question 
Question.prototype.correctAnswer=function (choice) {
   if(choice===this.answer)
    return true;
   else return false;
}


// hiển thị câu hỏi
 function Quiz(questions){
   this.score=0;// dùng để đếm số lượn câu hỏi đúng
    this.questions=questions;// hiển thị
    this.questionIndex=0;// hiển thị chỉ số mảng
}
Quiz.prototype.getQuestionIndex=function () {
    return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded=function () {
    return this.questions.length===this.questionIndex;// độ dài mảng
}
Quiz.prototype.guess=function (answer) {
    document.getElementById("btn4").style.visibility="visible";
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}


var questions=[
    new Question("Which one is not an object oriented programming language?",["Java","C#","C","C++"],"C"),
    new Question("Which language is used for styling web pages?",["HTML","XML","Jquery","CSS"],"CSS"),
    new Question("There are__main components of object oriented programming.",["1","6","2","4"],"4"),
    new Question("Which language is used for web apps?",["PHP","Python","Javascript","ALL"],"ALL"),
    new Question("MVC is a ___.",["Language","Library","Franework","ALL"],"Framework")
];
var quiz= new Quiz(questions);
populate();

function populate() {
    if(quiz.isEnded()){
       showScores();
    }
    else{
        //show question
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;
        var choices=quiz.getQuestionIndex().choices;
        for(var i=0;i<choices.length;i++){
            var element=document.getElementById("choice"+i);
            element.innerHTML=choices[i];
            guess("btn"+i,choices[i]);
        }
    showProgress();
    }
};
function guess(id,guess) {
    var button=document.getElementById(id);
    button.onclick=function () {
        quiz.guess(guess);
        populate();
    }
};
function showProgress() {
    var currentQuestionNumber=quiz.questionIndex  + 1;
    var element=document.getElementById("progress");
    element.innerHTML="Question " + currentQuestionNumber + "of " + quiz.questions.length;
}
function showScores(){
    var gameOverHtml ="";
    gameOverHtml+= quiz.score;
    var element = document.getElementById("quiz");
    element.innerHTML=gameOverHtml;
};



