var enterButton = document.querySelector('#enter-button');
var titleInput = document.querySelector('#website-title');
var urlInput = document.querySelector('#website-url');
var cardWebsiteTitle = document.querySelector('.title');
var cardWebsiteUrl = document.querySelector('.url');


enterButton.disabled = true;
enterButton.className = 'disabled';

var inputHandler = function() {
    if(document.querySelector('input').value == ""){
       console.log('im empty');
       enterButton.disabled = true;  
    } else {
        enterButton.disabled = false;
    }
   
};

<<<<<<< HEAD
titleInput.addEventListener('keyup', inputHandler);

function addCardElement (event) {
    event.preventDefault();
    console.log('addCardElement is working');
    var title = titleInput.value;
    var url = urlInput.value;
    var newCard = document.createElement('article');
    newCard.innerHTML = '<article class="cards"><p class="title">'+title+'</p><hr><p class="url"><a href="'+url+'">'+url+'</a></p><hr><a class="bottom-left" href="'+url+'">Read</a><a class="bottom-right" href="#">Delete</a></article>';
    var parent = document.getElementById('column2');


    parent.appendChild(newCard);


};

enterButton.addEventListener('click', addCardElement() {
        
        var amountOfCards = [];
        function keepTrackOfAmountOfCards() {
            var x = document.getElementById("box");
            amountOfCards.push(document.getElementById("titleInput").value);
            x.innerHTML = amountOfCards.join('<br/>');
        }
    console.log(amountOfCards);
})








=======
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


>>>>>>> master
