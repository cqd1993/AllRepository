var teacher = {
  firstName: "Kim",
  lastName: "Dung",
  age: 30,
 
 
}
var student = {
	firstName: "Con",
	lastName: "Con",
	age: 18,
	 
 
}
var parent = {
	firstName: "bobo",
	lastName: "bobo",
	age: 40,
	say:function(){}
	
}
//console.log(teacher.say());
var aboutMe = function(){
						
						document.write("ten tôi là:"+this.firstName + this.lastName + this.age +"<br>");
					}
// dạng anymustfunction;

	/* document.write("xin chào các bạn! tôi là:");
	 teacher.say();*/
 

/*function aboutMe()
{
	document.write("xin chào các bạn! tôi là:"+ teacher.say());
}

var b = aboutMe();*/
//teacher.say();
//parent.say();
//parent.middername = "quang";
teacher.say = aboutMe;
parent.say = aboutMe;// tạo mới một hàm say;
student.say = aboutMe;
teacher.say();
parent.say();
student.say();
//teacher.say();
//aboutMe = teacher.say();
//document.write(aboutMe);
//teacher.say();   // In ra màn hình