// sort nummeric đối với số(number) mang.sort(function(a,b){return a-b})
function bai5_sort(arr)
{	var i;
	var a = arr.sort(function(a,b){return a -b})
	//console.log(a.slice(0,1));// sử dụng chuỗi or số
	//console.log(a );
	// for( i =0; i< a.length; i++)// dùng cho số
	// {

	// console.log(Math.min(a[i]));
	
	// }
	document.write(" mảng ban đầu: "+	(arr) +"<br>");
	console.log(Math.min(a[0]));
	document.write("số nhỏ nhất trong mảng:"+ Math.min(a[0]) +"<br>");
}