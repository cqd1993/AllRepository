
function arr_sort(arr) {
	var mm = [];
	var i = 1;
	for(; i<= arr.length; i++)
	{
		if((arr[i] %2) ==0)
		{
			mm.push(arr[i]);
		}
		//console.log(mm);// push từng phần tử vào arr
	}
	//console.log(mm);// tổng hợp kq push vào arr;
	document.write("mảng cũ :"+"["+arr+"]"+"<br>");
	document.write("mảng mới đã được sort theo bài: "+"["+mm.sort(function(a,b){ return a-b})+"]"+"<br>");
}