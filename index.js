var enterButton = document.querySelector('#enter-button');
var titleInput = document.querySelector('#website-title');
var urlInput = document.querySelector('#website-url');
var cardWebsiteTitle = document.querySelector('.title');
var cardWebsiteUrl = document.querySelector('.url');
var readButton = document.querySelector('.read-button');
var classCardsSection = document.querySelector('.class-cards-section');
var userFeedbackText = document.querySelector('.user-feedback')

var totalCard = function(){
  var totalCards = $('.cards').length
  $('.total-number-of-links').text(totalCards)
}

var totalCardRead = function(){
  var totalCards = $('.cards.read').length
  $('.read-links').text(totalCards)
}

var totalCardUnread = function() {
  var totalCards = $('.cards').length - $('.cards.read').length
  $('.unread-links').text(totalCards)
}
var inputHandler = function() {
  if( titleInput.value == ""){
    userFeedbackText.innerHTML = "The input is empty, please add something"
    enterButton.disabled = true;  
    return false;
  } else {
    enterButton.disabled = false;
  } 
};

enterButton.disabled = true;
enterButton.className = 'disabled';


function urlInputValidator() {
  var urlInputValue = urlInput.value
  var res = urlInputValue.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if(res == null) {
    userFeedbackText.innerHTML = "not a valid URL, try again.";
    return false;
  } 
};

function resetErrorFields (){
  userFeedbackText.innerHTML = "";
};

function addCardElement (event) {
  event.preventDefault()
  if (urlInputValidator() === false) {
    setTimeout(resetErrorFields, 5000)
    return false;
  } if (inputHandler() === false) {
    setTimeout(resetErrorFields, 5000)
    return false;
  } else {
    resetErrorFields()
  }
  if(/^(http[s]?:\/\/)/.test(urlInput.value) === false) {
        urlInput.value = 'http://' + urlInput.value;
    }
  var newCard = document.createElement('article');
  newCard.classList.add('cards')
  newCard.innerHTML = `
  <p class="title">${titleInput.value}</p>
  <hr>
  <p class="url"><a target="_blank" href="${urlInput.value}">${urlInput.value}</a></p>
  <hr>
  <button class="read-button">Read</button>
  <button class="delete-button">Delete</button>`
  var whereToPutElement = document.getElementById('cards-section');
  whereToPutElement.prepend(newCard);
  totalCard();
  totalCardUnread()
};

function cardHandler (e){
  if($(e.target).hasClass('delete-button')){
    $(e.target).parent().fadeOut(2000, function (){
      $(e.target).parent().remove();
    });
    setTimeout( function (){
    totalCard();
    totalCardRead();
    totalCardUnread();
    },2100)
    } else if ($(e.target).hasClass('read-button')){
    $(e.target).parent().addClass('read');
    totalCardRead();
    totalCardUnread();
  }
}

function addClassToCSS (event) {
  if (event.target.className === 'read-button'){
    event.target.parentNode.classList.toggle('after-read')
  }
};

$('.read-button').on('click',function(event) {
  $('.cards').addClass('read');
  console.log($('.cards'));
})

//Event Listeners
$('.inputs').on('keyup', inputHandler);
enterButton.addEventListener('click', inputHandler);
$('#enter-button').on('click', addCardElement);
$('#enter-button').on('click', totalCard);
$('#column2').on('click', cardHandler);
classCardsSection.addEventListener('click', addClassToCSS);
