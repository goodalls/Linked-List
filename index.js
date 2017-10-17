var enterButton = document.querySelector('#enter-button');
var titleInput = document.querySelector('#website-title');
var urlInput = document.querySelector('#website-url');
var cardWebsiteTitle = document.querySelector('.title');
var cardWebsiteUrl = document.querySelector('.url');



//Card Generator javaScript
enterButton.addEventListener('click', addCardElement);

function addCardElement (event) {
event.preventDefault()
var title = titleInput.value
var url = urlInput.value
var newCard = document.createElement('article');
newCard.classList.add('cards')
newCard.innerHTML = '<p class="title">'+title+'</p><hr><p class="url"><a target="_blank" href="'+url+'">'+url+'</a></p><hr><button class="bottom-left">Read</button><button class="bottom-right">Delete</button></article>'
var parent = document.getElementById('column2');

parent.prepend(newCard);
};


//Removes card element when you click the delete button 
$('#column2').on('click', removeCard);

function removeCard (e){
  if($(e.target).hasClass('bottom-right')){
    $(e.target).parent().remove();
  }
}

//mark card as read 
// var d = document.getElementById("bottom-left");
// d.className += " after";


