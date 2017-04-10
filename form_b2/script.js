
function myFunction() {
var hoten = document.getElementById("ht").value;
var ngay = document.getElementById("ngay").value;
var giotinh = document.forms["frm"]["gender"].value;
var address = document.getElementById("dc").value;
var email = document.getElementById("e_mail").value;
var password = document.forms["frm"]["password"].value;
/*var uri = new Array();*/
var uri = [];
uri[0] = hoten;
uri[1] = ngay;
uri[2] = giotinh;
uri[3] = address;
uri[4] = email;
uri[5] = password;
/*uri.join("");*/
/*console.log(uri);*/
/*var url = location.href;
console.log(url);
/*var encode = "";
var encode = encodeURIComponent("encode:"+url);
var decode = "";
var decode = decodeURIComponent("decode:" +encode);
var res = encode + decode;
document.getElementById('dm').innerHTML = res;*/
/* return res;*/
}