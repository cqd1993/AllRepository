
// var arrt = ["m_n1","m_n2"];
// var arrs = ["back", "back1"];
// for(var i = 0; i<= arrt.length; i++)
// {
// 	var c = $("font").html("asdasdasdas");
// 	 arrt[i] = c;
// 	$("font1").css("color","red") = arrt[i];
// }

var cards = ['m_n1', 'm_n2', 'm_n3', 'm_n4', 'm_n5','m_n6',
'm_n7','m_n8', 'm_n9','m_n10','m_n11'];
var current = null;
var count = 0;
var remaningTime = 30;
function shuffle(array){
	var currentIndex = array.length, temporaryValue, randomIndex;
	
	
	while(0 !== currentIndex){

		randomIndex = Math.floor(Math.random()*currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;

	}
	return array;
}
//venhaxem toggclass
// $('.card').css('pointer-events', 'none');
// console.log($('.card').css('pointer-events', 'none'));
function flip(cards){
	
	$(cards).toggleClass('flipped');
	$(cards).css('pointer-events', 'none');
	if(!current){
		
		current = $(cards);
		
		
		// $('.card').css('pointer-events', 'auto');
	}

	else{
		$(cards).css('pointer-events', 'none');
		$('.card').css('pointer-events', 'none');
		// $('.card').css('pointer-events', 'auto');
		if(current.attr('data-name') != $(cards).attr('data-name')){
			// khác nhau
			// $('.card').css('pointer-events', 'auto');
			console.log($('.card').css('pointer-events', 'auto'));
			console.log('khác nhau');
			setTimeout(function(){
			// $('.card').css('pointer-events', 'none');
			$(cards).css('pointer-events', 'auto');
			
			$(cards).toggleClass('flipped');
			current.toggleClass('flipped');
			
			current = null;
			$('.card').css('pointer-events', 'auto');
			}, 500);

			
		}
		else
		{
			// giống nhau;
			
			console.log("giống nhau");
			setTimeout(function(){
				// $(cards).css('pointer-events', 'auto');
				console.log($('.card').css('pointer-events', 'auto'));
				$(cards).css('opacity', '0');// chú ý ở đây
				current.css('opacity', '0');
				// current.css("visibility","hidden");
				current = null;
				$('.card').css('pointer-events', 'auto');

				count ++;
				if(count == 5)
				{
					alert("you are win");

				// $('div.img >img').attr('href','google.com');
     			
    //  			$('.card> img').css('display','none');
				} 
				
			}, 200);
console.log($('.card').css('pointer-events', 'auto'));

		}

	}
	  // $('.card').css('pointer-events', 'auto');

}
	 $('.card').css('pointer-events', 'auto');

alert("Bạn Có muốn chơi không?");

$(function(){

	cards = cards.concat(cards);

	cards = shuffle(cards);

	var html = '';
	for(var i = 0; i<cards.length; i++)
	{
		html += '<div class="grid">'+
		' <div class="card" data-name="' + cards[i] + '" onclick ="flip(this)">' +
		' <div class="font"><img src="anh_labaisakura/m_sap.jpg" />'
		+' </div> <div class="back"><img src="anh_labaisakura/'+ cards[i] + '.jpg"/> </div>'+
		' </div> </div>';

	};
	$(' .content').html(html);
	// $('.card').css('pointer-events', 'auto');
	
	// var run = setInterval(function(){
	// 	remaningTime --;
	// 	 $(' .progressbar').css("background-color","red")  = remaningTime ;
		 
		
	// 	console.log(remaningTime);
	// 	if(remaningTime == 0){
	// 		clearInterval(run);
	// 		alert("you are lose")
	// 	}
	// }, 1000);
 
  var elem = document.getElementById("myBar");   
  var w = 1;
  var id = setInterval(frame, 1000);
  function frame() {

    if (w == 100) {
      clearInterval(id);

      alert("you are lose!");
      w = 0;
     elem.style.width = w + '%';
     elem.innerHTML = w * 1  + '%';
     $(' .content').html(html);// reset img = 0;
     w = 1;
      
    } else {
      w++; 
      elem.style.width = w + '%'; 
      elem.innerHTML = w * 1  + '%';

    }

  }
  // alert("Bạn Có muốn chơi không?");


});

