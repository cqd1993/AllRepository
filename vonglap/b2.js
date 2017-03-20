// tách chuỗi split; //đảo chuỗi reverse; // nối chuỗi:join or valueof;
function dao_nguoc(arr)
{ var a = arr.split("");
	var b = a.reverse().join("");
	//console.log(a);
	//console.log(a.reverse().join(""));
	document.write("chuỗi ban đầu: "+ arr+ "<br>");
	document.write("chuỗi bị đảo ngược:"+b )
}