
function binh_phuong(x) {
	//var tich = x*x;
	var tich = Math.pow(x,2);
	//console.log(tich);
	document.write("bình phương của" + x + "là:" + " " +tich +"<br>");

}
function binh_phuong_3so(x,y,z)
{
	binh_phuong(x);
	var tich = Math.pow((3*x+2*y -z), 2);
	document.write("bình phương của ba số" + x + "," + y+ "," + z +","+ "là:" + " " +tich +"<br>");
}
//binh_phuong();
// function tong(){
	
// 	var x =  4;
// 	console.log(x);
// 	binh_phuong(x);
// }