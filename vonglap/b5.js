var arr = [1,2,3,4,5];
function arr_double(arr) {
	 var mm = [];
	document.write("mảng cũ:"+ arr +"<br>");
	document.write("mảng mới:");
	var i=0;
	for(; i<arr.length; i++){
		//console.log(arr[i]*2);
		var a= arr[i]*2;
		mm.push(a);
	}
	//console.log(typeof mm);
	document.write(mm);
}
arr_double(arr);