import React, { Component } from 'react';
import './App.css';
import List from './ListMovie'
import WrappedComponent from './WrappedComponent';

class App extends Component {
  constructor(props)
  {
      super(props)
      this.state=({
        loading:false,
        movies: movies,
      })
  }
 componentDidMount() {
    this.setState({loading: true });
  setTimeout(() => {
  fetch(this.state.movies)
  .then(movies => {
    this.setState({ loading: false, movies: this.state.movies });
  });  }, 1000)
     }
  render() {
   
    return (
      <div className="App">
       <Listm isLoading={this.state.loading} movies={ this.state.movies}/> 
      </div>
    );
  }
}
const Listm = WrappedComponent(List)
let movies = [{ 
  id:1,
    title: 'Inception',
    year: 2010,
    rating: 5,
    video: 'https://www.youtube.com/embed/8hP9D6kZseM0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com',
  }, {
    id:2,
    title: 'Shawshank Redemption',
    year: 1994,
    rating: 4,
  video: 'https://www.youtube.com/embed/8hP9D6kZseM0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com',

  }, {
    id:3,
    title: 'Blade Runner',
    year: 2017,
    rating: 3,
    video: 'https://www.youtube.com/embed/8hP9D6kZseM0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com',
  }];
export default App;
