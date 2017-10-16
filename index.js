
var enterButton = document.querySelector('#enter-button');
var websiteTitleInput = document.querySelector('.website-title');
var websiteUrlInput = document.querySelector('.website-url');
var cardWebsiteTitle = document.querySelector('.title');
var cardWebsiteUrl = document.querySelector('.url');

$( document ).ready(function() {
  $('#enter-button').on('click', function() {
     $('#column2').append('<div class='cards'><h4>' + cardWebsiteTitle + '</h4><hr><a href='http://www.thewebsiteurl.com' www.thewebsiteurl.com</a><hr><button class='bookmark-button' id='read-button'>Read</button><button class='bookmark-button' id='delete-bookmark-button'>Delete</button></div>')
     
});     

    var bookmarkList = document.querySelector('#column2');
    var bookmark = document.querySelector('.cards');

    function addBookmark() {
    bookmarkList.appendChild(bookmark);
    }

    addBookmark();
  }
