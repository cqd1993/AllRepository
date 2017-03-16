// ta sẽ dùng toLowerCase(): viết thường; toUpperCase: viết hoa;
// dùng slice để lấy ra phần tử trong chuỗi;
function bai4(chuoi) {
	var x = chuoi.slice(0,1).toUpperCase() + chuoi.slice(1).toLowerCase();
	//console.log(x);
	document.write("chuỗi ban đầu"+ chuoi +"<br>");
	document.write("chuỗi thay đổi"+ x +"<br>");
	document.write("chuỗi viết hoa:"+ chuoi.toUpperCase() +"<br>");
	document.write("chuỗi viết thường:"+ chuoi.toLowerCase() +"<br>");
	//document.write("chuỗi viết abc:"+ chuoi.replace(/q/g,"d" || /\/c/g,"a") +"<br>");


}
