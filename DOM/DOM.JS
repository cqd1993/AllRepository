// bài 1
//var x = 10;// user button;
function changeFontSize(x)
{
	/*var a =document.getElementById("p1");
	var b =document.getElementById("p2");
	var c =document.getElementById("p3");
 	a.style.fontSize = x+'px';
 	b.style.fontSize = x+"px";
 	c.style.fontSize = x+"px";*/
 	var a = document.getElementById("content");
 	a.style.fontSize = x+"px";
 	console.log(x);
 }
//changeFontSize(33);
// bài 2

function increaseFontsize(paragraph){
	//changeFontSize(x);
	var para = document.getElementById(paragraph);
	var _style = window.getComputedStyle(para 
		,null).getPropertyValue('font-size');
	var fontsize = parseInt(_style);// chuyển sang số;
	fontsize = fontsize +1;// tăng fontsize lên1;
	console.log(fontsize);
	if(fontsize > 29)
	{
		return true;
	}
	else
	{
		return para.style.fontSize = fontsize +"px";
	}
	//fontsize = fontsize +1;
}
// bài 3
function decreaseFontsize(paragraph)
{
	var para = document.getElementById(paragraph);
	var style = window.getComputedStyle(para, null).getPropertyValue('font-size');
	var fontsize = parseInt(style);
	fontsize = fontsize -1;
	console.log(fontsize);
	if(fontsize < 11)
	{
		return true;
	}
	else
	{
		return para.style.fontSize = fontsize +"px";
	}

}

// bài 4;
function changecolor()
{
	var a = document.getElementById("p1");
	var b = document.getElementById("p2");
	var c = document.getElementById("p3");
	a.style.color ="green";
	b.style.color = "yellow";
	c.style.color ="red";
}
// bài 5

function changeBgcolor()
{
	var p = document.getElementById('content');
	return p.style.backgroundColor = "yellow";
}

// bài 6

function copyContent(paragraph1, paragraph2)
{
	var p1 = document.getElementById(paragraph1);
	var p2 = document.getElementById(paragraph2);
	p1.innerHTML = p2.innerHTML;

}