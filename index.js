var enterButton = document.querySelector('#enter-button');
var titleInput = document.querySelector('#website-title');
var urlInput = document.querySelector('#website-url');
var cardWebsiteTitle = document.querySelector('.title');
var cardWebsiteUrl = document.querySelector('.url');
var readButton = document.querySelector('.bottom-left');


//Card Generator javaScript
enterButton.addEventListener('click', addCardElement);

function addCardElement (event) {
event.preventDefault()

var newCard = document.createElement('article');
newCard.classList.add('cards')
newCard.innerHTML = `
<p class="title">${titleInput.value}</p>
<hr>
<p class="url"><a target="_blank" href="${urlInput.value}">${urlInput.value}</a></p>
<hr>
<button class="bottom-left">Read</button>
<button class="bottom-right">Delete</button>
`
var whereToPutElement = document.getElementById('column2');

whereToPutElement.prepend(newCard);
};


//Removes card element when you click the delete button 
$('#column2').on('click', removeCard);

function removeCard (e){
  if($(e.target).hasClass('bottom-right')){
    $(e.target).parent().remove();
  }
}

//mark card as read by toggleing class ".after" to css
readButton.addEventListener('click', addClassToCSS);

function addClassToCSS () {
  console.log('addClassToCSS is working')
  readButton.classList.toggle('after')
};



