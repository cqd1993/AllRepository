
// function form_reg() {
// var hoten = document.getElementById("ht").value;
// var ngay = document.getElementById("ngay").value;
// var giotinh = document.forms["frm"]["gender"].value;
// var address = document.getElementById("dc").value;
// var email = document.getElementById("e_mail").value;
// var password = document.forms["frm"]["password"].value;
// /*var uri = new Array();*/
// var uri = [];
// uri[0] = hoten;
// uri[1] = ngay;
// uri[2] = giotinh;
// uri[3] = address;
// uri[4] = email;
// uri[5] = password;

// document.getElementById('dm').innerHTML = hoten;
/*uri.join("");*/
/*console.log(uri);*/
var url = window.location.href;
console.log(url);
// var encode = "";
// var encode = encodeURIComponent("encode: "+url);
// var decode = "";
// var decode = decodeURIComponent("decode: " +encode);
// var res =  encode +"<br>" + decode;
// document.getElementById('dm').innerHTML = res;
 
 //var s = window.location.search.replace(/&/g, ' ');
 //console.log(s);
 // var se = window.location.search.substring(1).replace(/&/g, ' ').replace(/\+/g,' ').replace(/%40/g,'@');
 var se = window.location.search.substring(1).replace(/&/g, ' ').replace(/%40/g,'@').replace(/=/g, '\:\t');
 console.log(se);
 var c = se.split(" ");
 console.log(c);
 var arr =[];
 arr.push(c);
 console.log(arr);
 console.log(arr[0][0].replace(/\+/g, " "));// mảng này là mảng gồm một mảng có độ dài bằng 1. mảng hai chiều là mảng trong mảng;
 console.log(arr[0][1]);
 console.log(arr[0][2]);
 console.log(arr[0][3]);
 console.log(arr[0][4]);
 console.log(arr[0][5]);
console.log(arr[0][6]);

var c1 = (arr[0][0].replace(/\+/g, " "));
var c2 = (arr[0][1]);
var c3 = (arr[0][2]);
var c4 = (arr[0][3]);
var c5 = (arr[0][4]);
var c6 = (arr[0][5]);
var c7 = (arr[0][6]);

document.getElementById('c1').innerHTML = c1+"<br>"
document.getElementById('c2').innerHTML =c2+"<br>";
document.getElementById('c3').innerHTML =c3+"<br>";
document.getElementById('c4').innerHTML =c4+"<br>";
document.getElementById('c5').innerHTML =c5+"<br>";
document.getElementById('c6').innerHTML =c6+"<br>";
document.getElementById('c7').innerHTML =c7+"<br>";
// for(var i =0; i<arr.length; i++)
// {
// 	console.log(arr[1]);
// }
// //console.log(arr[0]);
// console.log(Array[1]);
 //console.log(typeof arr);
 //console.log(d);
 // var c = arr.split(" ");
 // console.log(c);

 //return res;
//}