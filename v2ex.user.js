// ==UserScript==
// @match http://v2ex.com/*
// @match http://www.v2ex.com/*
// @exclude http://v2ex.com/signin
// ==/UserScript==

var i = location.pathname.indexOf("/t/") + 2;
document.getElementsByClassName("sep20")[i].style.display = "none";
document.getElementsByClassName("box")[i].style.display = "none";
