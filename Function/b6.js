// dùng pt sort(): mang.sort() để sort_string alphalbi;
var arr =["chu quang đại","nguyễn viết cảnh","trần xuân dương","nguyễn minh hoàng","hoàng văn thắng","phạm văn đồng"];

function sort_string(arr) {
	var a = arr.sort();
	document.write("mảng đã được sắp xếp theo alphalbi:"+"<br>");
	for(var i =1; i< arr.length; i++)
	{
		document.write(i+ " "+ arr[i] +"<br>");
	}
	//console.log(a);
	//document.write("mảng đã được sắp xếp theo alphalbi:"+ a);
}
sort_string(arr);