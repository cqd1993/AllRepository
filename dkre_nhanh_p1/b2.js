//var a = 3.7;
function gt(a)
{
	if(typeof a =="number" && a >0)
	{
		//var c = Math.round(a);
		//console.log(typeof a);
		var tich =1; var i =1;
		while(i <= a)
		{   
			tich = tich*i;
			i++;
		}
		document.write("giai thừa của "+ a+ " là:" + tich);
	}
	else
	{
		document.write("a là số nhỏ hơn hoặc = 0");
	}
}
gt(a);