////// đăng bài///////////////////////

function myFunction_Anhslice(){
	var x = document.getElementById('myAnh_slice');// gọi đối tượng myhAnh
	var txt ="";
	if('files' in x){
		if(x.files.length ==0)// gọi tới một học nhiều file trong x;
		{
			txt="Mời bạn chọn ảnh";
		}
		else
		{
			for(var i=0; i<x.files.length; i++)
			{
				txt += "<br><strong>" +(i+1) +".file</strong" +<br/>// chỉ số file
				var file_name =x.files[i];
				if('name' in file_name)
				{
					txt	+="name: " +file_name.name +<br/>
				}
				if ('size' in file_name) 
				{
					txt +="size" + file_name.size +"bytes" +<br/>
				}
			}
		}
	}
	else
	{
		if(x.value =="")
		{
			txt	+="Mời bạn chọn ảnh!"
		}
		else
		{
			txt +="trình duyệt không hỗ trợ!";
			txt +="Mời bạn chọn file ảnh" +x.value;
		}
	}
	document.getElementById("file_anh_slice").innerHTML = txt;
}
// var h = document.getElementById("myAnh_daidien");
// if( h.click()== true)
// {
// 	document.getElementById("video").style.display ="none";
// }