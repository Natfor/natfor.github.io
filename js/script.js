/*jslint browser: true*/
/*global window*/
//check toletare messy white space option jslint

var resumeBox;
var gameBox;
var mapBox;
var trackerBox;
var featuredWBtn;
var contactBtn;
var workSection;
var contactSection;
var linkedinIcon;
var githubIcon;
var codepenIcon;
var freekip;

/*nav event handlers 
code to find the position of the elements taken from:
http://www.kirupa.com/html5/get_element_position_using_javascript.htm*/
function getPosition(element) {
	"use strict";
	var xPosition = 0;
	var yPosition = 0;

	while(element) {
		xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
		yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
		element = element.offsetParent;
	}
		return { x: xPosition, y: yPosition };
}

//scroll to section 2 and section 3
function featuredWClick(){
	"use strict";
	var section2Pos = getPosition(workSection[0]);
	window.scrollTo(section2Pos.x, section2Pos.y);
}

function contactClick(){
	"use strict";
	var section3Pos = getPosition(contactSection[0]);
	window.scrollTo(section3Pos.x, section3Pos.y);
}

//Section 2 box event handlers
function resumeBoxClick(){
	"use strict";
	window.open("https://github.com/Natfor/Online-Resume", "_blank");
}

function gameBoxClick(){
	"use strict";
	window.open("https://github.com/Natfor/Classic-Arcade-Game", "_blank");
}

function mapBoxClick(){
	"use strict";
	window.open("https://github.com/Natfor/Neighborhood-Map", "_blank");
}

function trackerBoxClick(){
	"use strict";
	window.open("https://github.com/Natfor/Health-Tracker", "_blank");
}

//icons event handlers
function linkedinClick(){
	"use strict";
	window.open("https://www.linkedin.com/pub/natalia-forno-ergueta/77/505/346?trk=pub-pbmap", "_blank");
}

function githubClick(){
	"use strict";
	window.open("https://github.com/Natfor", "_blank");
}

function codepenClick(){
	"use strict";
	window.open("http://codepen.io/Natfor/", "_blank");
}

//footer event handler
function freekipClick(){
	"use strict";
	window.open("http://www.flaticon.com/authors/freepik", "_blank");
}

function init() {
	"use strict";
	//get nav elements
	featuredWBtn = document.getElementsByClassName("featuredW-btn");
	contactBtn = document.getElementsByClassName("contact-btn");

	//get section 2 elements
	resumeBox = document.getElementsByClassName("resumeBox");
	gameBox = document.getElementsByClassName("gameBox");
	mapBox = document.getElementsByClassName("mapBox");
	trackerBox = document.getElementsByClassName("trackerBox");

	workSection = document.getElementsByClassName("section2");
	contactSection = document.getElementsByClassName("section3");

	//get icons
	linkedinIcon = document.getElementsByClassName("linkedin-icon");
	githubIcon = document.getElementsByClassName("github-icon");
	codepenIcon = document.getElementsByClassName("codepen-icon");
	freekip = document.getElementsByClassName("freekip");


	//add click event listeners to all clickable elements
	featuredWBtn[0].addEventListener("click", featuredWClick);
	contactBtn[0].addEventListener("click", contactClick);
	resumeBox[0].addEventListener("click", resumeBoxClick);
	gameBox[0].addEventListener("click", gameBoxClick);
	mapBox[0].addEventListener("click", mapBoxClick);
	trackerBox[0].addEventListener("click", trackerBoxClick);
	linkedinIcon[0].addEventListener("click", linkedinClick);
	githubIcon[0].addEventListener("click", githubClick);
	codepenIcon[0].addEventListener("click", codepenClick);
	freekip[0].addEventListener("click", freekipClick);
}

//wait for elements to load before running the script
window.addEventListener("load", init);
//use strict added to every fucntion as advised by jslint