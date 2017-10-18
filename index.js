var enterButton = document.querySelector('#enter-button');
var titleInput = document.querySelector('#website-title');
var urlInput = document.querySelector('#website-url');
var cardWebsiteTitle = document.querySelector('.title');
var cardWebsiteUrl = document.querySelector('.url');
var readButton = document.querySelector('.bottom-left');
var classCardsSection = document.querySelector('.class-cards-section');


enterButton.disabled = true;
enterButton.className = 'disabled';

var inputHandler = function() {
    if(document.querySelector('input').value == ""){
       enterButton.disabled = true; 
      
    } else {
        enterButton.disabled = false;
    }
   
};


$('.inputs').on('keyup', inputHandler);




//Card Generator javaScript
$('#enter-button').on('click', addCardElement);
$('#enter-button').on('click', totalCard);


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
  var whereToPutElement = document.getElementById('cards-section');
  whereToPutElement.prepend(newCard);

  totalCard();
  totalCardUnread();
};


//Removes card element when you click the delete button 
$('#column2').on('click', cardHandler);

function cardHandler (e){
  if($(e.target).hasClass('bottom-right')){
    $(e.target).parent().remove();
     totalCard();
     totalCardRead();
     totalCardUnread();
  } else if ($(e.target).hasClass('bottom-left')){
    $(e.target).parent().addClass('read');
    totalCardRead();
    totalCardUnread();
  }
}


//mark card as read by toggleing class ".after" to css



//classCardsSection.addEventListener('click', addClassToCSS);


// function addClassToCSS (event) {
//   if (event.target.className === 'bottom-left')
//   console.log('addClassToCSS is working')
//   classCardsSection.classList.toggle('after')
// };

$('.bottom-left').on('click',function(event) {
  $('.cards').addClass('read');
  console.log($('.cards'));
})



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







