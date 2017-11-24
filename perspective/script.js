
var slideIndex=0;
// showLandingSlides();
	
function showLandingSlides() {
	var i;
	var x = document.getElementsByClassName("autoSlideLanding");
	// grabbed the class 'autoSlideLanding' from the htmls and displayed it on the Landing Page
	for (i=0; i < x.length ;i++) {x[i].style.display="none";}
	
	//The first line of this function goes through the length of the auto slide show for the landing page and makes all the elements have a display of none.
	slideIndex++;
	if (slideIndex > x.length){
		slideIndex=1;
	}
	 x[slideIndex-1].style.display="block";
}
setInterval(showLandingSlides(), 2000);
