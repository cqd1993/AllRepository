
/*var user = {
	userName: "",
	password: "",
	confirm: "",
}
var mm = [];*/
//console.log(user);
 function bai4(user = {
	userName: "",
	password: "",
	confirm: ""
})
 {
 	if(user.userName == null || user.userName == "")
 	{
 		console.log("không thành công");
 	}
 	else if(user.userName.length >20)
 		{
 			console.log(" kiểm tra lại độ dài userName");
 		}
 	else if(user.password == "" || user.password == null)
 	{
 		console.log("không thành công");
 		
 	}
 	else if(user.password.length >32 || user.password.length <6)
 		{
 			console.log(" kiểm tra lại độ dài password");
 		}	
 	else if(user.confirm == "" || user.confirm != user.password)
 	{
 		console.log("không thành công");
 		
 	}
 	else if(user.confirm != user.password)
 		{
 			console.log("kiểm tra lại password và confirm");
 		}
 	else
 	{	
 		console.log( "thành công");
 	}
 }