 // var a= "4";
 // var b ="5";
function test_haiso(a,b) {
	document.write("hai số nhập vào là: a =" +a +" "+"b ="+b +"<br>");
	/*if(typeof a =="string" && typeof b =="string")
	{
		// console.log(typeof a);
		// console.log( typeof b);
		document.write("a là :"+ typeof a +""+ "b là:"+ typeof b +"<br");
		document.write("yêu cầu nhập lại giá trị a và b?");
	}
	else*/ if(typeof a == "string" && typeof b =="number")
	{
		document.write("a là :"+ typeof a +""+ "b là:"+ typeof b +"<br>");
		document.write("yêu cầu nhập lại giá trị a?");
	}
	else if(typeof a =="number" && typeof b == "string")
	{
		document.write("a là :"+ typeof a +""+ "b là:"+ typeof b +"<br>");
		document.write("yêu cầu nhập lại giá trị b?");
	}
	else
	{
		// console.log("a là:"+typeof a + "b là:"+typeof b);
		//document.write("a là :"+ typeof a +" "+ "b là:"+ typeof b +"<br");
		//document.write("bạn đã nhập đúng giá trị a và b!");
		//var c = (a >b )? a:b;
		if(a > b)
		{
			document.write("số lớn nhất:" +a +"<br>");
			document.write("số nhỏ nhất:" +b +"<br>");
		}
		else
		{
			document.write("số nhỏ nhất:" +a +"<br>");
			document.write("số lớn nhất:" +b +"<br>");
		}
	}

}
test_haiso(a,b);