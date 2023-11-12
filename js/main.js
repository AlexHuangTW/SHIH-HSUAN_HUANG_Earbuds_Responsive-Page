
(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#burger_button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	button.addEventListener("click", hamburgerMenu, false);		
})();

// header color changing when the mouse move in
document.querySelector("#main-header").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#ffdddd";
    this.style.transition = '1s';
    this.style.borderBottom = "none"; 

 });
 document.querySelector("#main-header").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#ffffff";
    this.style.transition = '1s';
    this.style.borderBottom = "1px solid #707070";
 });



