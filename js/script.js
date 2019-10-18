const searchBook = () => {
    //  get the text from the search 
    let searchQuery = $('.form input:text').val();
    console.log(searchQuery);
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + searchQuery +"&key=AIzaSyC3LEb4Em2x1EL-TxbYmeCYEdtMMVmtRqQ"; 
   
       $.ajax({
        url: url,
        method: 'GET',
        success: function (result) {
            console.log(result);
            $('.search-results').text('');
            for (let i = 0; i < 7; i++) {
                $('.search-results').append('<h3><a target="_blank" href=" ' + result.items[i].volumeInfo.previewLink + '">' + result.items[i].volumeInfo.title + ' </a></h3>');
                $('.search-results').append('<h5> Author: '  + result.items[i].volumeInfo.authors + '</h5>');          
                $('.search-results').append('<img src="  ' + result.items[i].volumeInfo.imageLinks.thumbnail + '"/>');
                $('.search-results').append('<article>' + result.items[i].volumeInfo.description + '</article>');
                
                
            
            
            }}
            
            })
        }











$(document).ready(() => {

    $(':button').click(() => {
        searchBook();
    });





})


