// tạo tab trong chi tiết trang chung cư mini
function opentab(evt,nd) {
	var i, tabLinks, tabContent;
	tabContent = document.getElementsByClassName('tabContent');
	for(i=0; i<tabContent.length; i++)
	{
		tabContent[i].style.display='none';
	}
	tabLinks = document.getElementsByClassName('tabLinks');
	for(i=0; i<tabLinks.length; i++){
		tabLinks[i].className = tabLinks[i].className.replace(" active","");
	}
	document.getElementById(nd).style.display = 'block';
	evt.currentTarget.className += " active";//đối tượng .active của event tạo ra
	
}
document.getElementById("df_Open").click();// tạo đối tượng chọn mặc định;


// xử lý nút bình chọn trong trang chi tiết mini

function binh_chon(){
	var a = document.getElementById('chon1');
	var b = document.getElementById('chon2');
	var c = document.getElementById('chon3');
	if(a.checked)
	 {	//var	bc = document.getElementById('binhchon1');
	// 	bc.checked = true;
		x = document.getElementById('chon1').value;
		document.getElementById('a').innerHTML = Number(x) + 10 +" lượt bình chọn";
		document.getElementById('abc').style.display = 'none'; 
	}
	else if(b.checked)
	{
		// var	bc = document.getElementById('binhchon2');
		// bc.checked = true;
		y = document.getElementById('chon2').value; 
		document.getElementById('b').innerHTML = Number(y)+1124 +" lượt bình chọn";
		document.getElementById('abc').style.display = 'none';
	}
	else if(c.checked)
	{	
		// var	bc = document.getElementById('binhchon3');
		// bc.checked = true;
		z = document.getElementById('chon3').value; 
		document.getElementById('c').innerHTML = Number(z)+1224 +" lượt bình chọn";
		document.getElementById('abc').style.display = 'none';
	}
	else{
		document.getElementById('abc').style.color = 'green';
		document.getElementById('abc').innerHTML = "Xin chọn sao để đánh giá!";
		document.getElementById('abc').style.visibility = 'visible';
	}
}
function huy_binh_chon() {
	var a = document.getElementById('chon1').checked = false;
	var b = document.getElementById('chon2').checked = false;
	var c = document.getElementById('chon3').checked = false;
	// document.getElementById('a').frm_huy.reset();
	x = document.getElementById('chon1').value;
		document.getElementById('a').innerHTML = Number(x) + 10 + Number(-1) +" lượt bình chọn";
	y = document.getElementById('chon2').value;
		document.getElementById('b').innerHTML = Number(x) + 1124 + Number(-1) +" lượt bình chọn";
	z = document.getElementById('chon3').value;
		document.getElementById('c').innerHTML = Number(x) + 1224 + Number(-1) +" lượt bình chọn";
}


