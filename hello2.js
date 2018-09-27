goog.require('goog.dom')

function sayHello(){
	var newHeader = goog.dom.createDom('h1', {'style': 'background-color: #ABC'},
	
	'Hello world!');
	
	goog.dom.appendChild(document.body, newHeader);
}