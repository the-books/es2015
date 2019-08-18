// import movies from './movies.js';
const movies = require('./movies');
const List = require('./list');
const Customer = require('./customer');

const movieList = new List();
const customers = new List();

for (let i = 0; i < movies.length; ++i) {
  movieList.append(movies[i]);
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    // if (list.getElement() instanceof Customer) {
    //   const customer = list.getElement();
    //   console.log(`name: ${customer.name}, movie: ${customer.movie}`)
    // }
    console.log(list.getElement());
  }
}

function checkOut(name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    const customer = new Customer(name, movie);
    customerList.append(customer);
    movieList.remove(movie);
  }
  else {
    console.log(`${movie} is not available.`);
  }
}

console.log("Available movies: ");
console.log(movieList.length());
displayList(movieList);
