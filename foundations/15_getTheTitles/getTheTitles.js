const getTheTitles = function(books_info) {
    let titles = books_info.map(book_info => {return book_info["title"];})

    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
