import logo from './logo.svg';
import './App.css';
import Movielist from './movielist.js';
import Navbar from './Navbar.js';
import React from 'react';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "Bahubali",
          plot: "Revenge of Father taken by son",
          price: 200,
          rating: 8.5,
          stars: 0,
          poster: "https://blogtobollywood.com/wp-content/uploads/2017/03/Bahubali-2-Trailer-2.jpg",
          favbut: true,
          cart: true
        },
        {
          title: "RRR",
          plot: "Freedom fighters Komaram Bheem and Alluri Sitarama Raju battle British colonialists in the 1920s",
          price: 200,
          rating: 8.5,
          stars: 0,
          poster: "https://image.tmdb.org/t/p/original/kdO4JtO5DnIMyLymQv8C8Ol1CzA.jpg",
          favbut: true,
          cart: true
        },
        {
          title: "Yeh Jawaani Hai Deewani",
          plot: "Bunny and Naina meet when they graduate from college and again in their late 20s",
          price: 200,
          rating: 8.5,
          stars: 0,
          poster: "https://movie.webindia123.com/movie/2012/Bollywood/April/YehJawaniHaDeewani/YehJawaniHaDeewani.jpg",
          favbut: true,
          cart: true
        },
        {
          title: "Wake Up Sid",
          plot: "A carefree guy (Ranbir Kapoor) begins a relationship with an unlikely woman",
          price: 200,
          rating: 8.5,
          stars: 0,
          poster: "https://flxt.tmsimg.com/assets/p3588673_p_v8_aa.jpg",
          favbut: true,
          cart: true
        }
      ],
      cartCount: 0
    }
  }
  addstars = (movie) => {

    const index = this.state.movies.indexOf(movie);

    if (this.state.movies[index].stars === 5) {
      return;
    }
    this.state.movies[index].stars += 0.5

    this.setState({
      movies: this.state.movies
    })
  }
  decreasestars = (movie) => {

    const index = this.state.movies.indexOf(movie);


    if (this.state.movies[index].stars === 0) {
      return;
    }
    // this.setState({
    //     stars: this.state.stars - 0.5
    // })

    this.state.movies[index].stars -= 0.5

    this.setState({
      movies: this.state.movies
    })
  }

  isfav = (movie) => {
    const index = this.state.movies.indexOf(movie);

    this.state.movies[index].favbut = !this.state.movies[index].favbut;
    this.setState({
      movies: this.state.movies
    })
  }

  incart = (movie) => {
    const index = this.state.movies.indexOf(movie);
    let cartcount = this.state.cartCount;
    if (this.state.movies[index].cart) {
      cartcount += 1;
    }
    else {
      cartcount -= 1;
    }
    this.state.movies[index].cart = !this.state.movies[index].cart;

    this.setState({
      movies: this.state.movies,
      cartCount: cartcount
    })
  }


  render() {


    const movies = this.state.movies;

    return (
      <>
        <Navbar cartcount={this.state.cartCount} />
        <Movielist movie={this.state.movies} increasestar={this.addstars} decreasestar={this.decreasestars} fav={this.isfav} iscart={this.incart} />
      </>
    );

  }
}

export default App;
