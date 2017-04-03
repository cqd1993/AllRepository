var text = '';
var lastChar = '';
var flag = false;
var input = document.getElementById('value').innerText;


function press (button){
	text = button.innerText;
		input += text;
		lastChar = text;
	document.getElementById('value').innerText = input;
}
function clr()
{
	/*text = "0";
	lastChar = '';*/
	input = "";
	lastChar = "";
	flag = false;

	document.getElementById('value').innerText = input;
}

function update()
{
	// cập nhật lại tham số:
	//lastChar = input.slice(-1);// lấy giá trị cuối cùng; nghĩa là chính giá trị trên màn hình
	document.getElementById('value').innerText= input;

}
function btn_ketqua()
{
	input = input.replace(/x/g, '*').replace(/÷/g, '/');
	input = eval(input).toString();
	//document.getElementById('value').innerText= input;
	update();
}

function btn_back()
{
	
	input = input.substr(0, input.length-1);// xoa một phần tử cuối cùng;
	document.getElementById('value').innerText = input;
}
function btn_cham()
{
	if(!flag)
	{
		input = input +'.';
	}
	lastChar ='.';
	flag = true;
	document.getElementById('value').innerText = input;
}
function btn_bp()
{	
	input = input.substr(0, input.length).toString();
	input = Math.pow(input,2).toString();
	document.getElementById('value').innerText = input;
	
}
function btn_cb2()
{
	input = input.substr(0, input.length).toString();
	input = Math.sqrt(input).toString();
	document.getElementById('value').innerText = input;
}
function btn_phantram()
{
	input = input.substr(0, input.length).toString();
	input = (input/100).toString();
	document.getElementById('value').innerText = input;
}
function giaithua()
{
	var gt = 1;
	for(var i=1; i<= input; i++)
	{
		gt = gt*i;
	}
	input = gt;
	document.getElementById('value').innerText = input;
}
/*function btn_Screen_nho(p)
{
	var input = document.getElementById(p);
	var style = window.getComputedStyle(input, null).getPropertyValue('font-size');
	var font = parseInt(style);
	font = font -1;
	return input.style.fontSize = font + "px";
}*/