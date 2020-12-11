var imgArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var silArray = ["s1","s2","s3","s4","s5","s6","s7","s8"];
var clickedLetter;
window.localStorage;

function addBg(el) {
	currentSrc = el.src;
	var splitsrc = currentSrc.split('-');
	//splitsrc is array
	var end = splitsrc[1];
	if (end == "nobg") {
		el.src = splitsrc[0] + '-bg-.png';
	} 
	//el.style
		// if src=letter+.png then add -bg
	//if src=letter-bg.png then remove -bg
  }

function removeBg(el) {
	currentSrc = el.src;
	var splitsrc = currentSrc.split('-');
	//splitsrc is array
	var end = splitsrc[1];
	if (end == "bg" || end == "origin") {
		el.src = splitsrc[0] + '-nobg-.png';
	} 
}
function randnum(arr) {
	return Math.floor(Math.random() * arr.length)
}
window.onscroll = function(ev, i){
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
		if (imgArray.length === undefined || imgArray.length == 0) {
			console.log("done")
		}
		else {
			setTimeout ( function(){
			first = randnum(imgArray)
			silrand = randnum(silArray)
			// imgArray.splice(first, 1)
			second = randnum(imgArray)
			if (Math.random() > 0.25){
				var myTemplate =
					`
					<div class="containimg">
						<img class="scaleable" onclick="clicked(this)" src="assets/img/${imgArray[first]}-nobg-.png" onmouseover="addBg(this)" onmouseout="removeBg(this)">
					</div>
					`
					// <div class="col no-gutters">
					// 			<img onclick="clicked(this)"" src="assets/img/${imgArray[second]}-nobg-.png" onmouseover="addBg(this)" onmouseout="removeBg(this)">
					// 		</div>
			}
			else if (Math.random() > 0.5) {
				var myTemplate = 
				`
				<div class="containimg">
						<img class="scaleable" src="assets/img/${silArray[silrand]}-nobg-.png" onmouseover="addBg(this)" onmouseout="removeBg(this)" onclick="silclick(this)">
				</div>
				`
				// <div class="col no-gutters">
				// 			<img onclick="clicked(this)"" src="assets/img/${imgArray[second]}-nobg-.png" onmouseover="addBg(this)" onmouseout="removeBg(this)">
				// 		</div>
			}
			else {
				var myTemplate = 
				`
				<div class="containimg">
					<img class="scaleable" src="assets/img/${silArray[silrand]}-nobg-.png" onmouseover="addBg(this)" onmouseout="removeBg(this)" onclick="silclick(this)">
				</div>
				`
				// <div class="row">
				// 		<div class="col no-gutters">
				// 			<img onclick="clicked(this)" src="assets/img/${imgArray[first]}-nobg-.png" onmouseover="addBg(this)" onmouseout="removeBg(this)">
				// 		</div>
			}


			document.getElementById('container').insertAdjacentHTML('beforeend', myTemplate);
			//
			// imgArray.splice(second, 1)
			//
			},2000)
		}	
	}
};

function checkforsrc(){
	// if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return


	if(localStorage.getItem('src')){ // using a string
		// if color has been saved: 
		var currentsrc = localStorage.getItem('src');

		console.log(currentsrc);
		// apply color to element: 
		// document.getElementById("myDiv").style.color = color;

	}
}

function clicked(el){
	currentSrc = el.src;
	localStorage.setItem('src', currentSrc); // save src
	// location.href ="steps.html";
	window.open("steps.html")
	// if ((window.innerHeight + window.scrollX) >= document.body.offsetWidth){

	// }

}

function silclick(el){
	currentSrc = el.src;
	var splitsrc = currentSrc.split('-');
	//splitsrc is array
	el.src = splitsrc[0] + '-origin-.png';
}

//on page load check to see if an src has been saved
//on click get image src
//save image src
//open new page in new tab
//apply src to new tb 



function showColophon() {
	var myColophon = document.getElementById("colophon");
	if (myColophon.style.display === "none") {
	  myColophon.style.display = "block";
	} else {
	  myColophon.style.display = "none";
	}
  }

checkforsrc();

