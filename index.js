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
       userFeedbackText.innertext = "I'm Empty"
       enterButton.disabled = true;  
    } else {
        enterButton.disabled = false;
    } 
};

urlInput.addEventListener('keyup', inputHandler);

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



//Card Generator javaScript
enterButton.addEventListener('click', addCardElement);
enterButton.addEventListener('click', totalCard);


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

};


//Removes card element when you click the delete button 
$('#column2').on('click', removeCard);

function removeCard (e){
  if($(e.target).hasClass('bottom-right')){
    $(e.target).parent().remove();
  }
}
// function removeCard (event) {
//   if (event.target.className === 'bottom-right')
//   classCardsSection.remove('div')
// };

//mark card as read by toggleing class ".after-parent" to css
classCardsSection.addEventListener('click', addClassToCSS);

function addClassToCSS (event) {
  if (event.target.className === 'bottom-left'){
  event.target.parentNode.classList.toggle('after-read')
  }
};


function totalCard(){
    var totalCards = $('.cards').length
    $('.total-number-of-links').text(totalCards)
}

//urlInput Validation for link
function urlInputValidation(event) {
  event.preventDefault()
}






