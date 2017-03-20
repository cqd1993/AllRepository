var n = ["Nguyễn văn A","Chu Văn T","Tào Văn Phở","Hà Củ Khoai",
"Nguyễn Viết C","Bùi Củ Khoai","Ngô Văn Ốc","Ốc củ Ngô","Thà Văn Thổ"]
function sort_hv(n) {

	var i =0;
	//console.log(n.sort());
	var b = n.sort();
	document.write("số thứ tự học viên đã được sort:" +"<br>");
	for(; i< b.length; i++)
	{
		//console.log(i);
		//console.log(n[i]);
		document.write("STT "+ i+" " + "là:" +b[i]+"<br>");
	}
	
}
sort_hv(n);