
$('form_create_login').on('submit',function() {
	var ivalid = true;
	if($('#hoten').val().trim =="")
	{
		$('#hoten').next('span').text('ho tên không để trống');
		ivalid = false;
	}
	else
	{
		$("#hoten").next('span').text('');
		// ivalid =true;
	}
	if($('#password').val().match(/^([a-zA-Z0-9_\-\.]+)|((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null)
	{
		$('#password').next("span").text("mật khẩu không được để trống");
		ivalid = false;
	}
	else
	{
		$("#password").next("span").text("");
	}
	if($('#repassword').val().match(/^([a-zA-Z0-9_\-\.]+)|((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null)
	{
		$("#repassword").next("span").text("nhập lại mật khẩu");
		ivalid = false;
	}
	else
	{	
		$("#repassword").next("span").text("");
	}
	if($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null)
	{
		$("#email").next("span").text("email nhập không đúng");
		ivalid = false;
	}
	else{
		$("#email").next("span").text("");
	}
	if(isNaN("#telephone").val())
	{
		$("#telephone").next("span").text("số điện thoại không được để trống.");
		ivalid = false;
	}
	else
	{
		$("#telephone").next("span").text("");
	}
	return ivalid;
});



// var DB = {
// 	getData: function(){
// 		if(typeof(Storage) !== "undefined")
// 		{
// 			var data;
// 			try{
// 				data = JSON.parse(localStorage.getItem('list')) || {};
// 			}
// 			catch (error){
// 				data = {};

// 			}
// 			return data;
// 		}
// 		else
// 		{
// 			alert("trình duyệt không hỗ trợ localStorage!");
// 			return {};
// 		}

// 	},
// 	setData: function(data){
// 		localStorage.setItem('list', JSON.stringify(data));
// 	}
// };

// var app = {
// 	newJob: function(){

// 	}

// };


// myfunction();
// function myfunction() {
// // var get_arr = [];
// // var set_arr = [];
// var arr = [];
// // var data;
// var ht ={ 
// 	getData: function(){
// 		if(typeof (Storage) !== "undefined"){
// 			var data;
// 			try
// 			{
// 				data = localStorage.getItem('hoten');
// 				console.log(data);
// 			}
// 			catch(error){
// 				data = "loi";	
// 			}
// 			return data;
// 		}
// 		else
// 		{
// 			alert("không hỗ trợ");
// 			return data;
// 		}
// 	},
// 	setData: function(){
// 		localStorage.setItem('hoten',data);
// 		// arr.push(ar);
// 		}
// 	//}
	
// }

// // if(ht.setData() == true)
// // {	
// 	arr.push(ht.getData());
// 	console.log(arr[0]);

// // }
// // else{
// 	// console.log(arr[0]);
// // }
// document.getElementById('hoten').value = ht.getData();

// // document.getElementById('hoten').value = ht.setData();

// var pw = {
// 	getData: function(){
// 		if(typeof (Storage) !== "undefined"){
// 			// var data;
// 			try
// 			{
// 				data = localStorage.getItem('password');
				
// 			}
// 			catch(error){
// 				data = "loi";	
// 			}
// 			return data;
// 		}
// 		else
// 		{
// 			alert("không hỗ trợ");
// 			return data;
// 		}
// 	},
// 	setData: function(){
// 		localStorage.setItem('password',data);
// 		}
// 	//}
	
// }
// document.getElementById('password').value = pw.getData();
// var rpw = {
// 	getData: function(){
// 		if(typeof (Storage) !== "undefined"){
// 			// var data;
// 			try
// 			{
// 				data = localStorage.getItem('repassword');
				
// 			}
// 			catch(error){
// 				data = "loi";	
// 			}
// 			return data;
// 		}
// 		else
// 		{
// 			alert("không hỗ trợ");
// 			return data;
// 		}
// 	},
// 	setData: function(){
// 		localStorage.setItem('repassword',data);
// 		}
// 	//}
	
// }
// document.getElementById('repassword').value = rpw.getData();

// var e_m = {
// 	getData: function(){
// 		if(typeof (Storage) !== "undefined"){
// 			// var data;
// 			try
// 			{
// 				data = localStorage.getItem('email');
				
// 			}
// 			catch(error){
// 				data = "loi";	
// 			}
// 			return data;
// 		}
// 		else
// 		{
// 			alert("không hỗ trợ");
// 			return data;
// 		}
// 	},
// 	setData: function(){
// 		localStorage.setItem('email',data);
// 		}
// 	//}
	
// }
// document.getElementById('email').value = e_m.getData();
// var tlp = {
// 	getData: function(){
// 		if(typeof (Storage) !== "undefined"){
// 			// var data;
// 			try
// 			{
// 				data = localStorage.getItem('telephone');
				
// 			}
// 			catch(error){
// 				data = "loi";	
// 			}
// 			return data;
// 		}
// 		else
// 		{
// 			alert("không hỗ trợ");
// 			return data;
// 		}
// 	},
// 	setData: function(){
// 		localStorage.setItem('telephone',data);
// 		}
// 	//}
	
// }
// document.getElementById('telephone').value = tlp.getData();
// }

