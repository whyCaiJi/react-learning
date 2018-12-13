import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';
import 'whatwg-fetch';

// Customized components to be capitalized, differentiating from in-built tags
// Lesson 3: creating a new component


class App extends Component {
  // The concept state is a bit similar to class static attribute
  state = {
    series: []
  }

  // Lifecycle tutorial: needs to understand callback function
  // Async call to API and need to understand Promise
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      .then(response => response.json())
      .then(json => this.setState({ series: json}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series" />
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
