var teacher = {
  firstName: "Kim",
  lastName: "Dung",
  age: 30,
  say: function(){
   return this.firstName + this.lastName + this.age
 }
}
var student = {
	firstName: "Con",
	lastName: "Con",
	age: 18,
	say : function(){return this.firstName + this.lastName + this.age
 }
}
var parent = {
	firstName: "bobo",
	lastName: "bobo",
	age: 40,
	say: function(){
		return this.firstName + this.lastName + this.age
	}
}
console.log(teacher.say());
var aboutMe = function(){
// dạng anymustfunction;

	 document.write("xin chào các bạn! tôi là:");
	 teacher.say();
 
}
/*function aboutMe()
{
	document.write("xin chào các bạn! tôi là:"+ teacher.say());
}

var b = aboutMe();*/
//teacher.say();
teacher.say = aboutMe();
aboutMe = teacher.say();
//document.write(aboutMe);
//teacher.say();   // In ra màn hình dòng chữ "Xin chào, tôi là Kim Dung. Năm nay tôi 30 tuổi."