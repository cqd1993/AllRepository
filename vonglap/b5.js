var arr = [1,2,3,4,5];
function arr_double(arr) {
	document.write("mảng cũ:"+ arr +"<br>");
	document.write("mảng mới:");
	var i=0;
	for(; i<arr.length; i++){
		//console.log(arr[i]*2);
		document.write( arr[i]*2 + " ");
	}
}
arr_double(arr);