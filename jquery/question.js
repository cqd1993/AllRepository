
// truyền giá trị câu hỏi;
function question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

// hiển thị câu hỏi
function hienthi(cau_hoi)
{
	// biết được chỉ số để chuyền
	this.score = 0;// số câu trả lời đúng được hiển thị ra;
	
	this.Index = 0;// chỉ số mảng;
	this.cau_hoi = cau_hoi;// chưa hiển thị câu hỏi được;

}
// tạo phương thức lấy chỉ số(giá trị) trong mảng;
hienthi.prototype.getIndex = function()
{
	return this.cau_hoi[this.Index];
}
//so sánh độ dài  mảng so với chỉ số mảng;
hienthi.prototype.ss = function()
{
	return this.Index === this.cau_hoi.length;
}

var cau_hoi = [
	new question("Huyện bình xuyên thuộc tỉnh nào miền bắc",["Vĩnh Phúc"," Hà Nội","Tuyên Quang","Lào cai"],"Vĩnh Phúc" ),
	new question("Đỉnh Phì Lèng thuộc nơi nào miền bắc?",["Hà Giang","Tuyên Quang","Lào Cai","Yên bái"],"Hà Giang"),
	new question("Ba Vì thuộc thành phố nào miền bắc?",["Vĩnh Phúc","Hà Nội","Thái Nguyên","Nam Định"], "Hà Nội"),
	new question("Tam giác có bao nhiêu cạnh?",["1","2","3","4"],"3"),
	new	question("Năm Nhuận có bao nhiêu tháng?",["10","11","12","13"],"13"),
	new question("con bò có mấy chân?",["1","2","3","4"],"4" ),
	new question("rắn thuộc loài nào?",["Lưỡng cư","bò sát","có vây","ấu trùng"],"bò sát"),
	new question("cá thuộc lớp nào sau đây?",["Lưỡng cư","bò sát","có vây","?"], "có vây"),
	new question("nhái thuộc lớp nào sau đây?",["Lưỡng cư","bò sát","có vây","?"],"Lưỡng cư"),
	new	question("Năm Nhuận có chia hết cho 3 không?",["có","?","khác","không"],"không")

];
var quiz = new hienthi(cau_hoi);
pupolate();
function pupolate()
{
	if(quiz.ss())
	{
		//return true;
		// hiển thị kết quả
		showScores();
	}
	else
	{
		var element = document.getElementById("cauhoi");
		element.innerHTML = quiz.getIndex().text;
		var choices = quiz.getIndex().choices;
		for(var i = 0; i<choices.length; i++)
		{	// hiển thị đáp án
			var element = document.getElementById("choice"+i);
			element.innerHTML = choices[i];
			guess("btn"+i, choices[i]);
		}
		showProset();
	}
};
// tạo lựa chọn trong question;
question.prototype.correctAnsewr = function(choice)
{
	if(choice === this.answer)// so sánh
	{
		return true;
	}
	else
		return false;
}

// so sánh câu lựa chọn với câu trả lời trong question;
hienthi.prototype.guess = function(answer)
{
	//document.getElementById("btn4").style.visibility = "visible";
	if(this.getIndex().correctAnsewr(answer))
	{
		this.score ++;
	}
	this.Index++;// chuyển câu hỏi;
}

// hàm showScore
function showScores()
{	
	var gameOver = "bạn đoán đúng";
	gameOver += quiz.score +"câu hỏi";
	var gameOverFinish = gameOver;
	//var	element = document.getElementById("quiz");
	
	//element.innerHTML = gameOverFinish ;// hiển thị số câu trả lời đúng;
	var	element = document.getElementById("h");
	element.innerHTML = gameOverFinish;
	back();
}
// chuyển câu hỏi theo id
function guess(id,guess)
{
	var button = document.getElementById(id);
	button.onclick= function()
	{
		quiz.guess(guess);
		pupolate();
	}
}
//

function showProset()
{
	var currentquestion = quiz.Index +1;
	var element = document.getElementById("chiso");
	element.innerHTML ="question" + currentquestion +"of"+ quiz.cau_hoi.length;
	if(currentquestion === quiz.cau_hoi.length)
	{
		document.getElementById("btn4").style.visibility = "visible";
		document.getElementById("btn5").style.visibility = "visible";
		
	}
}
function back()
{

	quiz.Index = "";
	quiz.score ="";
	quiz.currentquestion = "";
	quiz.cau_hoi.length = "";
}
function change_UI()
{//clear: right;
	
	$('#btn0').css("background-color","gray");
	$('#btn1').css("background-color"," green");
	$('#btn2').css("background-color","yellow");
	$('#btn3').css("background-color","pink");
	//background-color: green;
	$(".wap").css("background-color","pink");
	$("body").css("background-color","blue");

}
