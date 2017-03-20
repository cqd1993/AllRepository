var arr = [1,2,3,4,5,6,7];
function arr_mode(arr)
{
	document.write("mảng ban đầu:" + arr + "<br>");
	document.write("số dư của các số trong mảng:");
	var i =0;
	for( ;i< arr.length; i++){
		var b = arr[i]%2;
		//console.log(b);
		document.write(b + " ");
	}
}
arr_mode(arr);