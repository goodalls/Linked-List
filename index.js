var enterButton = document.querySelector('#enter-button');
var titleInput = document.querySelector('#website-title');
var urlInput = document.querySelector('#website-url');
var cardWebsiteTitle = document.querySelector('.title');
var cardWebsiteUrl = document.querySelector('.url');




function addCardElement (event) {
event.preventDefault()
console.log('addCardElement is working')
var title = titleInput.value
var url = urlInput.value
var newCard = document.createElement('article');
newCard.innerHTML = '<article class="cards"><p class="title">'+title+'</p><hr><p class="url"><a href="'+url+'">'+url+'</a></p><hr><a class="bottom-left" href="'+url+'">Read</a><a class="bottom-right" href="#">Delete</a></article>'
var parent = document.getElementById('column2');

// var currentDiv = document.getElementById("column2"); 

parent.appendChild(newCard);

// document.body.insertBefore(newCard, currentDiv);

//   // create a new div element 
//   // and give it some content 
//   var newDiv = document.createElement("div"); 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   newDiv.appendChild(newContent); //add the text node to the newly created div. 

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv);
};

enterButton.addEventListener('click', addCardElement)