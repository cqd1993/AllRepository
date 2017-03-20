// dùng substring or slice; tenmang.slice(start, end); tenmang.substring(start,end)
// dùng substr(vị trí, độ dài chuỗi)
function cut_string(arr) {
	if(arr.length >30)
	{
		document.write("chuỗi ban đầu là:" +arr + "<br>");
		var str = arr.slice(0,10);
		document.write("chuỗi bị cắt là:"+ str + "...."+"<br>");
	}
	else
	{
		document.write("kiểm tra lại độ dài của chuỗi");
		document.write("độ dài của chuỗi là:"+ arr.length + "<br>");
	}
	/*var str = arr.slice(0,10);
	//var str = arr.substring(0,10);
	//var str = arr.substr(0, 10);
	//console.log(str);
	console.log(str + "....");
	document.write("chuỗi ban đầu là:" +arr + "<br>");
	//console.log(arr.length);
	document.write("độ dài của chuỗi:"+ arr.length + "<br>");
	document.write("chuỗi bị cắt là:"+ str + "...."+"<br>");
	document.write("chuỗi bị cắt có độ dài là: "+ str.length);
	
	/*var tach = arr.split("");
	for(var i = 0; i< tach.length; i++)
	{
		console.log(tach.length);

	}document.write(tach.length +"<br>");
	//console.log(tach);*/
}