// ==UserScript==
// @match http://reader.aol.com/*
// @match https://reader.aol.com/*
// ==/UserScript==

var css = " @namespace url(http://www.w3.org/1999/xhtml); ";

css += " div.reader-ad-container, div.article-recommended-list { display:none; } "; // hide right bar ads
css += " div#reader-container {margin-right: 0px} "; // stretch article list to full width
css += " div#reader-container div.feed-header {right: 0px}"; // stretch article list header to full width
css += " div#reader-container div.article-list div.article-content {max-width: none}"; // stretch article content to full width
GM_addStyle(css);
