// const numbersArray = [4, 5.6, -9.8, 3.14, 42, 3, 2.3, 5.4, 0.3, -1];

// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0 ).map(x => x*x)
//     return squaredIntegers
// }

// console.warn(squareList(numbersArray))

// const LOCAL_FORECAST = {
//     today: { min: 12, max: 19},
//     tommorow: { min: 11, max: 16}
// };

// const getMaxOfTmmr = (forecast) => {
//     const { tommorow : { max : maxOfTommorow} } = forecast
//     return maxOfTommorow
// }

// console.warn(getMaxOfTmmr(LOCAL_FORECAST))

const makeClass = () => {
  class Book {
    constructor(author) {
      this._author = author;
    }

    get writer(){
        return this._author
    }

    set updateAuthor(newName){
        this._author = newName
    }
  }
  return Book;
};

const Book = makeClass()

const zeus = new Book('Tolkien');