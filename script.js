//Global Vars
var whoIsFlipped = null;
var inPlay = [];
var matches = 0;
var trys = 0;
var Mismatch = 0;

function flip(face) {
var child = document.getElementById(face.id).children;

if (whoIsFlipped == null ) 
{ // First card flipped
	inPlay.push(child[0]);
    inPlay[0].classList.add("sidesx");
	var popskids = child[0].children;
	whoIsFlipped = popskids[1].style.background;
}
else 
{
	inPlay.push(child[0]);
    inPlay[1].classList.add("sidesx");
	var popskids = child[0].children;

	if (whoIsFlipped == popskids[1].style.background )
    { 
      whoIsFlipped = null;
	    inPlay = [];
	        matches++;
			trys++;
			if(matches == 9){
				var complete = '<div class="complete"><span class="banner">BOARD COMPLETE</span>';
				complete += '<div>Score Card </div>';
				complete += '<div> Target trys = 9</div>';
				complete += '<div>Your trys: '+ trys +'</div>';
				complete += '<div>Mismatch: '+ Mismatch +'</div>';
				complete += '<div class="replay" onClick="location.reload(true);")>Play Again</div>';
				complete += '</div>';
				document.getElementById('play_area').innerHTML = complete;
			}
			console.log("matches:"+ matches)
     } 
	    else 
		{   function slickBack()
			{ 
				inPlay[0].classList.remove("sidesx");
				inPlay[1].classList.remove("sidesx");
				inPlay = [];
				trys++;
				Mismatch++;
			    whoIsFlipped = null;
			}setTimeout(slickBack,700);
		}
  }

} // deal
function DelegateCards() {
var cardRowWidth = 6;
var output = ' ';
var cardsArray = [
"images/hat.png", "images/hat.png", "images/cat.png",
"images/cat.png", "images/cauldron.png", "images/cauldron.png",
"images/ghost.png", "images/ghost.png", "images/graveyard.png",
"images/graveyard.png", "images/bats.png", "images/bats.png",
"images/monster.png", "images/monster.png", "images/skull.png",
"images/skull.png", "images/witch.png", "images/witch.png",
];


var newDeck = shuffleArray(cardsArray);
var id = "c" + i;
var row = 1;
var column = 1;
var cardHead = ' <div class="flip-container column-6-left" >';
cardHead += '<div id="c';
var cardTail = '" class="container" onClick=flip(this);>';
cardTail += '<div id="pop" class="sides" ><div class="front"></div><div class="back" style="background:url(';
var cardTip = ') no-repeat;background-size: contain; background-position: center; background-color: #FFC1B1  ;"></div></div></div></div>';

for (var i = 0; i < cardsArray.length; i++) {
output += cardHead;
output += i;
output += cardTail;
output += newDeck[i];
output += cardTip;

}
document.getElementById('play_area').innerHTML = output;

}

function shuffleArray(array) {
for (var i = array.length - 1; i > 0; i--) {
var j = Math.floor(Math.random() * (i + 1));
var temp = array[i];
array[i] = array[j];
array[j] = temp;
}
return array;
}