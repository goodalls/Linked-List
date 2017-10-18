var enterButton = document.querySelector('#enter-button');
var titleInput = document.querySelector('#website-title');
var urlInput = document.querySelector('#website-url');
var cardWebsiteTitle = document.querySelector('.title');
var cardWebsiteUrl = document.querySelector('.url');
var readButton = document.querySelector('.bottom-left');
var classCardsSection = document.querySelector('.class-cards-section');
var userFeedbackText = document.querySelector('.user-feedback')

enterButton.disabled = true;
enterButton.className = 'disabled';

enterButton.addEventListener('click', inputHandler);

var inputHandler = function() {
    if( titleInput.value == ""){
       console.log('im empty');
       userFeedbackText.innerHTML = "The input is empty, please add something"
       enterButton.disabled = true;  
      return false;
    } else {
        enterButton.disabled = false;
    } 
};



$('.inputs').on('keyup', inputHandler);



// function isUrlValid(urlInput) {
//         var regexQuery = "/(http(s)?://.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/";
//         var url = new RegExp(regexQuery,"g");
        
//         if (url.match(urlInput)) {
//             alert('Great, you entered a valid address');
//             console.log('needs to be a http value...');
//             enterButton.disabled = true; 
//         }
//         console.log('works for me!');
//         return false;
//     }

// function urlInputValidator(event) {
//   if (urlInput.value === urlInput.value.includes("http"))  {
//         console.log('needs to be a http value...');
//         enterButton.disabled = true; 
//     };
// };

function urlInputValidator() {
    var urlInputValue = urlInput.value
    var res = urlInputValue.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null) {
      console.log('urlInputValidator if statement')
      userFeedbackText.innerHTML = "not a valid URL, try again.";
      return false;
    } else {
      console.log('urlInputValidator else statement')
    }
};

//reset input fields
function resetErrorFields (){

  userFeedbackText.innerHTML = "";
}


//Card Generator javaScript
$('#enter-button').on('click', addCardElement);
$('#enter-button').on('click', totalCard);


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
  totalCardUnread()
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


//mark card as read by toggleing class ".after-read" to css
classCardsSection.addEventListener('click', addClassToCSS);

function addClassToCSS (event) {
  if (event.target.className === 'bottom-left'){
  event.target.parentNode.classList.toggle('after-read')
  }
};



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



//urlInput Validation for link
function urlInputValidation(event) {
  event.preventDefault()
}







